import store from "./store";
import { Provider } from "react-redux";
import Navigation from "./navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
