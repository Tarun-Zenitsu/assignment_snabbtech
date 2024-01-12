import union from "@/assets/Union.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import imageSrc from "@/assets/group-afro-americans-working-together (1).png";
import { useState } from "react";

const Login = () => {
  const [activeLink, setActiveLink] = useState<string | null>("join");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col items-center h-screen">
        <div className="md:w-1/2 flex-shrink-0">
          <img src={imageSrc} alt="groupIcon" className="h-full w-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6">
          <div className="flex justify-center">
            <p className="flex justify-center items-center md:mt-6 mb-3 ">
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
          </div>
          <div className="bg-neutral-50 max-w-md mx-auto rounded-t-[50%] overflow-hidden border-2 border-t-2 border-gray-200">
            <div className="flex flex-col justify-center items-center gap-6">
              <div>
                <img src={union} alt="unionSVG" className="m-7" />
                <p className="absolute top-0 left-4 text-4xl p-5 text-center text-white">
                  Welcome to PANDA
                </p>
              </div>
              <h1 className="text-3xl">Create your free account</h1>
              <h1 className="text-2xl">
                Takes less than <span className="text-red-500">5 minutes...</span>
              </h1>
              <div className="grid w-full max-w-sm items-center  md:mb-10 gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
            </div>

          </div>
            <div className="flex flex-col justify-center items-center gap-7">
              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">I'm an Expert</Label>
              </div>
              <div className="flex flex-row">
                <img src={union} alt="unionSVG" />
                <span>I’m an Organization in Africa</span>
              </div>
              <Link to="/Hero">
                <Button size={"lg"} variant={"secondary"} className="border-2 rounded-full ">
                  <span className="text-xl m-10">Join PANDA</span>
                </Button>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-400">
                By clicking on "Create an account", you agree to our
                <span className="flex justify-center">
                  <span className="underline">terms of use </span> &nbsp; and&nbsp;
                  <span className="underline"> privacy policy</span>.
                </span>
              </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
