"use client";

import axios from "axios";
import * as React from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import Loginbtn from "./components/Loginbtn";

export default function Page() {
  const router = useRouter();

  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setShow(true);

    try {
      const response = await axios.post("/api/login", {
        password,
      });

      if (response.status === 200 && response.data?.success) {
        router.push("/admin");
        router.refresh();
        return;
      }

      setError("Password is wrong.");
    } catch (error: any) {
      if (error.response?.status === 403) {
        setError("Password is wrong.");
      } else {
        setError(
          error.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
      }
    } finally {
      setShow(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#070b12] flex items-center justify-center px-6">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/30">
          <div className="p-7 sm:p-9">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 border border-sky-400/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-sky-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2zm10-9V7a4 4 0 00-8 0v3h8z"
                    />
                  </svg>
                </div>

                <span className="text-sm text-sky-400 font-medium">
                  Admin Panel
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Enter your password to access the admin panel.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={show}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="
                      w-full
                      rounded-xl
                      border border-white/10
                      bg-black/20
                      px-4 py-3
                      pr-12
                      text-white
                      placeholder-gray-500
                      outline-none
                      transition
                      focus:border-sky-400/50
                      focus:ring-2
                      focus:ring-sky-400/10
                      disabled:opacity-50
                    "
                  />

                  <IconButton
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    disabled={show}
                    className="!absolute !right-1 !top-1/2 !-translate-y-1/2"
                    sx={{
                      color: "rgb(156 163 175)",
                    }}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    <RemoveRedEyeIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <Loginbtn show={show} error={error} />
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-600">
          Admin access only
        </p>
      </div>
    </section>
  );
}
