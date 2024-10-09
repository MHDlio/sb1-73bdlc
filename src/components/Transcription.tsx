import React from 'react'
import { FileText } from 'lucide-react'

const Transcription: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FileText className="mr-2" /> Transcription
      </h2>
      <p className="mb-4">Convert audio to text using advanced speech recognition.</p>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
        Start Transcription
      </button>
    </div>
  )
}

export default Transcription