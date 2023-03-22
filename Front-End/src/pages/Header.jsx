import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg custom-bg text-color" style={{height:"90px"}}>
        <div class="container-fluid text-color">
          <img
            src={logo}
            width="120"
            height="90"
            class="d-inline-block align-top"
            alt=""
          />
    
          <Link to="/" class="navbar-brand"  style={{marginLeft:"30px"}}>
            <i>
              <b className="text-color">Sagar Sweet Mart</b>
            </i>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  <b className="text-color">About Us</b>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  <b className="text-color">Contact Us</b>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
