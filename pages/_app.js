import "../styles/index.css";
import "../styles/App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AuthProvider } from "../context/Auth";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";

const App = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
};

export default App;
