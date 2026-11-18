import { type ClassValue, clsx } from "clsx";

export function cx(...inputs: ClassValue[]) {
	return clsx(inputs);
}
