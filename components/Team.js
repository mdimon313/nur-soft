"use client"
import { useEffect, useState } from 'react'
import teamStyle from '../src/app/css/team.module.css'
import TeamCard from './TeamCard'
import teamInfo from './info/teamInfo'
const { default: SectionTitle } = require("./SectionTitle")

const Team = () => {
    return (
        <section>
            <div className="container">
                <div className={teamStyle.team_main}>
                    <SectionTitle title={"Our Exparts"} />
                    <TeamCard 
                    imgSrc={'/imgs/team/ceo.jpg'} 
                    name={"Muhammed Nur E Alam"} 
                    designation={"Founder & Ceo"}
                    isShow={true}
                    desc={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                            tenetur maiores iure sit
                            optio molestiae corrupti ratione mollitia quos accusamus!`} 
                    fb={true}
                    f={'https://www.facebook.com/nurealam.rajjak'}
                    tweet={true} 
                    t={'https://twitter.com/Nurealam1990'}
                    wp={true} 
                    w={'https://web.whatsapp.com/'}
                    lin={true} 
                    l={'https://www.linkedin.com/in/muhammad-nur-e-alam-a180a393'}
                    yt={true}
                    y={'https://www.youtube.com/@muhammadnurealam'}
                    ins={true} 
                    i={'https://www.instagram.com/nurealam.rajjak'}
                    />
                    <div className={teamStyle.team_main_wrapper} id="team_main_wrapper">
                        {
                            teamInfo.map((item, id) => {
                                console.log(item.social.whatsapp);
                                return <TeamCard 
                                        key={id} 
                                        imgSrc={item.image} 
                                        name={item.name} 
                                        designation={item.designation} 
                                        isShow = {false}
                                        desc={item.desc} 
                                        fb={true}
                                        f={item.social.facebook}
                                        tweet={true} 
                                        t={item.social.twitter}
                                        wp={true} 
                                        w={item.social.whatsapp}
                                        lin={true} 
                                        l={item.social.linkedin}
                                        yt={false}
                                        y={item.social.youtube}
                                        ins={true} 
                                        i={item.social.instagram} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;