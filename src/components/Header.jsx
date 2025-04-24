import { Link } from "react-router-dom";
import bannerImage from "../images/restaurantfood.jpg";

function Header() {
  return (
    <>
      <header className="header">
        <section>
          <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Hyderabad</h3>
            <p>
              We are family owned with top chefs with great traditional
              receipies. Welcoming you to taste and feedback
            </p>
            <Link to="/booking">
              <button>Reserve Table</button>
            </Link>
          </div>

          <div className="banner-img">
            <img src={bannerImage} alt="Restaurent Banner" />
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
