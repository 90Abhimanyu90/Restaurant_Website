import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegLaughWink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Skittles</div>
          <div className="right">
            <span>
              <IoLocationSharp />
              Delhi,India
            </span>
            <p>
              <span>
                {" "}
                <FaRegLaughWink /> Open: 05:00 PM - 12:00 AM{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Divas Srivastava</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By Divas Srivastava</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
