'use client'

import { computedProductTotalPrice } from '@/helpers/product'
import { CartContext } from '@/providers/cart'
import { useContext } from 'react'
import { CartItem } from './cart-item'

export function Cart() {
  const { products } = useContext(CartContext)

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            product={computedProductTotalPrice(product) as any}
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}
