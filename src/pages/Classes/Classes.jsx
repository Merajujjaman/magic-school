import React from 'react';
import useAllclasses from '../../hooks/useAllclasses';
import SectionTitle from '../../Routs/components/SectionTitle';

const Classes = () => {
    const [allClasses] = useAllclasses()
    return (
        <div>
            <SectionTitle title={"Select Your Classes"}></SectionTitle>
            
        </div>
    );
};

export default Classes;