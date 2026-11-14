"use client";

import { Toast } from "@base-ui/react/toast";

import type { ButtonProps } from "@/components/ui/button";

type BaseToastManager = ReturnType<typeof Toast.createToastManager>;

type WithActionProps<Options> = Omit<Options, "actionProps"> & {
	actionProps?: Omit<ButtonProps, "size">;
};

type ToastManager = Omit<BaseToastManager, "add" | "update"> & {
	add: (
		options: WithActionProps<Parameters<BaseToastManager["add"]>[0]>,
	) => string;
	update: (
		toastId: string,
		options: WithActionProps<Parameters<BaseToastManager["update"]>[1]>,
	) => void;
};

export const toastManager = Toast.createToastManager() as ToastManager;

export const anchoredToastManager = Toast.createToastManager() as ToastManager;

export function useToast() {
	return Toast.useToastManager() as Omit<
		ReturnType<typeof Toast.useToastManager>,
		"add" | "update"
	> &
		Pick<ToastManager, "add" | "update">;
}
