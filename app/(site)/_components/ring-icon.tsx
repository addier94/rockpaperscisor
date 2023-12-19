import clsx from "clsx";
import Image from "next/image";

interface RingIcon {
  iconSrc: string;
  altText: string;
  ringColorStart: string;
  ringColorEnd: string;
}

const RingIcon: React.FC<RingIcon> = (
  { iconSrc, altText, ringColorStart, ringColorEnd }) => {

  return (
    <button
      className={clsx(
        'w-24',
        'h-24',
        'rounded-full',
        'flex',
        'justify-center',
        'items-center',
        'bg-gray-200',
        'ring-[13px]',
        ringColorStart,
        'relative',
        'after:absolute',
        'after:rounded-full',
        'after:top-[.35rem]',
        'after:ring-[13px]',
        ringColorEnd,
        'after:w-24',
        'after:h-24'
      )}
    >
      <figure className='w-10 inline-block'>
        <Image 
          src={iconSrc}
          width="0"
          height="0"
          alt={altText}
          sizes="100vw"
          className="w-full"
          priority
        />
      </figure> 
    </button>
  )
}

export default RingIcon;