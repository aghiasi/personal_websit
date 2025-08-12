"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton } from "@mui/material";
import { useState } from "react";
export default function AddSubject({ day, res, setres ,setChartData}: any) {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  const submitHandler = async () => {
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
      if (parseFloat(hours.value) % 1 !== 0) {
        const dec =
          parseFloat(hours.value) - Math.floor(parseFloat(hours.value));
        if (dec >= 0.6) {
          const round = parseFloat(hours.value) - 0.6;
          hours.value = (1 + parseFloat(round.toFixed(2))).toString();
        }
      }
      const newStudy = {
        week: res.week,
        day,
        data: {
          name: name.value,
          hours: parseFloat(hours.value) ? hours.value : "1",
          test: test.value ? parseInt(test.value) : 0,
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
        let studeiss: string[] = [];
        let hourss: number[] = [];
        let tests:number[] = [];
        updateData.totalGraph.map((i: any) => {
          if (i.name) studeiss.push(i.name.toString());
          hourss.push(parseFloat(i.hours));
          tests.push(i.test);
        });
        setChartData({
          labels: studeiss,
          datasets: [
        {
          label: 'درس بر حسب ساعت ',
          data: hourss,

        },
        {
          label: 'درس بر حسب تست',
          data: tests,

        },
          ],
        });
      setShow(!show);
    }
  };
  return (
    <>
      <IconButton color="secondary" onClick={toggle}>
        <AddCircleOutlineIcon />
      </IconButton>
      {show && (
        <div className="grid grid-cols-6 gap-4">
          <select name="study" id={`${day}-study`} className="text-black">
            <option defaultChecked value="ادبیات">
              ادبیات
            </option>
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
          <input
            type="number"
            className="text-black"
            id={`${day}-hours`}
            step={"any"}
          />
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
