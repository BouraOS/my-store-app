import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <Link className="site-logo" to="/">#Store</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
  )
}
