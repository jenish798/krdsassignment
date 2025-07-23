"use client";

import { useEffect, useState } from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./card";

const boxBackgrounds = [
  '#41CA6E',
  '#FAB153',
  '#7277D5',
  '#F87D51',
  '#ED5466',
  '#4EC2E7',
];
export default function CardList({features}){

    const [mobile, setMobile] = useState(false);

    useEffect(()=>{
        const handleResize = () =>{
            setMobile(window.innerWidth <=600);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);

    if(mobile){
        return (
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <Card
              feature={feature}
              bgColor={boxBackgrounds[index % boxBackgrounds.length]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
    return(
        <div className="cards-container">
            {features.map((feature,index)=>(
                <Card key={index} feature={feature} bgColor={boxBackgrounds[index % boxBackgrounds.length]}/>
            ))}
        </div>
    )
}