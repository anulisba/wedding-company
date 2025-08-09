import React, { useState, useRef, useEffect } from "react";
import "./LoveAcross.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LoveAcross = () => {
    const slides = [
        { img: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754756610/christianwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphoto_yzeb0e.jpg", title: "Emilin", subtitle: "& Renoy" },
        { img: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754756683/hinduwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotograp_3_yteenx.jpg", title: "Mahewary", subtitle: "Nimal" },
        { img: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754754012/muslimwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotogra_2_ubedjv.jpg", title: "Aisha", subtitle: "& Fahad" },
        { img: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754754320/hinduwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotograp_1_ssvip8.jpg", title: "Sneha", subtitle: "& Arjun" },
        { img: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754756750/Happy_Weddingcompany_Wedding_photography_Filmmaking_Crew_Kerala_UAE_Dubai_91_9746_6_yxaa2o.jpg", title: "Liya", subtitle: "& Kiran" },
    ];

    const [index, setIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    // Viewport detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setInView(entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Adjust visible slides on resize
    useEffect(() => {
        const updateSlides = () => {
            setVisibleSlides(window.innerWidth <= 768 ? 1 : 3);
        };
        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    // Navigation with no white space
    const handlePrev = () => {
        setIndex((prev) =>
            prev === 0 ? slides.length - visibleSlides : prev - 1
        );
    };

    const handleNext = () => {
        setIndex((prev) =>
            prev >= slides.length - visibleSlides ? 0 : prev + 1
        );
    };

    return (
        <section
            className={`love-across ${inView ? "animate" : ""}`}
            ref={sectionRef}
        >
            {/* Heading */}
            <h2 className={`love-heading ${inView ? "tfade-up" : ""}`}>
                Celebrating <span className="italic">love</span> across Cultures
            </h2>

            <div className={`laslider-wrapper ${inView ? "tfade-in" : ""}`}>
                <button className="nav-btn left" onClick={handlePrev}>
                    <FaChevronLeft />
                </button>

                <div className="laslider-container">
                    <div
                        className="laslider-track"
                        style={{
                            transform: `translateX(-${index * (100 / visibleSlides)}%)`,
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        {slides.map((slide, i) => (
                            <div
                                className={`laslide ${i === index ? "active-slide" : ""
                                    }`}
                                key={i}
                                style={{ flex: `0 0 ${100 / visibleSlides}%` }}
                            >
                                <img src={slide.img} alt={slide.title} />
                                <div className="laoverlay-text">
                                    {slide.title} <br /> {slide.subtitle}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="nav-btn right" onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>

            {/* Caption */}
            <p className={`love-caption ${inView ? "tfade-up-delay" : ""}`}>
                YOUR WEDDING SHOULD BE UTTERLY UNFORGETTABLE, DEEPLY ROMANTIC,
                EXQUISITELY BEAUTIFUL, AND ENTIRELY{" "}
                <span className="italic">"you"</span>
            </p>
        </section>
    );
};

export default LoveAcross;
