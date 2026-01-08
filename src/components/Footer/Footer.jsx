import React from "react";
import Container from "../Layout/Container";

const Footer = () => {
  return (
    <footer className="bg-[#2B384C] py-10 mt-15">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12.5 h-12.5 flex justify-center items-center bg-btn text-white font-bold text-[20px] rounded-full mr-5">
              R
            </div>
            <div className="font-semibold text-[32px] font-primary text-white">
              Riday
            </div>
          </div>
          <div>
            <ul className="flex items-center space-x-10 font-primary text-white text-[18px]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-secondary text-white text-[16px]">Copyright © 2026 Riday.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
