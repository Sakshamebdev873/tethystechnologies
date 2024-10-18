import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Reset visibility on route change
    useEffect(() => {
        setIsVisible(false);
    }, [location]);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} style={styles.button}>
                    Scroll to Top
                </button>
            )}
        </div>
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '50px',
        right: '30px',
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000,
    },
};

export default ScrollToTop;
