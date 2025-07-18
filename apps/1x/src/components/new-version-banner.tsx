export function NewVersionBanner() {
	return (
		<div className="bg-warning text-warning-foreground p-4 text-center">
			<p>
				This version of 9ui is outdated. Please visit{" "}
				<a href="https://9ui.dev" className="font-bold underline">
					9ui.dev
				</a>{" "}
				for the latest version and updates.
			</p>
		</div>
	)
}
