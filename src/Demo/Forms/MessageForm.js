import React from "react";
import {
	Row,
	Col,
	Card,
	Form,
	Button,
	InputGroup,
	FormControl,
	DropdownButton,
	Dropdown,
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {
	render() {
		return (
			<Aux>
				<Row>
					<Col>
						<Card>
							<Card.Header>
								<Card.Title as="h5">Send a Broadcast</Card.Title>
							</Card.Header>
							<Card.Body>
								<p>Kindly fill the form to send your message</p>
								<hr />
								<Row>
									<Col md={6}>
										<Form>
											<Form.Group controlId="formBasicEmail">
												<Form.Label>Recipient's Email address</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
												<Form.Text className="text-muted">
													Type the recipient's email address here.
												</Form.Text>
											</Form.Group>

											{/* <Form.Group controlId="formBasicPassword">
												<Form.Label>Password</Form.Label>
												<Form.Control type="password" placeholder="Password" />
											</Form.Group> */}
											<Form.Group controlId="formBasicChecbox">
												<Form.Check
													type="checkbox"
													label="I am okay with the message"
												/>
											</Form.Group>
											<Button variant="primary">Send Message</Button>
										</Form>
									</Col>
									<Col md={6}>
										<Form.Group controlId="exampleForm.ControlInput1">
											<Form.Label>Subject</Form.Label>
											<Form.Control type="email" placeholder="Text" />
										</Form.Group>
										{/* <Form.Group controlId="exampleForm.ControlSelect1">
											<Form.Label>Example select</Form.Label>
											<Form.Control as="select">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</Form.Control>
										</Form.Group> */}
										<Form.Group controlId="exampleForm.ControlTextarea1">
											<Form.Label>Type your message here</Form.Label>
											<Form.Control as="textarea" rows="3" />
										</Form.Group>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Aux>
		);
	}
}

export default FormsElements;
