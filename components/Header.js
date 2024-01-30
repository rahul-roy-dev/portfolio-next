// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
  <header className="absolute h-[140px] z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        { /* logo */}
        <Link href={'/'}>
        <h1 className="lg:text-4xl text-3xl text-white font-extrabold ">Rahul Roy<span className="text-accent lg:text-6xl text-3xl">.</span></h1>
        </Link>
        {/* socials */}
        <Socials />
      </div>
    </div>
  </header> 
  
  
  
  )
};

export default Header;
