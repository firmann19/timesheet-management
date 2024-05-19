import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";
import {
  ERROR_FETCHING_KEGIATANS,
  START_FETCHING_KEGIATANS,
  SUCCESS_FETCHING_KEGIATANS,
} from "./constants";
import { getData } from "../../utils/fetch";

let debouncedFetchKegiatans = debounce(getData, 1000);

export const startFetchingKegiatans = () => {
  return {
    type: START_FETCHING_KEGIATANS,
  };
};

export const successFetchingKegiatans = ({ kegiatans }) => {
  return {
    type: SUCCESS_FETCHING_KEGIATANS,
    kegiatans,
  };
};

export const errorFetchingKegiatans = () => {
  return {
    type: ERROR_FETCHING_KEGIATANS,
  };
};

export const fetchKegiatans = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingKegiatans());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debouncedFetchKegiatans("/kegiatan");

      res.data.data.forEach((res) => {
        res.Kegiatan = res.namaKegiatan;
        res.proyek = res.Proyek.namaProyek;
        res.tanggalMulai = res.tanggal_mulai;
        res.tanggalBerakhir = res.tanggal_berakhir;
        res.jamMulai = res.jam_mulai;
        res.jamBerakhir = res.jam_berakhir;
        res.durasiKegiatan = res.durasi
      });

      dispatch(
        successFetchingKegiatans({
          kegiatans: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingKegiatans());
    }
  };
};
