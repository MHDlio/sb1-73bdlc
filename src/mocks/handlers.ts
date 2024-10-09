import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/capture-audio', () => {
    // Simulate audio capture process
    return HttpResponse.json({
      filename: 'captured_audio_' + Date.now() + '.mp3'
    }, { status: 200 })
  }),
]