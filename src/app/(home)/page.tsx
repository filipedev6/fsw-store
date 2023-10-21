import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'
import { Categories } from './components/categories'
import { ProductList } from './components/product-list'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <div>
      <Image
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
        width={0}
        height={0}
        draggable={false}
        sizes="100vw"
        className="select-none h-auto w-full px-5"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="uppercase pl-5 mb-5 font-bold">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <div className="mt-8">
        <Image
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses"
          width={0}
          height={0}
          draggable={false}
          sizes="100vw"
          className="select-none h-auto w-full px-5"
        />
      </div>
    </div>
  )
}
