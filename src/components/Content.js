import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "../components/partikel/Button";
import SearchInput from "./partikel/SearchInput";
import AddActivityInput from "./AddActivityInput";
import Table from "./partikel/TableWithAction";
import AddProyekInput from "./AddProyekInput";
import Swal from "sweetalert2";
import { deleteData, getData, postData } from "../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchListsProyek } from "../redux/lists/actions";
import { fetchKegiatans } from "../redux/kegiatan/actions";
import { CSVLink } from "react-csv";

function Content() {
  const navigate = useNavigate();
  const [addActivity, setAddActivity] = useState(false);
  const [addProyek, setAddProyek] = useState(false);
  const lists = useSelector((state) => state.lists);
  const kegiatans = useSelector((state) => state.kegiatans);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    namaProyek: "",
  });
  const [form2, setForm2] = useState({
    tanggal_mulai: "",
    tanggal_berakhir: "",
    jam_mulai: "",
    jam_berakhir: "",
    namaKegiatan: "",
    proyekId: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [employee, setEmployee] = useState(null);

  const handleAddActivityClick = () => {
    setAddActivity((prevVisible) => !prevVisible);
  };

  const handleAddProyekClick = () => {
    setAddProyek((prevVisible) => !prevVisible);
  };

  const handleCloseAddProyek = () => {
    setAddProyek(false);
  };

  const handleCloseAddActivity = () => {
    setAddActivity(false);
  };

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChange2 = async (e) => {
    if (e.target.name === "proyekId") {
      setForm2({ ...form2, [e.target.name]: e });
    } else {
      setForm2({ ...form2, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      namaProyek: form.namaProyek,
    };

    const res = await postData(`/proyek`, payload);
    if (res?.data?.data) {
      Swal.fire({
        title: "Success",
        text: `Berhasil membuat proyek ${res.data.data.namaProyek}`,
        icon: "success",
        confirmButtonText: "OK",
      });
      setAddProyek(false);
      navigate("/");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      Swal.fire({
        title: "Error",
        text: res.response.data.msg,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleSubmit2 = async () => {
    setIsLoading(true);

    const payload = {
      tanggal_mulai: form2.tanggal_mulai,
      tanggal_berakhir: form2.tanggal_berakhir,
      jam_mulai: form2.jam_mulai,
      jam_berakhir: form2.jam_berakhir,
      namaKegiatan: form2.namaKegiatan,
      proyekId: form2.proyekId.value,
    };

    const res = await postData(`/kegiatan`, payload);
    if (res?.data?.data) {
      Swal.fire({
        title: "Success",
        text: `Berhasil membuat kegiatan ${res.data.data.namaKegiatan}`,
        icon: "success",
        confirmButtonText: "OK",
      });
      dispatch(fetchKegiatans());
      setAddActivity(false);
      navigate("/");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      Swal.fire({
        title: "Error",
        text: res.response.data.msg,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/kegiatan/${id}`);
        if (res?.data?.data) {
          Swal.fire({
            title: "Berhasil",
            text: `Berhasil hapus kegiatan`,
            icon: "success",
            confirmButtonText: "OK",
          });
          dispatch(fetchKegiatans());
          navigate("/");
        }
      }
    });
  };

  const fetchEmployeeData = async () => {
    const res = await getData(`/karyawan`);
    if (res?.data?.data) {
      const firstEmployee = res.data.data[0];
      setEmployee(firstEmployee);
    } else {
      setEmployee(null); // If no data is available, set employee to null
    }
  };

  useEffect(() => {
    dispatch(fetchListsProyek());
    dispatch(fetchKegiatans());
    fetchEmployeeData();
  }, [dispatch]);

  return (
    <section>
      <div className="content container-fluid">
        <div className="row" style={{ backgroundColor: "#F7F8FB" }}>
          <div className="col-12 mt-4">
            <div
              className="card position-relative"
              style={{ background: "#ffff" }}
            >
              <div
                className="card-header ms-3"
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  background: "#ffff",
                  alignItems: "center",
                }}
              >
                <div className="d-flex">
                  <div>
                    <p className="me-5">Nama Karyawan</p>
                    <p className="me-5">{employee?.nama || "Belum ada nama"}</p>
                  </div>

                  <div>
                    <p>Rate</p>
                    <p>{employee?.rate || "Belum ada rate"}</p>
                  </div>
                </div>

                <div>
                  <Button
                    className="btn-import me-4 text-white"
                    variant={"primary"}
                  >
                    Import Laporan
                  </Button>

                  <CSVLink data={kegiatans.data} filename={"timesheet.csv"}>
                    <Button
                      className="btn-export text-white"
                      variant={"danger"}
                    >
                      Export Laporan
                    </Button>
                  </CSVLink>
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
                    <button
                      id="addActivity"
                      href="#!"
                      className="btn btn-add-activity"
                      size={"md"}
                      onClick={handleAddActivityClick}
                    >
                      <div className="btn-content">
                        <AddCircleOutlineIcon className="icon" />
                        Tambah Kegiatan
                      </div>
                    </button>
                    <button
                      id="addProyek"
                      href="#!"
                      className="btn btn-add-proyek"
                      size={"md"}
                      onClick={handleAddProyekClick}
                    >
                      <div className="btn-content">
                        <AddCircleOutlineIcon className="icon" />
                        Tambah Proyek
                      </div>
                    </button>
                  </div>
                  <div className="side-right">
                    <SearchInput query={""} handleChange={""} />
                    <Button className="btn border icon-button" variant="white">
                      <FilterListIcon style={{ color: "#F15858" }} />
                    </Button>
                  </div>
                </div>

                <Table
                  status={kegiatans.status}
                  thead={[
                    "Judul Kegiatan",
                    "Nama Proyek",
                    "Tanggal Mulai",
                    "Tanggal Berakhir",
                    "Waktu Mulai",
                    "Waktu Berakhir",
                    "Durasi",
                    "Aksi",
                  ]}
                  data={kegiatans.data}
                  tbody={[
                    "tanggalMulai",
                    "tanggalBerakhir",
                    "jamMulai",
                    "jamBerakhir",
                    "Kegiatan",
                    "proyek",
                    "durasiKegiatan",
                  ]}
                  editUrl={`/user-page/edit-user`}
                  deleteAction={(id) => handleDelete(id)}
                />
              </div>

              {addActivity && (
                <div
                  id="addActivityForm"
                  className="popupAddActivity"
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    zIndex: 1000,
                    width: "100%",
                    maxWidth: "800px",
                  }}
                >
                  <AddActivityInput
                    handleClose={handleCloseAddActivity}
                    form2={form2}
                    isLoading={isLoading}
                    lists={lists}
                    handleChange2={handleChange2}
                    handleSubmit2={handleSubmit2}
                  />
                </div>
              )}

              {addProyek && (
                <div
                  id="addProyekForm"
                  className="popupAddProyek"
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    zIndex: 1000,
                    width: "100%",
                    maxWidth: "600px",
                  }}
                >
                  <AddProyekInput
                    handleClose={handleCloseAddProyek}
                    form={form}
                    isLoading={isLoading}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
