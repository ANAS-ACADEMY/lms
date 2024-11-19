import React, { useEffect, useState } from 'react';
import '../Styles/MajorFilter.css';

import Card from './Card';

function MajorFilter() {
  const [selectedMajor, setSelectedMajor] = useState('');
  const [visibleCards, setVisibleCards] = useState(6); // Number of cards initially visible
  const [majors, setMajors] = useState({}); // Replacing static majors with state
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch majors and courses from API
  useEffect(() => {
    const fetchMajors = async () => {
      try {
        const response = await fetch('https://lms.anasacademy.uk/api/development/courses', {
          method: 'GET',
          headers: {
            'x-api-key': '1234', // Replace with your valid API key
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched Data:', data); // Debugging log

        // Transform API data into a majors object
        const fetchedMajors = {};
        data.data.categories.forEach((category) => {
          fetchedMajors[category.title] = category.courses.map((course) => ({
            title: course.title,
            status: course.status === 'active' ? 'open' : 'closed',
            description: course.description,
            price: course.price,
            duration: course.duration,
            startDate: course?.['start_date'],
            requirements:course.requirements,
            applyingLink:course.applying_link
          }));
        });
        
        setMajors(fetchedMajors);
        setSelectedMajor(Object.keys(fetchedMajors)[0]); // Set default major to the first one
      } catch (error) {
        console.error('Error fetching majors and courses:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMajors();
  }, []);

  const handleMajorChange = (event) => {
    setSelectedMajor(event.target.value);
    setVisibleCards(6); // Reset visible cards when major changes
  };

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3); // Show 6 more cards each time
  };

  const handleShowLess = () => {
    setVisibleCards(6); // Reset to show only 6 cards
  };

  // Safely access selected courses
  const selectedCourses = majors[selectedMajor] || [];

  // Handle loading, error, and content display
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='major-filter-container'>
      <div className='filter-container'>
        <h5 className='choose-major-desc'>
          اختر التخصص من القائمة أدناه واستعرض الدورات التدريبية التي تناسب احتياجك المهني لتحقيق طموحك.
        </h5>
        <h4 className='choose-major-title'>أختر التخصص</h4>
        <select className='filter-box' value={selectedMajor} onChange={handleMajorChange}>
          {Object.keys(majors).map((major, index) => (
            <option key={index} value={major}>
              {major}
            </option>
          ))}
        </select>
      </div>

      <h2 className='major-title'>{selectedMajor}</h2>

      <div className='cards-container'>
        {selectedCourses.map((course, index) => {
          if (index < visibleCards) {
            return (
              <Card 
                key={index} 
                title={course.title} 
                status={course.status} 
                description={course.description}
                price={course.price}
                duration={course.duration}
                startDate={course.startDate}  
                requirements={course.requirements}  
                link={course.applyingLink}          
              />
            );
          }
          return null; // Skip rendering cards beyond visibleCards
        })}
      </div>

      <div className='show-more-container'>
        {visibleCards < selectedCourses.length && (
          <button className='show-more-button' onClick={handleShowMore}>
            عرض المزيد
          </button>
        )}
        {visibleCards > 6 && (
          <button className='show-less-button' onClick={handleShowLess}>
            عرض أقل
          </button>
        )}
      </div>
    </div>
  );
}

export default MajorFilter;
