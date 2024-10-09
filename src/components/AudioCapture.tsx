import React, { useState } from 'react'
import { Mic, Youtube, Music } from 'lucide-react'

const AudioCapture: React.FC = () => {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState('')
  const [isCapturing, setIsCapturing] = useState(false)

  const handleCapture = async () => {
    if (!url) {
      setStatus('Please enter a valid URL')
      return
    }

    setIsCapturing(true)
    setStatus('Capturing audio...')
    
    try {
      // Simulate API call to backend service
      const response = await fetch('/api/capture-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })

      if (!response.ok) {
        throw new Error('Failed to capture audio')
      }

      const result = await response.json()
      setStatus(`Audio captured successfully! File: ${result.filename}`)
    } catch (error) {
      setStatus('Error capturing audio. Please try again.')
    } finally {
      setIsCapturing(false)
      setUrl('')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Mic className="mr-2" /> Audio Capture
      </h2>
      <input
        type="text"
        placeholder="Enter YouTube or TikTok URL"
        className="w-full p-2 border rounded mb-4"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={isCapturing}
      />
      <button
        onClick={handleCapture}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isCapturing ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isCapturing}
      >
        {isCapturing ? 'Capturing...' : 'Capture Audio'}
      </button>
      {status && (
        <p className={`mt-4 ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
      <div className="mt-4 flex justify-around">
        <Youtube className="text-red-500" />
        <Music className="text-pink-500" />
      </div>
    </div>
  )
}

export default AudioCapture