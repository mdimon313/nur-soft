"use client"
import serviceStyle from '../src/app/css/service.module.css'
const ServiceCard = ({ icon, title, desc, ...res }) => {
    return (
        <div className={serviceStyle.box}>
            <div class="box service_box">
                <div class="box_icon">{icon}</div>
                <div class="box_meta">
                    <h3><b>{title}</b></h3>
                    <p>{desc}</p>
                    <button type="button" id="readMore" {...res}>Read More</button>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard;