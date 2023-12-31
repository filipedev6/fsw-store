import { prismaClient } from '@/lib/prisma'
import { CategoryItem } from './category-item'

export async function Categories() {
  const categories = await prismaClient.category.findMany()

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-[10px]">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
