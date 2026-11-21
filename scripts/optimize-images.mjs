import { mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const assets = [
  'portfolio/erin-fashion-world-logo.jpg',
  'portfolio/erin-fashion-world-shopping-bag.jpg',
  'portfolio/erin-fashion-world-hang-tag.jpg',
  'portfolio/lewa-glam-beauty-empire-social-grid.png',
  'portfolio/lewa-glam-beauty-empire-flyer.png',
  'portfolio/opeyemi-beauty-touch-brochure.jpg',
  'portfolio/opeyemi-beauty-touch-business-cards.jpg',
  'portfolio/global-trade-connect-deck-cover.png',
  'portfolio/global-trade-connect-deck-who-we-are.png',
  'portfolio/global-trade-connect-deck-vision.png',
  'portfolio/global-trade-connect-deck-services.png',
  'portfolio/nova-global-brands-packaging.png',
  'portfolio/nova-global-brands-digital-ad.png',
  'img/rapheal-adebayo-supplied.jpeg',
  'img/rapheal-adebayo-about.jpeg',
  'img/logo.png',
]

const publicDir = path.join(process.cwd(), 'public')
let originalBytes = 0
let optimizedBytes = 0

for (const asset of assets) {
  const source = path.join(publicDir, asset)
  const output = path.join(
    publicDir,
    'optimized',
    asset.replace(/\.(?:png|jpe?g)$/i, '.webp'),
  )

  await mkdir(path.dirname(output), { recursive: true })
  const before = await stat(source)
  const maxDimension = asset.startsWith('img/') ? 1200 : 1400

  await sharp(source)
    .rotate()
    .resize({
      width: maxDimension,
      height: maxDimension,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({
      quality: asset.includes('lewa-glam-beauty-empire-social-grid') ? 78 : 84,
      effort: 6,
      alphaQuality: 100,
    })
    .toFile(output)

  const after = await stat(output)
  originalBytes += before.size
  optimizedBytes += after.size
  console.log(
    `Optimized ${asset}: ${(before.size / 1024).toFixed(0)} KB → ${(after.size / 1024).toFixed(0)} KB`,
  )
}

const saved = originalBytes - optimizedBytes
const percentage = originalBytes ? (saved / originalBytes) * 100 : 0
console.log(
  `WebP total: ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB; saved ${(saved / 1024 / 1024).toFixed(2)} MB (${percentage.toFixed(1)}%).`,
)
