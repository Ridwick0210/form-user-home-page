import "./globals.css";
import Sidebar from "./Sidebar";
import Formlist from "./Formlist";

export default function Home() {
   return (
    <div className="flex h-screen w-screen overflow-x-hidden  min-h-screen">
    <aside className=" w-1/5 h-full"><Sidebar/></aside>
    <div className="w-screen h-screen"> <Formlist/></div>
   
  </div>
   );
}
