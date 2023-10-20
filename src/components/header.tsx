import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="bg-[#0B0B0B]/50 backdrop-blur-md sticky inset-x-0 top-0">
      <div className="px-[1.875rem] py-[1.6563rem] flex justify-between items-center">
        <Button size="icon" variant="outline">
          <MenuIcon className="w-4 h-4" strokeWidth={3} />
        </Button>

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
