"use client"

import { FcEngineering, FcFilmReel, FcMultipleDevices, FcOldTimeCamera, FcSalesPerformance, FcSportsMode } from "react-icons/fc";
import { Categories } from "../../_components/categories";

// fake api db
const db = [
	{id:1 , name: "Engineering", icon: FcEngineering },
    {id:2 , name: "Film Reel", icon: FcFilmReel },
    {id:3 , name: "Multiple Devices", icon: FcMultipleDevices },
    {id:4 , name: "Old Time Camera", icon: FcOldTimeCamera },
    {id:5 , name: "Sales Performance", icon: FcSalesPerformance },
    {id:6 ,name: "Sports Mode", icon: FcSportsMode },
]

const SearchPage = () => {


	return (  
		<div className="p-6">
			<Categories items={db}/>
		</div>
	);
}

export default SearchPage;
