import { useState } from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { redirect } from "next/navigation";
import Alert from "@mui/material/Alert";
export default function Loginbtn() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setShow(true);
    const password: HTMLInputElement | null =
      document.querySelector("#passwrod");
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
      {error && (
        <Alert severity="error" className=" ">
          {error}
        </Alert>
      )}
      <Button onClick={handleLogin} variant="contained" className="w-full">
        {show ? <CircularProgress color="inherit" /> : "Login"}
      </Button>
    </>
  );
}
