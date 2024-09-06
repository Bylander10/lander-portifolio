import { Button } from "@/components/ui/button";
import { fiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          { /* text */ }
          <div>
            <span className="text-xl">Fullstack & Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Bylander</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
          </div>
          { /* photo */ }
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home