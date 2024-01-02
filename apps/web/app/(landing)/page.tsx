import ShortnerForm from './_components/shortnerform';

export default function LandingPage() {
	return (
		<>
			<div className="flex flex-col space-y-36 items-center text-white bg-black h-[100vh] w-[100%]">
				<div className="text-6xl mt-10 font-bold">
					<h1>Shorty</h1>
				</div>
				<div className="">
					<div>
						<ShortnerForm />
					</div>
				</div>
			</div>
		</>
	);
}
