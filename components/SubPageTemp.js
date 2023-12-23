"use client"


import ServiceStyle from "../src/app/service/css/service.module.css"
import Footer from "./Footer";
import Navigation from "./Nav";
import SectionTitle from "./SectionTitle";

const SubPageTemp = ({title,children}) => {
    return (
        <>
            <Navigation />
            <section>
                <div className="container">
                    <SectionTitle title={title} />
                    <div className={ServiceStyle.contentWrapper}>
                        {children}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default SubPageTemp;