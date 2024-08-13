import React, { useState, useEffect, useContext } from 'react';
import { CarouselContext } from '../carousel'; // Ensure the path is correct

export const CarouselDots = ({ className = '', dotClassName = '' }) => {
    const emblaApi = useContext(CarouselContext);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    useEffect(() => {
        if (emblaApi) {
            setScrollSnaps(emblaApi.scrollSnapList());
            const updateSelectedIndex = () => setSelectedIndex(emblaApi.selectedScrollSnap());
            emblaApi.on('select', updateSelectedIndex);
            updateSelectedIndex();
        }
    }, [emblaApi]);

    return (
        <div className={`carousel-dots ${className}`}>
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    onClick={() => emblaApi.scrollTo(index)}
                    className={`carousel-dot ${dotClassName} ${index === selectedIndex ? 'carousel-dot--selected' : ''}`}
                    aria-label={`Scroll to slide ${index + 1}`}
                />
            ))}
        </div>
    );
};
