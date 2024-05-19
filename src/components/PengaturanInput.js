import React from "react";
import Button from "./partikel/Button";
import { Col, Form, Row } from "react-bootstrap";

function PengaturanInput({
  form,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form method="post" className="form-create-wo">
      <Row className="mt-4 mb-4">
        <Col className="">
          <Form.Label className="label">Nama Karyawan</Form.Label>
          <Form.Control
            name="nama"
            value={form?.nama}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col className="">
          <Form.Label className="label">Rate</Form.Label>
          <Form.Control
            name="rate"
            value={form?.rate}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

      <div className="text-center mb-3 mt-4">
        <Button
          className="btn-cancel rounded-3 me-4"
          style={{ width: "100%" }}
        >
          Batalkan
        </Button>

        <Button
          className="btn-save rounded-3"
          loading={isLoading}
          disabled={isLoading}
          action={handleSubmit}
          style={{ width: "100%" }}
        >
          Simpan
        </Button>
      </div>
    </Form>
  );
}

export default PengaturanInput;
