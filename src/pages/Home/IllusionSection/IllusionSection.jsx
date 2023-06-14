import React from 'react';
import Lottie from "lottie-react";
import illusiionGif from '../../../assets/animation/116352-psychedelic-illusion-spiral.json'
const IllusionSection = () => {
    return (
        <div className='my-20 md:flex justify-between items-center'>
            
            <div className='w-full md:w-1/2 text-center'>
                <h1 className='text-3xl font-bold text-primary'>Illusion</h1>
                <p>
                Illusion is a captivating phenomenon that can both mesmerize and deceive our senses. It is a perceptual experience that challenges our understanding of reality by creating false impressions or distorting the truth. Illusions can occur in various forms, such as visual, auditory, or even cognitive illusions. Visual illusions, for instance, manipulate our visual perception, making objects appear different from what they truly are or creating illusions of motion or depth. Auditory illusions, on the other hand, play tricks on our hearing, distorting sounds or creating the perception of nonexistent noises. Cognitive illusions delve into the realm of our thoughts and beliefs, misleading us in our reasoning or decision-making processes. Whether natural or deliberately crafted, illusions remind us that our perception of reality is not always as reliable as it seems, urging us to question and explore the boundaries of our senses.
                </p>
            </div>

            <div className='w-full md:w-1/2'>
                <Lottie className='h-[400px]' animationData={illusiionGif} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default IllusionSection;