import { RpsList } from "./_components/rps-list";

export default function Home() {
  return (
    <div 
      className="
        bg-gradient-to-b 
        from-background-radial-gradient-start 
        to-background-radial-gradient-end
        min-h-screen
        text-white
        py-8
        px-8
      "
    >
      <RpsList />
    </div>
  )
}
