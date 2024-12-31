const config = {
	disableEmoji: true,
	format: "{type}{scope}: {subject}",
	list: ["feat", "fix", "chore"],
	maxMessageLength: 64,
	minMessageLength: 3,
	questions: ["type", "scope", "subject", "body", "lerna"],
	scopes: ["docs", "core"],
	types: {
		chore: {
			description: "Changes that don't fix a bug or add a feature",
			value: "chore",
		},
		feat: {
			description: "A new feature",
			value: "feat",
		},
		fix: {
			description: "A bug fix",
			value: "fix",
		},
		messages: {
			type: "Select the type of change that you're committing:",
			customScope: "Select the scope this component affects:",
			subject: "Write a short, imperative mood description of the change:\n",
			body: "Provide a longer description of the change:\n ",
			confirmCommit: "The packages that this commit has affected\n",
		},
	},
}

export default config
