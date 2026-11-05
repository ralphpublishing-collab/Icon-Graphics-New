import { useState } from 'react'
import { services } from '../data/site'

export function EnquiryForm() {
  const [state, setState] = useState('idle')
  const [fileError, setFileError] = useState('')

  function submit(e: React.FormEvent) {
    if (state === 'sending') {
 e.preventDefault()
      return
    }
    const form = e.currentTarget
    const body = new FormData(form)
    const attachment = body.get('reference-file')
    if (attachment instanceof File && attachment.size > 5 * 1024 * 1024) {
      setFileError('Please choose a file under 5 MB, or share a reference link instead.')
      return
    }
    if (
 attachment instanceof File &&
 attachment.size &&
 !['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(
 attachment.type,
      )
    ) {
      setFileError('Please use a PDF, JPEG, PNG or WebP file.')
      return
    }
    setFileError('')
    setState('sending')
  }

  return (
    form onSubmit={submit} method="POST" action="https://formsubmit.co/hello@icongraphics.com.ng" encType="multipart/form-data">
 input type="hidden" ame="_subject" value="New ICON GRAPHICS Project Enquiry" />
 input type="hidden" ame="_template" value="table" />
 input type="hidden" ame="_next" value="https://icongraphics.com.ng/success" />
 input type="text" ame="_honey" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
 div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        div>
 label htmlFor="name">Namelabel>
 input type="text" id="name" ame="name" required
 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        /div>
        div>
 label htmlFor="email">Emaillabel>
 input type="email" id="email" ame="email" required
 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        /div>
        div>
 label htmlFor="company">Companylabel>
 input type="text" id="company" ame="company"
 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        /div>
        div>
 label htmlFor="phone">Phonelabel>
 input type="tel" id="phone" ame="phone"
 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        /div>
      /div>
 div className="col-span-full">
 label htmlFor="enquiry">Enquirylabel>
        textarea
 id="enquiry"
 ame="enquiry"
 rows={3}
          required
 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        /textarea>
      /div>
      div>
 label htmlFor="reference-file">Reference Filelabel>
        input
 type="file"
 id="reference-file"
 ame="reference-file"
 className="mt-1 block w-full text-gray-900 file:mr-4 file:rounded-md file:border file:border-gray-300 file:bg-gray-100 file:py-2 file:px-4 hover:file:bg-gray-200"
        />
        {fileError && (
          p className="mt-2 text-sm text-red-600" role="alert">
            {fileError}
          /p>
        )}
      /div>
 div className="col-span-full">
        button
 type="submit"
 className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
 disabled={state === 'sending'}
        >
          {state === 'sending' ? 'Sending...' : 'Send Enquiry'}
        /button>
      /div>
      {state === 'success' && (
        div className="col-span-full text-center text-green-600">
          Enquiry sent successfully!
        /div>
      )}
      {state === 'error' && (
        div className="col-span-full text-center text-red-600">
 Something went wrong. Please try again.
        /div>
      )}
    /form>
  )
            }
