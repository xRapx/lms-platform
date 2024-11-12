"use client"

import {
	FcEngineering,
	FcFilmReel,
	FcMultipleDevices,
	FcOldTimeCamera,
	FcSalesPerformance,
	FcSportsMode
} from "react-icons/fc"

// const Category = [
// 	{id:1 , name: "Engineering", icon: FcEngineering },
//     {id:2 , name: "Film Reel", icon: FcFilmReel },
//     {id:3 , name: "Multiple Devices", icon: FcMultipleDevices },
//     {id:4 , name: "Old Time Camera", icon: FcOldTimeCamera },
//     {id:5 , name: "Sales Performance", icon: FcSalesPerformance },
//     {id:6 ,name: "Sports Mode", icon: FcSportsMode },
//     // Add more categories here...
// ]

type Category = {
	id: number,
    name: string,
    icon: IconType
}

import { IconType } from "react-icons/lib"
import { CategoryItem } from "./category-item"

interface CategoriesProps {
	items:Category[]
}

const iconMap :Record<Category["name"] , IconType> = {
	"Engineering": FcEngineering,
    "Film Reel": FcFilmReel,
    "Multiple Devices": FcMultipleDevices,
    "Old Time Camera": FcOldTimeCamera,
    "Sales Performance": FcSalesPerformance,
    "Sports Mode": FcSportsMode,
}

export const Categories = ({
	items ,
} :CategoriesProps) => {
	return (
		<div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {
				items.map((item) => (
					<CategoryItem
						key={item.id}
						label={item.name}
						icon={iconMap[item.name]}
      					value={String(item.id)}
					/>
				))
			}
        </div>
	)
}