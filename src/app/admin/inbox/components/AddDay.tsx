"use client";
import { Button } from "@mui/material";
import { useState } from "react";
export default function AddDay({
  week,
  setRes,
  dis,
}: {
  week: string;
  setRes: any;
  dis: any;
}) {
  const [show, setShow] = useState(false);
  const addDay = async () => {
    setShow(!show);
    const selected: HTMLInputElement | null = document.querySelector(
      `#day${week}`
    );
    const request = await fetch("/api/addday", {
      method: "POST",
      headers: {
        "Content-type": "Application-json",
      },
      body: JSON.stringify({
        week,
        day: selected?.value,
      }),
    });
    const data = await request.json();
    setRes(data);
  };
  return (
    <>
      <Button
        variant="contained"
        className="mt-1"
        sx={{ marginBottom: 2 }}
        onClick={() => setShow(!show)}
        id="add-day"
        disabled={dis}
      >
        افزودن روز
      </Button>
      {show && (
        <>
          <select name="study" id={`day${week}`} className="text-black mr-5">
            <option selected value="شنبه">
              شنبه
            </option>
            <option value="یکشنبه">یکشنبه</option>
            <option value="دوشنبه">دوشنبه</option>
            <option value="سه‌شنبه">سه شنبه</option>
            <option value="چهارشنبه">چهارشنبه</option>
            <option value="پنجشنبه">پنجشنبه</option>
            <option value="جمعه">جمعه</option>
          </select>
          <Button className="mr-5" onClick={addDay} variant="contained">
            ثبت
          </Button>
        </>
      )}
    </>
  );
}
