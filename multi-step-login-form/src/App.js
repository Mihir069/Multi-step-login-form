import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./page/registration-page";
import CreateProfile from "./page/create-profile-page";
import TypeSelection from "./page/type-selection";
import Home from "./page/home-page";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RegistrationPage />} />
                    <Route path="/createprofile" element={<CreateProfile />} />
                    <Route path="/typeselection" element={<TypeSelection />} />
                    <Route path="/home/:id" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
