
import React, { FC } from "react"

interface props{
    name: string,
    image: string, 
    price: string,
    rating: string
}

const ItemTile: FC<props> = ({image, name, price, rating }) => {
    return (
        <div className="grid grid-cols-4 items-center m-4 rounded-md shadow-xl border border-gray-200 p-2 text-center text-gray-500">
            <img src={image} alt="" className="w-10 h-10 mx-auto" />
            <p>{name}</p>
            <p>{price == "-1" ? "Price not Listed" : price}</p>
            <p>{rating}</p>
        </div>

    )
}

export default ItemTile