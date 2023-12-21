import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <header className="
    border-[3px] 
    border-neutral-header-outline
    pl-5
    py-[.62rem]
    pr-[.62rem]
    h-[6.2rem]
    md:h-[7.6rem]
    md:py-4
    rounded-md
    flex
    items-center
    justify-between
    self-center
    w-full
    max-w-[34rem]
  ">
    <figure className="w-[5.4rem] md:w-[7rem]">
      <Image 
        src={"/images/logo.svg"}
        width="0"
        height="0"
        alt="Rock Paper Scissors Logo"
        sizes="100vw"
        className="w-full"
        priority
      />
    </figure>
    <p className="
      flex 
      flex-col 
      items-center
      justify-center
      w-[4.8rem]
      md:w-24
      h-full
      bg-white
      rounded-md
      font-700
    ">
      <span className="
        text-xs
        text-neutral-score-text">SCORE</span>
      <span className="
        text-4xl
        text-neutral-dark-text">12</span>
    </p>
  </header>
  )
}
