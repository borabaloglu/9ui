import type * as React from "react";
import { ChevronsUpDownIcon, StarIcon } from "lucide-react";

import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

import styles from "./hero-blueprint.module.css";

type PieceProps = {
	index: number;
	shape?: "box" | "bar" | "rule";
	radius?: number;
	className?: string;
	children: React.ReactNode;
};

function Piece({
	index,
	shape = "box",
	radius = 8,
	className,
	children,
}: PieceProps) {
	return (
		<div
			className={cn(styles.piece, className)}
			style={{ "--i": index } as React.CSSProperties}
		>
			<div className={styles.reveal}>{children}</div>
			<svg
				aria-hidden="true"
				className={cn(styles.outline, shape === "bar" && styles.bar)}
			>
				{shape === "rule" ? (
					<line x1="0" y1="50%" x2="100%" y2="50%" pathLength={1} />
				) : (
					<rect
						width="100%"
						height="100%"
						rx={shape === "bar" ? 3 : radius}
						pathLength={1}
					/>
				)}
			</svg>
		</div>
	);
}

function Header({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="flex flex-col gap-1.5">
			<Piece index={1} shape="bar" className="w-fit">
				<div className="leading-none font-semibold">{title}</div>
			</Piece>
			<Piece index={2} shape="bar" className="w-fit">
				<div className="text-muted-foreground text-sm">{description}</div>
			</Piece>
		</div>
	);
}

function AuthDesign() {
	return (
		<>
			<Header
				title="Join 9ui"
				description="Start building your design system."
			/>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Piece index={3} shape="bar" className="w-fit">
						<Label htmlFor="hero-email">Email</Label>
					</Piece>
					<Piece index={4} radius={10}>
						<Input id="hero-email" placeholder="bora@9ui.dev" />
					</Piece>
				</div>
				<Piece index={5}>
					<Button className="w-full">Get Started</Button>
				</Piece>
				<Piece index={6} shape="rule">
					<div className="flex flex-row items-center gap-x-2">
						<span className="bg-border h-px w-full" />
						<span className="text-muted-foreground text-xs">OR</span>
						<span className="bg-border h-px w-full" />
					</div>
				</Piece>
				<Piece index={7}>
					<Button variant="outline" className="w-full">
						<Icons.google />
						Continue with Google
					</Button>
				</Piece>
				<Piece index={8}>
					<Button variant="outline" className="w-full">
						<Icons.gitHub />
						Continue with GitHub
					</Button>
				</Piece>
			</div>
		</>
	);
}

const privacySettings = [
	{
		id: "hero-public-profile",
		title: "Public Profile",
		description: "Make your profile visible to everyone",
		defaultChecked: true,
	},
	{
		id: "hero-show-email",
		title: "Show Email",
		description: "Allow others to see your email",
		defaultChecked: false,
	},
	{
		id: "hero-activity-status",
		title: "Activity Status",
		description: "Show when you're active",
		defaultChecked: true,
	},
	{
		id: "hero-read-receipts",
		title: "Read Receipts",
		description: "Let others know you've read messages",
		defaultChecked: false,
	},
];

function PrivacyDesign() {
	return (
		<>
			<Header
				title="Privacy Settings"
				description="Control who can see your profile."
			/>
			<div className="flex flex-col gap-5">
				{privacySettings.map((setting, row) => (
					<div
						key={setting.id}
						className="flex items-center justify-between gap-4"
					>
						<div className="flex flex-col gap-1 text-sm">
							<Piece index={3 + row * 3} shape="bar" className="w-fit">
								<Label htmlFor={setting.id}>{setting.title}</Label>
							</Piece>
							<Piece index={4 + row * 3} shape="bar" className="w-fit">
								<div className="text-muted-foreground">
									{setting.description}
								</div>
							</Piece>
						</div>
						<Piece index={5 + row * 3} radius={10}>
							<Switch id={setting.id} defaultChecked={setting.defaultChecked} />
						</Piece>
					</div>
				))}
			</div>
		</>
	);
}

