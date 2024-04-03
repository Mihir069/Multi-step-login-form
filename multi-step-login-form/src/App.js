import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./page/registration-page";
import LoginPage from "./page/login-page";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
