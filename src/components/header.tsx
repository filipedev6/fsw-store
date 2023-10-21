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
import { Button } from './ui/button'
import { Separator } from './ui/separator'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Sheet,
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
    <header className="bg-[#0B0B0B]/50 backdrop-blur-md sticky inset-x-0 top-0">
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
                  <div className="flex items-center gap-2 pb-4 ">
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
              <Button
                variant="outline"
                className="w-full justify-start gap-2 font-medium text-xs"
              >
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </div>
            <div className="mt-auto">
              <Button variant="outline" className="font-medium text-xs">
                Voltar para início
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <h1 className="font-semibold text-lg">
          <strong className="text-primary font-bold">FSW</strong> Store
        </h1>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon className="w-4 h-4" strokeWidth={3} />
        </Button>
      </div>
      <Separator className="bg-[#2A2A2A]" />
    </header>
  )
}
