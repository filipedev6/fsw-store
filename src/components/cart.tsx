'use client'

import { CartContext } from '@/providers/cart'
import { useContext } from 'react'

export function Cart() {
  const { products } = useContext(CartContext)

  return (
    <div className="mt-8">
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  )
}
