"use client"

import Footer from "../../../components/Footer";
import Navigation from "../../../components/Nav";
import Form from "../../../components/Form";
import contactStyle from "./contact.module.css"

const Contact_us = () => {
    return (
        <>
            <Navigation />
            <section className={contactStyle.section}>
                <div className="container">
                    <main className={contactStyle.main}>
                        <div className={contactStyle.wraper}>
                            <div className={contactStyle.formSection}>
                                <div className={contactStyle.info}>
                                    <div className={`${contactStyle.contact_info} ${contactStyle.call}`}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.932984846295!2d90.37415101153333!3d23.747976845798973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd757aaaab%3A0x8dab0992a43b1efc!2sDot%20Com%20Systems%20Ltd.!5e0!3m2!1sen!2sbd!4v1703876872582!5m2!1sen!2sbd" width="600" height="450" style={{ border: "0", height: "12em", width: "100%", borderRadius: "0.3em" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    </div>
                                    <div className={`${contactStyle.contact_info} ${contactStyle.call}`}>
                                        <p>call us</p>
                                        <span>+880 012-345-678911</span>
                                    </div>
                                    <div className={`${contactStyle.contact_info} ${contactStyle.address}`}>
                                        <p>Location</p>
                                        <span>53/A, Dotcomsystem, A F Hoque, kawran bazar panthapath</span>
                                    </div>
                                </div>
                                <div className={contactStyle.form}>

                                    <Form />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact_us;