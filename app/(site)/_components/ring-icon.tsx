import clsx from "clsx";
import Image from "next/image";

interface RingIcon {
  iconSrc: string;
  altText: string;
  ringColorStart: string;
  ringColorEnd: string;
  onClick?: () => void;
}

const RingIcon: React.FC<RingIcon> = (
  { iconSrc, altText, ringColorStart, ringColorEnd, onClick }) => {

  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-24',
        'h-24',
        'ring-[13px]',
        'rounded-full',
        'flex',
        'justify-center',
        'items-center',
        'bg-gray-200',
        ringColorStart,
        'relative',
        'after:absolute',
        'after:rounded-full',
        'after:top-[.35rem]',
        'after:w-24',
        'after:h-24',
        'after:ring-[13px]',
        ringColorEnd,

        'md:w-32',
        'md:h-32',
        'md:ring-[22px]',

        'md:after:w-32',
        'md:after:h-32',
        'md:after:ring-[22px]',
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