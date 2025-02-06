"use client";
import Loginbtn from "./components/Loginbtn";
export default function page() {
  return (
    <>
      <section className="bg-gray-50 h-[100vh] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to Admin
              </h1>
              <form className="space-y-4 md:space-y-6 relative">
                <input
                  placeholder="password"
                  type=""
                  id="passwrod"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <Loginbtn />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
