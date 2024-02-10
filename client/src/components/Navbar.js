import { useContext } from "react";
import { LOGO } from "../utils/constants"
import { AuthContext } from "../utils/context/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {

    const {currentUser, logout}=useContext(AuthContext);

  return (
    <div className="mx-10">
        <div className="flex justify-between">
            <div>
                <img src={LOGO} alt="logo" className="w-36" />
            </div>
            <div>
                <ul className="flex mt-16">
                    <li className="mx-5 cursor-pointer">Home</li>
                    <li className="mx-5 cursor-pointer">About</li>
                    <li className="mx-5 cursor-pointer">Contact</li>
                    <li className="mx-5 cursor-pointer">Blog</li>
                    {currentUser ? <li className="mx-5 cursor-pointer" onClick={logout}>Logout</li> : <Link to="/login" className="mx-5 cursor-pointer">Login</Link>}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar