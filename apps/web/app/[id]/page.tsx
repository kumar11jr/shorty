'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Router from 'next/router';
import axios from 'axios';

const page = () => {
	let path = usePathname();
	path = path.substring(1).toLocaleLowerCase();

	useEffect(() => {
		axios.post('http://localhost:4000/api/getUrl', { hashcode: path }).then((res) => {
			redirectRoute(res.data[0].url);
		});
	}, [path]);

	function redirectRoute(uri: string) {
		window.location.href = `${uri}`;
	}

	return <></>;
};

export default page;
