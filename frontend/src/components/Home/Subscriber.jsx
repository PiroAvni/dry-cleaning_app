/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Input, InputGroupText } from "reactstrap";

function Subscriber() {
  return (
    <section className=" " id="subscriber">
      <Container className="lg:min-w-full ">
        <Row>
          <div className="col-12">
            <div className="sub_wrapper lg:flex-row bg-blue-100 lg:rounded-none  justify-between my-4  md:flex-col md:rounded-3xl sm:flex-col rounded-3xl">
              <blockquote class=" head-title after:bg-#26466F font-bold text-2xl my-5 mx-5">
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                  <span class=" relative text-white">Newsletter</span>
                </span>
              </blockquote>
              <div className="flex lg:flex-row flex-col md:flex-col md:justify-items-center sm:flex-col sm:justify-items-center md:justify-self-center sm:just justify-center my-7 gap-4 m-auto mb-5">
                <p
                  className="text-danger ml-6 content-center align-center justify-center font-bol
                d lg:text-7xl md:text-4xl text-2xl  font-bold"
                >
                  {" "}
                  Subscribe to our newsletter
                </p>
                <div className="flex  lg:flex-row flex-col md:flex-row md:justify-items-center sm:flex-col sm:justify-items-center md:justify-self-center sm:just justify-center  my-7 gap-4 m-auto mb-5 ">
                  <input
                    type="text"
                    placeholder="Enter your Mail..."
                    className="input bg-white  h-16 input-bordered input-info w-full max-w-xs m-2"
                  />
                  <Link to="/Pricing">
                    <Button className="cta_button_b m-2  h-16 text-lg w-80 btn  dark:text-white px-3 font-bold justify-content-center  hover:border-solid border-2 border-white  ">
                      SUBMIT
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Subscriber;
