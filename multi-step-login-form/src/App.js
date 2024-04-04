import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./page/registration-page";
import LoginPage from "./page/login-page";
import CreateProfile from "./page/create-profile-page";
import TypeSelection from "./page/type-selection";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/createprofile" element={<CreateProfile />} />
                    <Route path="/typeselection" element={<TypeSelection />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
