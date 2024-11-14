import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <Image src="/logo2.jfif" alt="Logo" className="logo" />
          <span>Ak Jewellers</span>
        </div>
        <nav className="nav-section">
          <ul className="nav-list">
            <li><Link className="nav-link" href="/">Home</Link></li>
            <li><Link className="nav-link" href="/about">About</Link></li>
            <li><Link className="nav-link" href="/products">Products</Link></li>
            <li><Link className="nav-link" href="/contactUs">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
