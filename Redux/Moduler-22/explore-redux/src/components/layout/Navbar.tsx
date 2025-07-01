import { Link } from "react-router";
import logo from "../../assets/react.svg";
import { ModeToggle } from "../mode-toggler";

export default function Navbar() {
    return (
        <header className="bg-white dark:bg-gray-900 shadow fixed top-0 left-0 w-full z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo and App Name */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8" />
                    <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                        Task<span className="text-blue-600">Master</span>
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-6">
                    <Link
                        to="/tasks"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        Tasks
                    </Link>
                    <Link
                        to="/users"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        Users
                    </Link>

                    {/* Dark Mode Toggle */}
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
}
