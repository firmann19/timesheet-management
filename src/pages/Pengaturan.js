import React from "react";
import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import PengaturanInput from "../components/PengaturanInput";

function Pengaturan() {
  return (
    <>
      <Navbar />
      <Card
        className="pengaturan"
        style={{
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
        }}
      >
        <h1 className="title text-center mt-4">Work Order</h1>
        <div className="border-top border-gray-200 pt-4 mt-4">
          <PengaturanInput />
        </div>
      </Card>
    </>
  );
}

export default Pengaturan;
