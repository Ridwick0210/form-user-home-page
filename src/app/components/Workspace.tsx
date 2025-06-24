'use client'
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import Link from 'next/link'
import ToggleSwitch from "./Toggleswitch";


interface Form {
  id: string;
  title: string;
  publishedAt: "";
}

export default function Workspace(){

    const [ forms , setForms ] = useState<Form[]>([]);

    const drafts = forms.filter((f) => f.publishedAt === null);
    const published = forms.filter((f) => f.publishedAt !== null);

    if (drafts.length === 0 && published.length === 0) {
        return (
            <div className="h-screen overflow-hidden">
                <Newuser />
            </div>
        );
    }

    return(
        <>
        <Drafts />
        <Published />
        </>
    );

}

function Drafts(){
    return (
        <div className=" h-screen p-10">
            <div className="border-2 border-dashed flex flex-col justify-center items-center h-screen m-10">
                <h1>all your drafts here!!!</h1>
            </div>
        </div>
    );
}

function Published(){
    return (
        <div className="bg-[#56A37D] h-screen p-6">
            <div className="border-2 border-dashed flex flex-col justify-center items-center h-screen w-1/2 m-10">
                <h1>Thsi is evrything publishedjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</h1>
            </div>
        </div>
    );
}   

function Newuser(){
    return(
            <div className="h-screen flex flex-col overflow-hidden">        
            <div className="flex justify-end items-center gap-3 bg-[#FFFFFF] h-10 p-5 mt-7 m-5">
                <ToggleSwitch />
                <button className="cursor-pointer"> <HiOutlineQuestionMarkCircle size={50}/></button>
                <button className="cursor-pointer"> <FaRegCircleUser size={45}/> </button>
            </div>
            
            <div className="flex-1 flex flex-col bg-[#FFFFFF] px-15 py-13 gap-10">
                <div className="flex justify-between p-1 ">
                    
                    <button className="flex gap-2 items-center bg-[#61A986] text-2xl px-5.5 py-2.5 text-white rounded-lg cursor-pointer">My Workspace  
                        <FaChevronDown size={15} /> 
                    </button>
                    
                    <button className="bg-[#61A986] px-3.5 py-0.5 text-white text-2xl rounded-lg cursor-pointer" ><Link href="/form"> + New Form</Link></button>

                </div>
            
            <div className="flex-1 border-2 border-dashed flex flex-col justify-center items-center h-full gap-6">
                <h4 className="text-2xl">You have not created any forms yet.</h4>
                <h4 className="text-4xl font-semibold"> Create Your First Form Today!</h4>
                <button className="bg-[#61A986] px-4.5 py-1.5 text-white text-2xl rounded-lg cursor-pointer"><Link href="/form"> Create Now</Link></button>
            </div>
        </div> 
    </div>
    );
}