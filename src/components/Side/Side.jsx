import { Link, useLocation } from "react-router-dom";
import "./Side.scss";
import Profile from "../Profile/Profile";

export default function Side() {
    const { pathname } = useLocation();

    return (
        <div className="side">
            <Profile />
            <menu className="side__menu">
                <Link to="/" className="button button__icon--house" data-active={pathname === "/"}>
                    Panel główny
                </Link>
                <Link to="/packages" className="button button__icon--box" data-active={pathname === "/packages"}>
                    Przesyłki
                </Link>
                <Link to="/recievers" className="button button__icon--user-group" data-active={pathname === "/recievers"}>
                    Odbiorcy
                </Link>
                <Link to="/devices" className="button button__icon--bolt" data-active={pathname === "/devices"}>
                    Urządzenia
                </Link>
                <Link to="/boxes" className="button button__icon--box-archive" data-active={pathname === "/boxs"}>
                    Skrzynie
                </Link>
                <Link to="/archive" className="button button__icon--clock-rotate-left" data-active={pathname === "/archive"}>
                    Archiwum
                </Link>
            </menu>
        </div>
    );
}