function FeedbackDesign() {
	return (
		<>
			<Header title="Feedback" description="How was your experience with us?" />
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{[1, 2, 3, 4, 5].map((star) => (
						<Piece key={star} index={2 + star} radius={6}>
							<StarIcon
								className={cn(
									"size-8",
									star <= 4
										? "fill-amber-300 text-amber-300"
										: "text-muted-foreground fill-none",
								)}
							/>
						</Piece>
					))}
				</div>
				<Piece index={8}>
					<Textarea
						className="min-h-28 resize-none"
						placeholder="Write your feedback..."
					/>
				</Piece>
				<Piece index={9}>
					<Button className="w-full">Submit Feedback</Button>
				</Piece>
			</div>
		</>
	);
}

const members = [
	{
		initials: "MS",
		name: "Micheal Smith",
		email: "micheal@9ui.dev",
		role: "Owner",
	},
	{
		initials: "EA",
		name: "Emma Adams",
		email: "emma@9ui.dev",
		role: "Developer",
	},
	{
		initials: "SJ",
		name: "Sam Johnson",
		email: "sam@9ui.dev",
		role: "Billing",
	},
];

function MembersDesign() {
	return (
		<>
			<Header
				title="Member Roles"
				description="Manage your team's permissions."
			/>
			<div className="flex flex-col gap-4">
				{members.map((member, row) => (
					<div
						key={member.email}
						className="flex items-center justify-between gap-4"
					>
						<div className="flex items-center gap-3">
							<Piece index={3 + row * 4} radius={20}>
								<Avatar size="lg">
									<AvatarFallback className="text-sm">
										{member.initials}
									</AvatarFallback>
								</Avatar>
							</Piece>
							<div className="flex flex-col gap-0.5 text-sm">
								<Piece index={4 + row * 4} shape="bar" className="w-fit">
									<div className="font-medium">{member.name}</div>
								</Piece>
								<Piece index={5 + row * 4} shape="bar" className="w-fit">
									<div className="text-muted-foreground">{member.email}</div>
								</Piece>
							</div>
						</div>
						<Piece index={6 + row * 4}>
							<Button variant="outline" size="sm">
								{member.role}
								<ChevronsUpDownIcon className="text-muted-foreground size-3.5" />
							</Button>
						</Piece>
					</div>
				))}
				<div className="flex gap-2 pt-1">
					<Piece index={15} radius={10} className="flex-1">
						<Input aria-label="Invite by email" placeholder="Invite by email" />
					</Piece>
					<Piece index={16}>
						<Button size="sm">Invite</Button>
					</Piece>
				</div>
			</div>
		</>
	);
}

const usage = [
	{ label: "Storage", value: "38 GB of 50 GB", percent: 76 },
	{ label: "Bandwidth", value: "120 GB of 500 GB", percent: 24 },
	{ label: "Team seats", value: "9 of 10", percent: 90 },
];

function UsageDesign() {
	return (
		<>
			<div className="flex items-start justify-between gap-4">
				<Header title="Usage" description="Your plan renews on Dec 1." />
				<Piece index={3}>
					<Badge variant="secondary">Pro</Badge>
				</Piece>
			</div>
			<div className="flex flex-col gap-5">
				{usage.map((item, row) => (
					<div key={item.label} className="flex flex-col gap-2">
						<div className="flex items-center justify-between text-sm">
							<Piece index={4 + row * 3} shape="bar">
								<div className="font-medium">{item.label}</div>
							</Piece>
							<Piece index={5 + row * 3} shape="bar">
								<div className="text-muted-foreground">{item.value}</div>
							</Piece>
						</div>
						<Piece index={6 + row * 3} radius={4}>
							<Progress aria-label={item.label} value={item.percent} />
						</Piece>
					</div>
				))}
				<Piece index={13}>
					<Button variant="outline" className="w-full">
						Upgrade Plan
					</Button>
				</Piece>
			</div>
		</>
	);
}

export const designs = [
	{ id: "auth", count: 9, Component: AuthDesign },
	{ id: "privacy", count: 15, Component: PrivacyDesign },
	{ id: "feedback", count: 10, Component: FeedbackDesign },
	{ id: "members", count: 17, Component: MembersDesign },
	{ id: "usage", count: 14, Component: UsageDesign },
];
