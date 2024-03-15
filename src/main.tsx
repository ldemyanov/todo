import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store, { persistor }  from "./store/reduxStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import "flowbite";




ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
