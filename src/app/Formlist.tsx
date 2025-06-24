'use client'
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";


export default function Formlist(){

    function userInfo(){
        console.log("user has clicker his profiel icon")
    }

    return (
        <div className="gap-20">
            <div className="flex justify-end items-centre gap-5 bg-[#F4EAE1] h-10 p-6">
            <button> <HiOutlineQuestionMarkCircle size={35}/></button>
            <button onClick={userInfo}> <FaRegCircleUser size={30}/> </button>
        </div>
        <div className="flex-col bg-[#F4EAE1] h-screen p-6">
            <div className="flex justify-between p-1 ">
                <button className="flex gap-2 items-center bg-[#FF6424] px-3.5 py-0.5 text-white rounded-lg ">My Workspace  
                    <FaChevronDown size={15} /> 
                </button>
                <button className="bg-[#FF6424] px-3.5 py-0.5 text-white rounded-lg"> + New Form</button>
            </div>
            
            <div className="border-2 border-dashed flex flex-col justify-center items-center h-screen">
                <h4>See all your lists here</h4>
                <button className="bg-[#FF6424] px-3.5 py-0.5 text-white rounded-lg"> Create Now</button>
            </div>
        </div> 
        </div>
    );
}