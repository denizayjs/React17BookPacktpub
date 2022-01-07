import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <h1>I've rendered {time} times!</h1>;
};

export default Timer;
