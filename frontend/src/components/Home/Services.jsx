import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Button,
} from "reactstrap";

const services = [
  {
    src: require("../../images/service/png/Dry_Cleaner.png"),
    name: "Dry Cleaning",
    title:
      "All your sensitive and special garments will be individually treated for any stains and dry cleaned.",
    link: "/dry-cleaning",
  },
  {
    src: require("../../images/service/png/iron.png"),
    name: "Wash & Iron",
    title:
      "All your regular wear garments will be washed, steam ironed and neatly packed for delivery.",
    link: "/wash-and-iron",
  },
  {
    src: require("../../images/service/png/washing.png"),
    name: "Wedding Dress Services",
    title:
      "Just in case you choose not to use our steam ironing services we will wash and fold them for you.",
    link: "/Wedding-Dress-Services",
  },
  {
    src: require("../../images/service/png/iron.png"),
    name: "Iron & Fold",
    title:
      "Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.",
    link: "/iron-and-fold",
  },

  {
    src: require("../../images/service/png/Alteration_repair.png"),
    name: "Alterations & Repaires",
    title:
      "Our professional tailors manage from minor to complicated clothing repairs and fix it perfectly.",
    link: "/Alterations-Repaires",
  },
  {
    src: require("../../images/service/png/Washing_Machine_db.png"),
    name: "Commercial Laundry",
    title:
      "Get high-quality industrial dry cleaning and laundry solutions for your business.",
    link: "/Commercial-Laundry",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mb-3" id="services">
      <Container>
        <div className="d-flex justify-content-center mt-5">
          <blockquote className=" head-title font-bold text-3xl mt-5">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
              <span className=" relative text-white mb-3"> Our Services</span>
            </span>
          </blockquote>
        </div>
        <Row>
          {services.map((service) => (
            <Col
              md={4}
              className="d-flex justify-content-center mt-4"
              key={service.src}
            >
              <Card
                // className="
                // after:content['']
                // after:opacity-0
                // after:rotate-3
                // after:bg-black
                // after:transition-all
                // after:absolute
                // after:block
                // after:-z-1:
                // after:w-full
                // after:h-full
                // after-rounded-lg
                // after:top-0
                // after:left-0
                // hover:bg-sky-700
                // after:hover: opacity-1
                // after:hover: transition-all"

                loading="lazy"
                style={{ width: "20rem" }}
              >
                <Link to={service.link}>
                  <CardImg
                    className=" mt-3 m-auto service-image items-center w-81px h-81px m-0"
                    src={service.src}
                    top
                  />
                  <CardBody>
                    <CardTitle
                      tag="h3"
                      className="text-danger  font-bold justify-center text-center text-xl"
                    >
                      {service.name}
                    </CardTitle>
                    <CardText className="text-danger text-center">
                      {service.title}
                    </CardText>

                    {/* <Button color="danger" className="service-button">
                      <i className="now-ui-icons arrows-1_minimal-right" />
                      <span className="nav-name"> Select Service</span>
                    </Button> */}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="flex justify-center justify-items-center ">
        <Link to="/Pricing">
          <Button
            className="cta_button_b h-16 text-lg w-80  btn dark:text-white px-3 font-bold justify-items-center my-4 hover: border-solid border-2 border-slate-200  "
            color="26466F"
          >
           FULL PRICE LIST
          </Button>
        </Link>
        
      </div>
      <p className="text-l text-danger text-center font-bold mt-3">Minium orders of <span className="hero_title_text"> £20 </span>{" "} </p>
      <p className="text-l text-danger text-center font-bold mb-3">Fast & High Quality with Free Delivery. </p>
    </section>
  );
};

export default Services;
