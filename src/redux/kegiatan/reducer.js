import {
  ERROR_FETCHING_KEGIATANS,
  START_FETCHING_KEGIATANS,
  SUCCESS_FETCHING_KEGIATANS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_KEGIATANS:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_KEGIATANS:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_KEGIATANS:
      return {
        ...state,
        status: statuslist.success,
        data: action.kegiatans,
      };
    default:
      return state;
  }
}
