import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RegistrationPage from "./page/registration-page";
import CreateProfile from "./page/create-profile-page";
import TypeSelection from "./page/type-selection";
import Home from "./page/home-page";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/signup" />} />
                <Route path="/signup" element={<RegistrationPage />} />
                <Route path="/signup/createprofile" element={<CreateProfile />} />
                <Route path="/signup/typeselection" element={<TypeSelection />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
