"use client"

import { CardsGrid } from "@/components/cards-grid"
import { AIChatInterface } from "@/components/examples/ai-chat"
import { CalendarInterface } from "@/components/examples/calendar"
import { MailInterface } from "@/components/examples/mail"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Examples = () => {
	return (
		<Tabs className="mt-4" defaultValue="cards">
			<TabsList className="bg-transparent px-0">
				<TabsTrigger value="cards">Cards</TabsTrigger>
				<TabsTrigger value="ai-chat">AI Chat</TabsTrigger>
				<TabsTrigger value="mail">Mail</TabsTrigger>
				<TabsTrigger value="calendar">Calendar</TabsTrigger>
			</TabsList>
			<TabsContent value="cards">
				<CardsGrid />
			</TabsContent>
			<TabsContent value="ai-chat">
				<AIChatInterface />
			</TabsContent>
			<TabsContent value="mail">
				<MailInterface />
			</TabsContent>
			<TabsContent value="calendar">
				<CalendarInterface />
			</TabsContent>
		</Tabs>
	)
}

export default Examples
