import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Timesheet.png";

function Navbar() {
  return (
    <section>
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </nav>

      <div className="container-fluid mt-2" style={{ background: "#ffff" }}>
          <h2>HH Timesheet</h2>
          <div className="row mt-4 ms-3">
            <div className="col-12">
              <div className="d-flex">
                <Link
                  to="/"
                  className="me-3 mb-3 text-black"
                  style={{ textDecoration: "none" }}
                >
                  Daftar Kegiatan
                </Link>
                <Link
                  to="/pengaturan"
                  className="mb-3 text-black"
                  style={{ textDecoration: "none" }}
                >
                  Pengaturan
                </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Navbar;
