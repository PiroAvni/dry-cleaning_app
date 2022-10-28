/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Input, InputGroupText } from "reactstrap";
import { useState, useContext, useEffect } from "react";

function Booking_Banner() {
  return (
    <section className=" bg-gray-900" id="Booking_Banner">
      <Container>
        <Row>
          <div className="banner flex flex-col justify-center ">
            <div className="col-12">
              <div className=" flex md:flex sm:flex justify-center my-4 ">
                <blockquote class=" head-title after:bg-#26466F  font-bold text-3xl my-5">
                  <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                    <span class=" relative text-white">
                      Fast, Reliable, Affordable and Professional Laundry For
                      Clothes
                    </span>
                  </span>
                </blockquote>
              </div>
            </div>

            <div className=" flex  lg:flex-row md:flex-row flex-col md:justify-items-center sm:flex-col sm:justify-items-center md:justify-self-center sm:just justify-center  my-7 gap-4 m-auto mb-5">
              <input
                type="text"
                placeholder="Post Code"
                className="input bg-white justify-content-center h-16 input-bordered input-info w-full max-w-xs"
              />
              <Link to="/Pricing">
                <Button className="cta_button_b my-0 h-16 text-lg w-80 btn  dark:text-white px-3 font-bold justify-content-center  hover:border-solid border-2 border-white  ">
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Booking_Banner;
