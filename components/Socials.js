// links
import Link from "next/link";

// icons
import { RiLinkedinLine, RiGithubLine, RiInstagramLine, RiWhatsappLine } from "react-icons/ri";

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href='https://www.linkedin.com/in/roy-dev' className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href='https://github.com/rahul-roy-dev' className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href='https://www.instagram.com/rroy8898/' className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href='https://wa.me/+6281944077605' className="hover:text-accent transition-all duration-300">
      <RiWhatsappLine />
    </Link>
  </div>
  );
};

export default Socials;
