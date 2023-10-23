'use client'

import { ProductWithTotalPrice } from '@/helpers/product'
import { ReactNode, createContext, useState } from 'react'

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  addProductToCart: (product: CartProduct) => void
  decreaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext({} as ICartContext)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<CartProduct[]>([])

  function addProductToCart(product: CartProduct) {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (productIsAlreadyOnCart) {
      setProducts((state) =>
        state.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          }

          return product
        }),
      )
      return
    }

    setProducts((state) => [...state, product])
  }

  function decreaseProductQuantity(productId: string) {
    setProducts((state) =>
      state
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            }
          }

          return cartProduct
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    )
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
