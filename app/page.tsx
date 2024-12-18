'use client'

import { Toaster } from 'react-hot-toast'
import TestForm from './components/TestForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 py-8 px-4">
      <Toaster position="top-center" />
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI恋爱契合度测试
          </h1>
          <p className="text-lg text-gray-600">
            通过简单的信息测试,发现你们的缘分指数
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6">
          <TestForm />
        </div>
      </div>
    </main>
  )
}