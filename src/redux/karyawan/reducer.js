import {
  ERROR_FETCHING_KARYAWANS,
  START_FETCHING_KARYAWANS,
  SUCCESS_FETCHING_KARYAWANS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  keyword: "",
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_KARYAWANS:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_KARYAWANS:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_KARYAWANS:
      return {
        ...state,
        status: statuslist.success,
        data: action.karyawans,
      };

    default:
      return state;
  }
}
