import React from 'react';
import Lottie from "lottie-react";
import magicAnimi from '../../../assets/animation/72882-bird-in-a-cage-and-vanishes-with-magic.json'

const MagicSection = () => {
    return (
        <div className='my-20 md:flex justify-between items-center'>
            <div className='w-full md:w-1/2'>
                <Lottie animationData={magicAnimi} loop={true}></Lottie>
            </div>
            <div className='w-full md:w-1/2 text-center'>
                <h1 className='text-3xl font-bold text-primary'>Magic</h1>
                <p>
                    Magic is a mystical art form that has captivated human imagination for centuries. It is a practice that transcends the boundaries of the ordinary and taps into the realm of the extraordinary. Magic is the art of illusion, where skilled magicians harness their knowledge of psychology, sleight of hand, and misdirection to create seemingly impossible feats. Whether it's making objects disappear, levitating in thin air, or reading minds, magic leaves us in awe and wonder. It evokes a sense of childlike curiosity, inviting us to suspend our disbelief and embrace the possibility of the impossible. Beyond entertainment, magic also carries a symbolic significance, representing the power of imagination, mystery, and the potential for transformation. In a world governed by logic and reason, magic reminds us to embrace the enchantment and mystery that exists all around us.
                </p>
            </div>
        </div>
    );
};

export default MagicSection;