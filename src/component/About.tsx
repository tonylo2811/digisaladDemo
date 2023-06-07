import { InBetweenSection } from "./InBetweenSection";
import { YoutubePlayer } from "./YoutubePlayer";

import { ReactComponent as Award1 } from "../assests/awards/award1.svg";
import { ReactComponent as Award2 } from "../assests/awards/award2.svg";
import { ReactComponent as Award3 } from "../assests/awards/award3.svg";
import { ReactComponent as Award4 } from "../assests/awards/award4.svg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "./controls/Button";

export const About = ()=>{
    const inBetweenSectionRef = useRef<any>();
    const [paddingOffSet, setPaddingOffSet] = useState(0);

    useLayoutEffect(()=>{
        function updateSize(ref: React.MutableRefObject<any>) {
            if(ref.current){
                setPaddingOffSet(ref.current.offsetHeight)
            }
        }
        window.addEventListener('resize', ()=>{updateSize(inBetweenSectionRef)} );
        updateSize(inBetweenSectionRef);

        return () => window.removeEventListener('resize',  ()=>{updateSize(inBetweenSectionRef)} );
    },[])

    return(
        <section id="about" style={{"paddingBottom":`${(inBetweenSectionRef?.current?.offsetHeight/2)  }px`}}>
            <h1 data-text="about digisalad">about digisalad</h1>
            <YoutubePlayer videoId={'IeIRJ9jZ5Ro'} width={"100%"} height={"100%"} />
            <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
            <Button buttonText="View More" />

            <InBetweenSection name="award" direction="right" ref={inBetweenSectionRef} id="aboutInBetweenSection">
                <div className="award-container">
                    <div className="left">
                        <h1 data-text="Awards">Awards</h1>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. </p>
                    </div>
                    <div className="right">
                       <Award1/>
                       <Award2/>
                       <Award3/>
                       <Award4/>
                    </div>
                </div>
            </InBetweenSection>

        </section>
    )
}