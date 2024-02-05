import Image from "next/image";
import MainImage from '../../public/image/2024.1월 동아리 사진관.jpg'
import { ReactElement } from "react";
import Link from "next/link";


const Sidebar:React.FC = ():ReactElement => {
    return(
      
      <div className="flex flex-col h-full w-1/4 bg-[#51769e] items-center py-10">
        <Image src={MainImage} alt='my image' className="w-[250px] h-[250px] rounded-full shadow-2xl bg-cover" />
        <Link href={'/'} className="text-5xl font-neodgm">{'Taehwan'}</Link>
        <p className="text-lg text-center font-neodgm">
         {'Welcome'}
         <br/>{'This is my blog'}
        </p>
      </div>
    )
}

export default Sidebar;