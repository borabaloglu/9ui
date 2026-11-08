const config = {
	disableEmoji: true,
	format: "{type}{scope}: {subject}",
	list: ["feat", "fix", "chore", "refactor", "docs", "perf"],
	maxMessageLength: 64,
	minMessageLength: 3,
	questions: ["type", "subject", "body"],
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
		refactor: {
			description: "A code refactor",
			value: "refactor",
		},
		docs: {
			description: "Documentation changes",
			value: "docs",
		},
		perf: {
			description: "A performance improvement",
			value: "perf",
		},
		messages: {
			type: "Select the type of change that you're committing:",
			subject: "Write a short, imperative mood description of the change:\n",
			body: "Provide a longer description of the change:\n ",
		},
	},
};

module.exports = config;
