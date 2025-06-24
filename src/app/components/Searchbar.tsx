import { FaSearch } from "react-icons/fa";
import { RiExpandUpDownLine } from "react-icons/ri";

const Searchbar = () => {
    return (
        
            <div className="flex items-center gap-5 text-black">
                <FaSearch size={30}/>
                <input placeholder="Search here" type="text" className="w-full "></input>
                <RiExpandUpDownLine size={35}/>
            </div>
       
    )
}

export default Searchbar