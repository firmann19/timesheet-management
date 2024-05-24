import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Spinner } from "react-bootstrap";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getData, putData } from "../../../utils/fetch";
import Swal from "sweetalert2";
import { fetchKegiatans } from "../../../redux/kegiatan/actions";
import EditActivityInput from "../../EditActivityInput";

function TbodyWithAction({
  data,
  display,
  editUrl,
  deleteAction,
  actionNotDisplay,
  status,
}) {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [form, setForm] = useState({
    tanggal_mulai: "",
    tanggal_berakhir: "",
    jam_mulai: "",
    jam_berakhir: "",
    namaKegiatan: "",
    proyekId: "",
  });
  const [editItemId, setEditItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOneActivity = async (itemId) => {
    const res = await getData(`/kegiatan/${itemId}`);

    setForm({
      ...form,
      tanggal_mulai: moment(res.data.data.tanggal_mulai).format("YYYY-MM-DD"),
      tanggal_berakhir: moment(res.data.data.tanggal_berakhir).format(
        "YYYY-MM-DD"
      ),
      jam_mulai: res.data.data.jam_mulai,
      jam_berakhir: res.data.data.jam_berakhir,
      namaKegiatan: res.data.data.namaKegiatan,
      proyekId: {
        label: res?.data?.data?.Proyek.namaProyek,
        target: {
          name: "proyekId",
          value: res?.data?.data?.Proyek.id,
        },
        value: res?.data?.data?.Proyek.id,
      },
    });
  };

  useEffect(() => {
    if (showEditPopup && editItemId) {
      fetchOneActivity(editItemId);
    }
  }, [showEditPopup, editItemId]);

  const handleEditClick = (itemId) => {
    setShowEditPopup(true);
    setEditItemId(itemId);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
    setEditItemId(null);
  };

  const handleChange = async (e) => {
    if (e.target.name === "proyekId") {
      setForm({ ...form, [e.target.name]: e });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      tanggal_mulai: form.tanggal_mulai,
      tanggal_berakhir: form.tanggal_berakhir,
      jam_mulai: form.jam_mulai,
      jam_berakhir: form.jam_berakhir,
      namaKegiatan: form.namaKegiatan,
      proyekId: form.proyekId.value,
    };

    const res = await putData(`/kegiatan/${editItemId}`, payload);
    if (res?.data?.data) {
      Swal.fire({
        title: "Success",
        text: `Berhasil mengedit kegiatan`,
        icon: "success",
        confirmButtonText: "OK",
      });
      dispatch(fetchKegiatans());
      setShowEditPopup(false);
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
    <tbody>
      {status === "process" ? (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            <div className="flex items-center justify-center">
              <Spinner animation="border" variant="primary" />
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map(
                (key) =>
                  display.indexOf(key) > -1 && (
                    <td key={key}>
                      {key === "tanggalMulai" || key === "tanggalBerakhir"
                        ? moment(data[key]).format("DD-MM-YYYY")
                        : data[key]}
                    </td>
                  )
              )}
              {!actionNotDisplay && (
                <td>
                  {editUrl && (
                    <Button
                      variant="success"
                      size={"sm"}
                      action={() => handleEditClick(data.id)}
                    >
                      Edit
                    </Button>
                  )}
                  {deleteAction && (
                    <Button
                      className={"mx-2"}
                      variant="danger"
                      size={"sm"}
                      action={() => deleteAction(data.id)}
                    >
                      Hapus
                    </Button>
                  )}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}

      {showEditPopup && (
        <div
          id="editActivityForm"
          className="popupEditActivity"
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
          <EditActivityInput
            handleClose={handleCloseEditPopup}
            form={form}
            isLoading={isLoading}
            lists={lists}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </tbody>
  );
}

export default TbodyWithAction;
