import Button from "../components/Button";
import { GoBell,GoCloudDownload,GoClock,GoDatabase } from "react-icons/go";
function ButtonPage(){
    const handleClick = () =>{
        console.log("click!!");
    };
    return (
        <div>
            <div>
                <Button success rounded className="mb-5" onClick={handleClick}>    
                    <GoBell />
                    Click me!!
                </Button>
            </div>
             <div>
                <Button outline danger>
                    <GoCloudDownload />
                    Buy now!
                </Button>
            </div>
             <div>
                <Button warning >
                    <GoClock />
                    See Deal!
                </Button>
            </div>
             <div>
                <Button secondary outline>
                    <GoDatabase />
                    Discount!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Trippet!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;