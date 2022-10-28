import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/now-ui-kit.min.css';
import {
  Button,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Row,
} from "reactstrap";


const items = [
  {
    src: require('../../images/Hero/Hero-png/undraw_on_the_way_re_swjt (2) (1).png'),
  },
  {
    src: require("../../images/Hero/Hero-png/undraw_online_shopping.png"),
  },
  {
    src: require("../../images/Hero/Hero-png/undraw_package_arrived_63rf.png"),
  },
  {
    src: require("../../images/Hero/Hero-png/undraw_window_shopping_re_0kbm.png"),
  },
  {
    src: require("../../images/Hero/undraw_window_shopping_re_0kbm.svg"),
  },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <section id="hero" className="bg-base-200 dark:bg-slate-200  "  >
      <Container className=" "> {/* min-h-screen */}
        <Row className="py-4 ">
          <Col md={6} className="py-5 ">
            <h3 className="hero_text text-5xl font-bold">
              Voted #1{" "}
              <span className="hero_title_text"> Dry Cleaners </span>{" "}
              <br /> in the South East.
            </h3>
            <blockquote className=" head-title font-bold text-xl mt-5">
            <span className="before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-blue-500 relative inline-block mb-4">
              <span className=" relative text-white mb-3">  
              24 Hour Dry Cleaning & Laundry Services in London
              We Collect, Clean and Deliver Directly to Your Door</span>
            </span>
          </blockquote>
          <p className="text-l text-danger font-bold my-3">We Collect, Clean and Deliver Directly to Your Door</p>
            <Link to="#">
              <Button className="cta_button btn dark:text-white  " color="26466F">
                View Services
              </Button>
            </Link>
            {/* <div className="flex row">
            
            <Link to="#">
            <input type="text" placeholder="Enter Your Postcode" className=" flex col  bg-white input input-bordered w-full m-auto max-w-xs primary-content" />
                  <Button className="cta_button btn dark:text-white  " color="26466F">
                    View Services
                  </Button>
                </Link>
                </div> */}
            <div className="bannermoredetail my-3 text-danger font-weight">
                  <p className="bannersubtext">Free Same Day Collection, Next Day Delivery.</p>
                  <p className="bannersubtext">Cashless Payments, Dedicated 24/7 support.</p>
            </div>
          </Col>

          <Col md={6}>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item) => {

                return (
                  <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
										<img
											src={item.src}
											alt={item.altText}
											height="400px"
											width="600px"
											className="p-5"
										/>
									</CarouselItem>
                )
              })}
              <a
								className="carousel-control-prev"
								data-slide="prev"
								onClick={(e) => {
									e.preventDefault();
									previous();
								}}
								role="button"
							>
								<i className="now-ui-icons arrows-1_minimal-left" />
							</a>
							<a
								className="carousel-control-next"
								data-slide="next"
								onClick={(e) => {
									e.preventDefault();
									next();
								}}
								role="button"
							>
								<i className="now-ui-icons arrows-1_minimal-right" />
							</a>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
