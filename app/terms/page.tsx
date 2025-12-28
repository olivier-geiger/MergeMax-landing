'use client'

import { useEffect } from 'react'

export default function Terms() {
  useEffect(() => {
    window.location.href = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
  }, [])

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center">
      <div className="text-white text-center">
        <p className="text-xl mb-4">Redirecting to Terms of Service...</p>
        <p className="text-gray-400">
          If you are not redirected,{' '}
          <a 
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-orange-400 hover:underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  )
}