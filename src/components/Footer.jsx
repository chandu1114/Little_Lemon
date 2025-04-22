import logo from "./Logo.svg";

function Footer() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <div>
        <h3>Doormat Navigation</h3>
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
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
