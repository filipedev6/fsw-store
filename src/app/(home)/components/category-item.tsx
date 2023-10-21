import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON } from '@/constants/category-icon'
import { Category } from '@prisma/client'

interface CategoryItemProps {
  category: Category
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Badge
      variant="outline"
      className="py-3 flex justify-center gap-2 rounded-lg"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="font-semibold text-xs">{category.name}</span>
    </Badge>
  )
}
