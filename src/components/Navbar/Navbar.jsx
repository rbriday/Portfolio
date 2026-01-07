import React from "react";
import Container from "../Layout/Container";

const Navbar = () => {
  return (
    <div className="py-5">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12.5 h-12.5 flex justify-center items-center bg-btn text-white font-bold text-[20px] rounded-full mr-5">R</div>
            <div className="font-semibold text-[32px] font-primary text-primary">Riday</div>
          </div>
          <div>
            <ul className="flex items-center space-x-10 font-primary text-secondary text-[18px]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <button type="button" className="bg-btn px-7 py-2 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150">Contact</button>
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
