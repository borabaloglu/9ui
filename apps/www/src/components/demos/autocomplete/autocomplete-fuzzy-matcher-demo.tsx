"use client";

import * as React from "react";
import { matchSorter } from "match-sorter";

import {
	Autocomplete,
	AutocompleteEmpty,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompletePopup,
	AutocompleteValue,
} from "@/components/ui/autocomplete";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function AutocompleteFuzzyMatcherDemo() {
	const [query, setQuery] = React.useState("");

	const items = React.useMemo(() => {
		const trimmed = query.trim();
		if (!trimmed) {
			return devDocs;
		}
		return matchSorter(devDocs, trimmed, {
			keys: ["title", "description"],
			threshold: matchSorter.rankings.MATCHES,
		});
	}, [query]);

	return (
		<Field className="max-w-sm">
			<FieldLabel>Search docs</FieldLabel>
			<Autocomplete
				items={items}
				value={query}
				onValueChange={setQuery}
				filter={null}
				itemToStringValue={(item) => (item as DevDoc).title}
			>
				<AutocompleteInput
					placeholder="e.g. react hooks, api"
					render={<Input />}
				/>
				<AutocompletePopup className="w-(--anchor-width)">
					<AutocompleteEmpty>
						No docs found for &quot;
						<AutocompleteValue />
						&quot;
					</AutocompleteEmpty>
					<AutocompleteList>
						{(doc: DevDoc) => (
							<AutocompleteItem key={doc.id} value={doc}>
								<div className="flex w-full flex-col gap-1">
									<div className="text-sm font-medium">
										{highlightText(doc.title, query)}
									</div>
									<div className="text-muted-foreground text-xs leading-relaxed">
										{highlightText(doc.description, query)}
									</div>
								</div>
							</AutocompleteItem>
						)}
					</AutocompleteList>
				</AutocompletePopup>
			</Autocomplete>
		</Field>
	);
}

function highlightText(text: string, query: string): React.ReactNode {
	const tokens = query
		.trim()
		.slice(0, 100)
		.split(/\s+/)
		.filter(Boolean)
		.map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

	if (tokens.length === 0) {
		return text;
	}

	const regex = new RegExp(tokens.join("|"), "gi");

	const nodes: React.ReactNode[] = [];
	let cursor = 0;

	for (const match of text.matchAll(regex)) {
		const start = match.index;
		if (start > cursor) {
			nodes.push(text.slice(cursor, start));
		}
		nodes.push(
			<mark
				key={`m-${start}`}
				className="text-foreground bg-green-200 dark:bg-green-700"
			>
				{match[0]}
			</mark>,
		);
		cursor = start + match[0].length;
	}

	if (cursor < text.length) {
		nodes.push(text.slice(cursor));
	}

	return nodes;
}

interface DevDoc {
	id: string;
	title: string;
	description: string;
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
];
