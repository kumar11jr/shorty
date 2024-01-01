'use client';
import React, { FormEvent, useState } from 'react';
import './Hero.css';
import { nanoid } from 'nanoid/non-secure';

const ShotnerForm = () => {
	const [hashcode, setHashcode] = useState<string>('');
	const [copied, setCopied] = useState<boolean>(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const inputValue = (event.target as HTMLFormElement).linkInput.value;
		try {
			const response = await fetch('http://localhost:4000/api/shortUrl', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ url: inputValue, hashcode: nanoid(8) }),
			});
			if (response.ok) {
				const data = await response.json();
				setHashcode(data.hashcode);
				(event.target as HTMLFormElement).linkInput.value = '';
			}
		} catch (error) {
			console.error('Error submitting URL:', error);
		}
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(`http://localhost:3000/${hashcode}`).then((res) => {
			setCopied(true);
		});
	};

	return (
		<>
			<section className="hero-section">
				<div className="container">
					<h1 className="hero-label">Shorty</h1>
					<form className="link-form" onSubmit={handleSubmit}>
						<input type="text" id="linkInput" name="linkInput" placeholder="Paste your link here..." />
						<button type="submit">Submit</button>
					</form>
					{hashcode && (
						<div>
							<p>
								Shorty URL:{' '}
								<a href={`http://localhost:3000/${hashcode}`} target="_blank" rel="noopener noreferrer">
									http://localhost:3000/{hashcode}
								</a>
							</p>
							<button onClick={handleCopy}>{copied ? 'copied' : 'copy url'}</button>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default ShotnerForm;
