import React from 'react';

const BannerCover = ({bannerImage}) => {
    return (
        <div className="hero md:min-h-[500px]" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-2 text-3xl font-bold">Hello there</h1>
                    <p className="mb-5 md:text-xl">Indulge in the mystical arts of magic and illusion, where dreams come to life and the impossible becomes your playground. Our comprehensive online academy offers expert guidance, interactive tutorials, and a vibrant community of fellow enthusiasts. Immerse yourself in a curriculum crafted to ignite your creativity, enhance your showmanship, and ignite the spark of awe in every spectator's eyes. Unleash the magician within and let your imagination soar to new heights. Join us on this extraordinary quest of enchantment and become a master of the extraordinary.</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCover;