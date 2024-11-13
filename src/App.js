
import React, { useState, useEffect } from "react";

const App = () => {
	const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(60*60*1);
  const [error, setError] = useState("");

  
	useEffect(() => {

      const intervalId = setInterval(() => {

        if( duration < 0) {
          setError("Times Up")
          return clearInterval(intervalId)
          
        }

         let minutes = Math.floor(duration/60)
         let seconds = duration%60

        setSeconds(seconds)
        setMinutes(minutes)
        setDuration((duration-1))

      }, 1000);
      return () => clearInterval(intervalId)
	
	}, [duration]);

	return (
		<div
			style={{
				display: "flexbox",
				margin: "auto",
				textAlign: "center",
			}}
		>
			<h1 style={{ color: "green" }}>
				GeeksforGeeks
			</h1>
			<h1>{minutes}:{seconds}</h1>
      <h3>{error}</h3>
		</div>
	);
};

export default App;
