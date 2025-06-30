import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogNested() {
	return (
		<Dialog>
			<DialogTrigger
				render={(props) => <Button {...props}>View Details</Button>}
			/>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Profile</DialogTitle>
					<DialogDescription>
						View and edit your profile details.
					</DialogDescription>
				</DialogHeader>
				<div>
					<div className="flex items-center gap-4">
						<Avatar>
							<AvatarImage src="/avatars/bora.png" />
							<AvatarFallback>BB</AvatarFallback>
						</Avatar>
						<span className="text-foreground">Bora Baloglu</span>
					</div>
				</div>
				<DialogFooter>
					<Dialog>
						<DialogTrigger
							render={(props) => (
								<Button {...props} variant="outline">
									Edit
								</Button>
							)}
						/>
						<DialogContent>
							<DialogTitle>Edit</DialogTitle>
							<DialogDescription>
								Edit the details of the item
							</DialogDescription>
							<DialogFooter>
								<DialogClose
									render={(props) => (
										<Button {...props} variant="ghost">
											Cancel
										</Button>
									)}
								/>
								<Button>Save</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
