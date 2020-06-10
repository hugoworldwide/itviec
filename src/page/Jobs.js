import React, { useState, useEffect } from "react";

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

import { useHistory } from "react-router-dom";

// import Moment from "react-moment";

export default function Jobs() {
	let history = useHistory();
	const getData = async () => {
		let url = `http://localhost:3001/jobs`;
		let data = await fetch(url);
		let result = await data.json();
		setJobs(result);
	};

	useEffect(() => {
		getData();
	}, []);
	let [jobs, setJobs] = useState(null);
	function jobSelect(id) {
		history.push(`/job/${id}`);
	}
	return (
		<div>
			<Container>
				{jobs !== null ? (
					jobs.map((job) => {
						return (
							<div>
								<div
									className="job-content"
									onClick={() => jobSelect(`${job.id}`)}
								>
									<Row>
										<Col>
											<div className="jobcard-logo">
												<img
													style={{ width: "80px" }}
													src={
														"https://itviec.com/itviec-black-square-facebook.png"
													}
												/>
											</div>
										</Col>
										<Col xs={8}>
											<div className="jobcard-descriptions">
												<h2 className="jobcard-title">{job.title}</h2>
												<div>$ {job.salary}</div>
												<div>
													<ul className="benefit-list">
														{job.benefits.map((benefit) => (
															<li>{benefit}</li>
														))}
													</ul>
												</div>
												<div>
													{job.tags.map((tag) => (
														<Badge variant="secondary" className="badge-style">
															{tag}
														</Badge>
													))}
												</div>
											</div>
										</Col>
										<Col>
											<div className="date-location-box">
												{job.isHotjob ? (
													<div className="hotjob-label">Hot Job</div>
												) : (
													<div></div>
												)}

												<div className="jobcard-location">
													<div>{job.city}</div>
													<div>District {job.district}</div>
												</div>
												{/* <div className="job-time">{moment(job.time).fromNow()}</div> */}
											</div>
										</Col>
									</Row>
								</div>
							</div>
						);
					})
				) : (
					<div>loading</div>
				)}
			</Container>
			);
		</div>
	);
}
