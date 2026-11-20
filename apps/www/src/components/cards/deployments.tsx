"use client";

import { GitBranchIcon, TriangleAlertIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";

const deployments = [
	{ branch: "feat/masonry", time: "Building…", status: "building" },
	{ branch: "main", time: "2m ago", status: "ready" },
	{ branch: "fix/otp-width", time: "1h ago", status: "failed" },
] as const;

export function DeploymentsCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Deployments</CardTitle>
				<CardDescription>9ui-docs · production</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				{deployments.map((deployment) => (
					<div key={deployment.branch} className="flex items-center gap-2">
						<GitBranchIcon className="text-muted-foreground size-4 shrink-0" />
						<span className="min-w-0 flex-1 truncate font-mono text-xs">
							{deployment.branch}
						</span>
						<span className="text-muted-foreground text-xs">
							{deployment.time}
						</span>
						{deployment.status === "building" && (
							<Badge variant="info">
								<Spinner />
								Building
							</Badge>
						)}
						{deployment.status === "ready" && (
							<Badge variant="success">Ready</Badge>
						)}
						{deployment.status === "failed" && (
							<Badge variant="danger">Failed</Badge>
						)}
					</div>
				))}
				<Alert variant="warning">
					<TriangleAlertIcon />
					<AlertTitle>Build minutes running low</AlertTitle>
					<AlertDescription>You have used 92% of this month.</AlertDescription>
				</Alert>
			</CardContent>
		</Card>
	);
}
