import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "../components/partikel/Button";
import SearchInput from "./partikel/SearchInput";

function Content() {
  return (
    <section>
      <div className="content container-fluid">
        {/* <h2>HH Timesheet</h2>
        <div className="row mt-4 ms-3">
          <div className="col-12">
            <div className="d-flex">
              <a
                href="/"
                className="me-3 mb-3 text-black"
                style={{ textDecoration: "none" }}
              >
                Daftar Kegiatan
              </a>
              <a
                href="/pengaturan"
                className="mb-3 text-black"
                style={{ textDecoration: "none" }}
              >
                Pengaturan
              </a>
            </div>
          </div>
        </div> */}
        <div className="row" style={{ backgroundColor: "#F7F8FB" }}>
          <div className="col-12 mt-4">
            <div className="card" style={{ background: "#ffff" }}>
              <div className="card-header ms-3" style={{ background: "#ffff" }}>
                <div className="d-flex">
                  <div>
                    <p className="me-5">Nama Karyawan</p>
                    <p className="me-5">Firman</p>
                  </div>

                  <div>
                    <p>Rate</p>
                    <p>12000</p>
                  </div>
                </div>
              </div>
              <div className="card-body ms-3">
                <div
                  className="header-content"
                  style={{
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="side-left">
                    <p className="title mt-2">Daftar Kegiatan</p>
                    <Button className="btn btn-add-activity" size={"md"}>
                      <div className="btn-content">
                        <AddCircleOutlineIcon className="icon" />
                        Tambah Kegiatan
                      </div>
                    </Button>
                  </div>
                  <div className="side-right">
                    <SearchInput query={""} handleChange={""} />
                    <Button className="btn border icon-button" variant="white">
                      <FilterListIcon style={{ color: "#F15858" }} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
