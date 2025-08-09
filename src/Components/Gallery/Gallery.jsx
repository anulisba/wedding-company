import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const images = [
    {
        src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754756683/hinduwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotograp_3_yteenx.jpg",
        title: "Mahewary & Nimal",
    },
    {
        src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754754320/hinduwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotograp_fpk3kf.jpg",
        title: "Sneha & Arjun",
    },
    {
        src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754754012/muslimwedding_bridalmakeup_keralabrides_bridesofkerala_keralawedding_keralaweddingphotogra_1_izxgzd.jpg",
        title: "Aisha & Fahad",
    },
    {
        src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754756750/Happy_Weddingcompany_Wedding_photography_Filmmaking_Crew_Kerala_UAE_Dubai_91_9746_6_yxaa2o.jpg",
        title: "Liya & Kiran",
    },
    {
        src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754757385/459309809_797142585830681_4331834673087461924_n_znqxqr.jpg",
        title: "Emily & Renoy",
    },
    {
        src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754757473/446822282_1713759519431128_5229187634867336789_n_toqohi.jpg",
        title: "Anly & Ajay",
    },
];

export default function Gallery() {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setAnimate(entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="gallery-section" ref={sectionRef}>
            <h2 className={`love-heading ${animate ? "tfade-in" : ""}`}>
                Our <span className="italic">Favourite</span> Moments
            </h2>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`gallery-item ${animate ? "tfade-up" : ""}`}
                        style={{ animationDelay: `${0.5 + index * 0.3}s` }}
                    >
                        <img src={img.src} alt={`Gallery ${index + 1}`} />
                        <div className="overlay">
                            <div className="overlay-text">
                                <h3>{img.title}</h3>
                                <button className="view-album-btn">View Album</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
