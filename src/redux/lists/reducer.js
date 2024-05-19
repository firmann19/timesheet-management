import {
  ERROR_FETCHING_LISTS_PROYEK,
  START_FETCHING_LISTS_PROYEK,
  SUCCESS_FETCHING_LISTS_PROYEK,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  proyeks: [],
  statusProyeks: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_LISTS_PROYEK:
      return { ...state, statusProyeks: statuslist.process };

    case ERROR_FETCHING_LISTS_PROYEK:
      return { ...state, statusProyeks: statuslist.error };

    case SUCCESS_FETCHING_LISTS_PROYEK:
      return {
        ...state,
        statusProyeks: statuslist.success,
        proyeks: action.proyeks,
      };

    default:
      return state;
  }
}
