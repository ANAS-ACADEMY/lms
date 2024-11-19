import React from 'react';
import '../Styles/CoursesScreen.css';

import Navbar from '../Components/Navbar';
import MajorFilter from '../Components/MajorFilter';
import GuidanceSection from '../Components/GuidanceSection';
import Footer from '../Components/Footer';

function CoursesScreen() {
    return (
        <>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='hero-section'>
                <div className='hero-content'>
                    <h1 className='hero-title'>الدورات التدريبيه   </h1>
                    <h3 className='hero-subtitle'>.اكتشف مهاراتك في مدة قصيره مع أحدث البرامج المهنية وابدأ رحلة التطوير</h3>
                </div>
            </div>
            <MajorFilter />
            <GuidanceSection />
            <Footer />
        </>
    );
}

export default CoursesScreen;
