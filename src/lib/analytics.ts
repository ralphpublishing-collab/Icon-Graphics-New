// Integration hook only. No identifiers, analytics scripts or network requests are enabled.
// A consent-aware analytics adapter may subscribe after the visitor grants permission.
export function track(name: string, properties: Record<string, string> = {}) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('icon:analytics', { detail: { name, properties } }),
    )
  }
}
