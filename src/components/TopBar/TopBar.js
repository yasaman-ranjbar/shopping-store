import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {Link} from "react-router-dom";

const TopBar = () => {
  return (
    <div className=" bg-blue-500 text-gray-100 flex items-center justify-between py-2 md:px-[85px]">
      <div className="pl-4">
        <ul className="flex items-center gap-2">
          <li className="">
            <a href="https://www.linkedin.com/in/yasaman-ranjbar/" target="_blank"><FaLinkedin className="text-xl hover:opacity-70"/></a>
          </li>
          <li className="">
          <a href="https://github.com/yasaman-ranjbar" target="_blank"> <FaGithub className="text-xl hover:opacity-70"/> </a>
          </li>
        </ul>
      </div>
      <div className="pr-4">
        <div className="flex items-center gap-2 ">
          <Link to="#"><span className="hover:opacity-70">Question & Answers |</span></Link>
          <Link to="#"><span className="hover:opacity-70">Contact</span></Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
