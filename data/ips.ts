export interface IPItem {
  id: string
  name: string
  nameEn: string
  badge: string
  tagline: string
  colorFrom: string
  colorTo: string
  categories: string[]
  isComingSoon?: boolean
  emoji: string
  accentColor: string
}

export const IPS_DATA: IPItem[] = [
  {
    id: 'bear-taidi',
    name: '贝尔·泰迪熊',
    nameEn: 'Bear Taidi',
    badge: '旗舰IP · 百年传承',
    tagline: '1902年起源，治愈一个世纪的温柔陪伴',
    colorFrom: '#FFD166',
    colorTo: '#FF9A7B',
    categories: ['毛绒玩具', '潮流服饰', '家居好物', '礼品周边'],
    emoji: '🐻',
    accentColor: '#FF9A7B',
  },
  {
    id: 'bear-taidi-coffee',
    name: '泰迪咖啡',
    nameEn: 'TadaCoffee',
    badge: '咖啡子品牌',
    tagline: '每一杯，都有熊抱的温度',
    colorFrom: '#C8956C',
    colorTo: '#FFD166',
    categories: ['咖啡饮品', '联名周边', '连锁授权'],
    emoji: '☕',
    accentColor: '#C8956C',
  },
  {
    id: 'bear-taidi-baby',
    name: '泰迪婴童',
    nameEn: 'Bear Taidi Baby',
    badge: '婴童专线',
    tagline: '温柔守护，从出生开始',
    colorFrom: '#FFD4E8',
    colorTo: '#FF85A1',
    categories: ['婴童用品', '拉拉裤', '玩具礼盒'],
    emoji: '🍼',
    accentColor: '#FF85A1',
  },
  {
    id: 'bear-taidi-fashion',
    name: '泰迪潮品',
    nameEn: 'Bear Taidi Fashion',
    badge: '潮流服饰线',
    tagline: '把可爱穿出去，把治愈带回家',
    colorFrom: '#5ECFAB',
    colorTo: '#B693F8',
    categories: ['连帽衫', 'T恤', '联名潮品'],
    emoji: '👕',
    accentColor: '#5ECFAB',
  },
  {
    id: 'nasa',
    name: 'NASA',
    nameEn: 'NASA',
    badge: '全球官方正版授权',
    tagline: '把宇宙梦搬进日常生活',
    colorFrom: '#1A1128',
    colorTo: '#5BB8F5',
    categories: ['服饰', '箱包', '家居', '运动', '配饰'],
    emoji: '🚀',
    accentColor: '#5BB8F5',
  },
  {
    id: 'nasa-space',
    name: 'NASA · 太空探索',
    nameEn: 'NASA Space Edition',
    badge: '太空主题系列',
    tagline: '探索宇宙的边界，也探索时尚的边界',
    colorFrom: '#2A1B4E',
    colorTo: '#B693F8',
    categories: ['限定收藏', '联名腕表', '积木模型'],
    emoji: '🛸',
    accentColor: '#B693F8',
  },
  {
    id: 'nasa-active',
    name: 'NASA · 运动系列',
    nameEn: 'NASA Active',
    badge: '运动户外专线',
    tagline: '以宇航员的精神，挑战每一个极限',
    colorFrom: '#FFD166',
    colorTo: '#5ECFAB',
    categories: ['运动服饰', '户外装备', '运动配件'],
    emoji: '⚡',
    accentColor: '#FFD166',
  },
  {
    id: 'nasa-lifestyle',
    name: 'NASA · 生活美学',
    nameEn: 'NASA Lifestyle',
    badge: '家居生活系列',
    tagline: '星球级品质，融入你每一天',
    colorFrom: '#D4BBFF',
    colorTo: '#5BB8F5',
    categories: ['家居用品', '餐具茶具', '装饰摆件'],
    emoji: '🏡',
    accentColor: '#D4BBFF',
  },
  {
    id: 'coming-soon',
    name: '更多IP',
    nameEn: 'Coming Soon',
    badge: '即将揭晓',
    tagline: '全球顶级IP，正在加速到来',
    colorFrom: '#B693F8',
    colorTo: '#FF85A1',
    categories: [],
    isComingSoon: true,
    emoji: '✨',
    accentColor: '#B693F8',
  },
]
