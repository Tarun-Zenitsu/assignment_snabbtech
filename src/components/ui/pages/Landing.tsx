import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import imageSrc from "@/assets/group-afro-americans-working-together (1).png";

const Landing: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start h-screen">
      <div className="mx-auto">
        <img src={imageSrc} alt="groupIcon" />
      </div>
      <div className="">
        <p className="flex justify-center items-center mt-4 md:mt-2">
          <Link
            to="/join"
            className={`cursor-pointer ${activeLink === 'join' ? 'text-blue-500' : ''}`}
            onClick={() => handleLinkClick('join')}
          >
            join <span className="text-base mx-2">PANDA</span>
          </Link>
          <p className="mx-2 text-gray-400">or</p>
          <Link
            to="/signup"
            className={`cursor-pointer ${activeLink === 'signup' ? 'text-blue-500' : ''}`}
            onClick={() => handleLinkClick('signup')}
          >
            Signup
          </Link>
        </p>
        <Outlet />
        {/* {activeLink && (
          <div className="h-2 bg-blue-500 w-10 mx-auto mt-1"></div>
        )} */}
      </div>
    </div>
  );
};

export default Landing;
