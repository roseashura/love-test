'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { calculateCompatibility, getMatchDescription } from '../utils/zodiac'

export default function ResultPage() {
  const searchParams = useSearchParams()
  
  const yourName = searchParams.get('yourName') || ''
  const theirName = searchParams.get('theirName') || ''
  const yourZodiac = searchParams.get('yourZodiac') || ''
  const theirZodiac = searchParams.get('theirZodiac') || ''
  const yourAge = Number(searchParams.get('yourAge')) || 0
  const theirAge = Number(searchParams.get('theirAge')) || 0
  
  const matchScore = calculateCompatibility(
    yourZodiac,
    theirZodiac,
    yourAge,
    theirAge
  )
  
  const description = getMatchDescription(matchScore)

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            测试结果
          </h1>
          
          <div className="mb-8">
            <div className="text-6xl font-bold text-pink-600 mb-4">
              {matchScore}%
            </div>
            <p className="text-xl text-gray-600">
              {yourName} 和 {theirName} 的契合指数
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-2xl font-medium text-gray-800 mb-6">
              {description}
            </p>
            <p className="text-lg text-gray-600">
              你是一个充满{yourZodiac}的特质的人
            </p>
            <p className="text-lg text-gray-600">
              而TA是一个富有{theirZodiac}魅力的人
            </p>
            <p className="text-lg text-gray-600">
              你们的星座组合展现出了独特的吸引力
            </p>
          </div>
          
          <Link
            href="/"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors"
          >
            重新测试
          </Link>
        </div>
      </div>
    </main>
  )
} 