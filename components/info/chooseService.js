import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineFingerprint } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
const chooseUsServices = [
    {
        name: 'customer support',
        icon: <RiCustomerService2Line />,
        heading: '24/7 Customer Support',
        desc: 'We have a support team that working 24 hours for our clients. At any problem you can contact with us.'
    },
    {
        name: 'easy use',
        icon: <MdOutlineFingerprint />,
        heading: 'Easy to Use',
        desc: 'We make our software to much user-friendly so that our clients don\'t face any problem to use our software. We also give a guideline for our clients.'
    }
    ,
    {
        name: 'unique software',
        icon: <FaLaptopCode />,
        heading: 'Unique Software',
        desc: 'We make each software as per clients requirements. So we have to code and design each software for each business. So your software will be unique.'
    },
    {
        name: 'it solution',
        icon: <FaLaptop />,
        heading: 'Any Type IT Solution',
        desc: 'We provide all kind of IT solution for your company or your business according to your requirements. We have a strong team for your support.'
    }
];

export default chooseUsServices;
