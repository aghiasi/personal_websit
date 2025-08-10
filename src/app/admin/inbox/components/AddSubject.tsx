"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton } from "@mui/material";
import { useState } from "react";
export default function AddSubject({ day, res, setres }: any) {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  const submitHandler = async () => {
    let newres = res;
    const name: HTMLInputElement | null = document.querySelector(
      `#${day}-study`
    );
    const hours: HTMLInputElement | null = document.querySelector(
      `#${day}-hours`
    );
    const test: HTMLInputElement | null = document.querySelector(
      `#${day}-test`
    );
    if (name && hours && test) {
      const newStudy = {
        week: res.week,
        day,
        data: {
          name: name.value,
          hours: parseInt(hours.value),
          test: parseInt(test.value),
        },
      };
      const updateDay = await fetch("/api/updateDay", {
        method: "POST",
        headers: {
          "Content-Type": "Application-json",
        },
        body: JSON.stringify(newStudy),
      });
      const updateData = await updateDay.json();
      setres(updateData);
      setShow(!show)
    }
  };
  return (
    <>
      <IconButton color="secondary" onClick={toggle}>
        <AddCircleOutlineIcon />
      </IconButton>
      {show && (
        <div className="grid grid-cols-6">
          <select name="study" id={`${day}-study`} className="text-black">
            <option value="ادبیات">ادبیات</option>
            <option value="ریاضی">ریاضی</option>
            <option value="عربی">عربی</option>
            <option value="اقتصاد">اقتصاد</option>
            <option value="جامعه">جامعه</option>
            <option value="تاریخ">تاریخ</option>
            <option value="منطق">منطق</option>
            <option value="جغرافیا">جغرافیا</option>
            <option value="علوم فنون">فنون</option>
          </select>
          <label htmlFor=""> ساعت :</label>
          <input type="number" className="text-black" id={`${day}-hours`} />
          <label htmlFor=""> تست :</label>
          <input type="number" className="text-black" id={`${day}-test`} />
          <Button variant="contained" onClick={submitHandler}>
            ثبت
          </Button>
        </div>
      )}
    </>
  );
}
