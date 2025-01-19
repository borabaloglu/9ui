import { highlighter } from "@/utils/logger/highlighter"

const logger = {
	error: (...args: string[]) => {
		console.log(highlighter.error(args.join(" ")))
	},
	success: (...args: string[]) => {
		console.log(highlighter.success(args.join(" ")))
	},
	info: (...args: string[]) => {
		console.log(highlighter.info(args.join(" ")))
	},
	warn: (...args: string[]) => {
		console.log(highlighter.warn(args.join(" ")))
	},
	log: (...args: string[]) => {
		console.log(args.join(" "))
	},
	break: () => {
		console.log("")
	},
}

export default logger
