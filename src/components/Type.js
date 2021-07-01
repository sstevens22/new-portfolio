import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Full Stack Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Programmer",
          "Teacher",
          "Student",
          "26 Years Old",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;