import { Link } from "react-router";
import logo from "../../assets/react.svg";

export default function Navbar() {
    return (
        <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8" />
                    <span className="ml-2 text-xl font-bold text-gray-800">
                        Task<span className="text-blue-600">Master</span>
                    </span>
                </div>
                <Link to={"tasks"}>Tasks</Link>
                <Link to={"users"}>Users</Link>
            </nav>
        </header>
    );
}
