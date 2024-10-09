import React from 'react'
import { BarChart } from 'lucide-react'

const ModelEvaluation: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <BarChart className="mr-2" /> Model Evaluation
      </h2>
      <ul className="list-disc pl-5">
        <li>Performance metrics</li>
        <li>Error analysis</li>
        <li>Model optimization</li>
      </ul>
      <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
        Evaluate Model
      </button>
    </div>
  )
}

export default ModelEvaluation