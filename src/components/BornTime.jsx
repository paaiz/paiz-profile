import { useEffect, useRef } from "react";

import "@/styles/components/BornTime.css";

const zeroPad = (number, length = 2) => String(number).padStart(length, "0");

export default function BornTime() {
  const bornTime = useRef(null);

  const birthdayCountdown = () => {
    const birthdayInterval = setInterval(() => {
      const birthDate = "May 8";
      let date = new Date(`${birthDate} ${new Date().getFullYear()} 00:00:00 GMT+0700`);
      if (date.getTime() - Date.now() <= 0) {
        date.setFullYear(date.getFullYear() + 1);
      }

      let annotatedDate = date.getTime() - Date.now();

      let hour = Math.floor(annotatedDate / 36e5);
      let min = Math.floor((annotatedDate % 36e5) / 60e3);
      let sec = Math.floor((annotatedDate % 60e3) / 1e3);
      let totale = `${zeroPad(hour)}:${zeroPad(min)}:${zeroPad(sec)}`;

      if (bornTime.current) {
        bornTime.current.innerText = totale;
      }
    }, 1000);

    return () => {
      clearInterval(birthdayInterval);
    };
  };

  useEffect(() => {
    const cleanupBirthdayCountdown = birthdayCountdown();

    return () => {
      cleanupBirthdayCountdown();
    };
  });

  return <div className="time" ref={bornTime}></div>;
}
