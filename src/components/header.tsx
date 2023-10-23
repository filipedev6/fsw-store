'use client'

import {
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button, buttonVariants } from './ui/button'
import { Separator } from './ui/separator'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Cart } from './cart'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export function Header() {
  const { status, data } = useSession()
  async function handleSignInAuthUser() {
    await signIn('google')
  }

  async function handleSignOutAuthUser() {
    await signOut()
  }

  return (
    <header className="bg-[#0B0B0B]/50 backdrop-blur-md sticky inset-x-0 top-0 z-[1]">
      <div className="px-[1.875rem] py-[1.6563rem] flex justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon className="w-4 h-4" strokeWidth={3} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="text-left">
                <strong className="text-primary font-bold">FSW</strong> Store
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              {status === 'authenticated' && data.user && (
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-2 pb-4">
                    <Avatar>
                      <AvatarFallback>
                        {data.user.name?.[0].toUpperCase()}
                      </AvatarFallback>
                      {data.user.image && (
                        <AvatarImage
                          draggable={false}
                          className="select-none"
                          src={data.user.image}
                        />
                      )}
                    </Avatar>
                    <p className="font-medium truncate">{data.user.name}</p>
                  </div>

                  <Separator />
                </div>
              )}

              {status === 'unauthenticated' && (
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 font-medium text-xs"
                  onClick={handleSignInAuthUser}
                >
                  <LogInIcon size={16} />
                  Fazer login
                </Button>
              )}
              {status === 'authenticated' && (
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 font-medium text-xs"
                  onClick={handleSignOutAuthUser}
                >
                  <LogOutIcon size={16} />
                  Fazer logout
                </Button>
              )}
              <Button
                variant="outline"
                className="w-full justify-start gap-2 font-medium text-xs"
              >
                <PercentIcon size={16} />
                Ofertas disponíveis
              </Button>
              <SheetClose asChild>
                <Link
                  href="/catalog"
                  className={cn(
                    buttonVariants({
                      variant: 'outline',
                      className:
                        'w-full justify-start gap-2 font-medium text-xs',
                    }),
                  )}
                >
                  <ListOrderedIcon size={16} />
                  Catálogo
                </Link>
              </SheetClose>
            </div>
            <div className="mt-auto">
              <Button variant="outline" className="font-medium text-xs">
                Voltar para início
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <Link
          href="/"
          className="font-semibold text-lg select-none"
          draggable={false}
        >
          <strong className="text-primary font-bold">FSW</strong> Store
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <ShoppingCartIcon className="w-4 h-4" strokeWidth={3} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <Badge
                className="gap-1 w-fit border-primary px-3 py-[.375rem] rounded-full"
                variant="outline"
              >
                <ShoppingCartIcon strokeWidth={3} size={16} />
                <span className="text-base uppercase">Carrinho</span>
              </Badge>

              <Cart />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Separator className="bg-[#2A2A2A]" />
    </header>
  )
}
