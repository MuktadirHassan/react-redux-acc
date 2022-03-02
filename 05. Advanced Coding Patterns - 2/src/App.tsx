import { BrowserRouter } from "react-router-dom";
import TheLayout from "./views/pages/TheLayout";
export const App = () => {
  return (
    <BrowserRouter>
      <TheLayout />
    </BrowserRouter>
  );
};

export default App;
