import Image from "next/image"

interface RulesProps {
  setIsRulesShow: (value: boolean) => void
}

export const Rules = ({ setIsRulesShow }: RulesProps) => {
  return (
    <div className="
          fixed 
          inset-0 
          bg-black 
          bg-opacity-50 
          flex 
          justify-center 
          items-center"
        >
          <div className="
            bg-white 
            p-8
            md:py-6
            md:relative
            rounded-lg 
            w-full
            h-screen
            flex
            flex-col
            items-center
            justify-around
            md:justify-between
            md:w-1/4
            md:h-96
            "
          >
            <h1 className="
              text-3xl 
              md:text-xl
              md:self-start
              text-gray-800 
              font-600">RULES</h1>
            <main>
              <figure className="w-72 md:w-60 relative">
                <Image
                  src="/images/image-rules.svg"
                  alt="Rules"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full"
                />
              </figure>
            </main>
            <button onClick={() => setIsRulesShow(false)} 
              className="block
                md:absolute
                md:right-6
                md:top-6
              ">
              <Image
                src="/images/icon-close.svg"
                alt="Close"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full"
              />
            </button>
          </div>
        </div>
  )
}
