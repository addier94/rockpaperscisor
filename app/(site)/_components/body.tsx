'use client'

import React, { useState } from 'react'
import RingIcon from './ring-icon'
import { Outcome } from './outcome'
import { GameShape, gameOptions } from '@/app/helper/game-options'

interface GameOptionProps {
  onclick: () => void
  option: GameShape
}

const GameOption = ({ onclick, option}: GameOptionProps) => (
  <RingIcon 
    onClick={onclick}
    iconSrc={option.iconSrc}
    altText={option.altText}
    ringColorStart={option.ringColorStart}
    ringColorEnd={option.ringColorEnd}
  />
)

export const Body = () => {
  const [isOutComeVisible, setIsOutcomeVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState<GameShape>(gameOptions.rock)

  const rockOptions: GameShape = gameOptions['rock']
  const paperOptions: GameShape = gameOptions['paper']
  const scissorsOptions: GameShape = gameOptions['scissors']

  const handleChooseGameOption = (option: keyof typeof gameOptions) => {
    setIsOutcomeVisible(true)
    setSelectedOption(gameOptions[option])
  }

  return (
    <>
      {isOutComeVisible ? (
        <Outcome 
          selectedOption={selectedOption}
          setIsOutComeVisible={() => setIsOutcomeVisible(false)} 
        />
      ) : (
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
            <GameOption onclick={() => handleChooseGameOption('paper')} option={paperOptions} />
            <GameOption onclick={() => handleChooseGameOption('scissors')} option={scissorsOptions} />
          </div>
          <div className='flex justify-center'>
            <GameOption onclick={() => handleChooseGameOption('rock')} option={rockOptions} />
          </div>
        </main>
      )}
    </>
  )
}
