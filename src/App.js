import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { UsersList } from "./components/UserList";
import { UserRegistrationForm } from "./components/UserRegistration";
import { UserEditForm } from "./components/UserEditForm";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { RedirectIfLoggedIn } from "./components/RedirectIfLoggedIn";

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { <
            RedirectIfLoggedIn > { " " } <
            Login / > { " " } <
            /RedirectIfLoggedIn>
        } >
        < /Route>{" "} <
        Route path = "/dashboard"
        element = { <
            PrivateRoute > { " " } <
            Dashboard / > { " " } <
            /PrivateRoute>
        } >
        < /Route>{" "} <
        Route path = "/users-list"
        element = { <
            PrivateRoute > { " " } <
            UsersList / > { " " } <
            /PrivateRoute>
        } >
        < /Route>{" "} <
        Route path = "/user-registration"
        element = { <
            PrivateRoute > { " " } <
            UserRegistrationForm / > { " " } <
            /PrivateRoute>
        } >
        < /Route>{" "} <
        Route path = "/edit/:email"
        element = { <
            PrivateRoute > { " " } <
            UserEditForm / > { " " } <
            /PrivateRoute>
        } >
        < /Route>{" "} <
        /Routes>{" "} <
        /BrowserRouter>
    );
}

export default App;