'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';

const page = () => {
	let path = usePathname();
	path = path.substring(1)

	useEffect(() => {
		axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/getUrl`, { hashcode: path }).then((res) => {
			redirectRoute(res.data[0].url);
		});
	}, [path]);

	function redirectRoute(uri: string) {
		window.location.href = `${uri}`;
	}

	return <></>;
};

export default page;
