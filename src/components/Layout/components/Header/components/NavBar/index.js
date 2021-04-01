import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Bell, ArrowLeft, Grid3x3GapFill, Gear, BoxArrowRight, Search } from "react-bootstrap-icons";

import { useAuth } from 'hooks'
import { AuthContext } from "contexts/AuthProvider"
import './styles.css'


const NavBar = () => {
  const { goBack } = useHistory();
  const { logout } = useAuth();
  const { user } = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 me-3">
            <li>
              <button className="btn" onClick={goBack}>
                <ArrowLeft />
              </button>
            </li>
          </ul>
          <form className="d-flex">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <Search />
              </span>
              <input
                name="search"
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <button className="btn btn-primary shadow" type="button" >
                Search
              </button>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
              </button>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item"> 🇪🇸 &nbsp; Spanish</li>
                <li className="dropdown-item">🇬🇧 &nbsp;English</li>
              </ul>
            </li>
            <li className="nav-item">
              <button className="nav-link active" aria-current="page">
                <Bell />
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                <Grid3x3GapFill />
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">
                <Gear />
              </button>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle d-flex align-items-center"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.photoURL}
                  alt="user-avatar"
                  width="32"
                  className="rounded-circle ms-1 me-2"
                />
                {user.displayName}
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <p to="/profile" className="dropdown-item">Profile</p>
                </li>
                <li>
                  <button className="dropdown-item" onClick={logout} >
                    <BoxArrowRight /> logout</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
