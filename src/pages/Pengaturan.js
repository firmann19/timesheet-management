import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import PengaturanInput from "../components/PengaturanInput";
import { useNavigate } from "react-router-dom";
import { postData } from "../utils/fetch";
import Swal from "sweetalert2";

function Pengaturan() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    rate: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      nama: form.nama,
      rate: form.rate,
    };

    const res = await postData(`/karyawan`, payload);
    if (res?.data?.data) {
      Swal.fire({
        title: "Success",
        text: `Berhasil membuat profil ${res.data.data.nama}`,
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/pengaturan");
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

  return (
    <>
      <Navbar />
      <Card
        className="card-pengaturan"
        style={{
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <PengaturanInput
          form={form}
          isLoading={isLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Card>
    </>
  );
}

export default Pengaturan;
