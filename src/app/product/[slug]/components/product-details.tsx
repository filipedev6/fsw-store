'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductWithTotalPrice } from '@/helpers/product'
import { numberFormattedToCoin } from '@/utils/numberFormattedToCoin'
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from 'lucide-react'
import { useState } from 'react'

interface ProductDetailsProps {
  product: Pick<
    ProductWithTotalPrice,
    'basePrice' | 'description' | 'discountPercentage' | 'totalPrice' | 'name'
  >
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const productBasePrice = numberFormattedToCoin(Number(product.basePrice))
  const productTotalPrice = numberFormattedToCoin(Number(product.totalPrice))

  const [quantity, setQuantity] = useState(1)

  function handleDecreaseQuantityClick() {
    setQuantity((state) => (state === 1 ? state : state - 1))
  }

  function handleIncreaseQuantityClick() {
    setQuantity((state) => state + 1)
  }

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-1.5">
        <span className="text-xl font-bold">{productTotalPrice}</span>
        {product.discountPercentage > 0 && (
          <Badge>
            <span className="text-xs flex items-center gap-0.5 font-bold">
              <ArrowDownIcon size={14} />
              {product.discountPercentage}%
            </span>
          </Badge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="opacity-75 text-sm text-[#676767]">
          De: <span className="line-through">{productBasePrice}</span>
        </p>
      )}

      <div className="flex items-center gap-2 mt-4">
        <Button
          onClick={handleDecreaseQuantityClick}
          size="icon"
          variant="outline"
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          onClick={handleIncreaseQuantityClick}
          size="icon"
          variant="outline"
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold text-base">Descrição</h3>
        <p className="text-sm text-[#A1A1A1] truncate">{product.description}</p>
      </div>

      <Button className="uppercase mt-8 font-bold">
        Adicionar ao carrinho
      </Button>

      <div className="bg-accent rounded-lg px-5 py-2 flex items-center justify-between mt-5">
        <div className="flex items-center gap-3">
          <TruckIcon strokeWidth={3} />

          <div className="flex flex-col gap-1">
            <span className="text-xs">
              Entrega via <strong>FSPacket®</strong>
            </span>
            <span className="text-[#8162FF] text-xs">
              Envio para <strong>todo Brasil</strong>
            </span>
          </div>
        </div>
        <span className="font-bold text-xs">Frete Grátis</span>
      </div>
    </div>
  )
}
