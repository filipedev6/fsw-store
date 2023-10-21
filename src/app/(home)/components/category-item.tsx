import { Badge } from '@/components/ui/badge'
import { Category } from '@prisma/client'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from 'lucide-react'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  const categoryIcon = {
    keyboards: <KeyboardIcon strokeWidth={3} size={16} />,
    monitors: <MonitorIcon strokeWidth={3} size={16} />,
    headphones: <HeadphonesIcon strokeWidth={3} size={16} />,
    mousepads: <SquareIcon strokeWidth={3} size={16} />,
    speakers: <SpeakerIcon strokeWidth={3} size={16} />,
    mouses: <MouseIcon strokeWidth={3} size={16} />,
  }

  return (
    <Badge
      variant="outline"
      className="py-3 flex justify-center gap-2 rounded-lg"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="font-semibold text-xs">{category.name}</span>
    </Badge>
  )
}
