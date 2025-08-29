"use client"

import { useState } from "react"
import {
	BotIcon,
	GlobeIcon,
	MessageSquareMoreIcon,
	MessageSquarePlusIcon,
	MoreHorizontalIcon,
	PanelRightCloseIcon,
	PanelRightOpenIcon,
	PaperclipIcon,
	PencilIcon,
	SearchIcon,
	ShareIcon,
	TrashIcon,
	UserIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"

import { cn } from "@/lib/utils"

interface Message {
	id: number
	role: "user" | "assistant"
	content: string
	timestamp: string
}

interface Chat {
	id: number
	title: string
}

const initialMessages: Message[] = [
	{
		id: 1,
		role: "assistant",
		content: "Hello! How can I help you today?",
		timestamp: "10:30 AM",
	},
]

const sampleChats: Chat[] = [
	{
		id: 1,
		title: "New Chat",
	},
	{
		id: 2,
		title: "Project Discussion",
	},
	{
		id: 3,
		title: "Code Review",
	},
]

export const AIChatInterface = () => {
	const [messages, setMessages] = useState<Message[]>(initialMessages)
	const [inputValue, setInputValue] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!inputValue.trim()) return

		// Add user message
		const userMessage: Message = {
			id: messages.length + 1,
			role: "user",
			content: inputValue,
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		}
		setMessages((prev) => [...prev, userMessage])
		setInputValue("")

		// Simulate AI response
		setIsLoading(true)
		setTimeout(() => {
			const aiMessage: Message = {
				id: messages.length + 2,
				role: "assistant",
				content: "This is a simulated response from the AI assistant.",
				timestamp: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			}
			setMessages((prev) => [...prev, aiMessage])
			setIsLoading(false)
		}, 1000)
	}

	return (
		<div className="relative grid h-[600px] grid-cols-1 gap-0 overflow-hidden rounded-lg border p-0 md:grid-cols-[240px_1fr]">
			<div
				className={cn(
					"bg-background absolute inset-y-0 left-0 z-20 w-[240px] border-r transition-transform md:static md:translate-x-0",
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<div className="flex h-full flex-col gap-2">
					<div className="flex items-center justify-between px-4 pt-4">
						<h2 className="text-md font-semibold">Chats</h2>
						<div className="flex gap-1">
							<Button variant="ghost" size="icon">
								<SearchIcon />
							</Button>
							<Button variant="ghost" size="icon">
								<MessageSquarePlusIcon />
							</Button>
						</div>
					</div>

					<nav className="flex flex-1 flex-col gap-2 px-4">
						{sampleChats.map((chat) => (
							<Button
								key={chat.id}
								variant="ghost"
								className="first:bg-muted justify-between gap-2"
							>
								{chat.title}
								<DropdownMenu>
									<DropdownMenuTrigger
										nativeButton={false}
										render={(props) => (
											<div
												className="flex size-6 items-center justify-center outline-none"
												{...props}
											>
												<MoreHorizontalIcon {...props} className="size-4" />
											</div>
										)}
									></DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>
											<PencilIcon className="size-4" />
											Rename
										</DropdownMenuItem>
										<DropdownMenuItem>
											<ShareIcon className="size-4" />
											Share
										</DropdownMenuItem>
										<DropdownMenuItem variant="destructive">
											<TrashIcon className="size-4" />
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</Button>
						))}
					</nav>

					<div className="px-4 pb-4">
						<Button variant="ghost" className="w-full justify-start">
							<UserIcon className="size-4" />
							Account
						</Button>
					</div>
				</div>
				<Button
					variant="ghost"
					size="icon"
					className="bg-background absolute top-2 -right-11 z-50 md:hidden"
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					{isSidebarOpen ? <PanelRightOpenIcon /> : <PanelRightCloseIcon />}
				</Button>
			</div>

			<div className="bg-background relative grid grid-rows-[1fr_auto] overflow-hidden">
				<div className="overflow-y-auto">
					<div className="mt-8 flex flex-col gap-6 p-6 md:mt-0">
						{messages.map((message) => (
							<div
								key={message.id}
								className={cn(
									"flex items-start gap-2",
									message.role === "user" ? "flex-row-reverse" : ""
								)}
							>
								<Avatar>
									<AvatarFallback>
										{message.role === "assistant" ? (
											<BotIcon className="size-4" />
										) : (
											<UserIcon className="size-4" />
										)}
									</AvatarFallback>
								</Avatar>
								<div
									className={cn(
										"flex max-w-[80%] flex-col",
										message.role === "user" ? "items-end" : ""
									)}
								>
									<div className="bg-muted rounded-lg px-4 py-2">
										<p className="text-sm break-words">{message.content}</p>
									</div>
									<span className="text-muted-foreground mt-1 text-xs">
										{message.timestamp}
									</span>
								</div>
							</div>
						))}
						{isLoading && (
							<div className="text-muted-foreground flex items-center gap-2">
								<MessageSquareMoreIcon className="size-4 animate-pulse" />
								<span className="text-sm">AI is typing...</span>
							</div>
						)}
					</div>
				</div>

				<div className="relative border-t p-4">
					<form
						onSubmit={handleSubmit}
						className="bg-card flex flex-col gap-2 overflow-hidden rounded-md border p-2"
					>
						<Textarea
							placeholder="Type your message..."
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							className="min-h-20 flex-1 resize-none"
							disabled={isLoading}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault()
									handleSubmit(e)
								}
							}}
						/>
						<div className="flex gap-1">
							<Button type="button" variant="ghost" size="icon">
								<PaperclipIcon />
							</Button>
							<Button type="button" variant="ghost" size="icon">
								<GlobeIcon />
							</Button>
						</div>
					</form>
				</div>
			</div>

			{/* Overlay for mobile sidebar */}
			{isSidebarOpen && (
				<div
					className="absolute inset-0 z-10 bg-black/70 md:hidden"
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}
		</div>
	)
}
