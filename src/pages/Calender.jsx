import { Flex, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Calender = ({ gridNumber }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <GridItem
      rowSpan={8}
      colSpan={3}
      w={"100%"}
      h={"100%"}
      bg={"#13151C"}
      borderRadius={25}
    >
      <Calendar
        locale={"fa"}
        value={selectedDay}
        onChange={setSelectedDay}
        calendarClassName="custom-calendar"
        // calendarTodayClassName={"x"}
        shouldHighlightWeekends
      />
    </GridItem>
  );
};

export default Calender;

// const months = [
//   "فروردین",
//   "اردیبهشت",
//   "خرداد",
//   "تیر",
//   "مرداد",
//   "شهریور",
//   "مهر",
//   "آبان",
//   "آذر",
//   "دی",
//   "بهمن",
//   "اسفند",
// ];

// const [showedDate, setShowDate] = useState({
//   year: null,
//   monthName: null,
//   monthDays: null,
//   today: null,
// });

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://api.keybit.ir/time/");
//       if (response.ok) {
//         const result = await response.json();
//         setShowDate({
//           year: result.date.year.number.en,
//           monthName: result.date.month.name,
//           monthDays: result.date.month.number.en,
//           today: result.date.day.number.en,
//         });
//       } else {
//         console.error("Error fetching data:", response.status);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, []);
