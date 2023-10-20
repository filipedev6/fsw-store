import {
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export function Header() {
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
              <Button
                variant="outline"
                className="w-full justify-start gap-2 font-medium text-xs"
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
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
