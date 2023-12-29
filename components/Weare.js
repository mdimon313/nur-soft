"use client"

import Image from "next/image";
import weAreStyle from '../src/app/css/weare.module.css'

const Weare = () => {
    return (
        <section>
            <div className="container">
                <div className={weAreStyle.we_are}>
                    <div className={weAreStyle.box_left}>
                        <h2 className={weAreStyle.box_heading}>Who we are</h2>
                        <p className={weAreStyle.box_desc}>
                            Nur-Soft is a Software and IT solution company in Bangladesh which provides any kind of
                            solutions for your business or company. We have a skilled team that worked hard for making your
                            business more smooth with a software. Now-a-day if you want to make a huge change or make a big
                            plan with your business then you need great and user-friendly software to save a lot of time and
                            effort. And we are here to help you and take your business to the next level.
                        </p>
                    </div>
                    <div className={weAreStyle.box_right}>
                        <Image src="/imgs/weare.jpg" alt="img" width={200} height={150} loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weare;