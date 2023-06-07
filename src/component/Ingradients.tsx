import { Button } from "./controls/Button";
import { InBetweenSection } from "./InBetweenSection";
import { useLayoutEffect, useRef, useState } from "react";

export const Ingradients = ()=>{
    const inBetweenSectionRef = useRef<any>();
    const [paddingOffSet, setPaddingOffSet] = useState({paddingTop:0, paddingBottom:0});
    const [itemCount, setItemCount] = useState(9);

    useLayoutEffect(()=>{
        function updateSize(ref: React.MutableRefObject<any>) {
            let aboutInBetweenElementHeight = document.getElementsByClassName('aboutInBetweenSection')[0] as HTMLElement;
            if(ref.current){
                setPaddingOffSet({
                        paddingTop: aboutInBetweenElementHeight.offsetHeight/2,
                        paddingBottom: ref.current.offsetHeight /2,
                })
            }
        }
        window.addEventListener('resize', ()=>{updateSize(inBetweenSectionRef)} );
        updateSize(inBetweenSectionRef);

        return () => window.removeEventListener('resize',  ()=>{updateSize(inBetweenSectionRef)} );
    },[])


    let content = 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.';
    const ingradientItems =[
        {iconPath: 'icon1', title: 'UX Design', content},
        {iconPath: 'icon2', title: 'UI Design', content},
        {iconPath: 'icon3', title: 'website development', content},
        {iconPath: 'icon4', title: 'mobile app development', content},
        {iconPath: 'icon5', title: 'ecommerce', content},
        {iconPath: 'icon6', title: 'customer loyalty', content},
        {iconPath: 'icon7', title: 'digital transformation', content},
        {iconPath: 'icon8', title: 'digital marketing', content},
        {iconPath: 'icon9', title: 'BRANDING', content},
        {iconPath: 'icon1', title: 'UX Design', content},
        {iconPath: 'icon1', title: 'UX Design', content},
        {iconPath: 'icon1', title: 'UX Design', content},
        {iconPath: 'icon1', title: 'UX Design', content},
        {iconPath: 'icon1', title: 'UX Design', content},
        {iconPath: 'icon1', title: 'UX Design', content},
        {iconPath: 'icon1', title: 'UX Design', content},
    ];

    return(
        <>

            <section id="ingradients" style={{"paddingTop":`${(paddingOffSet.paddingTop)  }px`, "paddingBottom":`${(paddingOffSet.paddingBottom)  }px`}} >
                <h1 data-text="our ingredients">our ingredients</h1>
                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
                <Button buttonText="Our Services" color={'var(--c-purple)'}/>

                <div className="ingradient-items">
                    {ingradientItems.map((item, index)=>{
                            if(index < itemCount){
                                return( <IngradientItem key={index} iconName={item.iconPath} title={item.title} content={item.content}/> )
                            }
                        })
                    }
                </div>


                <InBetweenSection name="ceo" direction="left" ref={inBetweenSectionRef} id="ingradientsInBetweenSection">
                    <div className="ceo-container">
                        <div className="left">
                            <div className="ceo"/>
                            <div className="title">Tony Ng</div>
                            <div className="subtitle">Founder & Creative Director</div>
                        </div>
                        <div className="right">
                            <img src={require('../assests/quotemarks-left.png')}/>
                            <p>A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the <span className='color-orange-text'>right experience to the right person at the right time</span>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.</p>
                        </div>
                    </div>
                </InBetweenSection>
                
                <button 
                    data-text={'VIEW MORE DIGISALAD’S INGRADIENTS'}
                    className={'view-more'}
                    onClick={()=>{setItemCount(itemCount+3)}}
                >
                    VIEW MORE DIGISALAD’S INGRADIENTS
                </button>

            </section>
        </>
    )
}


interface ingradientItemProps {
    iconName: string;
    title: string;
    content: string;
}

const IngradientItem: React.FC<ingradientItemProps> = ({iconName, title, content})=>{

    return(
        <>

            <div className="ingradient-item-container">
                <div className="img-container"><img src={require(`../assests/ingradientsIcon/${iconName}.svg`)}/></div>
                <div className="title">{title}</div>
                <p>{content}</p>
                <Button buttonText={"view more"}/>
            </div>
        </>
    )
}