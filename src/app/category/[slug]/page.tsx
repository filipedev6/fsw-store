import { ProductItem } from '@/components/product-item'
import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON } from '@/constants/category-icon'
import { computedProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { notFound } from 'next/navigation'

interface CategoryDynamicProps {
  params: {
    slug: string
  }
}

export default async function CategoryDynamic({
  params,
}: CategoryDynamicProps) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) return notFound()

  return (
    <div className="px-5 py-8 gap-8 flex flex-col">
      <Badge
        className="gap-1 w-fit border-primary px-3 py-[.375rem] rounded-full"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-base uppercase">{params.slug}</span>
      </Badge>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {category.products.map((product) => (
          <ProductItem
            product={computedProductTotalPrice(product)}
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}
