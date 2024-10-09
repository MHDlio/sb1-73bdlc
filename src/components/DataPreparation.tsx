import React from 'react'
import { Database } from 'lucide-react'

const DataPreparation: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Database className="mr-2" /> Data Preparation
      </h2>
      <ul className="list-disc pl-5">
        <li>Feature extraction</li>
        <li>Data augmentation</li>
        <li>Dataset splitting</li>
      </ul>
      <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Prepare Data
      </button>
    </div>
  )
}

export default DataPreparation