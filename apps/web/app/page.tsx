import styles from './page.module.css';

function Gradient({ conic, className, small }: { small?: boolean; conic?: boolean; className?: string }): JSX.Element {
	return (
		<span
			className={[
				styles.gradient,
				conic ? styles.glowConic : undefined,
				small ? styles.gradientLarge : styles.gradientLarge,
				className,
			]
				.filter(Boolean)
				.join(' ')}
		/>
	);
}

export default function Page(): JSX.Element {
	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<div className={styles.heroContent}>
					<div className={styles.logos}>
						<div className={styles.logoGradientContainer}>
							<Gradient className={styles.logoGradient} conic small />
						</div>
					</div>
					<Gradient className={styles.backgroundGradient} conic />
				</div>
			</div>
		</main>
	);
}
