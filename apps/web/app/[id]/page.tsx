'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';

const page = () => {
	const [data, setData] = useState('');
	let path = usePathname();
	path = path.substring(1);

	useEffect(() => {
		// fetch('http://localhost:4000').then((res) => console.log(res));
		// fetch('http://localhost:4000/redirect', {
		// 	method: 'POST',
		// 	referrerPolicy: 'no-referrer',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'Access-Control-Allow-Origin': 'http://localhost:3000/:id',
		// 	},
		// 	body: JSON.stringify({ hashcode: path }),
		// })
		// 	.then((res) => {
		// 		res.json();
		// 		console.log(res);
		// 		// setData(res);
		// 	})
		// 	.catch((err) => {
		// 		console.log('err: ', err);
		// 	});

		axios.post('http://localhost:4000/redirect', { hashcode: path }).then((res) => {
			console.log(res.data[0].url);
		});
	}, [path]);

	return <>{data ? data : path}</>;
};

export default page;
