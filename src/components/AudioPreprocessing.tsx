import React from 'react'
import { Wand2 } from 'lucide-react'

const AudioPreprocessing: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Wand2 className="mr-2" /> Audio Preprocessing
      </h2>
      <ul className="list-disc pl-5">
        <li>Noise reduction</li>
        <li>Normalization</li>
        <li>Segmentation</li>
      </ul>
      <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
        Process Audio
      </button>
    </div>
  )
}

export default AudioPreprocessing