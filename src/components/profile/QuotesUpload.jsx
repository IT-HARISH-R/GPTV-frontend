// src/components/QuotesUpload.jsx
import React, { useState } from 'react'

const QuotesUpload = () => {
  const [quote, setQuote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Uploaded Quote:', quote)
    // TODO: Send to backend and display on homepage
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Upload Motivational Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Type a motivational quote here..."
          className="w-full p-3 border rounded h-40"
        />
        <button type="submit" className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700">
          Upload
        </button>
      </form>
    </div>
  )
}

export default QuotesUpload
