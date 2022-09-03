import { useEffect, useRef} from "react";
import "./style.css";

export default function Watch({bias}) {
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  
  const hrRef = useRef(null);
  const mnRef = useRef(null);
  const scRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const deg=6;
      const data = new Date();
      const utc = data.getTime() + (data.getTimezoneOffset() * 60000);
     
      let day = new Date(utc + (3600000 * bias));

      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hrRef.current.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
      mnRef.current.style.transform = `rotateZ(${mm}deg)`;
      scRef.current.style.transform = `rotateZ(${ss}deg)`;
      
    }, 1000);
    return () => clearInterval(interval);
  }, [bias])

  return (
    <div className="clock">
      <div className="clock__wrap">
        <div className="hour">
          <div className="hr" id="hr" ref={hrRef}></div>
        </div>
        <div className="min">
          <div className="mn" id="mn" ref={mnRef}></div>
        </div>
        <div className="sec">
          <div className="sc" id="sc" ref={scRef}></div>
        </div>
      </div>
    </div>
  );
}
