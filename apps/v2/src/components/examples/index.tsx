"use client"

import { AIChatInterface } from "@/components/examples/ai-chat"
import { CalendarInterface } from "@/components/examples/calendar"
import { MailInterface } from "@/components/examples/mail"
import { Tab, TabContent, Tabs, TabsList } from "@/components/ui/tabs"

const Examples = () => {
	return (
		<div className="flex flex-col">
			<h2 className="text-2xl font-semibold">Examples</h2>

			<Tabs className="mt-4 w-full" defaultValue="ai-chat">
				<TabsList className="border-none px-0">
					<Tab className="max-w-40" value="ai-chat">
						AI Chat
					</Tab>
					<Tab className="max-w-40" value="mail">
						Mail
					</Tab>
					<Tab className="max-w-40" value="calendar">
						Calendar
					</Tab>
				</TabsList>
				<TabContent value="ai-chat" className="border-none p-0">
					<AIChatInterface />
				</TabContent>
				<TabContent value="mail" className="border-none p-0">
					<MailInterface />
				</TabContent>
				<TabContent value="calendar" className="border-none p-0">
					<CalendarInterface />
				</TabContent>
			</Tabs>
		</div>
	)
}

export default Examples
