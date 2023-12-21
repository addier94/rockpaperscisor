'use client'

import { useState } from "react"
import { Rules } from "./rules"

export const Footer = () => {
  const [isRulesShow, setIsRulesShow] = useState(false)

  return (
    <>
      <footer className="text-center md:text-right">
        <button
          onClick={() => setIsRulesShow(true)}
          className="
            border-2
            font-600
            text-gray-300
            border-neutral-header-outline
            rounded-lg
            py-2
            px-8
          "
        >
          RULES
        </button>
      </footer>
      {isRulesShow && (
        <Rules setIsRulesShow={setIsRulesShow} />
      )}
    </>
  )
}
