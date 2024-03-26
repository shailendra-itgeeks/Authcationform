import { Provider } from "react-redux";
import { Todo } from "./compontent/Todo";
import { store } from "./Redux/Todoservice";
import { Signpage } from "./compontent/Signpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./compontent/Login";
import { Toaster } from "react-hot-toast";
import { Dashboared } from "./compontent/Dashboared";
import { Privete } from "./compontent/Privete";
import { Otp } from "./compontent/Otp";

function App() {
  return (
    <>
      {/* <Provider store={store}>
     
    </Provider> */}

      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route element={<Privete />}>
          <Route path="/Dash" element={<Dashboared />}></Route>
            
          </Route>
          <Route path="/" element={<Signpage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
