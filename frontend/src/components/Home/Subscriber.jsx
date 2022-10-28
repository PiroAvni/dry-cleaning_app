import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Input, InputGroupText } from "reactstrap";
import { useState, useContext, useEffect } from "react";
import { FormControl } from "@mui/material";
function Subscriber() {
  return (
    <section className=" " id="subscriber">
      <Container>
        <Row>
          <div className="col-12">
            <div className="sub_wrapper bg-gray-200 flex justify-between my-4 ">
              <blockquote class=" head-title after:bg-#26466F font-bold text-xl my-5">
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                  <span class=" relative text-white">Newsletter</span>
                </span>
              </blockquote>

              <div className="flex flex-row  my-7  justify-between gap-4 ">
                <input
                  type="text"
                  placeholder="Post Code"
                  className="input bg-white  h-16 input-bordered input-info w-full max-w-xs"
                />
                <Link to="/Pricing">
                  <Button className="cta_button_b my-0 h-16 text-lg w-80 btn  dark:text-white px-3 font-bold justify-content-center  hover:border-solid border-2 border-white  ">
                    BOOK NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Subscriber;
