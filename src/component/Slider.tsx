import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const Slider = ()=> {

  const sliderContent=[
    {img: "slider1.png", bgImg: "slider-bg.png", subTitle: "HIGHLIGHTED SHOWCASE", title: "LP CLUB MOBILE APP", content: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus."},
    {img: "slider2.png", bgImg: "slider-bg.png", subTitle: "Meme1", title: "LP CLUB MOBILE APP 2", content: "This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. "},
    {img: "slider3.png", bgImg: "slider-bg.png", subTitle: "Meme2", title: "LP CLUB MOBILE APP 3", content: "This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. "},
    {img: "slider4.png", bgImg: "slider-bg.png", subTitle: "The Office", title: "LP CLUB MOBILE APP 4", content: "This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. This is another content. "}
  ]


  return (
    <>
      <Swiper 
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
      >

        {
          sliderContent.map((item, index)=>{
            return(
              <>
                <SwiperSlide>
                  <SliderItem img={item.img} bgImg={item.bgImg} subTitle={item.subTitle} title={item.title} content={item.content}/>
                </SwiperSlide>
              </>
            )
          })
        }

      </Swiper>
    </>
  );
}


interface SliderItemProps {
  img: string;
  bgImg: string;
  subTitle: string;
  title: string;
  content: string;
}

export const SliderItem :React.FC<SliderItemProps>= ({img, bgImg, subTitle, title, content})=>{
  return(
    <>
      <div className='slider-item-container' data-bg={bgImg}>
        <div className='left'>
          <div className='img-container'>
            <img src={require(`../assests/slider/${img}`)}/>
          </div>
        </div>
        <div className='right'>
          <div className='subtitle'>{subTitle}</div>
          <div className='title'>{title}</div>
          <div className='content'>{content}</div>
        </div>
      </div>
    </>
  )
}