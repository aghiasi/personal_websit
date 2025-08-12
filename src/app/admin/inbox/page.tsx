"use client";
import { Button, IconButton } from "@mui/material";
import React, { FormEvent, useState } from "react";
import AddSubject from "./components/AddSubject";
import AddDay from "./components/AddDay";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Colors
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement ,
  Colors
);
export default function page() {
  const [addweek, setAddweek] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [chartData, setChartData] = useState({
    labels: ["هفته ای انتخاب نشده"],
    datasets: [
      {
        label: "درس بر حسب ساعت",
        data: [0],
      },
    ],
  });
  const [resivedData, setResivedData] = useState({ week: "0", studys: [] });
  let theChart;
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const week: HTMLInputElement | null = document.querySelector("#week");
    const chart: HTMLCanvasElement | null = document.querySelector("#chart");
    if (week?.value) {
      setResivedData({ week: "0", studys: [] });
      setAddweek(!addweek);
      if (!addweek) {
        setDisabled(!disabled);
        const request = await fetch("/api/addweek", {
          method: "POST",
          headers: {
            "Content-type": "Application-json",
          },
          body: JSON.stringify({
            week: week?.value,
          }),
        });
        if (request.ok) setDisabled(false);
        const data = await request.json();
        setResivedData(data);
        let studeis: string[] = [];
        let hours: number[] = [];
        let test :number[] = [];
        data.totalGraph.map((i: any) => {
          if (i.name) studeis.push(i.name.toString());
          hours.push(parseFloat(i.hours));
          test.push(i.test);
        });
        setChartData({
          labels: studeis,
      datasets: [
        {
          label: 'درس بر حسب ساعت ',
          data: hours,

        },
        {
          label: 'درس بر حسب تست',
          data: test,

        },
      ],
        });
      }
    }
  };
  return (
    <section className="grid md:grid-cols-7 gap-5  grid-cols-1">
      <div className="col-span-4 md:ml-40  sm:mr-4 mt-10 block  p-6  border  rounded-lg shadow-sm  bg-gray-800 border-gray-700 hover:bg-gray-700 ">
        <h5
          dir="rtl"
          className="mb-2 text-2xl font-bold tracking-tight  text-white"
        >
          تایم ترک هلیا خانوم همسر خوشگلم
        </h5>
        <div id="form-ms" dir="rtl" className="coll-12 my-2">
          <label htmlFor="week" className="text-white">
            هفته‌ی :
          </label>
          <input disabled={addweek} type="number" id="week" className="mr-2" />
          <Button
            onClick={submitHandler}
            variant="contained"
            className="mr-4"
            id="week-btn"
            disabled={disabled}
          >
            {!addweek ? "ثبت هفته" : "تغیر هفته"}
          </Button>
        </div>
        <div dir="rtl">
          {addweek && (
            <>
              <AddDay
                setRes={setResivedData}
                week={resivedData.week}
                dis={disabled}
              />
              {resivedData &&
                resivedData.studys.map((items: any) => (
                  <div key={items.day}>
                    <div className="text-white mb-2">
                      {items.day}{" "}
                      <AddSubject
                        day={items.day}
                        res={resivedData}
                        setres={setResivedData}
                        setChartData={setChartData}
                      />
                      <p>
                        کل ساعت مطالعه شد در این روز :
                        {items.day_total_hours.$numberDecimal}
                      </p>
                      <p>
                        کل تست های زده شد در این روز :{items.day_total_test}
                      </p>
                    </div>
                    {items.subjects.map((item: any, index: number) => (
                      <div
                        className="grid grid-cols-5"
                        id={`item-div-${items.day}-${index}`}
                        key={index}
                      >
                        <p className="text-white">{item.name}</p>
                        <p className="text-white">ساعت</p>
                        <p className="text-white">{item.hours}</p>
                        <p className="text-white">تست</p>
                        <p className="text-white">{item.test}</p>
                      </div>
                    ))}
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
      <div className="col-span-4 md:ml-40  sm:mr-4 mt-10 block  p-6  border  rounded-lg mb-5">
        <Doughnut  data={chartData} />
      </div>
    </section>
  );
}
