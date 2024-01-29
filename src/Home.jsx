import React, { useState } from "react";
import Drop from "./Drop";
import { ImCross } from "react-icons/im";

export default function Home() {
  const [drop, setdrop] = useState(false);
  const [drop2, setdrop2] = useState(false);
  const [drop3, setdrop3] = useState(false);
  const [drop4, setdrop4] = useState(false);
  //   console.log(drop4);

  console.log(drop);

  const funcx = () => {
    setdrop(!drop);
  };

  const funcx2 = () => {
    setdrop2(!drop2);
    setdrop(false);
  };
  const funcx3 = () => {
    setdrop3(!drop3);
    setdrop(false);
    setdrop2(false);
  };

  const funcx4 = () => {
    setdrop4(!drop4);
    setdrop(false);
    setdrop2(false);
    setdrop3(false);
  };

  return (
    <>
      <div className="h-[10vh] w-[100%] bg-[blue] flex justify-center items-center">
        <ul className="flex justify-around items-center w-[100%] ">
          <li
            onClick={funcx}
            className="text-[25px] font-semibold transition-all text-[white] cursor-pointer hover:bg-slate-400"
          >
            Home
          </li>

          <li
            onClick={funcx2}
            className="text-[25px] font-semibold text-[white] cursor-pointer transition-all  hover:bg-slate-400"
          >
            About
            <div
              style={{ visibility: drop2 ? "visible" : "hidden" }}
              className="about"
            >
              My About
            </div>
          </li>
          <li
            onClick={funcx3}
            className="text-[25px] font-semibold text-[white] cursor-pointer  transition-all  hover:bg-slate-400"
          >
            Service
            <div
              style={{ visibility: drop3 ? "visible" : "hidden" }}
              className="service"
            >
              MyService
            </div>
          </li>
          <li
            onClick={funcx4}
            className="text-[25px] font-semibold text-[white] cursor-pointer  transition-all  hover:bg-slate-400"
          >
            BLOG
            <div
              style={{ visibility: drop4 ? "visible" : "hidden" }}
              className="blog"
            >
              My blog
            </div>
          </li>
        </ul>
      </div>
      <div
        className="Myhome"
        style={{ visibility: drop ? "visible" : "hidden"  }}
      >
        MY Home
        <ImCross style={{ fontSize: "30px", color: "red" }} />
      </div>
    </>
  );
}
