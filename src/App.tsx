import React from 'react'
import { Mic, Youtube, Music, FileAudio, Wand2, BarChart } from 'lucide-react'
import AudioCapture from './components/AudioCapture'
import AudioStorage from './components/AudioStorage'
import AudioPreprocessing from './components/AudioPreprocessing'
import Transcription from './components/Transcription'
import DataPreparation from './components/DataPreparation'
import ModelTraining from './components/ModelTraining'
import ModelEvaluation from './components/ModelEvaluation'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Audio Capture and AI Voice Model Training Tool</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AudioCapture />
        <AudioStorage />
        <AudioPreprocessing />
        <Transcription />
        <DataPreparation />
        <ModelTraining />
        <ModelEvaluation />
      </div>
    </div>
  )
}

export default App