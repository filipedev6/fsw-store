import Image from 'next/image'
import { Categories } from './components/categories'

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
        width={0}
        height={0}
        draggable={false}
        sizes="100vw"
        className="select-none h-auto w-full"
      />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  )
}
