import React, {useState, useEffect} from 'react'
import "./images.css";
import Item from "./ImageItem";
import RadioBtn from "./RadioBtn";

// images used in the carousel
import image1 from "./images/download (1).jpg"
import image2 from "./images/download (2).jpg"
import image3 from "./images/download (3).jpg"
import image4 from "./images/download (4).jpg"
import image5 from "./images/download.jpg"

const Images = () => {
    // number of radio buttons
    const [btn, setBtn] = useState(0);
    const [current, setCurrent] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    // Function to move to next pic
    const nextImg = () => {
        setCurrent(current === btn - 1? 0 : current + 1)
    }
    
    // Function to move to previous pic
    const previousImg = () => {
        setCurrent(current === 0? btn - 1 : current - 1);
    }
    console.log("current", current)

    // The images displayed, could be replaced by fetching data from a server
    let img_arr = [
        image1, image2, image3, image4, image5
    ];

    // Taking every image to edit then putting them into a list
    const img_list = img_arr.map((e,x) => 
    <div className={x === current? "img-active" : "img"} >
        
        {(x === current-1) && (<Item pic={e} id={x} />)}
        {x === current && (<Item pic={e} id={x} />)}
        {(x === current+1) && (<Item pic={e} id={x} />)}
        
    </div>);

    // number of buttons change depending on the number of images
    const btnNum = (img_list) => {
        setBtn(img_list.length)
        console.log("number of images",btn);
    }

    // the page rerenders everytime a change happens to img_list
    useEffect(() => btnNum(img_list),[img_list]);

    // making the carousel handle swipes
    const touchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        console.log("touch down x-axis", touchDown);
        setTouchPosition(touchDown);
    }

    const touchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = currentTouch - touchDown;

        if (diff > 10) {
            previousImg();
        }
        
        if (diff < -10) {
            nextImg();
        }

        setTouchPosition(null);
    }
    
    


    return (
        <div className="img-container">
            <div className="nextPic"><i class="fas fa-arrow-alt-circle-right" onClick={nextImg} ></i></div>
            <div className="previousPic"><i class="fas fa-arrow-alt-circle-left" onClick={previousImg} ></i></div>
            <div className="img-list" onTouchStart={touchStart} onTouchMove={touchMove} >
                {img_list}
            </div>
            <RadioBtn number={btn} current={current} setcurrent={setCurrent} />
        </div>
    );
}

export default Images;