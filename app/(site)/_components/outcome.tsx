import { GameShape, gameOptions } from "@/app/helper/game-options"
import RingIcon from "./ring-icon"
import { defineTheWinner } from "@/app/helper/get-winner"

const selectedOptionRandomly = ():GameShape => {
  const generateRandomNumberFrom0To2 = Math.floor(Math.random() * 3)
  switch (generateRandomNumberFrom0To2) {
    case 0:
      return gameOptions.rock
    case 1:
      return gameOptions.paper
    default :
      return gameOptions.scissors
  }
}

interface OutcomeProps {
  setIsOutComeVisible: () => void
  selectedOption: GameShape
}

export const Outcome = ({
  setIsOutComeVisible, 
  selectedOption
}: OutcomeProps) => {
  const randomlySelectedOption = selectedOptionRandomly()
  const winner = defineTheWinner(selectedOption.name, randomlySelectedOption.name)
  return (
    <article className="
      w-full
      max-w-md
      md:max-w-3xl
      mx-auto
    ">
      <section className="
        grid
        grid-cols-2
        gap-x-6
        gap-y-14
        md:grid-cols-3
      ">
        <div
          className="
            flex
            flex-col
            items-center
            md:row-start-2
            md:row-end-3
            md:col-start-1
            md:col-end-2
          "
        >
          <RingIcon 
            iconSrc={selectedOption.iconSrc}
            altText={selectedOption.altText}
            ringColorStart={selectedOption.ringColorStart}
            ringColorEnd={selectedOption.ringColorEnd}
          />
        </div>

        <div 
          className="
          flex
          flex-col
          items-center
          md:row-start-2
          md:row-end-3
          md:col-start-3
          md:col-end-4
          "
        >
          <RingIcon 
            iconSrc={randomlySelectedOption.iconSrc}
            altText={randomlySelectedOption.altText}
            ringColorStart={randomlySelectedOption.ringColorStart}
            ringColorEnd={randomlySelectedOption.ringColorEnd}
          />
        </div>
        <p className="
          text-sm 
          text-center
          md:row-start-1
          md:row-end-2
          md:col-start-3
          md:col-end-4

        ">THE HOUSE PICKED</p>
        <p className="
          text-sm 
          text-center
          md:row-start-1
          md:row-end-2
          md:col-start-1
          md:col-end-2
        ">YOU PICKED</p>
        <div className="
          text-center 
          col-start-1
          col-end-3
          md:row-2
          md:row-end-3
          md:col-start-2
          md:col-end-3
        ">
          <h1 className="text-5xl font-600">{winner}</h1>
          <button
            onClick={setIsOutComeVisible}
            className="
              text-neutral-dark-text
              bg-white
              rounded-md
              py-3
              px-8
              mt-4
              font-600
              w-52
              md:mx-auto
              md:w-full
            "
          >PLAY AGAIN</button>
        </div>
      </section>
    </article>
  )
}
