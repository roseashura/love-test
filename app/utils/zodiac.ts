type ZodiacSign = string

export const zodiacCompatibility: Record<ZodiacSign, Record<ZodiacSign, number>> = {
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
  '双子座': {
    '白羊座': 85, '金牛座': 65, '双子座': 75, '巨蟹座': 65,
    '狮子座': 85, '处女座': 75, '天秤座': 90, '天蝎座': 70,
    '射手座': 85, '摩羯座': 65, '水瓶座': 90, '双鱼座': 70
  },
  // ... 其他星座的相性表
}

// 计算年龄差异分数(0-100)
export const calculateAgeScore = (age1: number, age2: number): number => {
  const ageDiff = Math.abs(age1 - age2)
  if (ageDiff <= 3) return 100
  if (ageDiff <= 5) return 90
  if (ageDiff <= 8) return 80
  if (ageDiff <= 10) return 70
  return Math.max(60, 100 - ageDiff * 2)
}

// 计算总体匹配度
export const calculateCompatibility = (
  yourZodiac: ZodiacSign,
  theirZodiac: ZodiacSign,
  yourAge: number,
  theirAge: number
): number => {
  // 获取星座相性分数
  const zodiacScore = zodiacCompatibility[yourZodiac]?.[theirZodiac] || 70
  
  // 获取年龄匹配分数
  const ageScore = calculateAgeScore(yourAge, theirAge)
  
  // 加权计算总分(星座占60%,年龄占40%)
  const totalScore = Math.round((zodiacScore * 0.6) + (ageScore * 0.4))
  
  return totalScore
}

// 获取匹配描述
export const getMatchDescription = (score: number): string => {
  if (score >= 90) return '你们的缘分简直是天作之合!'
  if (score >= 80) return '你们有着很高的契合度!'
  if (score >= 70) return '你们的关系充满潜力!'
  return '你们可以多多了解对方,发掘共同点!'
} 