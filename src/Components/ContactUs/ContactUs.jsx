import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";

export default function Contact() {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false); // Reset animation if you want to replay on re-entry
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            className="contact-section"
            ref={sectionRef}
        >
            <div className="contact-overlay"></div>
            <div className={`contact-content ${animate ? "animate" : ""}`}>
                <h3 className="contact-small">Your Perfect</h3>
                <h1 className="contact-main">WEDDING</h1>
                <h3 className="contact-small">Will Come True</h3>
                <button className="contact-button">Book Us</button>
            </div>
        </section>
    );
}
