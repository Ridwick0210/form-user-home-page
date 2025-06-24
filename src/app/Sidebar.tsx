import mainicon from 'C:\\Users\\Ridwick\\Desktop\\lock in\\mess around\\mmm\\New folder\\new-user\\public\\main-icon.png'
import Image from 'next/image'
import { TbShare3} from "react-icons/tb";
import { GrDocument } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import Searchbar from "./components/Searchbar";


export default function Sidebar(){
    return (
        <div className="bg-[#EBDED3] px-12 py-6 gap-8 h-screen">
            <span className='py-4 flex justify-center gap-3'><Image src={mainicon} alt='icon' width={33} height={33}/>
            
            <button className="w-auto text-left text-3xl my-3 font-bold">F.O.R.M</button></span>

            <p className="w-100 mb-3 text-xl font-bold">My Workspace</p>
            
            <div className="bg-[#D9D9D9] rounded-xl">
                <button className="w-full text-left my-6 text-3xl font-medium flex gap-5 px-10 py-4"><Searchbar/></button>
            </div>
            
            <div className="bg-[#D9D9D9] rounded-xl">
                <button className="w-full text-[#FF6424] text-left my-6 text-3xl flex items-center gap-5 px-10 py-4 "> <CiCirclePlus size={32} className='font-medium'/>
                New Label
                </button>
            </div>
            
            <hr/> 
            
            <div>
                <button className="w-full text-left my-3 text-3xl font-medium flex gap-5 px-10 py-4"><TbShare3 size={30}/>
                Shared with me 
                </button>
            </div>
            
            <div>
                <button className="w-full text-left my-3 text-3xl font-medium flex gap-5 px-10 py-4"> <GrDocument size={30}/>
                Drafts
                </button>
            </div>
            
            <hr/>
            
            <div>
                <button className="w-full text-left my-3 text-3xl font-medium flex gap-5 px-10 py-4"> <FaRegStar /> Starred
                </button>
            </div>

            <div> 
            <button className="w-full text-left my-3 text-3xl font-medium flex gap-5 px-10 py-4"> <LuTrash2 /> Trash
                </button>
            </div>
        </div>
    );
}