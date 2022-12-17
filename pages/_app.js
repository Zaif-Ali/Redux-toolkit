import { Provider } from "react-redux";
import store, { persistStoree } from "../Redux/stor";
import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStoree}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
