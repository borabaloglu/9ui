import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupTextDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>&euro;</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput aria-label="Amount" placeholder="0.00" />
				<InputGroupAddon align="inline-end">
					<InputGroupText>EUR</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>https://</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput
					aria-label="Website"
					placeholder="example.com"
					className="pl-0.5!"
				/>
			</InputGroup>
			<InputGroup>
				<InputGroupInput aria-label="Username" placeholder="username" />
				<InputGroupAddon align="inline-end">
					<InputGroupText>@9ui.dev</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
