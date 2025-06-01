"use client"

import { useState } from "react"
import {
	Archive,
	ArchiveX,
	ArrowLeftIcon,
	Clock,
	Forward,
	Inbox,
	MessageSquareXIcon,
	MoreHorizontal,
	PanelRightCloseIcon,
	PanelRightOpenIcon,
	Paperclip,
	Pencil,
	Reply,
	Search,
	Send,
	Star,
	StarIcon,
	Trash2,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

import { cn } from "@/lib/utils"

const emails = [
	{
		id: 2,
		from: "Michael Brown",
		email: "michael@example.com",
		subject: "Product Roadmap Review",
		preview: `All,

Let's schedule a meeting to review the updated product roadmap. I've included the key initiatives we need to discuss.

Agenda:
1. Feature prioritization
2. Resource allocation
3. Timeline adjustments
4. Risk assessment

Proposed times:
- Tomorrow 10 AM
- Thursday 2 PM

Please confirm your availability.

Best,
Michael`,
		time: "9:15 AM",
		unread: true,
		hasAttachment: false,
	},
	{
		id: 1,
		from: "Sarah Johnson",
		email: "sarah@example.com",
		subject: "Q3 Progress Report",
		preview: `Team,

Here's our Q3 progress update. We've achieved significant milestones across all departments.

Key Metrics:
• Revenue growth: 15% QoQ
• Customer retention: 92%
• New feature adoption: 78%

Next Steps:
1. Finalize Q4 roadmap
2. Prepare for annual review
3. Optimize operational workflows

Please review the attached report and share your feedback.

Best regards,
Sarah`,
		time: "10:30 AM",
		unread: true,
		hasAttachment: true,
	},
	{
		id: 6,
		from: "James Anderson",
		email: "james@example.com",
		subject: "Security Policy Update",
		preview: `Team,

We're implementing new security policies effective next week. Key changes include:

1. Mandatory 2FA for all systems
2. Enhanced password requirements
3. New data access protocols
4. Regular security audits

Please review the attached document and complete the required training by Friday.

Best regards,
James`,
		time: "Yesterday",
		unread: true,
		hasAttachment: true,
	},
	{
		id: 7,
		from: "Rachel Green",
		email: "rachel@example.com",
		subject: "Marketing Campaign Update",
		preview: `Team,

Here's the latest update on our Q4 marketing campaign:

1. Social media ads performing 20% above target
2. Email open rates at 45%
3. Website traffic up 35%
4. Conversion rate steady at 8%

Next Steps:
1. Optimize ad spend
2. Launch new content series
3. Prepare for holiday campaign

Let's discuss in our weekly meeting.

Best,
Rachel`,
		time: "11:45 AM",
		unread: true,
		hasAttachment: true,
	},
	{
		id: 3,
		from: "Emily Davis",
		email: "emily@example.com",
		subject: "Budget Planning Meeting",
		preview: `Team,

We need to finalize the budget for next quarter. Please prepare your department's requirements.

Key Areas:
1. Marketing spend
2. R&D allocation
3. Operational costs
4. Contingency planning

Meeting Details:
Date: Friday
Time: 11 AM
Location: Conference Room B

Best,
Emily`,
		time: "Yesterday",
		unread: false,
		hasAttachment: false,
	},
	{
		id: 4,
		from: "David Wilson",
		email: "david@example.com",
		subject: "Client Proposal Draft",
		preview: `Team,

Attached is the draft for the upcoming client proposal. Please review and provide feedback.

Sections:
1. Executive Summary
2. Solution Overview
3. Implementation Plan
4. Pricing Structure
5. Case Studies

Deadline for feedback: EOD Friday.

Best regards,
David`,
		time: "Yesterday",
		unread: false,
		hasAttachment: true,
	},
	{
		id: 5,
		from: "Laura Martinez",
		email: "laura@example.com",
		subject: "Team Offsite Planning",
		preview: `All,

Let's plan our next team offsite. I've outlined some potential options:

Options:
1. Strategy Workshop
   - 2-day intensive
   - Focus on long-term planning
   - Includes team-building activities

2. Innovation Summit
   - 3-day event
   - Guest speakers
   - Hackathon included

3. Leadership Retreat
   - 1-day session
   - Focus on management skills
   - Includes coaching sessions

Please vote for your preferred option by Wednesday.

Best,
Laura`,
		time: "Yesterday",
		unread: false,
		hasAttachment: false,
	},
	{
		id: 8,
		from: "Mark Taylor",
		email: "mark@example.com",
		subject: "IT Infrastructure Upgrade",
		preview: `All,

We're planning a major IT infrastructure upgrade next month. Key details:

1. New server installation
2. Network security enhancements
3. Software updates
4. Backup system improvements

Please review the attached schedule and let me know of any conflicts.

Best regards,
Mark`,
		time: "3:20 PM",
		unread: false,
		hasAttachment: true,
	},
]

const MailItem = ({
	email,
	isSelected,
	onClick,
}: {
	email: (typeof emails)[0]
	isSelected?: boolean
	onClick: () => void
}) => (
	<button
		onClick={onClick}
		className={cn(
			"hover:border-primary w-full rounded-md border px-4 py-3 text-left transition-colors",
			isSelected && "bg-secondary"
		)}
	>
		<div className="space-y-1">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span className="text-sm">{email.from}</span>
					{email.unread && (
						<span className="size-1.5 rounded-full bg-emerald-400" />
					)}
					{email.hasAttachment && <Paperclip className="size-2.5" />}
				</div>
				<span className="text-muted-foreground text-xs">{email.time}</span>
			</div>
			<p className="text-xs font-medium">{email.subject}</p>
			<p className="text-muted-foreground line-clamp-2 text-xs">
				{email.preview}
			</p>
		</div>
	</button>
)

export const MailInterface = () => {
	const [selectedEmailId, setSelectedEmailId] = useState(1)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isContentOpen, setIsContentOpen] = useState(false)

	const selectedEmail = emails.find((email) => email.id === selectedEmailId)!

	return (
		<Card className="relative grid h-[600px] overflow-hidden md:h-[800px] md:grid-cols-[400px_1fr] lg:grid-cols-[240px_400px_1fr]">
			<div
				className={cn(
					"bg-background absolute inset-y-0 left-0 z-20 w-[240px] p-4 transition-transform lg:static lg:translate-x-0 lg:border-r",
					isSidebarOpen ? "translate-x-0 border-r" : "-translate-x-full"
				)}
			>
				<div className="flex h-full flex-col gap-2">
					<Button className="gap-2">
						<Pencil className="size-4" />
						Compose
					</Button>
					<nav className="flex flex-col gap-1 [&>button]:font-normal">
						<Button variant="ghost" className="bg-muted justify-between gap-2">
							<div className="flex items-center gap-2">
								<Inbox className="size-4" />
								Inbox
							</div>
							<span className="text-muted-foreground text-xs font-normal">
								125
							</span>
						</Button>
						<Button variant="ghost" className="justify-start gap-2">
							<Star className="size-4" />
							Starred
						</Button>
						<Button variant="ghost" className="justify-start gap-2">
							<Send className="size-4" />
							Sent
						</Button>
						<Button variant="ghost" className="justify-start gap-2">
							<Archive className="size-4" />
							Archive
						</Button>
						<Button variant="ghost" className="justify-start gap-2">
							<Clock className="size-4" />
							Snoozed
						</Button>
						<Button variant="ghost" className="justify-between gap-2">
							<div className="flex items-center gap-2">
								<MessageSquareXIcon className="size-4" />
								Spam
							</div>
							<span className="text-muted-foreground text-xs font-normal">
								12
							</span>
						</Button>
						<Button variant="ghost" className="justify-start gap-2">
							<Trash2 className="size-4" />
							Trash
						</Button>
					</nav>
				</div>
				<Button
					variant="ghost"
					size="icon"
					className="absolute top-2.5 -right-11 z-50 lg:hidden"
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					{isSidebarOpen ? <PanelRightOpenIcon /> : <PanelRightCloseIcon />}
				</Button>
			</div>

			<div className="bg-background flex h-full flex-col overflow-auto md:border-r">
				<div className="flex h-14 shrink-0 items-center justify-between border-b px-3">
					<div className="ml-10 flex gap-1 lg:ml-0">
						<h2 className="font-semibold">Inbox</h2>
						<span className="text-muted-foreground text-xs font-normal">
							(12)
						</span>
					</div>
					<Input
						placeholder="Search"
						inputContainerClassName="w-1/2"
						leadingIcon={<Search />}
					/>
				</div>

				<div className="h-full space-y-2 overflow-y-auto p-2">
					{emails.map((email) => (
						<MailItem
							key={email.id}
							email={email}
							isSelected={email.id === selectedEmailId}
							onClick={() => {
								setIsContentOpen(true)
								setSelectedEmailId(email.id)
							}}
						/>
					))}
				</div>
			</div>

			<div
				className={cn(
					"bg-background absolute size-full flex-col md:static md:flex",
					isContentOpen ? "z-20 flex" : "hidden"
				)}
			>
				<header className="h-14">
					<div>
						<div className="flex h-14 items-center gap-2 border-b px-3">
							<Button
								className="md:hidden"
								variant="ghost"
								size="icon"
								onClick={() => setIsContentOpen(false)}
							>
								<ArrowLeftIcon className="size-4" />
							</Button>
							<Separator
								orientation="vertical"
								className="mx-1 h-4 md:hidden"
							/>
							<Button variant="ghost" size="icon">
								<ArchiveX className="size-4" />
							</Button>
							<Button variant="ghost" size="icon">
								<Trash2 className="size-4" />
							</Button>
							<Separator orientation="vertical" className="mx-1 h-4" />
							<Button variant="ghost" size="icon">
								<Reply className="size-4" />
							</Button>
							<Button variant="ghost" size="icon">
								<Forward className="size-4" />
							</Button>
							<Separator orientation="vertical" className="mx-1 h-4" />
							<DropdownMenu>
								<DropdownMenuTrigger
									render={(props) => (
										<Button {...props} size="icon" variant="ghost">
											<MoreHorizontal className="size-4" />
										</Button>
									)}
								/>
								<DropdownMenuContent>
									<DropdownMenuGroup>
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem>Mark as Read</DropdownMenuItem>
										<DropdownMenuItem>Mark as Unread</DropdownMenuItem>
										<DropdownMenuItem>
											<StarIcon className="size-4" />
											Star
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Clock className="size-4" />
											Snooze
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuLabel>Move to</DropdownMenuLabel>
										<DropdownMenuItem>Archive</DropdownMenuItem>
										<DropdownMenuItem>Spam</DropdownMenuItem>
										<DropdownMenuItem>
											Trash
											<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuLabel>Categories</DropdownMenuLabel>
										<DropdownMenuItem>Social</DropdownMenuItem>
										<DropdownMenuItem>Updates</DropdownMenuItem>
										<DropdownMenuItem>Forums</DropdownMenuItem>
										<DropdownMenuItem>Promotions</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenu>
										<DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
										<DropdownMenuContent>
											<DropdownMenuCheckboxItem>
												Important
											</DropdownMenuCheckboxItem>
											<DropdownMenuCheckboxItem>Work</DropdownMenuCheckboxItem>
											<DropdownMenuCheckboxItem>
												Personal
											</DropdownMenuCheckboxItem>
											<DropdownMenuCheckboxItem>To-do</DropdownMenuCheckboxItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</header>

				<div className="flex items-center gap-x-2 border-b px-3 py-4">
					<Avatar>
						<AvatarFallback>{selectedEmail.from[0]}</AvatarFallback>
					</Avatar>
					<div className="flex flex-1 flex-col space-y-0.5">
						<h3 className="text-sm font-medium">{selectedEmail.subject}</h3>
						<p className="text-muted-foreground text-xs">
							From: {selectedEmail.from} &lt;{selectedEmail.email}&gt;
						</p>
						<p className="text-muted-foreground text-xs">
							{selectedEmail.time}
						</p>
					</div>
				</div>

				<ScrollArea className="overscoll-auto grow">
					<div className="p-4 text-sm leading-relaxed whitespace-pre-wrap">
						{selectedEmail.preview}
					</div>
				</ScrollArea>

				<footer className="bg-background flex flex-col border-t p-4">
					<Textarea
						placeholder="Type your message..."
						className="min-h-20 resize-none"
					/>
					<Button className="mt-2 w-fit self-end" variant="ghost">
						Send
					</Button>
				</footer>
			</div>

			{/* Overlay for mobile sidebar */}
			{isSidebarOpen && (
				<div
					className="absolute inset-0 z-10 bg-black/90 lg:hidden"
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}
		</Card>
	)
}
