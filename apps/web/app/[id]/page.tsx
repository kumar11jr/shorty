'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const page = () => {
	const [data, setData] = useState('');
	let path = usePathname();
	path = path.substring(1);

	useEffect(() => {
		// fetch('http://localhost:4000').then((res) => console.log(res));
		fetch('http://localhost:4000/redirect', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Request-Method': 'POST',
			},
			body: JSON.stringify({ hashcode: path }),
		})
			.then((res) => {
				res.json();
				console.log(res);
			})
			.catch((err) => {
				console.log('err', err);
			});
	}, [path]);

	return <>{path}</>;
};

export default page;
