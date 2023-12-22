"use client"
import chooseUsStyle from '../src/app/css/chooseus.module.css'
import ChooseCard from './ChooseService';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import chooseUsServices from './info/chooseService';
const ChooseUs = () => {
    return (
        <section>
            <div className="container">
                <SectionTitle title={"Why Choose Us"} titleDesc={"There are a lot of software out in the market. So let's see why you should hire us."} />
                <div className={chooseUsStyle.chooseus_main} id="chooseus_main">
                {chooseUsServices.map((services, ind)=>{
                    return (
                        <ServiceCard key={ind} icon={services.icon} title={services.heading} desc={services.desc} isButton={false} />
                    );
                })}
                </div>
            </div>
        </section>
    );
}
export default ChooseUs;