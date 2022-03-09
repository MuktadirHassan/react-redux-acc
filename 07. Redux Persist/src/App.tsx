import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import TheLayout from "./views/pages/TheLayout";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TheLayout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
