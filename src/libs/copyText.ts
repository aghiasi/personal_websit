export const copyText = (doc: any) => {
  if (doc) {
    const sort = [
      "شنبه",
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنجشنبه",
      "جمعه",
    ];
    let weekDays = [];
    let study: any[] = [];
    doc.totalGraph.map((item: any) => {
      if (item.hours.$numberDecimal % 1 !== 0) {
        const rounded =
          (item.hours.$numberDecimal - Math.floor(item.hours.$numberDecimal)) *
          100;
        study.push(
          `${item.name} : مجموعه ساعت مطالعاتی ${Math.trunc(
            item.hours.$numberDecimal
          )} ساعت و ${Math.trunc(rounded + 1)} دقیقه ${
            item.test ? `و ${item.test} تست ` : ""
          }`
        );
      } else {
        study.push(
          `${item.name} : مجموعه ساعت مطالعاتی ${
            item.hours.$numberDecimal
          } ساعت  ${item.test ? `و ${item.test} تست ` : ""}`
        );
      }
    });
    for (let i of sort) {
      const found = doc.studys.find((item: any) => item.day == i);
      if (found) {
        if (found.day_total_hours.$numberDecimal % 1 !== 0) {
          const rounded =
            (found.day_total_hours.$numberDecimal -
              Math.floor(found.day_total_hours.$numberDecimal)) *
            100;
          weekDays.push(
            `${found.day} : مجموعه ساعت مطالعاتی ${Math.trunc(
              found.day_total_hours.$numberDecimal
            )} ساعت  و ${rounded} دقیقه و ${found.day_total_test} تست`
          );
        } else {
          weekDays.push(
            `${found.day} : مجموعه ساعت مطالعاتی ${
              found.day_total_hours.$numberDecimal
            } ساعت  ${
              found.day_total_test !== 0
                ? `و ${parseInt(found.day_total_test)} تست`
                : ""
            } `
          );
        }
      }
    }
    let tot = doc.totalHours.$numberDecimal;
    if (tot % 1 !== 0) {
      const rounded = (tot - Math.floor(tot)) * 100;
      tot = `جمع کل ساعات مطالعاتی ${Math.trunc(tot)} ساعت و ${Math.trunc(
        rounded + 1
      )} دقیقه ${doc.totalTest ? `و ${doc.totalTest} تست ` : ""}
با تشکر از زحمات شما`;
    } else {
      tot = `جمع کل ساعات مطالعاتی ${Math.trunc(tot)} ساعت  ${
        doc.totalTest ? `و ${doc.totalTest} تست ` : ""
      }
با تشکر از زحمات شما`;
    }
    return `
تکلیف شماره : ${doc.week - 1}\n
با عرض سلام و خسته نباشید خدمت آقای جلالی 
گزارش جمع بندی هفته ${doc.week} اینجانب هلیا شندآبادی رشته انسانی
\nبخش اول عملکرد روزانه :
${weekDays.map((items: any) => {
  return `${items}\n`;
})}
بخش دوم عملکرد درس به درس :\n
${study.map((item: any) => {
  return `${item}`;
})}\n
بخش سوم عملکرده کلی هفته :
${tot}
        `;
  } else {
    return null;
  }
};
