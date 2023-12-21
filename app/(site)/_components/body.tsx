import Image from 'next/image'
import React from 'react'
import RingIcon from './ring-icon'

export const Body = () => {
  return (
    <main
      className='
        h-[16.8rem]
        w-72
        md:w-96
        md:h-96
        mx-auto
        relative

        flex
        flex-col
        justify-around
      '
    >
      <div
        style={{ backgroundImage: "url(/images/bg-triangle.svg)" }}
        className="
          bg-cover
          bg-center
          h-48
          w-48
          md:w-72
          md:h-72
          absolute
          bottom-3
          transform
          left-1/2
          translate-x-[-50%]
        "
      />
      <div className='flex justify-between'>
        <RingIcon 
          iconSrc={"/images/icon-paper.svg"}
          altText={"Paper Icon"}
          ringColorStart={"ring-primary-paper-gradient-start"}
          ringColorEnd={"after:ring-primary-paper-gradient-end/50"}
        />
        <RingIcon 
          iconSrc={"/images/icon-scissors.svg"}
          altText={"Scissors Icon"}
          ringColorStart={"ring-primary-scissors-gradient-start"}
          ringColorEnd={"after:ring-primary-scissors-gradient-end/50"}
        />
      </div>
      <div className='flex justify-center'>
        <RingIcon 
          iconSrc={"/images/icon-rock.svg"}
          altText={"Rock Icon"}
          ringColorStart={"ring-primary-rock-gradient-start"}
          ringColorEnd={"after:ring-primary-rock-gradient-end/50"}
        />
      </div>
    </main>
  )
}
