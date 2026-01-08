import React from "react";
import Container from "../Layout/Container";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-17.5">
      <Container>
        <div className="flex justify-between">
          <div className="w-125">
            <h4 className="font-primary font-semibold text-[38px] text-primary pb-4">Let’s discuss your Project</h4>
            <p className="font-secondary text-[18px] text-secondary">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
            <div className="p-6">
                <div className="group flex items-center shadow-sm p-5 rounded-2xl space-x-5 bg-gray-50 hover:bg-white mt-7.5">
                  <div className="w-12 h-12 bg-btn text-white flex items-center justify-center rounded-xl group-hover:bg-white group-hover:text-btn group-hover:shadow-sm transition decoration-2">
                    <FaLocationDot size={25} />
                  </div>
                  <div className="">
                    <h5 className="font-secondary text-[16px] text-secondary tracking-[2px]">Address:</h5>
                    <h4 className="font-primary font-semibold text-5 text-primary">Dhaka, Bangladesh </h4>
                  </div>
                </div>

                <div className="group flex items-center shadow-sm p-5 rounded-2xl space-x-5 bg-gray-50 hover:bg-white mt-7.5">
                  <div className="w-12 h-12 bg-btn text-white flex items-center justify-center rounded-xl group-hover:bg-white group-hover:text-btn group-hover:shadow-sm transition decoration-2">
                    <SiGmail  size={25} />
                  </div>
                  <div className="">
                    <h5 className="font-secondary text-text-[16px] text-secondary tracking-[2px]">My Email:</h5>
                    <h4 className="font-primary font-semibold text-5 text-primary">ridaya100@gmail.com </h4>
                  </div>
                </div>

                <div className="group flex items-center shadow-sm p-5 rounded-2xl space-x-5 bg-gray-50 hover:bg-white mt-7.5">
                  <div className="w-12 h-12 bg-btn text-white flex items-center justify-center rounded-xl group-hover:bg-white group-hover:text-btn group-hover:shadow-sm transition decoration-2">
                    <FaPhoneSquareAlt   size={25} />
                  </div>
                  <div className="">
                    <h5 className="font-secondary text-text-[16px] text-secondary tracking-[2px]">Call Me Now:</h5>
                    <h4 className="font-primary font-semibold text-5 text-primary">+088 01890352592 </h4>
                  </div>
                </div>
            </div>
            <div className="p-6">
              <div className="flex space-x-5">
                <div  className="w-12.5 h-12.5 bg-gray-300 text-btn rounded-sm flex items-center justify-center hover:bg-btn hover:text-white hover:shadow-sm transition decoration-2 cursor-pointer">
                <FaFacebookF size={30}/>
                </div>
                <div  className="w-12.5 h-12.5 bg-gray-300 text-btn rounded-sm flex items-center justify-center hover:bg-btn hover:text-white hover:shadow-sm transition decoration-2 cursor-pointer">
                <FaLinkedinIn  size={30}/>
                </div>
                <div  className="w-12.5 h-12.5 bg-gray-300 text-btn rounded-sm flex items-center justify-center hover:bg-btn hover:text-white hover:shadow-sm transition decoration-2 cursor-pointer">
                <FaInstagram  size={30}/>
                </div>
                {/* <div  className="w-12.5 h-12.5 bg-gray-300 text-btn rounded-sm flex items-center justify-center hover:bg-btn hover:text-white hover:shadow-sm transition decoration-2 cursor-pointer">
                <FaFacebookF size={30}/>
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-125">
            <div>
              {/* <p className="font-secondary text-[18px] text-secondary">There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte</p> */}
            </div>
            <div className="bg-gray-50 mt-15 p-8 rounded-xl shadow-sm">
                  <form action="">
                    <div className="w-100 mt-5">
                      <input type="text" placeholder="Enter Your Name ..."  className="border-b-2 border-btn outline-0 py-2 px-2 w-full font-primary font-semibold text-[18px] text-primary rounded-sm"/>
                    </div>
                    <div className="w-100 mt-5">
                      <input type="email" placeholder="Enter Your Email ..."  className="border-b-2 border-btn outline-0 py-2 px-2 w-full font-primary font-semibold text-[18px] text-primary rounded-sm "/>
                    </div>
                    <div className="w-100 mt-5">
                      <input type="text" placeholder="Enter Your Location ..."  className="border-b-2 border-btn outline-0 py-2 px-2 w-full font-primary font-semibold text-[18px] text-primary rounded-sm"/>
                    </div>
                    <div className="w-100 mt-5">
                      <input type="text" placeholder="Enter Your Budget ..."  className="border-b-2 border-btn outline-0 py-2 px-2 w-full font-primary font-semibold text-[18px] text-primary rounded-sm "/>
                    </div>
                    <div className="w-100 mt-5">
                      <input type="text" placeholder="Enter Your Subject ..."  className="border-b-2 border-btn outline-0 py-2 px-2 w-full font-primary font-semibold text-[18px] text-primary rounded-sm"/>
                    </div>
                    <div className="w-100 mt-5">
                      <input type="text" placeholder="Enter Your Message ..."  className="border-b-2 border-btn outline-0 py-2 px-2 w-full font-primary font-semibold text-[18px] text-primary rounded-sm"/>
                    </div>
                     <button className="mt-7.5 font-primary font-semibold text-[20px] bg-btn px-7 py-2 text-white rounded-lg cursor-pointer border-btn border-2 hover:border-btn hover:bg-transparent hover:text-btn transition-all decoration-2 delay-150 ">Submit Now</button>
                  </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
