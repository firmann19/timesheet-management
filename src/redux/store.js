import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import notifReducer from "./notif/reducer";
import karyawansReducer from "./karyawan/reducer";
import listsReducer from "./lists/reducer";
import kegiatanReducer from "./kegiatan/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  notif: notifReducer,
  karyawans: karyawansReducer,
  lists: listsReducer,
  kegiatans: kegiatanReducer,
});
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
