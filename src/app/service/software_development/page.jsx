"use client"

import SubPageTemp from "../../../../components/SubPageTemp";
import ServiceStyle from "../css/service.module.css"

const SoftwareDevService = () => {
    return (
        <>
            <SubPageTemp title={"Software Development Service"}>
                <div className={ServiceStyle.content_wrapper}>
                    <div className={ServiceStyle.content_left}>
                        <h2>Left Side</h2>
                        <div className={ServiceStyle.images}>
                            <h5>Main Content</h5>
                        </div>
                    </div>
                    <div className={ServiceStyle.content_right}>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </SubPageTemp>
        </>
    )
}
export default SoftwareDevService;