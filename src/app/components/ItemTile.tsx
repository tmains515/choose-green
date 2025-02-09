import Image from 'next/image'
import React, { FC, useState } from "react"
import info from '../../../public/info.png'
import star from '../../../public/star.png'
import starFilled from '../../../public/starFilled.png'

interface props{
    name: string,
    image: string, 
    price: string,
    rating: string
}


const ItemTile: FC<props> = ({ image, name, price, rating }) => {

    const [isFavorited, setIsFavorited] = useState(false);
    const [showInformation, setShowInformation] = useState(false)
    return (
        <div className="flex flex-col">
            <p className="ml-4 mt-10 text-black">{name}</p>
            <div className="flex flex-row w-full relative justify-evenly items-center m-2 rounded-md shadow-xl border border-gray-200 p-8 text-gray-500">
            <Image src={isFavorited ? starFilled : star} className={`absolute cursor-pointer w-8 h-8 top-2 right-2 ${isFavorited ? "bg-yellow-500": "" }'`} alt='' 
                onClick={() => setIsFavorited(!isFavorited)}/>                
                <div className="flex w-1/2 gap-4 items-center justify-between">
                    <img src={image} alt="" className="w-16 h-20 rounded-full" />
                    <Image src={info} className='flex bottom-full w-4 h-4' onMouseEnter={() => setShowInformation(!showInformation)} onMouseLeave={() => setShowInformation(false)} alt=''/>
                    {showInformation ? <span className='absolute border border-gray-50 shadow-md w-40 h-40'>test</span> : ""}
                </div>
                <p>{price == "-1" ? "Price not Listed" : price}</p>
                <div className='flex items-center'>
                    <p>{rating}</p>
                    <Image src={starFilled} alt='' className='w-4 h-4'/>
                </div>
                <button className='bg-blue-500 text-white p-2 rounded-lg w-16'>Buy</button>
            </div>
        </div>
    )
}

export default ItemTile