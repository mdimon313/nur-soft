'use client'
import serviceStyle from '../src/app/css/service.module.css';
import Title from './SectionTitle';
import ServiceCard from './ServiceCard';
import service_info from './info/service_info';

export default function OurService() {
    return (
        <section>
            {/* Our service */}
            <div className="container">
                <Title title="Our Service" titleDesc="We help you build great software within budget" />
                <div className={serviceStyle.service_main}>
                    {service_info.map(service => {
                        return <ServiceCard icon={service.icon} title={service.title} desc={service.desc} />
                    })}
                </div>
            </div>

        </section>
    );
}