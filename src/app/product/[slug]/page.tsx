import { prismaClient } from '@/lib/prisma'
import { notFound } from 'next/navigation'
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
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </div>
  )
}
