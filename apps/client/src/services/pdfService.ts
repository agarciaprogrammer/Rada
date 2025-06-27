import API_BASE_URL from './api'

export const uploadPDF = async (file: File): Promise<string> => {
  const formData = new FormData()
  formData.append('pdf', file)

  const res = await fetch(`${API_BASE_URL}/pdf/upload`, {
    method: 'POST',
    body: formData,
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Upload failed')
  return data.message
}

export const extractTextFromPDF = async (file: File): Promise<string> => {
  const formData = new FormData()
  formData.append('pdf', file)

  const res = await fetch(`${API_BASE_URL}/pdf/extract-text`, {
    method: 'POST',
    body: formData,
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error || 'Extraction failed')
  }

  return data.text
}
