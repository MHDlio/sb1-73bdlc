import React from 'react'
import { FileAudio } from 'lucide-react'

const AudioStorage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FileAudio className="mr-2" /> Audio Storage
      </h2>
      <ul className="list-disc pl-5">
        <li>Organized file structure</li>
        <li>Metadata management</li>
        <li>Backup and version control</li>
      </ul>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Manage Files
      </button>
    </div>
  )
}

export default AudioStorage