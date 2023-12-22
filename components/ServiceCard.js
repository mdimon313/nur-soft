"use client"
import serviceCardStyle from '../src/app/css/serviceCard.module.css'
const ServiceCard = ({ icon, title, desc, isButton, ...res }) => {
    return (
        <div className={`${serviceCardStyle.box} ${serviceCardStyle.service_box}`}>
            <div className={serviceCardStyle.box_icon}>{icon}</div>
            <div className={serviceCardStyle.box_meta}>
                <h3 className={serviceCardStyle.title}><b>{title}</b></h3>
                <p>{desc}</p>
               {isButton && <button type="button" id={serviceCardStyle.readMore} {...res}>Read More</button>} 
            </div>
        </div>
    );
}
export default ServiceCard;