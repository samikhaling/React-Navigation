import Accordian from "../components/Accordion";
import { GoBell,GoCloudDownload,GoClock,GoDatabase } from "react-icons/go";
function AccordionPage(){
    const items = [
        {
            id:'12esad',
            label:'Can I use the React on the Project',
            content:'You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time'
        },
        {
            id:'34tsdf5',
            label:'Can I use the Javascript on the Project',
            content:'You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time'
        },
        {
            id:'787gfe2',
            label:'Can I use the CSS on the Project',
            content:'You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time You can use React on project at any point of time'
        }      

    ];

    return <Accordian items={items}/>;
}

export default AccordionPage;