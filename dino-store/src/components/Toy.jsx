import React from 'react'

export default function Toy({ name, img, price, salePrice }) {
    return (
        <div className="toy">
            <img src={img} alt={name} title={name} />
            <h3>{name}</h3>
            {
                salePrice < price ?
                    <p className="grid price-holder">
                        <span className="line-through price">{price}</span>
                        <span className="price">{salePrice}</span>
                    </p>
                    :
                    <p><span className="price">{price}</span></p>
            }
        </div>
    )
}
