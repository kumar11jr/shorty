'use client'
import React, { FormEvent, useRef, useState } from 'react';
import './Hero.css';
import { nanoid } from 'nanoid/non-secure';

const Hero = () => {
    const [url, setUrl] = useState<string>('');
    const [hashcode, setHashcode] = useState<string>(''); 

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const inputValue = (event.target as HTMLFormElement).linkInput.value; 
        setUrl(inputValue);
        console.log('Submitted URL:', inputValue);

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
                console.log('URL submitted successfully:', data);
                setHashcode(data.hashcode || '');
            } else {
                console.error('Failed to submit URL');
            }
        } catch (error) {
            console.error('Error submitting URL:', error);
        }
    };

    const handleCopy = () => {
        const tempInput = document.createElement('input');
        tempInput.value = `http://localhost:3000/${hashcode}`;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Copied Successfully!');
    };

    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-label">Shorty</h1>
                    <form className="link-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="linkInput"
                            name="linkInput"
                            placeholder="Paste your link here..."
                        />
                        
                        <button type="submit">Submit</button>
                    </form>
                    {hashcode && (
                        <div>
                            <p>Shorty URL: <a href={`http://localhost:3000/${hashcode}`} target="_blank" rel="noopener noreferrer">http://localhost:3000/{hashcode}</a></p>
                            <button onClick={handleCopy}>copy url</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Hero;
