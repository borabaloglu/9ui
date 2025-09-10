"use client"

import * as React from "react"
import { matchSorter } from "match-sorter"

import {
	Autocomplete,
	AutocompleteContent,
	AutocompleteEmpty,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompleteValue,
} from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

export default function AutocompleteFuzzyMatcher() {
	const fuzzyFilter = React.useCallback(
		(item: unknown, query: string): boolean => {
			const doc = item as DevDoc
			if (!query) {
				return true
			}

			const results = matchSorter([doc], query, {
				keys: ["title", "description"],
				threshold: matchSorter.rankings.MATCHES,
			})

			return results.length > 0
		},
		[]
	)

	return (
		<div className="w-80">
			<Autocomplete
				items={devDocs}
				filter={fuzzyFilter}
				itemToStringValue={(item: unknown) => (item as DevDoc).title}
			>
				<div className="flex flex-col gap-2">
					<Label htmlFor="search-docs">Search developer docs</Label>
					<AutocompleteInput
						id="search-docs"
						placeholder="e.g. react hooks, api"
					/>
				</div>
				<AutocompleteContent className="w-80">
					<AutocompleteEmpty>
						No docs found for &quot;
						<AutocompleteValue />
						&quot;
					</AutocompleteEmpty>
					<AutocompleteList>
						{(doc: DevDoc) => (
							<AutocompleteItem key={doc.id} value={doc}>
								<AutocompleteValue>
									{(value) => (
										<div className="flex w-full flex-col gap-1">
											<div className="text-sm font-medium">
												{highlightText(doc.title, value)}
											</div>
											<div className="text-muted-foreground text-xs leading-relaxed">
												{highlightText(doc.description, value)}
											</div>
										</div>
									)}
								</AutocompleteValue>
							</AutocompleteItem>
						)}
					</AutocompleteList>
				</AutocompleteContent>
			</Autocomplete>
		</div>
	)
}

function highlightText(text: string, query: string): React.ReactNode {
	const trimmed = query.trim()
	if (!trimmed) {
		return text
	}

	const limited = trimmed.slice(0, 100)
	const escaped = limited.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
	const regex = new RegExp(`(${escaped})`, "gi")

	return text.split(regex).map((part, idx) =>
		regex.test(part) ? (
			<mark key={idx} className="bg-transparent font-medium text-yellow-300">
				{part}
			</mark>
		) : (
			part
		)
	)
}

interface DevDoc {
	id: string
	title: string
	description: string
}

const devDocs: DevDoc[] = [
	{
		id: "1",
		title: "React Hooks Guide",
		description:
			"Learn how to use React Hooks like useState, useEffect, and custom hooks to manage state and side effects in functional components.",
	},
	{
		id: "2",
		title: "JavaScript Array Methods",
		description:
			"Master array methods like map, filter, reduce, and forEach for functional programming in JavaScript.",
	},
	{
		id: "3",
		title: "CSS Flexbox Layout",
		description:
			"Complete guide to CSS Flexbox for creating responsive and flexible layouts with ease.",
	},
	{
		id: "4",
		title: "TypeScript Interfaces",
		description:
			"Understanding TypeScript interfaces and type definitions for better code safety and documentation.",
	},
	{
		id: "5",
		title: "API Design Best Practices",
		description:
			"Learn how to design RESTful APIs that are intuitive, scalable, and maintainable.",
	},
	{
		id: "6",
		title: "React Performance Optimization",
		description:
			"Tips and techniques for optimizing React application performance using memoization and lazy loading.",
	},
	{
		id: "7",
		title: "Git Workflow Strategies",
		description:
			"Understanding different Git workflows like GitFlow, GitHub Flow, and trunk-based development.",
	},
	{
		id: "8",
		title: "Node.js Express Server",
		description:
			"Building RESTful APIs with Node.js and Express framework for scalable backend applications.",
	},
	{
		id: "9",
		title: "Database Indexing",
		description:
			"How to use database indexes effectively to improve query performance and reduce response times.",
	},
	{
		id: "10",
		title: "Docker Containerization",
		description:
			"Learn how to containerize applications with Docker for consistent deployment across environments.",
	},
	{
		id: "11",
		title: "Authentication & Authorization",
		description:
			"Implementing secure authentication and authorization using JWT tokens and OAuth protocols.",
	},
	{
		id: "12",
		title: "Testing Strategies",
		description:
			"Comprehensive guide to unit testing, integration testing, and end-to-end testing practices.",
	},
	{
		id: "13",
		title: "Webpack Configuration",
		description:
			"Optimizing Webpack configuration for production builds and development workflows.",
	},
	{
		id: "14",
		title: "Microservices Architecture",
		description:
			"Designing and implementing microservices architecture for scalable distributed systems.",
	},
	{
		id: "15",
		title: "GraphQL API Development",
		description:
			"Building efficient GraphQL APIs with type safety and flexible data fetching capabilities.",
	},
]
