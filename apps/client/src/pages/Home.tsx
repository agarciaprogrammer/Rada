import { useState } from 'react'
import { uploadPDF } from '../Services/pdfService'

const Home = () => {
  const [message, setMessage] = useState('')

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    const input = document.querySelector<HTMLInputElement>('#pdf')
    if (!input?.files || input.files.length === 0) return

    try {
      const msg = await uploadPDF(input.files[0])
      setMessage(msg)
    } catch (err) {
      setMessage('Error al subir el PDF')
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Subí tu PDF</h1>
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <input type="file" id="pdf" accept="application/pdf" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Subir
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  )
}

export default Home
