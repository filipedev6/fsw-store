import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { ShapesIcon } from 'lucide-react'
import { CatagoryItem } from './components/category-item'

export default async function Catalog() {
  const categories = await prismaClient.category.findMany()

  return (
    <div className="px-5 py-8 gap-8 flex flex-col">
      <Badge
        className="gap-1 w-fit border-primary px-3 py-[.375rem] rounded-full"
        variant="outline"
      >
        <ShapesIcon size={16} />
        <span className="text-base uppercase">Catálogo</span>
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CatagoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
