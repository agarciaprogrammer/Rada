import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { extractTextFromPDF } from '../services/pdfService'

const Viewer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const fileMeta = location.state?.file

  const [pdfText, setPdfText] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    const fetchText = async () => {
      if (!fileMeta) return

      console.log('[DEBUG] fileMeta:', fileMeta)

      try {
        const text = await extractTextFromPDF(fileMeta)
        setPdfText(text)
      } catch (err) {
        console.error('[ERROR extractText]', err)
        setError('Error al procesar el PDF')
      } finally {
        setLoading(false)
      }
    }

    fetchText()
  }, [fileMeta])

  if (!fileMeta) {
    navigate('/')
    return null
  }

  return (
    <div className="min-h-screen p-8 bg-black-50">
      <h1 className="text-2xl font-bold mb-4">Vista del documento</h1>

      <div className="mb-4 bg-black-50 shadow p-4 rounded border w-fit">
        <p><strong>Archivo:</strong> {fileMeta.name}</p>
        <p><strong>Tamaño:</strong> {(fileMeta.size / 1024).toFixed(2)} KB</p>
        <p><strong>Tipo:</strong> {fileMeta.type}</p>
      </div>

      <div className="border-2 border-gray-300 bg-black-50 h-[60vh] w-full rounded shadow p-4 overflow-y-scroll">
        {loading ? (
          <p className="text-white-400">Procesando PDF...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <pre className="whitespace-pre-wrap text-sm text-white-800">{pdfText}</pre>
        )}
      </div>
    </div>
  )
}

export default Viewer
