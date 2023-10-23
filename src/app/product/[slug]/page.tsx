import { computedProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { ProductDetails } from './components/product-details'
import { ProductImages } from './components/product-images'

interface ProductDynamicProps {
  params: {
    slug: string
  }
}

export default async function ProductDynamic({ params }: ProductDynamicProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  })

  if (!product) return notFound()

  return (
    <div className="flex flex-col gap-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductDetails product={computedProductTotalPrice(product)} />
    </div>
  )
}
