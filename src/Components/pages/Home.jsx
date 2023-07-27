import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Buy Products at Favourable Prices on Our Online Store.</h1>
            <p>Best online store, you will be exploring some luxury Products for your home. These overseas Products would make your lifestyle easier.</p>
            <Link to="products">Find your Product</Link>
        </div>
    )
}