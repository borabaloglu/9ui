import {
	Button,
	Input,
	Label,
	Tab,
	TabContent,
	TabIndicator,
	Tabs,
	TabsList,
} from "9ui"

export default function TabsUnderline() {
	return (
		<Tabs className="w-full max-w-96" defaultValue="login" variant="underline">
			<TabsList>
				<Tab value="login">Login</Tab>
				<Tab value="signup">Sign up</Tab>
				<TabIndicator />
			</TabsList>
			<TabContent value="login" className="space-y-4">
				<div className="flex flex-col gap-2">
					<h4 className="text-2xl font-bold">Login</h4>
					<p className="text-sm text-muted-fg">
						Login to your account to continue
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" placeholder="Email" type="email" />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="password">Password</Label>
					<Input id="password" placeholder="Password" type="password" />
				</div>
				<Button className="w-full">Login</Button>
			</TabContent>
			<TabContent value="signup" className="space-y-4">
				<div className="flex flex-col gap-2">
					<h4 className="text-2xl font-bold">Sign up</h4>
					<p className="text-sm text-muted-fg">Sign up to create an account</p>
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" placeholder="Email" type="email" />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="password">Password</Label>
					<Input id="password" placeholder="Password" type="password" />
				</div>
				<Button className="w-full">Sign up</Button>
			</TabContent>
		</Tabs>
	)
}