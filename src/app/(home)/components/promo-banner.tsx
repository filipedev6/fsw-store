import Image, { ImageProps } from 'next/image'

export function PromoBanner({ alt, ...props }: ImageProps) {
  return (
    <Image
      width={0}
      height={0}
      draggable={false}
      sizes="100vw"
      className="select-none h-auto w-full px-5"
      alt={alt}
      {...props}
    />
  )
}
