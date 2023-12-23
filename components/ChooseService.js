"use client"
import chooseUsStyle from '../src/app/css/chooseus.module.css'
const ChooseCard = ({icon, title, desc}) => {
    return (
        <div className={`${chooseUsStyle.choose_box} ${chooseUsStyle.box}`}>
            <div className={chooseUsStyle.box_icon}>{icon}</div>
            <div className={chooseUsStyle.box_meta}>
                <h3><b>{title}</b></h3>
                <p>{desc}</p>
                {/* <button type="button" id="readMore" onClick="redrc()">Read More</button>  */}
            </div>
        </div>
    );
}
export default ChooseCard ;