import { FaGolang } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
export const certData = [
    {
    logo: <FaGolang size={70} color="rgba(0, 125, 156, 0.75)"/>,
    platform: "Udemy",
    title:"Go: The Complete Developer's Guide",
    number: "UC-8878eeb5-0dcc-4ce3-a1ef-f50dda167026"
},
{
    logo:<SiUdemy size={70} color = "#a435f0" />,
    platform: "Udemy",
    title:"Clean Code",
    number: "UC-595739bc-ad64-4fce-9d03-6c9d035a6a1c"
},
{
    logo: <img src={require('../assets/aws-svgrepo-com.svg').default} width="70" height="70" alt='mySvgImage' /> ,
    platform: "A Cloud Guru",
    title:"AWS Certified Cloud Practitioner (CLF-CO2)",
    number: "8602F7AD5B11"
}
,
{
    logo: <img src={require('../assets/aws-svgrepo-com.svg').default} width="70" height="70" alt='mySvgImage' /> ,
    platform: "Amazon Web Services Training and Certification",
    title:"AWS Knowledge: Cloud Essentials",
    number: "e5fcb745-10ce-4c8c-a7f9-3dfea4b8dc60"
},
{
    logo: <img src={require('../assets/aws-svgrepo-com.svg').default} width="70" height="70" alt='mySvgImage' /> ,
    platform: "Amazon Web Services Training and Certification",
    title:"AWS Certified Cloud Practitioner",
    number: "77053dc5-86ef-4034-af07-7a4a12487f7d"
}
]