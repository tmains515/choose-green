
import React, { FC } from "react"

interface props{
    name: string,
    price: string,
    rating: number
}

const ItemTile: FC<props> = ({ name, price, rating }) => {
    return(
        <div className="flex m-4 rounded-md shadow-xl border border-gray-200 p-2 justify-evenly">
            <p>{name}</p>
            <p>{price}</p>
            <p>{rating}</p>
        </div>
    )
}

export default ItemTile