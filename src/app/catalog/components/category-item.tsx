import { Category } from '@prisma/client'
import Image from 'next/image'

interface CatalogItemProps {
  category: Category
}

export function CatagoryItem({ category }: CatalogItemProps) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full h-[150px] flex items-center justify-center rounded-tl-lg rounded-tr-lg"
        style={{
          background:
            'linear-gradient(45deg, #5033C3 0%, rgba(80, 51, 195, 0.20) 100%)',
        }}
      >
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
        <p className="text-sm font-semibold text-center">{category.name}</p>
      </div>
    </div>
  )
}
