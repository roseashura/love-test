'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { basicInfoSchema, type BasicInfoFormData } from '../schemas/form'

export default function TestForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema)
  })

  const onSubmit = (data: BasicInfoFormData) => {
    const params = new URLSearchParams({
      ...data,
      yourAge: data.yourAge.toString(),
      theirAge: data.theirAge.toString()
    })
    
    router.push(`/result?${params.toString()}`)
  }

  const zodiacSigns = [
    '白羊座', '金牛座', '双子座', '巨蟹座',
    '狮子座', '处女座', '天秤座', '天蝎座',
    '射手座', '摩羯座', '水瓶座', '双鱼座'
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-medium">你的信息</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            你的名字
          </label>
          <input
            {...register('yourName')}
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.yourName && (
            <p className="mt-1 text-sm text-red-600">{errors.yourName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            你的年龄
          </label>
          <input
            {...register('yourAge', { valueAsNumber: true })}
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.yourAge && (
            <p className="mt-1 text-sm text-red-600">{errors.yourAge.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            你的星座
          </label>
          <select
            {...register('yourZodiac')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">请选择星座</option>
            {zodiacSigns.map(sign => (
              <option key={sign} value={sign}>{sign}</option>
            ))}
          </select>
          {errors.yourZodiac && (
            <p className="mt-1 text-sm text-red-600">{errors.yourZodiac.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">TA的信息</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            TA的名字
          </label>
          <input
            {...register('theirName')}
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.theirName && (
            <p className="mt-1 text-sm text-red-600">{errors.theirName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            TA的年龄
          </label>
          <input
            {...register('theirAge', { valueAsNumber: true })}
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.theirAge && (
            <p className="mt-1 text-sm text-red-600">{errors.theirAge.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            TA的星座
          </label>
          <select
            {...register('theirZodiac')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">请选择星座</option>
            {zodiacSigns.map(sign => (
              <option key={sign} value={sign}>{sign}</option>
            ))}
          </select>
          {errors.theirZodiac && (
            <p className="mt-1 text-sm text-red-600">{errors.theirZodiac.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      >
        开始测试
      </button>
    </form>
  )
}