import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
	const { id } = useParams();

	let [detailItem, setDetailItem] = useState(null);

	const getDetailData = async () => {
		let url = `https://my-json-server.typicode.com/hugoworldwide/itviec/jobs/${id}`;
		let data = await fetch(url);
		let result = await data.json();
		setDetailItem(result);
	};

	console.log(detailItem);

	useEffect(() => {
		getDetailData();
	}, []);

	return (
		<div>
			<div>
				{detailItem === null ? (
					<div>Loading</div>
				) : (
					<>
						<h1>{detailItem.title}</h1>
						<p>${detailItem.salary}</p>
						<p>
							${detailItem.city} City, District {detailItem.district}{" "}
						</p>

						<h2>Benefit</h2>
						<ul>
							{detailItem.benefits.map((item) => (
								<li>{item}</li>
							))}
						</ul>

						<h2>Description</h2>
						<p>{detailItem.description}</p>
						<button>Apply Now</button>
					</>
				)}
			</div>
		</div>
	);
}
