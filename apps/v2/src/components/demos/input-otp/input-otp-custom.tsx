import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp"

export default function InputOTPDemo() {
	return (
		<InputOTP maxLength={4}>
			<InputOTPGroup className="gap-0">
				<InputOTPSlot className="rounded-r-none" index={0} />
				<InputOTPSlot className="rounded-none border-x-0" index={1} />
				<InputOTPSlot className="rounded-none border-r-0" index={2} />
				<InputOTPSlot className="rounded-l-none" index={3} />
			</InputOTPGroup>
		</InputOTP>
	)
}
