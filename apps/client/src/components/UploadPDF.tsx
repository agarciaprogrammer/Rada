import { useState } from 'react'

const UploadPDF = () => {
  const [message, setMessage] = useState('')

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    const input = document.querySelector<HTMLInputElement>('#pdf')
    if (!input?.files || input.files.length === 0) return

    const formData = new FormData()
    formData.append('pdf', input.files[0])

    try {
      const res = await fetch('http://localhost:3000/api/pdf/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      setMessage(data.message || 'Error')
    } catch (err) {
      setMessage('Error en la conexión con el servidor')
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <input type="file" id="pdf" accept="application/pdf" className="border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Subir PDF
        </button>
      </form>
      {message && <p className="mt-4 text-green-700 font-semibold">{message}</p>}
    </div>
  )
}

export default UploadPDF
