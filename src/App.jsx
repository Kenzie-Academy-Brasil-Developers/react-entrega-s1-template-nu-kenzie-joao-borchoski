import "./App.css";
import "./style/coisasUsuais.css";
import { useState } from "react";
import { IsLogged } from "./Components/IsLogged";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function Login() {
        return setIsLoggedIn(true);
    }
    function Logout() {
        return setIsLoggedIn(false);
    }

    return (
        <div className="App">
            <IsLogged isLogged={isLoggedIn} login={Login} logout={Logout} />
        </div>
    );
}

export default App;
