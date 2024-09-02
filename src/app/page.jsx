import { Button } from "@/components/ui/button";
import { fiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          { /* text */ }
          <div>
            <span>Frontend Developer</span>
            <h1>
              Hello I'm <br /> <span>Bylander</span>
            </h1>
          </div>
          { /* photo */ }
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home