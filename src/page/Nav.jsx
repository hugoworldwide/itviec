import React from "react";
import { useSelector } from "react-redux";
import {
	Row,
	Col,
	Badge,
	Dropdown,
	InputGroup,
	FormControl,
	Button,
	Container,
} from "react-bootstrap";

export default function Nav() {
	let user = useSelector((store) => store.user);
	console.log(user);
	return (
		<div className="navbar">
			<div className="email" id="email">
				{user.email}
			</div>
			<Row style={{ alignItems: "center" }}>
				<Col xs={2}>
					<img
						src={"https://itviec.com/itviec-black-square-facebook.png"}
						style={({ width: "150px" }, { height: "150px" })}
					/>
				</Col>
				<Col xs={7}>
					<InputGroup size="lg">
						<FormControl
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Keyword skill (Java, iOS...), Job Title, Company..."
							style={{ borderRadius: "0" }}
						/>
					</InputGroup>
				</Col>
				<Col xs={2}>
					<Dropdown style={{ textAlign: "center" }}>
						<Dropdown.Toggle
							size="lg"
							id="dropdown-basic"
							style={{
								borderRadius: "0",
								color: "#6D6D6D",
								backgroundColor: "white",
							}}
						>
							Ho Chi Minh
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">All Cities</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Ho Chi Minh</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Ha Noi</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Da Nang</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Others</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col xs={1}>
					<Button style={{ borderRadius: "0" }} variant="danger" size="lg">
						Search
					</Button>
				</Col>
			</Row>
		</div>
	);
}
