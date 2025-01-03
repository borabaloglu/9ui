export function Footer() {
	return (
		<footer className="border-t border-primary">
			<div className="container mx-auto p-4">
				<div className="text-balance text-center text-sm text-secondary-fg md:text-left">
					Built by{" "}
					<a
						href="https://twitter.com/borabalogluu"
						target="_blank"
						rel="noreferrer"
						className="font-medium text-fg underline underline-offset-4"
					>
						borabalogluu
					</a>
					{" • "}
					<a
						href="https://github.com/borabaloglu/9ui"
						target="_blank"
						rel="noreferrer"
						className="font-medium text-fg underline underline-offset-4"
					>
						source code
					</a>
					.
				</div>
			</div>
		</footer>
	)
}