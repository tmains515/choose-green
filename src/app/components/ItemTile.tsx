
import React, { FC } from "react"

interface props{
    name: string
}

const ItemTile: FC<props> = ({ name }) => {
    return <div>{name}</div>
}

export default ItemTile