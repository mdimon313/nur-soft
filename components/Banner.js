"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image';
import bannerStyle from '../src/app/css/banner.module.css'
const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <div className="container">
            <div ref={sliderRef} className={`keen-slider ${bannerStyle.wrap}`}>
                <div className="keen-slider__slide number-slide1"><Image className={bannerStyle.banner_img} priority src="/imgs/bg1.webp" alt='img 1' width={1024} height={600} /></div>
                <div className="keen-slider__slide number-slide2"><Image className={bannerStyle.banner_img} loading="lazy" src="/imgs/oracle-apex.jpeg" alt='img 2' width={1024} height={600} /></div>
                <div className="keen-slider__slide number-slide2"><Image className={bannerStyle.banner_img} loading="lazy" src="/imgs/bg3.jpg" alt='img 2' width={1024} height={600} /></div>
                <div className="keen-slider__slide number-slide2"><Image className={bannerStyle.banner_img} loading="lazy" src="/imgs/bg4.jpg" alt='img 3' width={1024} height={600} /></div>
                <div className="keen-slider__slide number-slide2"><Image className={bannerStyle.banner_img} loading="lazy" src="/imgs/bg5.jpeg" alt='img 4' width={1024} height={600} /></div>
                {/* <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div> */}
            </div>
        </div>
    );
}

export default Banner;