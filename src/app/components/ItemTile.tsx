
import React, { FC } from "react"

interface props{
    name: string,
    image: string, 
    price: string,
    rating: string
}

const ItemTile: FC<props> = ({ image, name, price, rating }) => {
    return (
        <div className="flex flex-col">
            <p className="ml-4 mt-4">{name}</p>
            <div className="flex flex-row w-full justify-evenly items-center m-4 rounded-md shadow-xl border border-gray-200 p-8 text-gray-500">
                <img src={image} alt="" className="w-20 h-20" />
                <p>{price == "-1" ? "Price not Listed" : price}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
}

export default ItemTile