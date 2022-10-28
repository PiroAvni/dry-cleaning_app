
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
function Product_Card() {


	return (
		<section className="mb-3" id="services">
			<Container>
				<div className="d-flex justify-content-center mt-5">
					<h2 className="text-danger head-title">Our Services</h2>
				</div>
				<Row>
						<Col md={4} className="d-flex justify-content-center mt-4" key='{service.src}'>
							<Card style={{ width: '20rem' }}>
								<CardImg className="service-image" src='{service.src}' top />
								<CardBody>
									<CardTitle tag="h3" className="text-danger">
									    Service Name
									</CardTitle>
									<CardText>Service Title</CardText>

									<Link to='/service'>
										<Button color="danger" className="service-button">
											<i className="now-ui-icons arrows-1_minimal-right" />
											<span className="nav-name"> Select Service</span>
										</Button>
									</Link>
								</CardBody>
							</Card>
						</Col>
					
				</Row>
			</Container>
		</section>
	);
};

export default Product_Card