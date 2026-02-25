import { Toaster } from "react-hot-toast";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Portfolio />
    </div>
  );
};

export default App;
