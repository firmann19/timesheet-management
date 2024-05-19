/* eslint-disable no-undef */
import debounce from "debounce-promise";
import { getData } from "../../utils/fetch";
import {
  ERROR_FETCHING_LISTS_PROYEK,
  START_FETCHING_LISTS_PROYEK,
  SUCCESS_FETCHING_LISTS_PROYEK,
} from "./constants";

let debouncedFetchListsProyek = debounce(getData, 1000);

export const startFetchingListsProyek = () => {
  return {
    type: START_FETCHING_LISTS_PROYEK,
  };
};

export const successFetchingListsProyek = ({ proyeks }) => {
  return {
    type: SUCCESS_FETCHING_LISTS_PROYEK,
    proyeks,
  };
};

export const errorFetchingListsProyek = () => {
  return {
    type: ERROR_FETCHING_LISTS_PROYEK,
  };
};

export const fetchListsProyek = () => {
  return async (dispatch) => {
    dispatch(startFetchingListsProyek());

    try {
      let res = await debouncedFetchListsProyek("/proyek");

      let _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({
          value: res.id,
          label: res.namaProyek,
          target: { value: res.id, name: "proyekId" },
        });
      });

      dispatch(
        successFetchingListsProyek({
          proyeks: _temp,
        })
      );
    } catch (error) {
      dispatch(errorFetchingListsProyek());
    }
  };
};
