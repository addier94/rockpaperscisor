import { Header } from "./header"
import { Body } from "./body"
import { Footer } from "./footer"

export const RpsList = () => {
  return (
    <div
      className="
        bg-gradient-to-b 
        from-background-radial-gradient-start 
        to-background-radial-gradient-end
        min-h-screen
        text-white
        h-full
        p-6
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
  )
}
