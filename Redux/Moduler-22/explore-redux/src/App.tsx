// import { Button } from "@/components/ui/button"
import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </>
    </div>
  )
}

export default App