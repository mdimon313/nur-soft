"use client"
import { useEffect, useState } from "react";
import imgGalary from "./info/imgGalary";
import SectionTitle from "./SectionTitle";
import galaryStyle from '../src/app/css/imgGalary.module.css'
import Image from "next/image";

const ProjectGalary = () => {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        setData(imgGalary);
        setCollection([... new Set(imgGalary.map((item) => item.title))]);
    }, []);
    const gallary_filter = (itemData) => {
        const filterData = imgGalary.filter((item) => item.title == itemData);
        setData(filterData);
    }
    return (
        <section>
            <div className="container">
                <SectionTitle title={"Our Projects"} />
                <div className={galaryStyle.filter_item}>
                    <ul>
                        <li><button type="button" onClick={() => { setData(imgGalary) }}>All</button></li>
                        {
                            collection.map((item, id) => <li key={id}><button type="button" onClick={() => { gallary_filter(item) }}>{item}</button></li>)
                        }
                    </ul>
                </div>
                <div className={galaryStyle.galaryWrapp}>
                    {
                        data.map(item => {
                            return (
                                <div key={item.id} className={galaryStyle.imgCard}>
                                    <Image src={item.img} alt={item.title} className={galaryStyle.galaryImg} loading="lazy" width={100} height={100} />
                                    <div className={galaryStyle.img_meta}>
                                        <p>{item.title}</p>
                                        <button>preview</button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};
export default ProjectGalary;