// next image
import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none justify-center h-full items-end">
    <Image src={'/rroy.png'} width={737} height={678} alt="" className="translate-z-0 w-auto h-[90%] object-containt" />
  </div>;
};

export default Avatar;
