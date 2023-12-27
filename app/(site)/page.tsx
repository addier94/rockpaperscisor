'use client'

import { RecoilRoot } from "recoil";
import { Body } from "./_components/body";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <div
          className="
            bg-gradient-to-b 
            from-background-radial-gradient-start 
            to-background-radial-gradient-end
            min-h-screen
            text-white
            h-full
            p-8
            flex
            flex-col
            justify-between
            gap-6
          "
        >
          <Header />
          <Body />
          <Footer />
        </div>
      </RecoilRoot>
    </>
  )
}
