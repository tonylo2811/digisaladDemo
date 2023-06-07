import { useEffect, useState } from "react";
import { ReactComponent as Logo} from "../assests/digisalad-logo.svg"
import { ReactComponent as LogoBlue} from "../assests/digisalad-logo-blue.svg"
import { YoutubePlayer } from "./YoutubePlayer";

export const Banner = ()=>{
    const [menuStaus, setMenuStaus] = useState(false);

    return(
        <>
            <Header menuControl={{menuStaus, setMenuStaus}}/>
            <section id='banner'>
                <div className="banner-container">
                    <div className="sideline">
                            <div className='decoration'></div>
                            <div>DIGITAL AGENCY</div>
                    </div>
                    <div className="banner-body">
                        <Logo/>
                        <div className="headline">
                            WE CREATE<br/>
                            AMAZING<br/>
                            DIGITAL EXPERIENCES
                        </div>
                    </div>
                </div>

                {/* <YoutubePlayer videoId={'TcMBFSGVi1c'} width={"100%"} height={"100%"}/> */}

                <YoutubePlayer videoId={'8_4JRK4QkqU'} width={"100%"} height={"100%"} />
            </section>

            <Menu show={menuStaus}/>
        </>
    )
}



const Header = ({menuControl}: {menuControl:{menuStaus: boolean, setMenuStaus: any}})=>{
    const [scrollDown, setScrollDown] = useState(true);

    useEffect(()=>{
        const onScrollHandling = ()=>{
            setScrollDown(window.scrollY === 0)
        }
        window.addEventListener("scroll", onScrollHandling);
    }, [])

    const menuHandler = ()=>{
        menuControl.setMenuStaus(!menuControl.menuStaus)
        if(!menuControl.menuStaus){
            document.body.style.overflow = "hidden";
        } else{
            document.body.style.overflow = "scroll"
        }
    }
    return(
        <div id="header" className={!scrollDown ? "sticky" : ""}>
            <div className="header-left">
                <LogoBlue/>
            </div>
            <div className="header-right">
                <button id="start-project">start your project</button>
                <button id="menu-btn" className={ menuControl.menuStaus ? "active" : "" } onClick={menuHandler}>
                    <span className="menu-btn-container"></span>
                </button>
            </div>
        </div>
    )
}


const Menu = ({show} : {show: boolean})=>{

    const menuList = [
        {img: "", icon: "", subtitle: "EMPOWERING BRANDS", title:"ABOUT US"},
        {img: "", icon: "", subtitle: "BE COOL WITH US", title:"CAREERS"},
        {img: "", icon: "", subtitle: "AREAS OF EXPERTISE", title:"SERVICES"},
        {img: "", icon: "", subtitle: "CASE STUDIES", title:"WORKS"},
        {img: "", icon: "", subtitle: "OUR STRATEGIES", title:"INSIGHTS"},
        {img: "", icon: "", subtitle: "START YOUR JOURNEY WITH US", title:"CONTACT"},
    ]

    return(
        <>
            <div id="menu-container" className={show ? 'show': ''}>
                {menuList.map((item, index)=>{
                    return(
                        <>
                            <div className='menu-item-container'>
                                <div className='icon'>{}</div>
                                <div className='subitlte'>{item.subtitle}</div>
                                <div className='title'>{item.title}</div>
                            </div>  
                        </>
                    )
                })}
            </div>
        </>
    )
}