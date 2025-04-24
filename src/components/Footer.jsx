import logo from "../images/Logo.svg";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="logo" />
          <p>
            We are family owned with top chefs with great traditional receipies.
            Welcoming you to taste and feedback
          </p>
        </div>
        <div>
          <h3>Important Links:</h3>
          <div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="/">Reservations</a>
              </li>
              <li>
                <a href="/">Order Online</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div>
            <p>Hyderabad</p>
            <p>+9102345678</p>
            <p>123@gmail.com</p>
          </div>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <div>
            <p>
              <a href="/">Instagram</a>
            </p>
            <p>
              <a href="/">Twitter</a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
