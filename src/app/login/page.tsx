"use client";
import axios from "axios";
import * as React from "react"
import { FormEvent} from "react";
import { redirect } from "next/navigation";
import { IconButton } from "@mui/material";
import Loginbtn from "./components/Loginbtn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export default function page() {
  const typeChanger = () => {
    const input: HTMLInputElement | null = document.querySelector("#password");
    if (input) {
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    }
  };
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setShow(true);
    const password: HTMLInputElement | null =
      document.querySelector("#password");
    let redictPath: string = "";
    if (password) {
      if (password.value) {
        try {
          const login = await axios.post("/api/login", {
            password: password.value,
          });
          if (login.status == 200) {
            redictPath = "/admin";
          } else {
            setShow(false);
            setError("passwrod is wrong");
            redictPath = "/login";
          }
        } catch (e: any) {
          setShow(false);
          setError(e.message);
          redictPath = "/login";
        } finally {
          redirect(redictPath);
        }
      }
    }
  };
  return (
    <>
      <section className="bg-gray-50 h-[100vh] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to Admin
              </h1>
              <form
                onSubmit={handleLogin}
                className="space-y-4 md:space-y-6 relative"
              >
                <div className=" relative">
                  <input
                    placeholder="password"
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <IconButton
                    onClick={typeChanger}
                    className="absolute top-1 right-1"
                    sx={{ position: "absolute" }}
                  >
                    <RemoveRedEyeIcon className="  text-gray-400" />
                  </IconButton>
                </div>
                <Loginbtn show={show} error={error} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
