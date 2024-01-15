import union from "@/assets/Union.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import imageSrc from "@/assets/group-afro-americans-working-together (1).png";
import { useState } from "react";

const ResetPassword = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

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
          <div className="flex justify-center mb-4">
            <p className="flex justify-center items-center mt-4 md:mt-10">
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
          <div className="bg-neutral-50 max-w-md mx-auto rounded-t-[50%] overflow-hidden border-2 mb-4 border-t-2 border-gray-200">
            <div className="flex flex-col justify-center items-center gap-6">
              <div>
                <img src={union} alt="unionSVG" className="m-7" />
                <p className="absolute top-0 left-4 text-4xl p-5 text-center text-white">
                  Welcome to PANDA
                </p>
              </div>
              <h1 className="text-3xl">Forgot Password</h1>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input type="email" id="email" placeholder="Email address" />
                <p className="text-gray-400 mb-9">By clicking on "Create an account", you agree to our</p>
              </div>
            </div>

          </div>
            <div className="flex flex-col justify-center items-center gap-7 ">
                <Link to="/updatepassword">
                    <Button size={"lg"} variant={"secondary"} className="border-2 rounded-full ">
                        <span className="text-xl m-10">Resend link</span>
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
