import { OpenPanelComponent } from "@openpanel/nextjs";

export function Openpanel() {
	const clientId = process.env.CLIENT_ID;

	if (process.env.NODE_ENV !== "production" || !clientId) return null;

	return (
		<OpenPanelComponent
			clientId={clientId}
			trackScreenViews
			trackAttributes
			trackOutgoingLinks
		/>
	);
}
