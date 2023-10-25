import { CartContext, CartProduct } from '@/providers/cart'
import { numberFormattedToCoin } from '@/utils/numberFormattedToCoin'
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'
import { Button } from './ui/button'

interface CartItemProps {
  product: CartProduct
}

export function CartItem({ product }: CartItemProps) {
  const productTotalPrice = numberFormattedToCoin(Number(product.totalPrice))
  const productBasePrice = numberFormattedToCoin(Number(product.basePrice))
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext)

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-accent flex items-center justify-center rounded-lg w-[77px] h-[77px]">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="w-auto h-auto max-w-[80%] max-h-[70%]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <div>
            <p className="text-xs">{product.name}</p>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">{productTotalPrice}</span>
              {product.discountPercentage > 0 && (
                <span className="opacity-75 text-xs text-[#676767] line-through">
                  {productBasePrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-auto">
            <Button
              onClick={() => decreaseProductQuantity(product.id)}
              size="icon"
              variant="outline"
              className="w-8 h-8"
            >
              <ArrowLeftIcon size={14} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button
              onClick={() => increaseProductQuantity(product.id)}
              size="icon"
              variant="outline"
              className="w-8 h-8"
            >
              <ArrowRightIcon size={14} />
            </Button>
          </div>
        </div>
      </div>
      <Button
        onClick={() => removeProductFromCart(product.id)}
        size="icon"
        variant="outline"
      >
        <TrashIcon size={16} strokeWidth={3} />
      </Button>
    </div>
  )
}
