import Link from "next/link";
import{ Button } from "./ui/button";
 
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-secondary">
        <div className="container mx-auto flex justify-between items-center ">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Lander <span className="text-accent animate-pulse">.</span>
                </h1>
            </Link>
            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Pingas</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  );
}

export default Header;

