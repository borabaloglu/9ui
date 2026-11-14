import type * as React from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
	"group/avatar bg-muted after:border-border relative inline-flex shrink-0 align-middle transition-[background-color] duration-150 ease-out select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:mix-blend-darken has-[[data-slot=avatar-image]:not([data-loading],[data-error])]:bg-transparent dark:after:mix-blend-lighten",
	{
		variants: {
			size: {
				sm: "size-6 text-xs",
				default: "size-8 text-sm",
				lg: "size-10 text-base",
			},
			shape: {
				circle: "rounded-full",
				square: "rounded-lg data-[size=sm]:rounded-md",
			},
		},
		defaultVariants: {
			size: "default",
			shape: "circle",
		},
	},
);

function Avatar({
	className,
	size = "default",
	shape = "circle",
	...props
}: Omit<BaseAvatar.Root.Props, "className"> &
	VariantProps<typeof avatarVariants> & {
		className?: string;
	}) {
	return (
		<BaseAvatar.Root
			data-slot="avatar"
			data-size={size}
			data-shape={shape}
			className={cn(avatarVariants({ size, shape }), className)}
			{...props}
		/>
	);
}

function AvatarImage({
	className,
	...props
}: Omit<BaseAvatar.Image.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseAvatar.Image
			data-slot="avatar-image"
			className={cn(
				"absolute inset-0 size-full rounded-[inherit] object-cover transition-opacity duration-150 ease-out data-error:invisible data-loading:invisible data-starting-style:opacity-0",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarFallback({
	className,
	...props
}: Omit<BaseAvatar.Fallback.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseAvatar.Fallback
			data-slot="avatar-fallback"
			className={cn(
				"text-muted-foreground absolute inset-0 flex items-center justify-center rounded-[inherit] [&_svg:not([class*='size-'])]:size-[1.25em]",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="avatar-badge"
			className={cn(
				"bg-primary text-primary-foreground ring-background absolute end-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 select-none",
				"group-data-[shape=square]/avatar:translate-x-1/4 group-data-[shape=square]/avatar:translate-y-1/4 rtl:group-data-[shape=square]/avatar:-translate-x-1/4",
				"group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
				"group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
				"group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
				className,
			)}
			{...props}
		/>
	);
}

const AVATAR_GROUP_MASK_CORNER =
	"radial-gradient(closest-side, #000 calc(100% - 0.5px), #0000)";

const AVATAR_GROUP_MASK = {
	"--avatar-group-mask": [
		"linear-gradient(#000 0 0)",
		"linear-gradient(#000 0 0)",
		"linear-gradient(#000 0 0)",
		AVATAR_GROUP_MASK_CORNER,
		AVATAR_GROUP_MASK_CORNER,
		AVATAR_GROUP_MASK_CORNER,
		AVATAR_GROUP_MASK_CORNER,
	].join(", "),
	"--avatar-group-mask-position": [
		"0 0",
		"var(--cut-x) calc(var(--cut-y) + var(--cut-radius))",
		"calc(var(--cut-x) + var(--cut-radius)) var(--cut-y)",
		"var(--cut-x) var(--cut-y)",
		"calc(var(--cut-x) + var(--cut-inner)) var(--cut-y)",
		"var(--cut-x) calc(var(--cut-y) + var(--cut-inner))",
		"calc(var(--cut-x) + var(--cut-inner)) calc(var(--cut-y) + var(--cut-inner))",
	].join(", "),
	"--avatar-group-mask-size": [
		"100% 100%",
		"var(--cut-size) var(--cut-inner)",
		"var(--cut-inner) var(--cut-size)",
		"calc(var(--cut-radius) * 2) calc(var(--cut-radius) * 2)",
		"calc(var(--cut-radius) * 2) calc(var(--cut-radius) * 2)",
		"calc(var(--cut-radius) * 2) calc(var(--cut-radius) * 2)",
		"calc(var(--cut-radius) * 2) calc(var(--cut-radius) * 2)",
	].join(", "),
} as React.CSSProperties;

function AvatarGroup({
	className,
	style,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="avatar-group"
			className={cn(
				"group/avatar-group flex w-fit *:not-first:-ms-(--avatar-group-overlap)",
				"[--avatar-group-gap:2px] [--avatar-group-overlap:--spacing(2)] [--avatar-group-radius:calc(var(--avatar-group-size)/2)] [--avatar-group-size:--spacing(8)] has-data-[shape=square]:[--avatar-group-radius:var(--radius-lg)] has-data-[size=lg]:[--avatar-group-size:--spacing(10)] has-data-[size=sm]:[--avatar-group-size:--spacing(6)] has-data-[size=sm]:has-data-[shape=square]:[--avatar-group-radius:var(--radius-md)]",
				"[--cut-inner:calc(var(--cut-size)-var(--cut-radius)*2)] [--cut-radius:calc(var(--avatar-group-radius)+var(--avatar-group-gap))] [--cut-size:calc(var(--avatar-group-size)+var(--avatar-group-gap)*2)] [--cut-x:calc(var(--avatar-group-size)-var(--avatar-group-overlap)-var(--avatar-group-gap))] [--cut-y:calc(var(--avatar-group-gap)*-1)] rtl:[--cut-x:calc(var(--avatar-group-overlap)-var(--avatar-group-size)-var(--avatar-group-gap))]",
				"*:not-last:mask-(--avatar-group-mask) *:not-last:[mask-composite:subtract,add,add,add,add,add,add] *:not-last:[mask-size:var(--avatar-group-mask-size)] *:not-last:[mask-position:var(--avatar-group-mask-position)] *:not-last:mask-no-repeat",
				className,
			)}
			style={{ ...AVATAR_GROUP_MASK, ...style }}
			{...props}
		/>
	);
}

function AvatarGroupOverflow({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="avatar-group-overflow"
			className={cn(
				"bg-muted text-muted-foreground after:border-border relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:mix-blend-darken dark:after:mix-blend-lighten",
				"group-has-data-[shape=square]/avatar-group:rounded-lg",
				"group-has-data-[size=sm]/avatar-group:size-6 group-has-data-[size=sm]/avatar-group:text-xs group-has-data-[size=sm]/avatar-group:group-has-data-[shape=square]/avatar-group:rounded-md",
				"group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=lg]/avatar-group:text-base",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupOverflow,
	AvatarImage,
};
