"use client"
import { useEffect, useState } from 'react'
import teamStyle from '../src/app/css/team.module.css'
import TeamCard from './TeamCard'
import teamInfo from './info/teamInfo'
const { default: SectionTitle } = require("./SectionTitle")

const Team = () => {
    const [teamData, setTeamData] = useState([]);
    useEffect(()=>{
        setTeamData([teamInfo])
    }, [])
    console.log(teamData.name);
    return (
        <section>
            <div className="container">
                <div className={teamStyle.team_main}>
                    <SectionTitle title={"Our Exparts"} />
                        <TeamCard imgSrc={'/imgs/team/ceo.jpg'} name={"Muhammed Nur E Alam"} designation={"Founder & Ceo"} desc={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                            tenetur maiores iure sit
                            optio molestiae corrupti ratione mollitia quos accusamus!`} fb={true} tweet={true} wp={true} lin={true} y={true} ins={true}/>
                    <div className={teamStyle.team_main_wrapper} id="team_main_wrapper">
                    </div>
                    {
                       teamData.map((item)=>{
                        <TeamCard imgSrc={item.image} name={item.name} designation={item.designation} desc={item.desc} fb={true} tweet={true} wp={true} lin={true} y={true} ins={true}/>
                       }) 
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;