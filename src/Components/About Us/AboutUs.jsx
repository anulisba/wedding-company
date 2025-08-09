import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
    const [animate, setAnimate] = useState({
        heading: false,
        image: false,
        logo: false,
        quote: false,
        founder: false
    });

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger animations in sequence
                        setTimeout(() => setAnimate((a) => ({ ...a, heading: true })), 200);
                        setTimeout(() => setAnimate((a) => ({ ...a, image: true })), 800);
                        setTimeout(() => setAnimate((a) => ({ ...a, logo: true })), 1400);
                        setTimeout(() => setAnimate((a) => ({ ...a, quote: true })), 2000);
                        setTimeout(() => setAnimate((a) => ({ ...a, founder: true })), 2600);
                    } else {
                        // Reset animations when leaving viewport
                        setAnimate({
                            heading: false,
                            image: false,
                            logo: false,
                            quote: false,
                            founder: false
                        });
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="aboutus" ref={sectionRef}>
            <div className="aboutus-container">
                {/* Left side */}
                <div className="aboutus-left">
                    <h2 className={`aboutus-heading ${animate.heading ? "fade-in" : ""}`}>
                        Finest Wedding Photography That <br /> Tells Your Love Story.
                    </h2>
                    <div className={`aboutus-image-container ${animate.image ? "slide-in" : ""}`}>
                        <img
                            src="https://res.cloudinary.com/dpo91btlc/image/upload/v1754755695/%D0%A1%D0%BD%D0%B8%D0%BC%D0%B0%D1%8E_%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D1%8B_%D0%B2_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B5_%D0%B8_%D0%9C%D0%9E__8-977-118-64-80____%D1%81%D0%B2%D0%B0%D0%B4%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F_%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0_%D0%BF%D0%BB%D0%B0%D1%82%D1%8C%D0%B5_%D1%81%D0%B2%D0%B0%D0%B4%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84_%D0%BF%D0%BB%D0%B0%D1%82%D1%8C%D0%B5%D0%BD%D0%B0%D1%81%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D1%83__nmqce0.jpg"
                            alt="Wedding Ring"
                        />
                    </div>
                </div>

                {/* Right side */}
                <div className="aboutus-right">
                    <div className={`aboutus-logo ${animate.logo ? "fade-in" : ""}`}>
                        <div className="logo-circle">
                            <span className="logo-text">Logo</span>
                        </div>
                    </div>

                    <p className={`aboutus-quote ${animate.quote ? "fade-in" : ""}`}>
                        “We’re more than wedding photographers
                        We’re visual narrators, blending storytelling finesse with a passion
                        for capturing the authenticity of your special moments through our stunning visuals,
                        creating them into everlasting stories that will last a lifetime“
                    </p>

                    <p className={`aboutus-founder ${animate.founder ? "fade-in" : ""}`}>
                        ● <span>Founder</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
