import { LOGO } from "../utils/constants"

const Navbar = () => {
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
                    <li className="mx-5 cursor-pointer">Login</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar