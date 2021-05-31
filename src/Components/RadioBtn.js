import React, {useState, useEffect} from 'react'
import "./radiobtn.css";

const RadioBtn = ({number, current, setcurrent}) => {
    const [btns, setBtns] = useState([]);

    const totalBtns = (number) => {
        let temp = [];
        for (let i = 0; i < number; i++) {
            if (i === current) {
                temp.push(<input className="radio-btn" type="radio" id={`btn${i}`} name="radio-btn" data-number={i} onClick={() => setcurrent(i)} checked />);
            }else {
                temp.push(<input className="radio-btn" type="radio" id={`btn${i}`} name="radio-btn" data-number={i} onClick={() => setcurrent(i)} />);
            }
        }
        console.log("total btns",temp);
        setBtns(temp);
    }


    useEffect(() => totalBtns(number),[current, number])


    return (
        <div className="carousel-btns">
            <div className="radio_btns" >
                {btns}
            </div>
        </div>
    );
}

export default RadioBtn;