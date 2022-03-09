import { useState } from "react";
import TheLayout from "./views/pages/TheLayout";
export const App = () => {
  const [state, setState] = useState();
  return (
    <div>
      <TheLayout />
    </div>
  );
};

export default App;
