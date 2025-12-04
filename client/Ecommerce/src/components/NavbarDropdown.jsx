import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ProfileAvatar from "../assets/profileAvatar.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarDropdown() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center">
        <img
          src={ProfileAvatar}
          alt="Profile"
          className="h-9 w-9 rounded-full cursor-pointer border-2 border-white hover:scale-105 transition-all duration-200"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 mt-3 w-52 rounded-lg bg-white shadow-xl ring-1 ring-gray-200 origin-top-right
        data-[closed]:scale-90 data-[closed]:opacity-0 transition-all duration-150"
      >
        <div className="py-2 text-gray-700 text-[15px]">
          <MenuItem>
            <Link className="block px-4 py-2 hover:bg-gray-100 transition rounded-md" to="/profile">
              Account
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="block px-4 py-2 hover:bg-gray-100 transition rounded-md" to="/order-history">
              Order History
            </Link>
          </MenuItem>
          <MenuItem>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition rounded-md"
            >
              Logout
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
