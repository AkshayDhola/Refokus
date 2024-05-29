import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-lg py-3 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
      <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="flex gap-14 ml-20">
        {["Home", "Work", "Cultare","","News"].map((e,i) => (
             (e.length==0)?<span className="w-1 h-6 bg-zinc-700"></span>:
          <a className="text-sm flex items-center gap-1" href="#">
            {(i==1) &&<span style={{boxShadow:"0 0 .25em #00FF19"}} className="inline-block w-1 h-1  rounded-full bg-green-400"></span>}
            {e}
          </a>
        ))}
      </div>
      </div>
      <div>
        <Button/>
      </div>
    </div>
  );
}

export default Navbar;
