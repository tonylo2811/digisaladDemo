import { useLayoutEffect, useState } from "react";



let ingradientsInBetweenElementHeight = document.getElementsByClassName('ingradientsInBetweenSection')[0] as HTMLElement;

// style={{"paddingTop":`${(paddingOffSet.paddingTop)  }px`}}
export const Experience = ()=>{

    const [paddingOffSet, setPaddingOffSet] = useState(0);

    useLayoutEffect(()=>{
        function updateSize() {
            let ingradientsInBetweenElementHeight = document.getElementsByClassName('ingradientsInBetweenSection')[0] as HTMLElement;
            if(ingradientsInBetweenElementHeight.offsetHeight){
                setPaddingOffSet(ingradientsInBetweenElementHeight.offsetHeight/2)
            }
        }
        window.addEventListener('resize', ()=>{updateSize()} );
        updateSize();

        return () => window.removeEventListener('resize',  ()=>{updateSize()} );
    },[])



    return(
        <>
            <section id="experience"  style={{"paddingTop":`${(paddingOffSet)  }px`}}>
                <h1 data-text="our brand experience">our brand experience</h1>
                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
                <img src={require('../assests/client-list.png')}/>
            </section>
        </>
    )
}