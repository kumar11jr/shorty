import ShortnerForm from './_components/shortnerform';

export default function LandingPage() {
	return (
		<>
			<div className="flex flex-col items-center text-white bg-black min-h-screen">
				<div className="text-6xl mt-10 font-bold">
					<h1>Shorty</h1>
				</div>
				<div className="mt-10 -ml-96 items-center">
					<ShortnerForm />
				</div>
			</div>
			
		</>
	);
}

