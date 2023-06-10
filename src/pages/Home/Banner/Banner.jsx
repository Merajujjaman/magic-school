import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'
import banner4 from '../../../assets/images/banner4.jpg'
import banner5 from '../../../assets/images/banner5.jpg'
import banner6 from '../../../assets/images/banner6.jpg'
import BannerCover from './BannerCover';
const Banner = () => {
    return (
        <Carousel autoPlay={true} interval={2000} infiniteLoop>
            <div>
                <BannerCover bannerImage={banner1}></BannerCover>
            </div>
            <div>
                <BannerCover bannerImage={banner2}></BannerCover>
            </div>
            <div>
                <BannerCover bannerImage={banner3}></BannerCover>
            </div>
            <div>
                <BannerCover bannerImage={banner4}></BannerCover>
            </div>
            <div>
                <BannerCover bannerImage={banner5}></BannerCover>
            </div>
            <div>
                <BannerCover bannerImage={banner6}></BannerCover>
            </div>
            
        </Carousel>
    );
};

export default Banner;