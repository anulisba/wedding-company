import React, { useEffect, useState } from "react";
import "./Landing.css";

const Landing = () => {
    const imageSets = [
        ["https://res.cloudinary.com/dpo91btlc/image/upload/v1754754012/muslimwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotogra_3_npwfqc.jpg", "https://res.cloudinary.com/dpo91btlc/image/upload/v1754754012/muslimwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotogra_2_ubedjv.jpg", "https://res.cloudinary.com/dpo91btlc/image/upload/v1754754012/muslimwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotogra_1_izxgzd.jpg"],
        ["https://res.cloudinary.com/dpo91btlc/image/upload/v1754754320/hinduwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotograp_1_ssvip8.jpg", "https://res.cloudinary.com/dpo91btlc/image/upload/v1754754320/hinduwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotograp_fpk3kf.jpg", "https://res.cloudinary.com/dpo91btlc/image/upload/v1754754356/hinduwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotograp_2_uwmtjx.jpg"]
    ];

    const [currentSet, setCurrentSet] = useState(0);
    const [showText, setShowText] = useState(false);
    const [fade, setFade] = useState(false);
    const [textHasAppeared, setTextHasAppeared] = useState(false);

    useEffect(() => {
        const changeImages = setInterval(() => {
            setFade(true); // start fade out
            setTimeout(() => {
                setCurrentSet((prev) => (prev + 1) % imageSets.length);
                setFade(false); // fade back in
            }, 1000); // fade duration
        }, 7000);

        return () => clearInterval(changeImages);
    }, []);

    useEffect(() => {
        if (!textHasAppeared) {
            const textTimer = setTimeout(() => {
                setShowText(true);
                setTextHasAppeared(true);
            }, 5000);
            return () => clearTimeout(textTimer);
        }
    }, [currentSet, textHasAppeared]);

    return (
        <section className="landing">
            {/* Header */}
            <header className="landing-header">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li className="logo">Logo</li>
                        <li>Stories</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            {/* Image Container with Overlay */}
            <div className={`landing-images ${fade ? "fade-out" : "fade-in"}`}>
                {/* Black overlay div */}
                <div className="image-overlay"></div>

                {imageSets[currentSet].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`slide slide-${index}`}
                    />
                ))}
            </div>

            {showText && (
                <h1 className="landing-text">
                    Capturing Moments That Last a Lifetime.
                </h1>
            )}
        </section>
    );
};

export default Landing;