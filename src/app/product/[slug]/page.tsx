import { prismaClient } from '@/lib/prisma'
import { notFound } from 'next/navigation'

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

  return <h1>{params.slug}</h1>
}
