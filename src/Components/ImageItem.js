import React from 'react'
import "./imageItem.css"

const Item = ({pic, id}) => {
    return (
        <div>
            <img id={`images${id}`} className="img-item" src={pic} alt="photo" for={`btn${id}`} />
        </div>
    );
}

export default Item;