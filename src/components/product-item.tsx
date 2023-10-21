import { ProductWithTotalPrice } from '@/helpers/product'
import { numberFormattedToCoin } from '@/utils/NumberFormattedToCoin'
import { ArrowDownIcon } from 'lucide-react'
import Image from 'next/image'
import { Badge } from './ui/badge'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

export function ProductItem({ product }: ProductItemProps) {
  const productBasePrice = numberFormattedToCoin(Number(product.basePrice))
  const productTotalPrice = numberFormattedToCoin(Number(product.totalPrice))

  return (
    <div className="flex flex-col max-w-[156px]">
      <div className="relative bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{ objectFit: 'contain' }}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3 px-2">
            <span className="text-xs flex items-center gap-0.5 font-bold">
              <ArrowDownIcon size={14} />
              {product.discountPercentage}%
            </span>
          </Badge>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-sm truncate font-normal">{product.name}</p>

        <div className="flex items-center gap-1.5">
          {product.discountPercentage > 0 && (
            <>
              <p className="font-bold text-base">{productTotalPrice}</p>
              <p className="opacity-75 line-through text-xs text-[#676767]">
                {productBasePrice}
              </p>
            </>
          )}

          {product.discountPercentage === 0 && (
            <p className="opacity-75 line-through text-xs">
              {productBasePrice}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
