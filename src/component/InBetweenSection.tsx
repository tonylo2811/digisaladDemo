import { ReactComponentElement, ReactNode, forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";



interface inBetweenSectionProps {
    id?: string;
    name: string;
    direction: 'left' | 'right';
    children: ReactNode;
}

export const InBetweenSection= forwardRef<any, inBetweenSectionProps>( ({ id, name, direction, children }, ref) => {

    
    return(
        <>
            <section 
                ref={ref}
                id="inbetweenSection" 
                className={`${name && name} ${id && id} ${direction === 'left' ? 'left': 'right'}`}
                style={{"bottom":`${(
                    ref && typeof ref !== "function" && ref.current &&
                    ref?.current?.offsetHeight/2) *-1 }px`}
                }
            >
                {children}
            </section>
        </>
    )
});




const InBetweenItem = ()=>{
     
}