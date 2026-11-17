"use client";

import {
	Toast,
	type ToastManagerAddOptions,
	type ToastManagerUpdateOptions,
	type ToastObject,
} from "@base-ui/react/toast";

import type { ButtonProps } from "@/components/ui/button";

type BaseToastManager = ReturnType<typeof Toast.createToastManager>;

type WithActionProps<Options> = Omit<Options, "actionProps"> & {
	actionProps?: Omit<ButtonProps, "size">;
};

type AddOptions<Data extends object> = WithActionProps<
	ToastManagerAddOptions<Data>
>;

type UpdateOptions<Data extends object> = WithActionProps<
	ToastManagerUpdateOptions<Data>
>;

type ToastManager = Omit<BaseToastManager, "add" | "update"> & {
	add: <Data extends object>(options: AddOptions<Data>) => string;
	update: <Data extends object>(
		toastId: string,
		options:
			| UpdateOptions<Data>
			| ((prevToast: ToastObject<Data>) => UpdateOptions<Data>),
	) => void;
};

export function createToastManager() {
	return Toast.createToastManager() as ToastManager;
}

export const toastManager = createToastManager();

export const anchoredToastManager = createToastManager();

export function useToast() {
	return Toast.useToastManager() as Omit<
		ReturnType<typeof Toast.useToastManager>,
		"add" | "update"
	> &
		Pick<ToastManager, "add" | "update">;
}
