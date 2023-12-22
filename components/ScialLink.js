"use client"

// import socialLinkStyle from '../src/app/css/socialLink.module.css'

const { default: Link } = require("next/link");
const SocialLink = ({ link, icon, ...res }) => {
   return (
      <Link href={link} target="_blank" {...res}>{icon}</Link>
 );
}

export default SocialLink;