import bgImg from "../../assets/About-img.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>INTERNATIONAL ONLINE SHOPPING MADE EASY.</h1>
                <p>Choose to shop from STORE&apos; s popular product categories such as Smartphones, Laptops , Accessories and furniture. </p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your product is ready.</h2>
                <Link className="link-button" to="/products">Explore our Products</Link>
            </div>
        </div>
    );
}