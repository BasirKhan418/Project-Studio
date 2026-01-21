import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast,{Toaster} from "react-hot-toast";
const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => { 
    if(JSON.parse(localStorage.getItem('myprappuser'))){
    setUser(JSON.parse(localStorage.getItem('myprappuser')));
    }
  }, []);
  return (
    <div className="sticky top-0 z-50 Navbar">
      <Toaster/>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm sm:h-10 lg:h-24">
        <nav
          className="mt-6 backdrop-blur-lg relative max-w-7xl w-full border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-7 md:px-6 lg:px-8 xl:mx-auto bg-none"
          aria-label="Global"
        >
          <div className="flex items-center justify-between ">
            <Link
              href="/"
              className="flex-none text-xl font-semibold dark:text-white text-white"
            >
              <img
                src="/projectstudio.png"
                alt=""
                className="sm:h-10 sm:w-10 lg:w-28 lg:h-28 w-10 h-10 md:h-24 md:w-24"
              />
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm   dark:text-white dark:hover:text-white "
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
              <Link
                className="font-medium text-white md:py-6 dark:text-white"
                href="/#features"
                aria-current="page"
              >
                Features
              </Link>
              <Link
                className="font-medium text-white md:py-6 dark:text-white"
                href="/#services"
                aria-current="page"
              >
                Services
              </Link>

              <Link
                className="font-medium text-white hover:text-white md:py-6 dark:text-gray-white"
                href="/#price"
              >
                Pricing
              </Link>
             
              <Link
                className="font-medium text-white hover:text-white md:py-6 dark:text-gray-white "
                href="/docs/Alldocs"
              >
                Docs
              </Link>
              <Link
                className="font-medium text-white hover:text-white md:py-6 dark:text-gray-white "
                href="/#team"
              >
                Team
              </Link>
              {user&&<Link
                className="font-medium text-white hover:text-white md:py-6 dark:text-gray-white "
                href="/admin/editprofile"
              >
                My Profile
              </Link>}
              <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2  md:dark:border dark:divide-gray-700 before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5">
                  <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]"></div>
                </div>
              </div>

              {!user&&<Link
                href="/login?user=true"
                className="flex items-center gap-x-2 font-medium text-white hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Log in
              </Link>}
              {user&&<button
                onClick={() => {
                  localStorage.removeItem('myprappuser');
                  setUser(null);
                  router.push("/")
                  toast.success("Logout in successfully", {
                    position: "top-center",
                });
                }}
                className="flex items-center gap-x-2 font-medium text-white hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Log Out
              </button>}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
