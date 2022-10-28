import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Input,
} from "reactstrap";

const process = [
  {
    src: require("../../images/service/png/Bookings.png"),
    name: "Book A Pickup",
    title:
      "All your sensitive and special garments will be individually treated for any stains and dry cleaned.",
    link: "/dry-cleaning",
    Step: "1",
  },
  {
    src: require("../../images/service/png/Pickup.png"),
    name: "We Collect",
    title:
      "All your regular wear garments will be washed, steam ironed and neatly packed for delivery.",
    link: "/wash-and-iron",
    Step: "2",
  },
  {
    src: require("../../images/service/png/washing.png"),
    name: "Expert Processing",
    title:
      "Just in case you choose not to use our steam ironing services we will wash and fold them for you.",
    link: "/Wedding-Dress-Services",
    Step: "3",
  },
  {
    src: require("../../images/service/png/Delivery.png"),
    name: "We Deliver",
    title:
      "Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.",
    link: "/iron-and-fold",
    Step: "4",
  },
];

const HowWeWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" works_sec" id="HowItWorks">
      <Container className="howto ">
        <div className="justify-content-center my-5 text-center">
          <blockquote className=" head-title font-bold text-3xl mt-5">
            <span class="before:block  before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
              <span className=" relative text-white mb-3 ">How It Works</span>
            </span>
          </blockquote>
          <p className="text-base justify-content-center text-white my-2">
              A Professional Laundry Cleaning Services For Your Clothes with a
              click of a button.
            </p>
        </div>
        <Row className="howto justify-content-center">
          {process.map((process) => (
            <Col
              md={5}
              className="howto_card d-flex span justify-content-center mt-4"
              key={process.src}
            >
              <Card loading="lazy" style={{ width: "20rem" }}>
                <div className="steps ">
                  <span>{process.Step}</span>
                </div>
                <CardImg
                  className=" mt-4 m-auto service-image items-center w-81px h-81px m-0"
                  src={process.src}
                  top
                />
                <div className="steps">
                  <span>{process.Step}</span>
                </div>
                <CardBody>
                  <CardTitle
                    tag="h3"
                    className="text-danger  font-bold justify-center text-center text-xl"
                  >
                    {process.name}
                  </CardTitle>
                  <CardText className="text-danger text-center">
                    {process.title}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="flex justify-center justify-items-center ">
          <Link to="#">
            <Button
              className="cta_button mb-4 h-16 text-lg w-80  btn dark:text-white px-3 font-bold justify-items-center mt-4 hover: border-solid border-2 border-slate-200  "
              color="26466F"
            >
              BOOK A PICK-UP NOW
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
