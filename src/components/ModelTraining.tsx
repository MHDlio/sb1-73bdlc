import React from 'react'
import { Brain } from 'lucide-react'

const ModelTraining: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Brain className="mr-2" /> Model Training
      </h2>
      <p className="mb-4">Train AI voice model using prepared data.</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Start Training
      </button>
    </div>
  )
}

export default ModelTraining