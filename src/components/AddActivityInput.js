import React from "react";
import { Col, Form, Row, FormControl } from "react-bootstrap";
import SelectBox from "./partikel/SelectBox";
import Button from "./partikel/Button";

function AddActivityInput({
  form2,
  handleChange2,
  handleSubmit2,
  lists,
  isLoading,
  handleClose,
}) {
  return (
    <>
      <h4 className="">Tambah Kegiatan Baru</h4>
      <div className="border-top border-gray-200">
        <Row className="mt-4 mb-4 d-flex flex-wrap">
          <Col xs={12} md={3} className="mb-3 flex-column">
            <Form.Label className="label">Tanggal Mulai</Form.Label>
            <FormControl
              type="date"
              placeholder="Select time"
              aria-label="Select time"
              aria-describedby="basic-addon1"
              name="tanggal_mulai"
              value={form2?.tanggal_mulai}
              onChange={handleChange2}
            />
          </Col>

          <Col xs={12} md={3} className="mb-3 flex-column">
            <Form.Label className="label">Tanggal Berakhir</Form.Label>
            <FormControl
              type="date"
              placeholder="Select time"
              aria-label="Select time"
              aria-describedby="basic-addon1"
              name="tanggal_berakhir"
              value={form2?.tanggal_berakhir}
              onChange={handleChange2}
            />
          </Col>

          <Col xs={12} md={3} className="mb-3 flex-column">
            <Form.Label className="label">Jam Mulai</Form.Label>
            <FormControl
              type="time"
              placeholder="Select time"
              aria-label="Select time"
              aria-describedby="basic-addon1"
              name="jam_mulai"
              value={form2?.jam_mulai}
              onChange={handleChange2}
            />
          </Col>

          <Col xs={12} md={3} className="mb-3 flex-column">
            <Form.Label className="label">Jam Berakhir</Form.Label>
            <FormControl
              type="time"
              placeholder="Select time"
              aria-label="Select time"
              aria-describedby="basic-addon1"
              name="jam_berakhir"
              value={form2?.jam_berakhir}
              onChange={handleChange2}
            />
          </Col>
        </Row>

        <Row className="mt-4 mb-4">
          <Col className="">
            <Form.Label className="label">Judul Kegiatan</Form.Label>
            <Form.Control
              placeholder="Buat judul kegiatan"
              name="namaKegiatan"
              value={form2?.namaKegiatan}
              type="text"
              onChange={handleChange2}
            />
          </Col>
        </Row>

        <Row className="mt-4 mb-4">
          <SelectBox
            label={"Nama Proyek"}
            placeholder={"Pilih nama proyek"}
            className="text-md"
            name="proyekId"
            isClearable={true}
            value={form2.proyekId}
            options={lists.proyeks}
            handleChange={(e) => handleChange2(e)}
          />
        </Row>

        <div className="text-end mb-3 mt-4">
          <Button
            className="btn-batal me-4"
            loading={isLoading}
            disabled={isLoading}
            action={handleClose}
          >
            Batalkan
          </Button>

          <Button
            className="btn-simpan"
            loading={isLoading}
            disabled={isLoading}
            action={handleSubmit2}
          >
            Simpan
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddActivityInput;
