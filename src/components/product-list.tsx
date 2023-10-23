import { ProductItem } from '@/components/product-item'
import { computedProductTotalPrice } from '@/helpers/product'
import { Product } from '@prisma/client'

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="w-[156px] max-w-[156px]">
          <ProductItem product={computedProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  )
}
