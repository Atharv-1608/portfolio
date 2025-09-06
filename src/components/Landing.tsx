import { FlipWords } from "./ui/Flip-words"
import { BsCodeSlash } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import { Skills } from "./ui/Skiils";



export const Landing = ()=>{
    const words = ["FullStack", "Frontend", "UI/UX"];
    return <div className="font-main flex flex-col items-center pt-10 space-y-5 justify-center">
        <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">
            Atharv D
        </div>
        <div className="text-xl font-medium text-zinc-600">
            <FlipWords words={words}/>Developer
        </div>
        </div>
        <div className="text-lg p-5 max-w-2xl text-center">
            I love both Design & Development. so, That means I can develop beautiful and design functional websites  (Get it right?) . I'm always looking for new opportunities to learn and grow.
        </div>
        <div className="max-w-xl text-left flex flex-col text-zinc-700 list-none space-y-2">
            <li className="flex items-center space-x-3"> <BsCodeSlash size={20}/><span>FullStack Developer</span></li>
            <li className="flex items-center space-x-3"> <IoLocationOutline size={20}/> <span>Mumbai,India</span></li>
            <li className="flex items-center space-x-3"> <CiMail size={20}/> <span>atharv16d@gmail.com</span></li>
            <li className="flex items-center space-x-3"> <LuDot size={20}/> <span>Available to work </span></li>
        </div>
        <div className="max-w-xl px-5 text-center">
            <Skills />
        </div>
        
    </div>
}

