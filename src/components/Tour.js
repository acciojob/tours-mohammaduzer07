import React, { useState } from 'react'


const Tour = ({ tour, removeTour }) => {
    const [showInfo, setShowInfo] = useState(false)
    const { id, name, info, image, price } = tour;


    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

    return (
        <div className='tour'>
            <img src={image} name={name}></img>
            <div>
                <h4>{name}</h4>
                <h5>${price}</h5>
                <p id={`tour-item-para-${id}`}>
                    {showInfo ? info : `${info.substring(0, 200)}...`}
                    <button id={`see-more-${id}`} onClick={toggleInfo}>
                        {showInfo ? "show less" : "Show more"}
                    </button>
                </p>
                <button id={`delete-btn-${id}`} onClick={() => removeTour(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Tour