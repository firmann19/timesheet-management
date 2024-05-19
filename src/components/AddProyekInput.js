import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "./partikel/Button";

function AddProyekInput({
  form,
  handleChange,
  handleSubmit,
  isLoading,
  handleClose,
}) {
  return (
    <>
      <h4 className="">Tambah Proyek Baru</h4>
      <div className="border-top border-gray-200">
        <Row className="mt-4 mb-4">
          <Col className="">
            <Form.Label className="label">Nama Proyek</Form.Label>
            <Form.Control
              placeholder="Buat nama proyek"
              name="namaProyek"
              value={form?.namaProyek}
              type="text"
              onChange={handleChange}
            />
          </Col>
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
            action={handleSubmit}
          >
            Simpan
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddProyekInput;
