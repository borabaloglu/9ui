import {
	AlertDialog,
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function AlertDialogDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger
				render={(props) => (
					<Button {...props} variant="destructive">
						Delete Post
					</Button>
				)}
			/>
			<AlertDialogContent className="space-y-4">
				<AlertDialogHeader>
					<AlertDialogTitle>Are you sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. Your post will be permanently deleted.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogClose
						render={(props) => (
							<Button {...props} size="sm" variant="ghost">
								Cancel
							</Button>
						)}
					/>
					<Button size="sm" variant="destructive">
						Delete
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
