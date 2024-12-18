import * as z from 'zod'

export const basicInfoSchema = z.object({
  yourName: z.string()
    .min(2, '名字至少需要2个字符')
    .max(20, '名字不能超过20个字符'),
    
  theirName: z.string()
    .min(2, '名字至少需要2个字符')
    .max(20, '名字不能超过20个字符'),
    
  yourAge: z.number()
    .min(18, '年龄必须大于18岁')
    .max(100, '年龄必须小于100岁'),
    
  theirAge: z.number()
    .min(18, '年龄必须大于18岁')
    .max(100, '年龄必须小于100岁'),
    
  yourZodiac: z.enum([
    '白羊座', '金牛座', '双子座', '巨蟹座',
    '狮子座', '处女座', '天秤座', '天蝎座',
    '射手座', '摩羯座', '水瓶座', '双鱼座'
  ], {
    required_error: '请选择星座'
  }),
  
  theirZodiac: z.enum([
    '白羊座', '金牛座', '双子座', '巨蟹座',
    '狮子座', '处女座', '天秤座', '天蝎座',
    '射手座', '摩羯座', '水瓶座', '双鱼座'
  ], {
    required_error: '请选择星座'
  })
})

export type BasicInfoFormData = z.infer<typeof basicInfoSchema> 

// 验证表单schema是否正确
type ZodiacSign = string

// 星座相性表(完整版)
const zodiacCompatibility: Record<ZodiacSign, Record<ZodiacSign, number>> = {
  '白羊座': {
    '白羊座': 70, '金牛座': 60, '双子座': 85, '巨蟹座': 65,
    '狮子座': 90, '处女座': 60, '天秤座': 85, '天蝎座': 65,
    '射手座': 90, '摩羯座': 60, '水瓶座': 85, '双鱼座': 70
  },
  '金牛座': {
    '白羊座': 60, '金牛座': 80, '双子座': 65, '巨蟹座': 90,
    '狮子座': 70, '处女座': 90, '天秤座': 75, '天蝎座': 90,
    '射手座': 65, '摩羯座': 95, '水瓶座': 65, '双鱼座': 85
  },
  // ... 其他星座的相性表
} 