import React from "react"

import { type DemoRegistry } from "@/types/demo"

export const demoRegistry: DemoRegistry = {
	"accordion-demo": {
		source:
			'import {\n\tAccordion,\n\tAccordionContent,\n\tAccordionItem,\n\tAccordionTrigger,\n} from "@/components/ui/accordion"\n\nexport default function AccordionDemo() {\n\treturn (\n\t\t<Accordion className="mx-auto w-96" orientation="vertical">\n\t\t\t<AccordionItem>\n\t\t\t\t<AccordionTrigger>What is accordion?</AccordionTrigger>\n\t\t\t\t<AccordionContent>\n\t\t\t\t\tA collapsible component that organizes content into expandable\n\t\t\t\t\tsections.\n\t\t\t\t</AccordionContent>\n\t\t\t</AccordionItem>\n\t\t\t<AccordionItem>\n\t\t\t\t<AccordionTrigger>Is it customizable?</AccordionTrigger>\n\t\t\t\t<AccordionContent>\n\t\t\t\t\tYes. You can style it with tailwind classes to match your design\n\t\t\t\t\tsystem.\n\t\t\t\t</AccordionContent>\n\t\t\t</AccordionItem>\n\t\t\t<AccordionItem>\n\t\t\t\t<AccordionTrigger>Is it animated?</AccordionTrigger>\n\t\t\t\t<AccordionContent>\n\t\t\t\t\tYes. Smooth expand and collapse transitions are built in.\n\t\t\t\t</AccordionContent>\n\t\t\t</AccordionItem>\n\t\t\t<AccordionItem disabled>\n\t\t\t\t<AccordionTrigger>Can it be disabled?</AccordionTrigger>\n\t\t\t</AccordionItem>\n\t\t</Accordion>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/accordion/accordion-demo")
		),
		title: "accordion-demo",
		category: "accordion",
		path: "src/components/demos/accordion/accordion-demo.tsx",
	},
	"alert-dialog-demo": {
		source:
			'import {\n\tAlertDialog,\n\tAlertDialogClose,\n\tAlertDialogContent,\n\tAlertDialogDescription,\n\tAlertDialogFooter,\n\tAlertDialogHeader,\n\tAlertDialogTitle,\n\tAlertDialogTrigger,\n} from "@/components/ui/alert-dialog"\nimport { Button } from "@/components/ui/button"\n\nexport default function AlertDialogDemo() {\n\treturn (\n\t\t<AlertDialog>\n\t\t\t<AlertDialogTrigger\n\t\t\t\trender={(props) => (\n\t\t\t\t\t<Button {...props} variant="destructive">\n\t\t\t\t\t\tDelete Post\n\t\t\t\t\t</Button>\n\t\t\t\t)}\n\t\t\t/>\n\t\t\t<AlertDialogContent className="space-y-4">\n\t\t\t\t<AlertDialogHeader>\n\t\t\t\t\t<AlertDialogTitle>Are you sure?</AlertDialogTitle>\n\t\t\t\t\t<AlertDialogDescription>\n\t\t\t\t\t\tThis action cannot be undone. Your post will be permanently deleted.\n\t\t\t\t\t</AlertDialogDescription>\n\t\t\t\t</AlertDialogHeader>\n\t\t\t\t<AlertDialogFooter>\n\t\t\t\t\t<AlertDialogClose\n\t\t\t\t\t\trender={(props) => (\n\t\t\t\t\t\t\t<Button {...props} size="sm" variant="ghost">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t)}\n\t\t\t\t\t/>\n\t\t\t\t\t<Button size="sm" variant="destructive">\n\t\t\t\t\t\tDelete\n\t\t\t\t\t</Button>\n\t\t\t\t</AlertDialogFooter>\n\t\t\t</AlertDialogContent>\n\t\t</AlertDialog>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/alert-dialog/alert-dialog-demo")
		),
		title: "alert-dialog-demo",
		category: "alert-dialog",
		path: "src/components/demos/alert-dialog/alert-dialog-demo.tsx",
	},
	"alert-danger": {
		source:
			'import { XCircleIcon } from "lucide-react"\n\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"\n\nexport default function AlertDanger() {\n\treturn (\n\t\t<Alert variant="danger">\n\t\t\t<XCircleIcon />\n\t\t\t<AlertTitle>Your subscription has been canceled</AlertTitle>\n\t\t\t<AlertDescription>\n\t\t\t\tYour access to premium features will end in 30 days. You can reactivate\n\t\t\t\tyour subscription anytime.\n\t\t\t</AlertDescription>\n\t\t</Alert>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/alert/alert-danger")
		),
		title: "alert-danger",
		category: "alert",
		path: "src/components/demos/alert/alert-danger.tsx",
	},
	"alert-demo": {
		source:
			'import { AlertTriangleIcon } from "lucide-react"\n\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"\n\nexport default function AlertDemo() {\n\treturn (\n\t\t<Alert>\n\t\t\t<AlertTriangleIcon />\n\t\t\t<AlertTitle>No Internet Connection</AlertTitle>\n\t\t\t<AlertDescription>\n\t\t\t\tPlease check your internet connection and try again.\n\t\t\t</AlertDescription>\n\t\t</Alert>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/alert/alert-demo")),
		title: "alert-demo",
		category: "alert",
		path: "src/components/demos/alert/alert-demo.tsx",
	},
	"alert-info": {
		source:
			'import { InfoIcon } from "lucide-react"\n\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"\n\nexport default function AlertInfo() {\n\treturn (\n\t\t<Alert variant="info">\n\t\t\t<InfoIcon />\n\t\t\t<AlertTitle>Browser Update Available</AlertTitle>\n\t\t\t<AlertDescription>\n\t\t\t\tA new version of your browser is available. Updating your browser\n\t\t\t\tensures better security and performance.\n\t\t\t</AlertDescription>\n\t\t</Alert>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/alert/alert-info")),
		title: "alert-info",
		category: "alert",
		path: "src/components/demos/alert/alert-info.tsx",
	},
	"alert-success": {
		source:
			'import { CircleCheckIcon } from "lucide-react"\n\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"\n\nexport default function AlertSuccess() {\n\treturn (\n\t\t<Alert variant="success">\n\t\t\t<CircleCheckIcon />\n\t\t\t<AlertTitle>Your account has been created</AlertTitle>\n\t\t\t<AlertDescription>\n\t\t\t\tYou can now sign in with your new account credentials.\n\t\t\t</AlertDescription>\n\t\t</Alert>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/alert/alert-success")
		),
		title: "alert-success",
		category: "alert",
		path: "src/components/demos/alert/alert-success.tsx",
	},
	"alert-warning": {
		source:
			'import { AlertTriangleIcon } from "lucide-react"\n\nimport { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"\n\nexport default function AlertWarning() {\n\treturn (\n\t\t<Alert variant="warning">\n\t\t\t<AlertTriangleIcon />\n\t\t\t<AlertTitle>Your session is about to expire</AlertTitle>\n\t\t\t<AlertDescription>\n\t\t\t\tYou will be logged out in 5 minutes. Please save your work and refresh\n\t\t\t\tthe page.\n\t\t\t</AlertDescription>\n\t\t</Alert>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/alert/alert-warning")
		),
		title: "alert-warning",
		category: "alert",
		path: "src/components/demos/alert/alert-warning.tsx",
	},
	"alert-with-action": {
		source:
			'import { AlertTriangleIcon } from "lucide-react"\n\nimport { Alert, AlertTitle } from "@/components/ui/alert"\nimport { Button } from "@/components/ui/button"\n\nexport default function AlertWithAction() {\n\treturn (\n\t\t<Alert>\n\t\t\t<AlertTriangleIcon />\n\t\t\t<AlertTitle className="line-clamp-1 max-w-[calc(100%-4rem)] overflow-ellipsis">\n\t\t\t\tNo Internet Connection\n\t\t\t</AlertTitle>\n\t\t\t<Button\n\t\t\t\tclassName="absolute top-1/2 right-4 h-6 -translate-y-1/2 text-xs shadow-none"\n\t\t\t\tsize="sm"\n\t\t\t\tvariant="outline"\n\t\t\t>\n\t\t\t\tTry Again\n\t\t\t</Button>\n\t\t</Alert>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/alert/alert-with-action")
		),
		title: "alert-with-action",
		category: "alert",
		path: "src/components/demos/alert/alert-with-action.tsx",
	},
	"aspect-ratio-demo": {
		source:
			'import { AspectRatio } from "@/components/ui/aspect-ratio"\n\nexport default function AspectRatioDemo() {\n\treturn (\n\t\t<AspectRatio\n\t\t\tratio={16 / 9}\n\t\t\tclassName="bg-card text-card-foreground rounded-lg border"\n\t\t>\n\t\t\t<div className="flex size-full items-center justify-center font-medium">\n\t\t\t\tContent\n\t\t\t</div>\n\t\t</AspectRatio>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/aspect-ratio/aspect-ratio-demo")
		),
		title: "aspect-ratio-demo",
		category: "aspect-ratio",
		path: "src/components/demos/aspect-ratio/aspect-ratio-demo.tsx",
	},
	"autocomplete-async": {
		source:
			'"use client"\n\nimport * as React from "react"\nimport { Loader2Icon } from "lucide-react"\n\nimport {\n\tAutocomplete,\n\tAutocompleteContent,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n\tAutocompleteStatus,\n\tuseFilter,\n} from "@/components/ui/autocomplete"\nimport { Label } from "@/components/ui/label"\n\nexport default function AutocompleteAsync() {\n\tconst [searchValue, setSearchValue] = React.useState("")\n\tconst [isLoading, setIsLoading] = React.useState(false)\n\tconst [searchResults, setSearchResults] = React.useState<Book[]>([])\n\tconst [error, setError] = React.useState<string | null>(null)\n\n\tconst { contains } = useFilter({ sensitivity: "base" })\n\n\tReact.useEffect(() => {\n\t\tif (!searchValue) {\n\t\t\tsetSearchResults([])\n\t\t\tsetIsLoading(false)\n\t\t\treturn undefined\n\t\t}\n\n\t\tsetIsLoading(true)\n\t\tsetError(null)\n\n\t\tlet ignore = false\n\n\t\tasync function fetchBooks() {\n\t\t\ttry {\n\t\t\t\tconst results = await searchBooks(searchValue, contains)\n\t\t\t\tif (!ignore) {\n\t\t\t\t\tsetSearchResults(results)\n\t\t\t\t}\n\t\t\t} catch {\n\t\t\t\tif (!ignore) {\n\t\t\t\t\tsetError("Failed to find books. Please try again.")\n\t\t\t\t\tsetSearchResults([])\n\t\t\t\t}\n\t\t\t} finally {\n\t\t\t\tif (!ignore) {\n\t\t\t\t\tsetIsLoading(false)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tconst timeoutId = setTimeout(fetchBooks, 300)\n\n\t\treturn () => {\n\t\t\tclearTimeout(timeoutId)\n\t\t\tignore = true\n\t\t}\n\t}, [searchValue, contains])\n\n\tlet status: React.ReactNode = `${searchResults.length} book${\n\t\tsearchResults.length === 1 ? "" : "s"\n\t} found`\n\tif (isLoading) {\n\t\tstatus = (\n\t\t\t<React.Fragment>\n\t\t\t\t<Loader2Icon className="size-4 animate-spin" />\n\t\t\t\tSearching books...\n\t\t\t</React.Fragment>\n\t\t)\n\t} else if (error) {\n\t\tstatus = error\n\t} else if (searchResults.length === 0 && searchValue) {\n\t\tstatus = `No books found for "${searchValue}"`\n\t}\n\n\tconst shouldRenderPopup = searchValue !== ""\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Autocomplete\n\t\t\t\titems={searchResults}\n\t\t\t\tvalue={searchValue}\n\t\t\t\tonValueChange={setSearchValue}\n\t\t\t\titemToStringValue={(item: unknown) => (item as Book).title}\n\t\t\t\tfilter={null}\n\t\t\t>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="search-books">Search books</Label>\n\t\t\t\t\t<AutocompleteInput\n\t\t\t\t\t\tid="search-books"\n\t\t\t\t\t\tplaceholder="e.g. Hamlet or Shakespeare or 1603"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\n\t\t\t\t{shouldRenderPopup && (\n\t\t\t\t\t<AutocompleteContent aria-busy={isLoading || undefined}>\n\t\t\t\t\t\t<AutocompleteStatus>{status}</AutocompleteStatus>\n\t\t\t\t\t\t<AutocompleteList>\n\t\t\t\t\t\t\t{(book: Book) => (\n\t\t\t\t\t\t\t\t<AutocompleteItem key={book.id} value={book}>\n\t\t\t\t\t\t\t\t\t<div className="flex w-full flex-col gap-1">\n\t\t\t\t\t\t\t\t\t\t<div className="font-medium">{book.title}</div>\n\t\t\t\t\t\t\t\t\t\t<div className="text-muted-foreground text-xs">\n\t\t\t\t\t\t\t\t\t\t\tby {book.author}, {book.publishedYear}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t</AutocompleteList>\n\t\t\t\t\t</AutocompleteContent>\n\t\t\t\t)}\n\t\t\t</Autocomplete>\n\t\t</div>\n\t)\n}\n\ninterface Book {\n\tid: string\n\ttitle: string\n\tauthor: string\n\tpublishedYear: number\n}\n\nconst books: Book[] = [\n\t{\n\t\tid: "1",\n\t\ttitle: "Pride and Prejudice",\n\t\tauthor: "Jane Austen",\n\t\tpublishedYear: 1813,\n\t},\n\t{\n\t\tid: "2",\n\t\ttitle: "To Kill a Mockingbird",\n\t\tauthor: "Harper Lee",\n\t\tpublishedYear: 1960,\n\t},\n\t{ id: "3", title: "1984", author: "George Orwell", publishedYear: 1949 },\n\t{\n\t\tid: "4",\n\t\ttitle: "The Great Gatsby",\n\t\tauthor: "F. Scott Fitzgerald",\n\t\tpublishedYear: 1925,\n\t},\n\t{\n\t\tid: "5",\n\t\ttitle: "Jane Eyre",\n\t\tauthor: "Charlotte Brontë",\n\t\tpublishedYear: 1847,\n\t},\n\t{\n\t\tid: "6",\n\t\ttitle: "Wuthering Heights",\n\t\tauthor: "Emily Brontë",\n\t\tpublishedYear: 1847,\n\t},\n\t{\n\t\tid: "7",\n\t\ttitle: "The Catcher in the Rye",\n\t\tauthor: "J.D. Salinger",\n\t\tpublishedYear: 1951,\n\t},\n\t{\n\t\tid: "8",\n\t\ttitle: "Lord of the Flies",\n\t\tauthor: "William Golding",\n\t\tpublishedYear: 1954,\n\t},\n\t{\n\t\tid: "9",\n\t\ttitle: "Of Mice and Men",\n\t\tauthor: "John Steinbeck",\n\t\tpublishedYear: 1937,\n\t},\n\t{\n\t\tid: "10",\n\t\ttitle: "Romeo and Juliet",\n\t\tauthor: "William Shakespeare",\n\t\tpublishedYear: 1597,\n\t},\n\t{\n\t\tid: "11",\n\t\ttitle: "The Adventures of Huckleberry Finn",\n\t\tauthor: "Mark Twain",\n\t\tpublishedYear: 1884,\n\t},\n\t{\n\t\tid: "12",\n\t\ttitle: "The Lord of the Rings",\n\t\tauthor: "J.R.R. Tolkien",\n\t\tpublishedYear: 1954,\n\t},\n\t{\n\t\tid: "13",\n\t\ttitle: "Animal Farm",\n\t\tauthor: "George Orwell",\n\t\tpublishedYear: 1945,\n\t},\n\t{\n\t\tid: "14",\n\t\ttitle: "Brave New World",\n\t\tauthor: "Aldous Huxley",\n\t\tpublishedYear: 1932,\n\t},\n\t{\n\t\tid: "15",\n\t\ttitle: "The Picture of Dorian Gray",\n\t\tauthor: "Oscar Wilde",\n\t\tpublishedYear: 1890,\n\t},\n\t{\n\t\tid: "16",\n\t\ttitle: "Crime and Punishment",\n\t\tauthor: "Fyodor Dostoevsky",\n\t\tpublishedYear: 1866,\n\t},\n\t{\n\t\tid: "17",\n\t\ttitle: "The Brothers Karamazov",\n\t\tauthor: "Fyodor Dostoevsky",\n\t\tpublishedYear: 1880,\n\t},\n\t{\n\t\tid: "18",\n\t\ttitle: "War and Peace",\n\t\tauthor: "Leo Tolstoy",\n\t\tpublishedYear: 1869,\n\t},\n\t{\n\t\tid: "19",\n\t\ttitle: "Anna Karenina",\n\t\tauthor: "Leo Tolstoy",\n\t\tpublishedYear: 1877,\n\t},\n\t{ id: "20", title: "The Odyssey", author: "Homer", publishedYear: -800 },\n\t{ id: "21", title: "The Iliad", author: "Homer", publishedYear: -750 },\n\t{\n\t\tid: "22",\n\t\ttitle: "Hamlet",\n\t\tauthor: "William Shakespeare",\n\t\tpublishedYear: 1603,\n\t},\n\t{\n\t\tid: "23",\n\t\ttitle: "Macbeth",\n\t\tauthor: "William Shakespeare",\n\t\tpublishedYear: 1623,\n\t},\n\t{\n\t\tid: "24",\n\t\ttitle: "One Hundred Years of Solitude",\n\t\tauthor: "Gabriel García Márquez",\n\t\tpublishedYear: 1967,\n\t},\n\t{\n\t\tid: "25",\n\t\ttitle: "The Divine Comedy",\n\t\tauthor: "Dante Alighieri",\n\t\tpublishedYear: 1320,\n\t},\n\t{\n\t\tid: "26",\n\t\ttitle: "Don Quixote",\n\t\tauthor: "Miguel de Cervantes",\n\t\tpublishedYear: 1605,\n\t},\n\t{\n\t\tid: "27",\n\t\ttitle: "Moby Dick",\n\t\tauthor: "Herman Melville",\n\t\tpublishedYear: 1851,\n\t},\n\t{\n\t\tid: "28",\n\t\ttitle: "The Scarlet Letter",\n\t\tauthor: "Nathaniel Hawthorne",\n\t\tpublishedYear: 1850,\n\t},\n\t{\n\t\tid: "29",\n\t\ttitle: "The Canterbury Tales",\n\t\tauthor: "Geoffrey Chaucer",\n\t\tpublishedYear: 1400,\n\t},\n\t{\n\t\tid: "30",\n\t\ttitle: "Great Expectations",\n\t\tauthor: "Charles Dickens",\n\t\tpublishedYear: 1861,\n\t},\n\t{\n\t\tid: "31",\n\t\ttitle: "A Tale of Two Cities",\n\t\tauthor: "Charles Dickens",\n\t\tpublishedYear: 1859,\n\t},\n\t{\n\t\tid: "32",\n\t\ttitle: "Oliver Twist",\n\t\tauthor: "Charles Dickens",\n\t\tpublishedYear: 1838,\n\t},\n\t{\n\t\tid: "33",\n\t\ttitle: "David Copperfield",\n\t\tauthor: "Charles Dickens",\n\t\tpublishedYear: 1850,\n\t},\n\t{\n\t\tid: "34",\n\t\ttitle: "Little Women",\n\t\tauthor: "Louisa May Alcott",\n\t\tpublishedYear: 1868,\n\t},\n\t{\n\t\tid: "35",\n\t\ttitle: "The Count of Monte Cristo",\n\t\tauthor: "Alexandre Dumas",\n\t\tpublishedYear: 1844,\n\t},\n\t{\n\t\tid: "36",\n\t\ttitle: "Les Misérables",\n\t\tauthor: "Victor Hugo",\n\t\tpublishedYear: 1862,\n\t},\n\t{\n\t\tid: "37",\n\t\ttitle: "The Hunchback of Notre-Dame",\n\t\tauthor: "Victor Hugo",\n\t\tpublishedYear: 1831,\n\t},\n\t{\n\t\tid: "38",\n\t\ttitle: "Madame Bovary",\n\t\tauthor: "Gustave Flaubert",\n\t\tpublishedYear: 1857,\n\t},\n\t{\n\t\tid: "39",\n\t\ttitle: "The Stranger",\n\t\tauthor: "Albert Camus",\n\t\tpublishedYear: 1942,\n\t},\n\t{\n\t\tid: "40",\n\t\ttitle: "The Metamorphosis",\n\t\tauthor: "Franz Kafka",\n\t\tpublishedYear: 1915,\n\t},\n]\n\nasync function searchBooks(\n\tquery: string,\n\tfilter: (item: string, query: string) => boolean\n): Promise<Book[]> {\n\t// Simulate network delay\n\tawait new Promise((resolve) => {\n\t\tsetTimeout(resolve, Math.random() * 400 + 200)\n\t})\n\n\t// Simulate occasional network errors (1% chance)\n\tif (Math.random() < 0.01 || query === "will_error") {\n\t\tthrow new Error("Network error")\n\t}\n\n\treturn books.filter(\n\t\t(book) =>\n\t\t\tfilter(book.title, query) ||\n\t\t\tfilter(book.author, query) ||\n\t\t\tfilter(book.publishedYear.toString(), query)\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-async")
		),
		title: "autocomplete-async",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-async.tsx",
	},
	"autocomplete-autohighlight": {
		source:
			'import * as React from "react"\n\nimport {\n\tAutocomplete,\n\tAutocompleteContent,\n\tAutocompleteEmpty,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n} from "@/components/ui/autocomplete"\nimport { Label } from "@/components/ui/label"\n\nexport default function AutocompleteAutoHighlight() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Autocomplete items={tags} autoHighlight>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="search-tags-autohighlight">Search tags</Label>\n\t\t\t\t\t<AutocompleteInput\n\t\t\t\t\t\tid="search-tags-autohighlight"\n\t\t\t\t\t\tplaceholder="e.g. feature, fix, bug"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<AutocompleteContent>\n\t\t\t\t\t<AutocompleteEmpty>No tags found.</AutocompleteEmpty>\n\t\t\t\t\t<AutocompleteList>\n\t\t\t\t\t\t{(tag: Tag) => (\n\t\t\t\t\t\t\t<AutocompleteItem key={tag.id} value={tag}>\n\t\t\t\t\t\t\t\t{tag.value}\n\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t)}\n\t\t\t\t\t</AutocompleteList>\n\t\t\t\t</AutocompleteContent>\n\t\t\t</Autocomplete>\n\t\t</div>\n\t)\n}\n\ninterface Tag {\n\tid: string\n\tvalue: string\n}\n\nconst tags: Tag[] = [\n\t{ id: "t1", value: "feature" },\n\t{ id: "t2", value: "fix" },\n\t{ id: "t3", value: "bug" },\n\t{ id: "t4", value: "docs" },\n\t{ id: "t5", value: "internal" },\n\t{ id: "t6", value: "mobile" },\n\t{ id: "c-accordion", value: "component: accordion" },\n\t{ id: "c-alert-dialog", value: "component: alert dialog" },\n\t{ id: "c-autocomplete", value: "component: autocomplete" },\n\t{ id: "c-avatar", value: "component: avatar" },\n\t{ id: "c-checkbox", value: "component: checkbox" },\n\t{ id: "c-checkbox-group", value: "component: checkbox group" },\n\t{ id: "c-collapsible", value: "component: collapsible" },\n\t{ id: "c-combobox", value: "component: combobox" },\n\t{ id: "c-context-menu", value: "component: context menu" },\n\t{ id: "c-dialog", value: "component: dialog" },\n\t{ id: "c-field", value: "component: field" },\n\t{ id: "c-form", value: "component: form" },\n\t{ id: "c-input", value: "component: input" },\n\t{ id: "c-popover", value: "component: popover" },\n\t{ id: "c-select", value: "component: select" },\n\t{ id: "c-switch", value: "component: switch" },\n\t{ id: "c-tabs", value: "component: tabs" },\n\t{ id: "c-tooltip", value: "component: tooltip" },\n]\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-autohighlight")
		),
		title: "autocomplete-autohighlight",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-autohighlight.tsx",
	},
	"autocomplete-demo": {
		source:
			'import * as React from "react"\n\nimport {\n\tAutocomplete,\n\tAutocompleteContent,\n\tAutocompleteEmpty,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n} from "@/components/ui/autocomplete"\nimport { Label } from "@/components/ui/label"\n\nexport default function AutocompleteDemo() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Autocomplete items={tags}>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="search-tags">Search tags</Label>\n\t\t\t\t\t<AutocompleteInput\n\t\t\t\t\t\tid="search-tags"\n\t\t\t\t\t\tplaceholder="e.g. feature, fix, bug"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<AutocompleteContent>\n\t\t\t\t\t<AutocompleteEmpty>No tags found.</AutocompleteEmpty>\n\t\t\t\t\t<AutocompleteList>\n\t\t\t\t\t\t{(tag: Tag) => (\n\t\t\t\t\t\t\t<AutocompleteItem key={tag.id} value={tag}>\n\t\t\t\t\t\t\t\t{tag.value}\n\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t)}\n\t\t\t\t\t</AutocompleteList>\n\t\t\t\t</AutocompleteContent>\n\t\t\t</Autocomplete>\n\t\t</div>\n\t)\n}\n\ninterface Tag {\n\tid: string\n\tvalue: string\n}\n\nconst tags: Tag[] = [\n\t{ id: "t1", value: "feature" },\n\t{ id: "t2", value: "fix" },\n\t{ id: "t3", value: "bug" },\n\t{ id: "t4", value: "docs" },\n\t{ id: "t5", value: "internal" },\n\t{ id: "t6", value: "mobile" },\n\t{ id: "c-accordion", value: "component: accordion" },\n\t{ id: "c-alert-dialog", value: "component: alert dialog" },\n\t{ id: "c-autocomplete", value: "component: autocomplete" },\n\t{ id: "c-avatar", value: "component: avatar" },\n\t{ id: "c-checkbox", value: "component: checkbox" },\n\t{ id: "c-checkbox-group", value: "component: checkbox group" },\n\t{ id: "c-collapsible", value: "component: collapsible" },\n\t{ id: "c-combobox", value: "component: combobox" },\n\t{ id: "c-context-menu", value: "component: context menu" },\n\t{ id: "c-dialog", value: "component: dialog" },\n\t{ id: "c-field", value: "component: field" },\n\t{ id: "c-form", value: "component: form" },\n\t{ id: "c-input", value: "component: input" },\n\t{ id: "c-popover", value: "component: popover" },\n\t{ id: "c-select", value: "component: select" },\n\t{ id: "c-switch", value: "component: switch" },\n\t{ id: "c-tabs", value: "component: tabs" },\n\t{ id: "c-tooltip", value: "component: tooltip" },\n]\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-demo")
		),
		title: "autocomplete-demo",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-demo.tsx",
	},
	"autocomplete-fuzzy-matcher": {
		source:
			'"use client"\n\nimport * as React from "react"\nimport { matchSorter } from "match-sorter"\n\nimport {\n\tAutocomplete,\n\tAutocompleteContent,\n\tAutocompleteEmpty,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n\tAutocompleteValue,\n} from "@/components/ui/autocomplete"\nimport { Label } from "@/components/ui/label"\n\nexport default function AutocompleteFuzzyMatcher() {\n\tconst fuzzyFilter = React.useCallback(\n\t\t(item: unknown, query: string): boolean => {\n\t\t\tconst doc = item as DevDoc\n\t\t\tif (!query) {\n\t\t\t\treturn true\n\t\t\t}\n\n\t\t\tconst results = matchSorter([doc], query, {\n\t\t\t\tkeys: ["title", "description"],\n\t\t\t\tthreshold: matchSorter.rankings.MATCHES,\n\t\t\t})\n\n\t\t\treturn results.length > 0\n\t\t},\n\t\t[]\n\t)\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Autocomplete\n\t\t\t\titems={devDocs}\n\t\t\t\tfilter={fuzzyFilter}\n\t\t\t\titemToStringValue={(item: unknown) => (item as DevDoc).title}\n\t\t\t>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="search-docs">Search developer docs</Label>\n\t\t\t\t\t<AutocompleteInput\n\t\t\t\t\t\tid="search-docs"\n\t\t\t\t\t\tplaceholder="e.g. react hooks, api"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<AutocompleteContent className="w-80">\n\t\t\t\t\t<AutocompleteEmpty>\n\t\t\t\t\t\tNo docs found for &quot;\n\t\t\t\t\t\t<AutocompleteValue />\n\t\t\t\t\t\t&quot;\n\t\t\t\t\t</AutocompleteEmpty>\n\t\t\t\t\t<AutocompleteList>\n\t\t\t\t\t\t{(doc: DevDoc) => (\n\t\t\t\t\t\t\t<AutocompleteItem key={doc.id} value={doc}>\n\t\t\t\t\t\t\t\t<AutocompleteValue>\n\t\t\t\t\t\t\t\t\t{(value) => (\n\t\t\t\t\t\t\t\t\t\t<div className="flex w-full flex-col gap-1">\n\t\t\t\t\t\t\t\t\t\t\t<div className="text-sm font-medium">\n\t\t\t\t\t\t\t\t\t\t\t\t{highlightText(doc.title, value)}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div className="text-muted-foreground text-xs leading-relaxed">\n\t\t\t\t\t\t\t\t\t\t\t\t{highlightText(doc.description, value)}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t</AutocompleteValue>\n\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t)}\n\t\t\t\t\t</AutocompleteList>\n\t\t\t\t</AutocompleteContent>\n\t\t\t</Autocomplete>\n\t\t</div>\n\t)\n}\n\nfunction highlightText(text: string, query: string): React.ReactNode {\n\tconst trimmed = query.trim()\n\tif (!trimmed) {\n\t\treturn text\n\t}\n\n\tconst limited = trimmed.slice(0, 100)\n\tconst escaped = limited.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")\n\tconst regex = new RegExp(`(${escaped})`, "gi")\n\n\treturn text.split(regex).map((part, idx) =>\n\t\tregex.test(part) ? (\n\t\t\t<mark key={idx} className="bg-transparent font-medium text-yellow-300">\n\t\t\t\t{part}\n\t\t\t</mark>\n\t\t) : (\n\t\t\tpart\n\t\t)\n\t)\n}\n\ninterface DevDoc {\n\tid: string\n\ttitle: string\n\tdescription: string\n}\n\nconst devDocs: DevDoc[] = [\n\t{\n\t\tid: "1",\n\t\ttitle: "React Hooks Guide",\n\t\tdescription:\n\t\t\t"Learn how to use React Hooks like useState, useEffect, and custom hooks to manage state and side effects in functional components.",\n\t},\n\t{\n\t\tid: "2",\n\t\ttitle: "JavaScript Array Methods",\n\t\tdescription:\n\t\t\t"Master array methods like map, filter, reduce, and forEach for functional programming in JavaScript.",\n\t},\n\t{\n\t\tid: "3",\n\t\ttitle: "CSS Flexbox Layout",\n\t\tdescription:\n\t\t\t"Complete guide to CSS Flexbox for creating responsive and flexible layouts with ease.",\n\t},\n\t{\n\t\tid: "4",\n\t\ttitle: "TypeScript Interfaces",\n\t\tdescription:\n\t\t\t"Understanding TypeScript interfaces and type definitions for better code safety and documentation.",\n\t},\n\t{\n\t\tid: "5",\n\t\ttitle: "API Design Best Practices",\n\t\tdescription:\n\t\t\t"Learn how to design RESTful APIs that are intuitive, scalable, and maintainable.",\n\t},\n\t{\n\t\tid: "6",\n\t\ttitle: "React Performance Optimization",\n\t\tdescription:\n\t\t\t"Tips and techniques for optimizing React application performance using memoization and lazy loading.",\n\t},\n\t{\n\t\tid: "7",\n\t\ttitle: "Git Workflow Strategies",\n\t\tdescription:\n\t\t\t"Understanding different Git workflows like GitFlow, GitHub Flow, and trunk-based development.",\n\t},\n\t{\n\t\tid: "8",\n\t\ttitle: "Node.js Express Server",\n\t\tdescription:\n\t\t\t"Building RESTful APIs with Node.js and Express framework for scalable backend applications.",\n\t},\n\t{\n\t\tid: "9",\n\t\ttitle: "Database Indexing",\n\t\tdescription:\n\t\t\t"How to use database indexes effectively to improve query performance and reduce response times.",\n\t},\n\t{\n\t\tid: "10",\n\t\ttitle: "Docker Containerization",\n\t\tdescription:\n\t\t\t"Learn how to containerize applications with Docker for consistent deployment across environments.",\n\t},\n\t{\n\t\tid: "11",\n\t\ttitle: "Authentication & Authorization",\n\t\tdescription:\n\t\t\t"Implementing secure authentication and authorization using JWT tokens and OAuth protocols.",\n\t},\n\t{\n\t\tid: "12",\n\t\ttitle: "Testing Strategies",\n\t\tdescription:\n\t\t\t"Comprehensive guide to unit testing, integration testing, and end-to-end testing practices.",\n\t},\n\t{\n\t\tid: "13",\n\t\ttitle: "Webpack Configuration",\n\t\tdescription:\n\t\t\t"Optimizing Webpack configuration for production builds and development workflows.",\n\t},\n\t{\n\t\tid: "14",\n\t\ttitle: "Microservices Architecture",\n\t\tdescription:\n\t\t\t"Designing and implementing microservices architecture for scalable distributed systems.",\n\t},\n\t{\n\t\tid: "15",\n\t\ttitle: "GraphQL API Development",\n\t\tdescription:\n\t\t\t"Building efficient GraphQL APIs with type safety and flexible data fetching capabilities.",\n\t},\n]\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-fuzzy-matcher")
		),
		title: "autocomplete-fuzzy-matcher",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-fuzzy-matcher.tsx",
	},
	"autocomplete-groupped": {
		source:
			'import * as React from "react"\n\nimport {\n\tAutocomplete,\n\tAutocompleteCollection,\n\tAutocompleteContent,\n\tAutocompleteEmpty,\n\tAutocompleteGroup,\n\tAutocompleteGroupLabel,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n\tAutocompleteSeparator,\n\tAutocompleteValue,\n} from "@/components/ui/autocomplete"\nimport { Label } from "@/components/ui/label"\n\nexport default function AutocompleteGroupped() {\n\t// Filter and group items by category\n\tconst groupedItems = React.useMemo(() => {\n\t\tconst groups: { [key: string]: Item[] } = items.reduce(\n\t\t\t(acc, item) => {\n\t\t\t\tacc[item.category] = acc[item.category] || []\n\t\t\t\tacc[item.category].push(item)\n\t\t\t\treturn acc\n\t\t\t},\n\t\t\t{} as { [key: string]: Item[] }\n\t\t)\n\n\t\tconst order = [\n\t\t\t"Frontend Frameworks",\n\t\t\t"Backend Runtime",\n\t\t\t"Backend Frameworks",\n\t\t\t"Meta Frameworks",\n\t\t]\n\n\t\treturn order.map((value) => ({ value, items: groups[value] ?? [] }))\n\t}, [])\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Autocomplete items={groupedItems}>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="search-technologies">Search technologies</Label>\n\t\t\t\t\t<AutocompleteInput\n\t\t\t\t\t\tid="search-technologies"\n\t\t\t\t\t\tplaceholder="e.g. React, Vue, Angular"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<AutocompleteContent>\n\t\t\t\t\t<AutocompleteEmpty>\n\t\t\t\t\t\tNo technologies found for &quot;\n\t\t\t\t\t\t<AutocompleteValue />\n\t\t\t\t\t\t&quot;\n\t\t\t\t\t</AutocompleteEmpty>\n\t\t\t\t\t<AutocompleteList>\n\t\t\t\t\t\t{(group: Group, index: number) => (\n\t\t\t\t\t\t\t<React.Fragment key={group.value}>\n\t\t\t\t\t\t\t\t{index > 0 && <AutocompleteSeparator />}\n\t\t\t\t\t\t\t\t<AutocompleteGroup items={group.items}>\n\t\t\t\t\t\t\t\t\t<AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>\n\t\t\t\t\t\t\t\t\t<AutocompleteCollection>\n\t\t\t\t\t\t\t\t\t\t{(item: Item) => (\n\t\t\t\t\t\t\t\t\t\t\t<AutocompleteItem key={item.id} value={item.value}>\n\t\t\t\t\t\t\t\t\t\t\t\t{item.value}\n\t\t\t\t\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t\t</AutocompleteCollection>\n\t\t\t\t\t\t\t\t</AutocompleteGroup>\n\t\t\t\t\t\t\t</React.Fragment>\n\t\t\t\t\t\t)}\n\t\t\t\t\t</AutocompleteList>\n\t\t\t\t</AutocompleteContent>\n\t\t\t</Autocomplete>\n\t\t</div>\n\t)\n}\n\ninterface Group {\n\tvalue: string\n\titems: Item[]\n}\n\ninterface Item {\n\tid: string\n\tvalue: string\n\tcategory: string\n}\n\nconst items: Item[] = [\n\t{ id: "react", value: "React", category: "Frontend Frameworks" },\n\t{ id: "vue", value: "Vue.js", category: "Frontend Frameworks" },\n\t{ id: "angular", value: "Angular", category: "Frontend Frameworks" },\n\t{ id: "svelte", value: "Svelte", category: "Frontend Frameworks" },\n\t{ id: "nodejs", value: "Node.js", category: "Backend Runtime" },\n\t{ id: "deno", value: "Deno", category: "Backend Runtime" },\n\t{ id: "bun", value: "Bun", category: "Backend Runtime" },\n\t{ id: "express", value: "Express.js", category: "Backend Frameworks" },\n\t{ id: "fastify", value: "Fastify", category: "Backend Frameworks" },\n\t{ id: "nestjs", value: "NestJS", category: "Backend Frameworks" },\n\t{ id: "nextjs", value: "Next.js", category: "Meta Frameworks" },\n\t{ id: "nuxt", value: "Nuxt.js", category: "Meta Frameworks" },\n\t{ id: "remix", value: "Remix", category: "Meta Frameworks" },\n]\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-groupped")
		),
		title: "autocomplete-groupped",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-groupped.tsx",
	},
	"autocomplete-inline": {
		source:
			'import * as React from "react"\n\nimport {\n\tAutocomplete,\n\tAutocompleteContent,\n\tAutocompleteEmpty,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n} from "@/components/ui/autocomplete"\nimport { Label } from "@/components/ui/label"\n\nexport default function AutocompleteInline() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Autocomplete items={tags} mode="both">\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="search-tags-inline">Search tags</Label>\n\t\t\t\t\t<AutocompleteInput\n\t\t\t\t\t\tid="search-tags-inline"\n\t\t\t\t\t\tplaceholder="e.g. feature, fix, bug"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<AutocompleteContent>\n\t\t\t\t\t<AutocompleteEmpty>No tags found.</AutocompleteEmpty>\n\t\t\t\t\t<AutocompleteList>\n\t\t\t\t\t\t{(tag: Tag) => (\n\t\t\t\t\t\t\t<AutocompleteItem key={tag.id} value={tag}>\n\t\t\t\t\t\t\t\t{tag.value}\n\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t)}\n\t\t\t\t\t</AutocompleteList>\n\t\t\t\t</AutocompleteContent>\n\t\t\t</Autocomplete>\n\t\t</div>\n\t)\n}\n\ninterface Tag {\n\tid: string\n\tvalue: string\n}\n\nconst tags: Tag[] = [\n\t{ id: "t1", value: "feature" },\n\t{ id: "t2", value: "fix" },\n\t{ id: "t3", value: "bug" },\n\t{ id: "t4", value: "docs" },\n\t{ id: "t5", value: "internal" },\n\t{ id: "t6", value: "mobile" },\n\t{ id: "c-accordion", value: "component: accordion" },\n\t{ id: "c-alert-dialog", value: "component: alert dialog" },\n\t{ id: "c-autocomplete", value: "component: autocomplete" },\n\t{ id: "c-avatar", value: "component: avatar" },\n\t{ id: "c-checkbox", value: "component: checkbox" },\n\t{ id: "c-checkbox-group", value: "component: checkbox group" },\n\t{ id: "c-collapsible", value: "component: collapsible" },\n\t{ id: "c-combobox", value: "component: combobox" },\n\t{ id: "c-context-menu", value: "component: context menu" },\n\t{ id: "c-dialog", value: "component: dialog" },\n\t{ id: "c-field", value: "component: field" },\n\t{ id: "c-form", value: "component: form" },\n\t{ id: "c-input", value: "component: input" },\n\t{ id: "c-popover", value: "component: popover" },\n\t{ id: "c-select", value: "component: select" },\n\t{ id: "c-switch", value: "component: switch" },\n\t{ id: "c-tabs", value: "component: tabs" },\n\t{ id: "c-tooltip", value: "component: tooltip" },\n]\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-inline")
		),
		title: "autocomplete-inline",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-inline.tsx",
	},
	"autocomplete-limit-results": {
		source:
			'import * as React from "react"\n\nimport {\n\tAutocomplete,\n\tAutocompleteContent,\n\tAutocompleteEmpty,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n\tAutocompleteStatus,\n\tuseFilter,\n} from "@/components/ui/autocomplete"\nimport { Label } from "@/components/ui/label"\n\nconst limit = 8\n\nexport default function AutocompleteLimitResults() {\n\tconst [value, setValue] = React.useState("")\n\n\tconst { contains } = useFilter({ sensitivity: "base" })\n\n\tconst totalMatches = React.useMemo(() => {\n\t\tconst trimmed = value.trim()\n\t\tif (!trimmed) {\n\t\t\treturn tags.length\n\t\t}\n\t\treturn tags.filter((t) => contains(t.value, trimmed)).length\n\t}, [value, contains])\n\n\tconst moreCount = Math.max(0, totalMatches - limit)\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Autocomplete\n\t\t\t\titems={tags}\n\t\t\t\tvalue={value}\n\t\t\t\tonValueChange={setValue}\n\t\t\t\tlimit={limit}\n\t\t\t>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<Label htmlFor="search-tags-limit">\n\t\t\t\t\t\tSearch tags (limited to {limit})\n\t\t\t\t\t</Label>\n\t\t\t\t\t<AutocompleteInput\n\t\t\t\t\t\tid="search-tags-limit"\n\t\t\t\t\t\tplaceholder="e.g. component"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<AutocompleteContent className="w-80">\n\t\t\t\t\t<AutocompleteEmpty>No tags found.</AutocompleteEmpty>\n\t\t\t\t\t<AutocompleteList>\n\t\t\t\t\t\t{(tag: Tag) => (\n\t\t\t\t\t\t\t<AutocompleteItem key={tag.id} value={tag}>\n\t\t\t\t\t\t\t\t{tag.value}\n\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t)}\n\t\t\t\t\t</AutocompleteList>\n\t\t\t\t\t{moreCount > 0 && (\n\t\t\t\t\t\t<AutocompleteStatus>\n\t\t\t\t\t\t\t{moreCount} results hidden (type a more specific query to narrow\n\t\t\t\t\t\t\tresults)\n\t\t\t\t\t\t</AutocompleteStatus>\n\t\t\t\t\t)}\n\t\t\t\t</AutocompleteContent>\n\t\t\t</Autocomplete>\n\t\t</div>\n\t)\n}\n\ninterface Tag {\n\tid: string\n\tvalue: string\n}\n\nconst tags: Tag[] = [\n\t{ id: "t1", value: "feature" },\n\t{ id: "t2", value: "fix" },\n\t{ id: "t3", value: "bug" },\n\t{ id: "t4", value: "docs" },\n\t{ id: "t5", value: "internal" },\n\t{ id: "t6", value: "mobile" },\n\t{ id: "c-accordion", value: "component: accordion" },\n\t{ id: "c-alert-dialog", value: "component: alert dialog" },\n\t{ id: "c-autocomplete", value: "component: autocomplete" },\n\t{ id: "c-avatar", value: "component: avatar" },\n\t{ id: "c-checkbox", value: "component: checkbox" },\n\t{ id: "c-checkbox-group", value: "component: checkbox group" },\n\t{ id: "c-collapsible", value: "component: collapsible" },\n\t{ id: "c-combobox", value: "component: combobox" },\n\t{ id: "c-context-menu", value: "component: context menu" },\n\t{ id: "c-dialog", value: "component: dialog" },\n\t{ id: "c-field", value: "component: field" },\n\t{ id: "c-form", value: "component: form" },\n\t{ id: "c-input", value: "component: input" },\n\t{ id: "c-popover", value: "component: popover" },\n\t{ id: "c-select", value: "component: select" },\n\t{ id: "c-switch", value: "component: switch" },\n\t{ id: "c-tabs", value: "component: tabs" },\n\t{ id: "c-tooltip", value: "component: tooltip" },\n]\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-limit-results")
		),
		title: "autocomplete-limit-results",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-limit-results.tsx",
	},
	"autocomplete-row": {
		source:
			'"use client"\n\nimport * as React from "react"\n\nimport {\n\tAutocomplete,\n\tAutocompleteContent,\n\tAutocompleteEmpty,\n\tAutocompleteGroup,\n\tAutocompleteGroupLabel,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n\tAutocompleteRow,\n\tAutocompleteTrigger,\n} from "@/components/ui/autocomplete"\nimport { Avatar, AvatarFallback } from "@/components/ui/avatar"\nimport { Label } from "@/components/ui/label"\n\nexport default function AutocompleteRowDemo() {\n\tconst [pickerOpen, setPickerOpen] = React.useState(false)\n\tconst [avatar, setAvatar] = React.useState<string | null>(null)\n\tconst [searchValue, setSearchValue] = React.useState("")\n\n\tfunction handleSelectAvatar(value: string | null) {\n\t\tif (!value) {\n\t\t\treturn\n\t\t}\n\n\t\tsetPickerOpen(false)\n\t\tsetAvatar(value)\n\t\tsetSearchValue("")\n\t}\n\n\treturn (\n\t\t<Autocomplete\n\t\t\titems={avatarGroups}\n\t\t\tcols={COLUMNS}\n\t\t\topen={pickerOpen}\n\t\t\tonOpenChange={setPickerOpen}\n\t\t\tonOpenChangeComplete={() => setSearchValue("")}\n\t\t\tvalue={searchValue}\n\t\t\tonValueChange={(value, details) => {\n\t\t\t\tif (details.reason !== "item-press") {\n\t\t\t\t\tsetSearchValue(value)\n\t\t\t\t}\n\t\t\t}}\n\t\t>\n\t\t\t<AutocompleteTrigger\n\t\t\t\tclassName="flex flex-col items-center gap-2 outline-none"\n\t\t\t\taria-label="Choose avatar"\n\t\t\t>\n\t\t\t\t<Avatar id="avatar-selector">\n\t\t\t\t\t<AvatarFallback>{avatar || "+"}</AvatarFallback>\n\t\t\t\t</Avatar>\n\t\t\t\t<Label\n\t\t\t\t\tclassName="text-muted-foreground text-xs"\n\t\t\t\t\thtmlFor="avatar-selector"\n\t\t\t\t>\n\t\t\t\t\tChoose an avatar\n\t\t\t\t</Label>\n\t\t\t</AutocompleteTrigger>\n\t\t\t<AutocompleteContent className="w-80">\n\t\t\t\t<AutocompleteInput placeholder="e.g. cat, doctor, star" />\n\t\t\t\t<AutocompleteEmpty>No avatars found</AutocompleteEmpty>\n\t\t\t\t<AutocompleteList>\n\t\t\t\t\t{(group: AvatarGroup) => (\n\t\t\t\t\t\t<AutocompleteGroup\n\t\t\t\t\t\t\tclassName="mt-2"\n\t\t\t\t\t\t\tkey={group.value}\n\t\t\t\t\t\t\titems={group.items}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>\n\t\t\t\t\t\t\t<div role="presentation">\n\t\t\t\t\t\t\t\t{chunkArray(group.items, COLUMNS).map((row, rowIdx) => (\n\t\t\t\t\t\t\t\t\t<AutocompleteRow key={rowIdx} className="grid-cols-6">\n\t\t\t\t\t\t\t\t\t\t{row.map((avatar) => (\n\t\t\t\t\t\t\t\t\t\t\t<AutocompleteItem\n\t\t\t\t\t\t\t\t\t\t\t\tkey={avatar.id}\n\t\t\t\t\t\t\t\t\t\t\t\tvalue={avatar}\n\t\t\t\t\t\t\t\t\t\t\t\tclassName="flex aspect-square size-full items-center justify-center rounded-md"\n\t\t\t\t\t\t\t\t\t\t\t\tonClick={() => handleSelectAvatar(avatar.emoji)}\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<span className="text-xl">{avatar.emoji}</span>\n\t\t\t\t\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t\t\t\t</AutocompleteRow>\n\t\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</AutocompleteGroup>\n\t\t\t\t\t)}\n\t\t\t\t</AutocompleteList>\n\t\t\t</AutocompleteContent>\n\t\t</Autocomplete>\n\t)\n}\n\ninterface Avatar {\n\tid: string\n\temoji: string\n\tname: string\n\tcategory: string\n}\n\ninterface AvatarGroup {\n\tvalue: string\n\tlabel: string\n\titems: Avatar[]\n}\n\nconst avatarCategories = [\n\t{\n\t\tlabel: "People",\n\t\tavatars: [\n\t\t\t{ id: "1", emoji: "👤", name: "default user" },\n\t\t\t{ id: "2", emoji: "👨", name: "man" },\n\t\t\t{ id: "3", emoji: "👩", name: "woman" },\n\t\t\t{ id: "4", emoji: "🧑", name: "person" },\n\t\t\t{ id: "5", emoji: "👦", name: "boy" },\n\t\t\t{ id: "6", emoji: "👧", name: "girl" },\n\t\t\t{ id: "7", emoji: "👴", name: "old man" },\n\t\t\t{ id: "8", emoji: "👵", name: "old woman" },\n\t\t\t{ id: "9", emoji: "👶", name: "baby" },\n\t\t\t{ id: "10", emoji: "🧒", name: "child" },\n\t\t\t{ id: "11", emoji: "🧓", name: "older person" },\n\t\t\t{ id: "12", emoji: "👨‍💼", name: "businessman" },\n\t\t\t{ id: "13", emoji: "👩‍💼", name: "businesswoman" },\n\t\t\t{ id: "14", emoji: "👨‍💻", name: "developer" },\n\t\t\t{ id: "15", emoji: "👩‍💻", name: "developer woman" },\n\t\t\t{ id: "16", emoji: "👨‍🎨", name: "artist" },\n\t\t],\n\t},\n\t{\n\t\tlabel: "Professions",\n\t\tavatars: [\n\t\t\t{ id: "17", emoji: "👩‍🎨", name: "artist woman" },\n\t\t\t{ id: "18", emoji: "👨‍⚕️", name: "doctor" },\n\t\t\t{ id: "19", emoji: "👩‍⚕️", name: "doctor woman" },\n\t\t\t{ id: "20", emoji: "👨‍🏫", name: "teacher" },\n\t\t\t{ id: "21", emoji: "👩‍🏫", name: "teacher woman" },\n\t\t\t{ id: "22", emoji: "👨‍🚀", name: "astronaut" },\n\t\t\t{ id: "23", emoji: "👩‍🚀", name: "astronaut woman" },\n\t\t\t{ id: "24", emoji: "👨‍🔬", name: "scientist" },\n\t\t\t{ id: "25", emoji: "👩‍🔬", name: "scientist woman" },\n\t\t\t{ id: "26", emoji: "👨‍🍳", name: "chef" },\n\t\t\t{ id: "27", emoji: "👩‍🍳", name: "chef woman" },\n\t\t\t{ id: "28", emoji: "👨‍🎤", name: "singer" },\n\t\t\t{ id: "29", emoji: "👩‍🎤", name: "singer woman" },\n\t\t\t{ id: "30", emoji: "👨‍✈️", name: "pilot" },\n\t\t\t{ id: "31", emoji: "👩‍✈️", name: "pilot woman" },\n\t\t\t{ id: "32", emoji: "👮", name: "police officer" },\n\t\t],\n\t},\n\t{\n\t\tlabel: "Animals",\n\t\tavatars: [\n\t\t\t{ id: "33", emoji: "🐶", name: "dog" },\n\t\t\t{ id: "34", emoji: "🐱", name: "cat" },\n\t\t\t{ id: "35", emoji: "🐭", name: "mouse" },\n\t\t\t{ id: "36", emoji: "🐹", name: "hamster" },\n\t\t\t{ id: "37", emoji: "🐰", name: "rabbit" },\n\t\t\t{ id: "38", emoji: "🦊", name: "fox" },\n\t\t\t{ id: "39", emoji: "🐻", name: "bear" },\n\t\t\t{ id: "40", emoji: "🐼", name: "panda" },\n\t\t\t{ id: "41", emoji: "🐨", name: "koala" },\n\t\t\t{ id: "42", emoji: "🐯", name: "tiger" },\n\t\t\t{ id: "43", emoji: "🦁", name: "lion" },\n\t\t\t{ id: "44", emoji: "🐮", name: "cow" },\n\t\t\t{ id: "45", emoji: "🐷", name: "pig" },\n\t\t\t{ id: "46", emoji: "🐸", name: "frog" },\n\t\t\t{ id: "47", emoji: "🐵", name: "monkey" },\n\t\t\t{ id: "48", emoji: "🐧", name: "penguin" },\n\t\t],\n\t},\n\t{\n\t\tlabel: "Objects & Symbols",\n\t\tavatars: [\n\t\t\t{ id: "49", emoji: "⭐", name: "star" },\n\t\t\t{ id: "50", emoji: "🌟", name: "glowing star" },\n\t\t\t{ id: "51", emoji: "💎", name: "diamond" },\n\t\t\t{ id: "52", emoji: "🔥", name: "fire" },\n\t\t\t{ id: "53", emoji: "⚡", name: "lightning" },\n\t\t\t{ id: "54", emoji: "🌙", name: "moon" },\n\t\t\t{ id: "55", emoji: "☀️", name: "sun" },\n\t\t\t{ id: "56", emoji: "🌈", name: "rainbow" },\n\t\t\t{ id: "57", emoji: "🎯", name: "target" },\n\t\t\t{ id: "58", emoji: "🚀", name: "rocket" },\n\t\t\t{ id: "59", emoji: "🎮", name: "gaming" },\n\t\t\t{ id: "60", emoji: "💻", name: "laptop" },\n\t\t\t{ id: "61", emoji: "📱", name: "phone" },\n\t\t\t{ id: "62", emoji: "🎨", name: "art" },\n\t\t\t{ id: "63", emoji: "🏆", name: "trophy" },\n\t\t\t{ id: "64", emoji: "🎪", name: "circus" },\n\t\t],\n\t},\n]\n\nconst avatarGroups: AvatarGroup[] = avatarCategories.map((category) => ({\n\tvalue: category.label,\n\tlabel: category.label,\n\titems: category.avatars.map((avatar) => ({\n\t\t...avatar,\n\t\tvalue: avatar.name.toLowerCase(),\n\t\tcategory: category.label,\n\t})),\n}))\n\nconst COLUMNS = 6\n\nfunction chunkArray<T>(array: T[], size: number): T[][] {\n\tconst result: T[][] = []\n\tfor (let i = 0; i < array.length; i += size) {\n\t\tresult.push(array.slice(i, i + size))\n\t}\n\treturn result\n}\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-row")
		),
		title: "autocomplete-row",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-row.tsx",
	},
	"autocomplete-virtualized": {
		source:
			'import * as React from "react"\nimport { useVirtualizer } from "@tanstack/react-virtual"\n\nimport {\n\tAutocomplete,\n\tAutocompleteContent,\n\tAutocompleteEmpty,\n\tAutocompleteInput,\n\tAutocompleteItem,\n\tAutocompleteList,\n\tuseFilter,\n} from "@/components/ui/autocomplete"\nimport { Label } from "@/components/ui/label"\n\nexport default function AutocompleteVirtualized() {\n\tconst [open, setOpen] = React.useState(false)\n\tconst [searchValue, setSearchValue] = React.useState("")\n\n\tconst scrollElementRef = React.useRef<HTMLDivElement>(null)\n\n\tconst { contains } = useFilter({ sensitivity: "base" })\n\n\tconst filteredItems = React.useMemo(() => {\n\t\treturn virtualItems.filter((item) => contains(item, searchValue))\n\t}, [contains, searchValue])\n\n\tconst virtualizer = useVirtualizer({\n\t\tenabled: open,\n\t\tcount: filteredItems.length,\n\t\tgetScrollElement: () => scrollElementRef.current,\n\t\testimateSize: () => 32,\n\t\toverscan: 20,\n\t\tpaddingStart: 4,\n\t\tpaddingEnd: 4,\n\t})\n\n\tconst handleScrollElementRef = React.useCallback(\n\t\t(element: HTMLDivElement) => {\n\t\t\tscrollElementRef.current = element\n\t\t\tif (element) {\n\t\t\t\tvirtualizer.measure()\n\t\t\t}\n\t\t},\n\t\t[virtualizer]\n\t)\n\n\tconst totalSize = virtualizer.getTotalSize()\n\tconst totalSizePx = `${totalSize}px`\n\n\treturn (\n\t\t<Autocomplete\n\t\t\tvirtualized\n\t\t\titems={virtualItems}\n\t\t\topen={open}\n\t\t\tonOpenChange={setOpen}\n\t\t\tvalue={searchValue}\n\t\t\tonValueChange={setSearchValue}\n\t\t\topenOnInputClick\n\t\t\tonItemHighlighted={(item, { type, index }) => {\n\t\t\t\tif (!item) {\n\t\t\t\t\treturn\n\t\t\t\t}\n\n\t\t\t\tconst isStart = index === 0\n\t\t\t\tconst isEnd = index === filteredItems.length - 1\n\t\t\t\tconst shouldScroll =\n\t\t\t\t\ttype === "none" || (type === "keyboard" && (isStart || isEnd))\n\t\t\t\tif (shouldScroll) {\n\t\t\t\t\tqueueMicrotask(() => {\n\t\t\t\t\t\tvirtualizer.scrollToIndex(index, { align: isEnd ? "start" : "end" })\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t}}\n\t\t>\n\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t<Label htmlFor="search-items-virtualized">\n\t\t\t\t\tSearch 10,000 items (virtualized)\n\t\t\t\t</Label>\n\t\t\t\t<AutocompleteInput className="w-80" id="search-items-virtualized" />\n\t\t\t</div>\n\n\t\t\t<AutocompleteContent className="w-80 py-0 pr-0">\n\t\t\t\t<AutocompleteEmpty>No items found.</AutocompleteEmpty>\n\t\t\t\t<AutocompleteList>\n\t\t\t\t\t{filteredItems.length > 0 && (\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\trole="presentation"\n\t\t\t\t\t\t\tref={handleScrollElementRef}\n\t\t\t\t\t\t\tclassName="h-[min(var(--total-size),18rem)] max-h-[calc(var(--available-height)-2rem)] overflow-y-scroll overscroll-contain"\n\t\t\t\t\t\t\tstyle={{ "--total-size": totalSizePx } as React.CSSProperties}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\trole="presentation"\n\t\t\t\t\t\t\t\tclassName="relative w-full"\n\t\t\t\t\t\t\t\tstyle={{ height: totalSizePx }}\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{virtualizer.getVirtualItems().map((virtualItem) => {\n\t\t\t\t\t\t\t\t\tconst item = filteredItems[virtualItem.index]\n\t\t\t\t\t\t\t\t\tif (!item) {\n\t\t\t\t\t\t\t\t\t\treturn null\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t<AutocompleteItem\n\t\t\t\t\t\t\t\t\t\t\tkey={virtualItem.key}\n\t\t\t\t\t\t\t\t\t\t\tindex={virtualItem.index}\n\t\t\t\t\t\t\t\t\t\t\tvalue={item}\n\t\t\t\t\t\t\t\t\t\t\taria-setsize={filteredItems.length}\n\t\t\t\t\t\t\t\t\t\t\taria-posinset={virtualItem.index + 1}\n\t\t\t\t\t\t\t\t\t\t\tstyle={{\n\t\t\t\t\t\t\t\t\t\t\t\tposition: "absolute",\n\t\t\t\t\t\t\t\t\t\t\t\ttop: 0,\n\t\t\t\t\t\t\t\t\t\t\t\tleft: 0,\n\t\t\t\t\t\t\t\t\t\t\t\twidth: "100%",\n\t\t\t\t\t\t\t\t\t\t\t\theight: `${virtualItem.size}px`,\n\t\t\t\t\t\t\t\t\t\t\t\ttransform: `translateY(${virtualItem.start}px)`,\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t{item}\n\t\t\t\t\t\t\t\t\t\t</AutocompleteItem>\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t)}\n\t\t\t\t</AutocompleteList>\n\t\t\t</AutocompleteContent>\n\t\t</Autocomplete>\n\t)\n}\n\nconst virtualItems = Array.from({ length: 10000 }, (_, i) => {\n\tconst indexLabel = String(i + 1).padStart(5, "0")\n\treturn `Item ${indexLabel}`\n})\n',
		component: React.lazy(
			() => import("@/components/demos/autocomplete/autocomplete-virtualized")
		),
		title: "autocomplete-virtualized",
		category: "autocomplete",
		path: "src/components/demos/autocomplete/autocomplete-virtualized.tsx",
	},
	"avatar-demo": {
		source:
			'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\nexport default function AvatarDemo() {\n\treturn (\n\t\t<Avatar>\n\t\t\t<AvatarImage src="/avatars/bora.png" alt="User" />\n\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t</Avatar>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/avatar/avatar-demo")
		),
		title: "avatar-demo",
		category: "avatar",
		path: "src/components/demos/avatar/avatar-demo.tsx",
	},
	"avatar-fallback": {
		source:
			'import { Avatar, AvatarFallback } from "@/components/ui/avatar"\n\nexport default function AvatarWithFallback() {\n\treturn (\n\t\t<Avatar>\n\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t</Avatar>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/avatar/avatar-fallback")
		),
		title: "avatar-fallback",
		category: "avatar",
		path: "src/components/demos/avatar/avatar-fallback.tsx",
	},
	"avatar-group": {
		source:
			'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\nexport default function AvatarGroup() {\n\treturn (\n\t\t<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-[3px]">\n\t\t\t<Avatar>\n\t\t\t\t<AvatarImage src="/avatars/memoji-1.png" alt="person-1" />\n\t\t\t\t<AvatarFallback>P1</AvatarFallback>\n\t\t\t</Avatar>\n\t\t\t<Avatar>\n\t\t\t\t<AvatarImage src="/avatars/memoji-2.png" alt="person-2" />\n\t\t\t\t<AvatarFallback>P2</AvatarFallback>\n\t\t\t</Avatar>\n\t\t\t<Avatar>\n\t\t\t\t<AvatarImage src="/avatars/memoji-3.png" alt="person-3" />\n\t\t\t\t<AvatarFallback>P3</AvatarFallback>\n\t\t\t</Avatar>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/avatar/avatar-group")
		),
		title: "avatar-group",
		category: "avatar",
		path: "src/components/demos/avatar/avatar-group.tsx",
	},
	"avatar-sizes": {
		source:
			'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\nexport default function AvatarSizes() {\n\treturn (\n\t\t<div className="flex flex-row items-center gap-4">\n\t\t\t<Avatar size="sm">\n\t\t\t\t<AvatarImage src="/avatars/bora.png" alt="User" />\n\t\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t\t</Avatar>\n\t\t\t<Avatar size="md">\n\t\t\t\t<AvatarImage src="/avatars/bora.png" alt="User" />\n\t\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t\t</Avatar>\n\t\t\t<Avatar size="lg">\n\t\t\t\t<AvatarImage src="/avatars/bora.png" alt="User" />\n\t\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t\t</Avatar>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/avatar/avatar-sizes")
		),
		title: "avatar-sizes",
		category: "avatar",
		path: "src/components/demos/avatar/avatar-sizes.tsx",
	},
	"badge-danger": {
		source:
			'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeDanger() {\n\treturn <Badge variant="danger">Danger</Badge>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/badge/badge-danger")
		),
		title: "badge-danger",
		category: "badge",
		path: "src/components/demos/badge/badge-danger.tsx",
	},
	"badge-demo": {
		source:
			'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeDemo() {\n\treturn <Badge>Badge</Badge>\n}\n',
		component: React.lazy(() => import("@/components/demos/badge/badge-demo")),
		title: "badge-demo",
		category: "badge",
		path: "src/components/demos/badge/badge-demo.tsx",
	},
	"badge-info": {
		source:
			'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeInfo() {\n\treturn <Badge variant="info">Info</Badge>\n}\n',
		component: React.lazy(() => import("@/components/demos/badge/badge-info")),
		title: "badge-info",
		category: "badge",
		path: "src/components/demos/badge/badge-info.tsx",
	},
	"badge-outline": {
		source:
			'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeOutline() {\n\treturn <Badge variant="outline">Outline</Badge>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/badge/badge-outline")
		),
		title: "badge-outline",
		category: "badge",
		path: "src/components/demos/badge/badge-outline.tsx",
	},
	"badge-secondary": {
		source:
			'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeSecondary() {\n\treturn <Badge variant="secondary">Secondary</Badge>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/badge/badge-secondary")
		),
		title: "badge-secondary",
		category: "badge",
		path: "src/components/demos/badge/badge-secondary.tsx",
	},
	"badge-success": {
		source:
			'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeSuccess() {\n\treturn <Badge variant="success">Success</Badge>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/badge/badge-success")
		),
		title: "badge-success",
		category: "badge",
		path: "src/components/demos/badge/badge-success.tsx",
	},
	"badge-warning": {
		source:
			'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeWarning() {\n\treturn <Badge variant="warning">Warning</Badge>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/badge/badge-warning")
		),
		title: "badge-warning",
		category: "badge",
		path: "src/components/demos/badge/badge-warning.tsx",
	},
	"breadcrumbs-custom-separator": {
		source:
			'import { SlashIcon } from "lucide-react"\n\nimport {\n\tBreadcrumb,\n\tBreadcrumbEllipsis,\n\tBreadcrumbItem,\n\tBreadcrumbLink,\n\tBreadcrumbList,\n\tBreadcrumbPage,\n\tBreadcrumbSeparator,\n} from "@/components/ui/breadcrumbs"\nimport {\n\tDropdownMenu,\n\tDropdownMenuContent,\n\tDropdownMenuItem,\n\tDropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\n\nexport default function BreadcrumbsCustomSeparator() {\n\treturn (\n\t\t<Breadcrumb>\n\t\t\t<BreadcrumbList>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<BreadcrumbLink href="/">Home</BreadcrumbLink>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator>\n\t\t\t\t\t<SlashIcon className="h-4 w-4" />\n\t\t\t\t</BreadcrumbSeparator>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<DropdownMenu>\n\t\t\t\t\t\t<DropdownMenuTrigger className="flex items-center gap-1">\n\t\t\t\t\t\t\t<BreadcrumbEllipsis className="h-4 w-4" />\n\t\t\t\t\t\t\t<span className="sr-only">Toggle menu</span>\n\t\t\t\t\t\t</DropdownMenuTrigger>\n\t\t\t\t\t\t<DropdownMenuContent align="start">\n\t\t\t\t\t\t\t<DropdownMenuItem>Documentation</DropdownMenuItem>\n\t\t\t\t\t\t\t<DropdownMenuItem>Themes</DropdownMenuItem>\n\t\t\t\t\t\t\t<DropdownMenuItem>GitHub</DropdownMenuItem>\n\t\t\t\t\t\t</DropdownMenuContent>\n\t\t\t\t\t</DropdownMenu>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator>\n\t\t\t\t\t<SlashIcon className="h-4 w-4" />\n\t\t\t\t</BreadcrumbSeparator>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator>\n\t\t\t\t\t<SlashIcon className="h-4 w-4" />\n\t\t\t\t</BreadcrumbSeparator>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<BreadcrumbPage>Breadcrumb</BreadcrumbPage>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t</BreadcrumbList>\n\t\t</Breadcrumb>\n\t)\n}\n',
		component: React.lazy(
			() =>
				import("@/components/demos/breadcrumbs/breadcrumbs-custom-separator")
		),
		title: "breadcrumbs-custom-separator",
		category: "breadcrumbs",
		path: "src/components/demos/breadcrumbs/breadcrumbs-custom-separator.tsx",
	},
	"breadcrumbs-demo": {
		source:
			'import {\n\tBreadcrumb,\n\tBreadcrumbEllipsis,\n\tBreadcrumbItem,\n\tBreadcrumbLink,\n\tBreadcrumbList,\n\tBreadcrumbPage,\n\tBreadcrumbSeparator,\n} from "@/components/ui/breadcrumbs"\nimport {\n\tDropdownMenu,\n\tDropdownMenuContent,\n\tDropdownMenuItem,\n\tDropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\n\nexport default function BreadcrumbsDemo() {\n\treturn (\n\t\t<Breadcrumb>\n\t\t\t<BreadcrumbList>\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<BreadcrumbLink href="/">Home</BreadcrumbLink>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<DropdownMenu>\n\t\t\t\t\t\t<DropdownMenuTrigger className="flex items-center gap-1">\n\t\t\t\t\t\t\t<BreadcrumbEllipsis className="h-4 w-4" />\n\t\t\t\t\t\t\t<span className="sr-only">Toggle menu</span>\n\t\t\t\t\t\t</DropdownMenuTrigger>\n\t\t\t\t\t\t<DropdownMenuContent align="start">\n\t\t\t\t\t\t\t<DropdownMenuItem>Documentation</DropdownMenuItem>\n\t\t\t\t\t\t\t<DropdownMenuItem>Themes</DropdownMenuItem>\n\t\t\t\t\t\t\t<DropdownMenuItem>GitHub</DropdownMenuItem>\n\t\t\t\t\t\t</DropdownMenuContent>\n\t\t\t\t\t</DropdownMenu>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t\t<BreadcrumbSeparator />\n\t\t\t\t<BreadcrumbItem>\n\t\t\t\t\t<BreadcrumbPage>Breadcrumb</BreadcrumbPage>\n\t\t\t\t</BreadcrumbItem>\n\t\t\t</BreadcrumbList>\n\t\t</Breadcrumb>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/breadcrumbs/breadcrumbs-demo")
		),
		title: "breadcrumbs-demo",
		category: "breadcrumbs",
		path: "src/components/demos/breadcrumbs/breadcrumbs-demo.tsx",
	},
	"button-demo": {
		source:
			'import { Button } from "@/components/ui/button"\n\nexport default function ButtonDemo() {\n\treturn <Button>Button</Button>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-demo")
		),
		title: "button-demo",
		category: "button",
		path: "src/components/demos/button/button-demo.tsx",
	},
	"button-destructive": {
		source:
			'import { Button } from "@/components/ui/button"\n\nexport default function ButtonDestructive() {\n\treturn <Button variant="destructive">Destructive</Button>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-destructive")
		),
		title: "button-destructive",
		category: "button",
		path: "src/components/demos/button/button-destructive.tsx",
	},
	"button-ghost": {
		source:
			'import { Button } from "@/components/ui/button"\n\nexport default function ButtonGhost() {\n\treturn <Button variant="ghost">Ghost</Button>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-ghost")
		),
		title: "button-ghost",
		category: "button",
		path: "src/components/demos/button/button-ghost.tsx",
	},
	"button-icon": {
		source:
			'import { PencilIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ButtonIcon() {\n\treturn (\n\t\t<Button size="icon" variant="outline">\n\t\t\t<PencilIcon />\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-icon")
		),
		title: "button-icon",
		category: "button",
		path: "src/components/demos/button/button-icon.tsx",
	},
	"button-link": {
		source:
			'import { Button } from "@/components/ui/button"\n\nexport default function ButtonLink() {\n\treturn <Button variant="link">Link</Button>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-link")
		),
		title: "button-link",
		category: "button",
		path: "src/components/demos/button/button-link.tsx",
	},
	"button-loading": {
		source:
			'import { Loader2Icon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ButtonLoading() {\n\treturn (\n\t\t<Button className="gap-2" disabled>\n\t\t\t<div className="animate-spin">\n\t\t\t\t<Loader2Icon />\n\t\t\t</div>\n\t\t\tLoading\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-loading")
		),
		title: "button-loading",
		category: "button",
		path: "src/components/demos/button/button-loading.tsx",
	},
	"button-outline": {
		source:
			'import { Button } from "@/components/ui/button"\n\nexport default function ButtonOutline() {\n\treturn <Button variant="outline">Outline</Button>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-outline")
		),
		title: "button-outline",
		category: "button",
		path: "src/components/demos/button/button-outline.tsx",
	},
	"button-secondary": {
		source:
			'import { Button } from "@/components/ui/button"\n\nexport default function ButtonSecondary() {\n\treturn <Button variant="secondary">Secondary</Button>\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-secondary")
		),
		title: "button-secondary",
		category: "button",
		path: "src/components/demos/button/button-secondary.tsx",
	},
	"button-sizes": {
		source:
			'import { Button } from "@/components/ui/button"\n\nexport default function ButtonSizes() {\n\treturn (\n\t\t<div className="flex flex-row items-center gap-2">\n\t\t\t<Button size="sm">Small</Button>\n\t\t\t<Button size="md">Medium</Button>\n\t\t\t<Button size="lg">Large</Button>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/button/button-sizes")
		),
		title: "button-sizes",
		category: "button",
		path: "src/components/demos/button/button-sizes.tsx",
	},
	"calendar-demo": {
		source:
			'import { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarDemo() {\n\treturn <Calendar showOutsideDays />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-demo")
		),
		title: "calendar-demo",
		category: "calendar",
		path: "src/components/demos/calendar/calendar-demo.tsx",
	},
	"calendar-disabled": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarDisabled() {\n\tconst [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)\n\n\treturn (\n\t\t<Calendar\n\t\t\tmode="single"\n\t\t\tdisabled={(date) => date < new Date()}\n\t\t\tselected={selectedDate}\n\t\t\tonSelect={setSelectedDate}\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-disabled")
		),
		title: "calendar-disabled",
		category: "calendar",
		path: "src/components/demos/calendar/calendar-disabled.tsx",
	},
	"calendar-multiple": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarMultiple() {\n\tconst [selectedDates, setSelectedDates] = useState<Date[] | undefined>(\n\t\tundefined\n\t)\n\n\treturn (\n\t\t<Calendar\n\t\t\tmode="multiple"\n\t\t\tselected={selectedDates}\n\t\t\tonSelect={setSelectedDates}\n\t\t\tshowOutsideDays\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-multiple")
		),
		title: "calendar-multiple",
		category: "calendar",
		path: "src/components/demos/calendar/calendar-multiple.tsx",
	},
	"calendar-range": {
		source:
			'"use client"\n\nimport { useState } from "react"\nimport { DateRange } from "react-day-picker"\n\nimport { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarRange() {\n\tconst [range, setRange] = useState<DateRange | undefined>(undefined)\n\n\treturn (\n\t\t<Calendar\n\t\t\tmode="range"\n\t\t\tselected={range}\n\t\t\tonSelect={setRange}\n\t\t\tshowOutsideDays\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-range")
		),
		title: "calendar-range",
		category: "calendar",
		path: "src/components/demos/calendar/calendar-range.tsx",
	},
	"calendar-single": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarSingle() {\n\tconst [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)\n\n\treturn (\n\t\t<Calendar\n\t\t\tmode="single"\n\t\t\tselected={selectedDate}\n\t\t\tonSelect={setSelectedDate}\n\t\t\tshowOutsideDays\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/calendar/calendar-single")
		),
		title: "calendar-single",
		category: "calendar",
		path: "src/components/demos/calendar/calendar-single.tsx",
	},
	"card-demo": {
		source:
			'import { LinkIcon, SendIcon } from "lucide-react"\nimport { toast } from "sonner"\n\nimport { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\nimport { Button } from "@/components/ui/button"\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport { Input } from "@/components/ui/input"\n\nexport default function CardDemo() {\n\treturn (\n\t\t<Card className="w-full max-w-96">\n\t\t\t<CardHeader>\n\t\t\t\t<CardTitle>Invite Team Members</CardTitle>\n\t\t\t\t<CardDescription>\n\t\t\t\t\tInvite your team members to join your workspace.\n\t\t\t\t</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent className="space-y-4">\n\t\t\t\t<div className="flex gap-2">\n\t\t\t\t\t<Input inputContainerClassName="w-full" placeholder="Email" />\n\t\t\t\t\t<Button className="shrink-0" size="icon">\n\t\t\t\t\t\t<SendIcon />\n\t\t\t\t\t</Button>\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t<p className="text-muted-foreground text-sm">\n\t\t\t\t\t\tYou can invite up to 10 team members. You have 8 invites left.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div className="flex flex-col gap-4">\n\t\t\t\t\t<h4 className="text-sm font-medium">Invited Members</h4>\n\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t<Avatar size="sm">\n\t\t\t\t\t\t\t<AvatarImage src="/avatars/memoji-1.png" alt="Avatar" />\n\t\t\t\t\t\t\t<AvatarFallback>KS</AvatarFallback>\n\t\t\t\t\t\t</Avatar>\n\t\t\t\t\t\t<div className="flex flex-col text-xs">\n\t\t\t\t\t\t\t<p className="font-medium">Karen Smith</p>\n\t\t\t\t\t\t\t<p className="text-muted-foreground">karen@9ui.dev</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t<Avatar size="sm">\n\t\t\t\t\t\t\t<AvatarImage src="/avatars/memoji-3.png" alt="Avatar" />\n\t\t\t\t\t\t\t<AvatarFallback>CW</AvatarFallback>\n\t\t\t\t\t\t</Avatar>\n\t\t\t\t\t\t<div className="flex flex-col text-xs">\n\t\t\t\t\t\t\t<p className="font-medium">Chris Williams</p>\n\t\t\t\t\t\t\t<p className="text-muted-foreground">chris@9ui.dev</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</CardContent>\n\t\t\t<CardFooter>\n\t\t\t\t<Button\n\t\t\t\t\tclassName="w-full gap-x-2"\n\t\t\t\t\tvariant="link"\n\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\ttoast.success("Invite link copied to clipboard")\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t<LinkIcon size={16} />\n\t\t\t\t\tInvite with link\n\t\t\t\t</Button>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/card/card-demo")),
		title: "card-demo",
		category: "card",
		path: "src/components/demos/card/card-demo.tsx",
	},
	"card-with-image": {
		source:
			'import Image from "next/image"\n\nimport { Button } from "@/components/ui/button"\nimport {\n\tCard,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\n\nexport default function CardWithImage() {\n\treturn (\n\t\t<Card className="w-full max-w-80">\n\t\t\t<CardHeader>\n\t\t\t\t<div className="relative aspect-video rounded-lg">\n\t\t\t\t\t<Image\n\t\t\t\t\t\tsrc="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2"\n\t\t\t\t\t\talt="Blog Image"\n\t\t\t\t\t\tfill\n\t\t\t\t\t\tclassName="rounded-lg"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<CardTitle className="mt-2">What is 9ui?</CardTitle>\n\t\t\t\t<CardDescription>\n\t\t\t\t\tDeep dive into the 9ui components and learn how to use them in your\n\t\t\t\t\town projects.\n\t\t\t\t</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardFooter>\n\t\t\t\t<Button className="w-full">Read more</Button>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/card/card-with-image")
		),
		title: "card-with-image",
		category: "card",
		path: "src/components/demos/card/card-with-image.tsx",
	},
	"carousel-demo": {
		source:
			'import { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n\tCarousel,\n\tCarouselContent,\n\tCarouselItem,\n\tCarouselNext,\n\tCarouselPrevious,\n} from "@/components/ui/carousel"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport default function CarouselDemo() {\n\treturn (\n\t\t<div className="w-60 sm:w-80 lg:w-96">\n\t\t\t<Carousel>\n\t\t\t\t<CarouselContent>\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide}>\n\t\t\t\t\t\t\t<AspectRatio ratio={16 / 9} className="bg-card rounded-lg border">\n\t\t\t\t\t\t\t\t<div className="text-foreground flex size-full items-center justify-center text-xl font-semibold">\n\t\t\t\t\t\t\t\t\t{slide}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<CarouselPrevious />\n\t\t\t\t<CarouselNext />\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-demo")
		),
		title: "carousel-demo",
		category: "carousel",
		path: "src/components/demos/carousel/carousel-demo.tsx",
	},
	"carousel-looped": {
		source:
			'import { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n\tCarousel,\n\tCarouselContent,\n\tCarouselItem,\n\tCarouselNext,\n\tCarouselPrevious,\n} from "@/components/ui/carousel"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport default function CarouselLooped() {\n\treturn (\n\t\t<div className="w-60 sm:w-80 lg:w-96">\n\t\t\t<Carousel opts={{ loop: true }}>\n\t\t\t\t<CarouselContent>\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide}>\n\t\t\t\t\t\t\t<AspectRatio ratio={16 / 9} className="bg-card rounded-lg border">\n\t\t\t\t\t\t\t\t<div className="text-foreground flex size-full items-center justify-center text-xl font-semibold">\n\t\t\t\t\t\t\t\t\t{slide}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<CarouselPrevious />\n\t\t\t\t<CarouselNext />\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-looped")
		),
		title: "carousel-looped",
		category: "carousel",
		path: "src/components/demos/carousel/carousel-looped.tsx",
	},
	"carousel-multiple": {
		source:
			'import { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n\tCarousel,\n\tCarouselContent,\n\tCarouselItem,\n\tCarouselNext,\n\tCarouselPrevious,\n} from "@/components/ui/carousel"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport default function CarouselMultiple() {\n\treturn (\n\t\t<div className="w-60 sm:w-80 lg:w-96">\n\t\t\t<Carousel>\n\t\t\t\t<CarouselContent>\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide} className="basis-1/2">\n\t\t\t\t\t\t\t<AspectRatio\n\t\t\t\t\t\t\t\tratio={16 / 10}\n\t\t\t\t\t\t\t\tclassName="bg-card rounded-lg border"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div className="text-foreground flex size-full items-center justify-center text-xl font-semibold">\n\t\t\t\t\t\t\t\t\t{slide}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<CarouselPrevious />\n\t\t\t\t<CarouselNext />\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-multiple")
		),
		title: "carousel-multiple",
		category: "carousel",
		path: "src/components/demos/carousel/carousel-multiple.tsx",
	},
	"carousel-thumbnail": {
		source:
			'import { useState } from "react"\nimport Image from "next/image"\n\nimport { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n\tCarousel,\n\tCarouselApi,\n\tCarouselContent,\n\tCarouselItem,\n} from "@/components/ui/carousel"\n\nimport { cn } from "@/lib/utils"\n\nconst slides = [\n\t"https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n\t"https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n\t"https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n\t"https://images.pexels.com/photos/2011824/pexels-photo-2011824.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n\t"https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n]\n\nexport default function CarouselThumbnail() {\n\tconst [api, setApi] = useState<CarouselApi>()\n\tconst [selectedIndex, setSelectedIndex] = useState(0)\n\n\tapi?.on("select", () => {\n\t\tsetSelectedIndex(api?.selectedScrollSnap() ?? 0)\n\t})\n\n\treturn (\n\t\t<div className="w-60">\n\t\t\t<Carousel setApi={setApi}>\n\t\t\t\t<CarouselContent>\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide}>\n\t\t\t\t\t\t\t<AspectRatio\n\t\t\t\t\t\t\t\tratio={16 / 9}\n\t\t\t\t\t\t\t\tclassName="bg-background rounded-lg border"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<Image\n\t\t\t\t\t\t\t\t\tsrc={slide}\n\t\t\t\t\t\t\t\t\talt="Carousel slide"\n\t\t\t\t\t\t\t\t\tfill\n\t\t\t\t\t\t\t\t\tclassName="rounded-lg object-cover"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<div className="mt-2 flex w-full items-center justify-between">\n\t\t\t\t\t{slides.map((slide, index) => (\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tkey={slide}\n\t\t\t\t\t\t\tclassName="relative size-10"\n\t\t\t\t\t\t\tonClick={() => api?.scrollTo(index)}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<Image\n\t\t\t\t\t\t\t\tsrc={slide}\n\t\t\t\t\t\t\t\talt="Carousel slide"\n\t\t\t\t\t\t\t\tfill\n\t\t\t\t\t\t\t\tclassName={cn(\n\t\t\t\t\t\t\t\t\t"rounded-md object-cover opacity-60 transition-opacity duration-200 hover:opacity-100",\n\t\t\t\t\t\t\t\t\tselectedIndex === index && "opacity-100"\n\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t))}\n\t\t\t\t</div>\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-thumbnail")
		),
		title: "carousel-thumbnail",
		category: "carousel",
		path: "src/components/demos/carousel/carousel-thumbnail.tsx",
	},
	"carousel-vertical": {
		source:
			'import { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n\tCarousel,\n\tCarouselContent,\n\tCarouselItem,\n\tCarouselNext,\n\tCarouselPrevious,\n} from "@/components/ui/carousel"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport default function CarouselVertical() {\n\treturn (\n\t\t<div className="w-60 py-8 sm:w-80 lg:w-96">\n\t\t\t<Carousel orientation="vertical" opts={{ loop: true }}>\n\t\t\t\t<CarouselContent className="aspect-video h-[-webkit-fill-available] w-full p-4">\n\t\t\t\t\t{slides.map((slide) => (\n\t\t\t\t\t\t<CarouselItem key={slide} className="basis-full">\n\t\t\t\t\t\t\t<AspectRatio ratio={16 / 9} className="bg-card rounded-lg border">\n\t\t\t\t\t\t\t\t<div className="text-foreground flex size-full items-center justify-center font-medium">\n\t\t\t\t\t\t\t\t\t{slide}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</AspectRatio>\n\t\t\t\t\t\t</CarouselItem>\n\t\t\t\t\t))}\n\t\t\t\t</CarouselContent>\n\t\t\t\t<CarouselPrevious />\n\t\t\t\t<CarouselNext />\n\t\t\t</Carousel>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/carousel/carousel-vertical")
		),
		title: "carousel-vertical",
		category: "carousel",
		path: "src/components/demos/carousel/carousel-vertical.tsx",
	},
	"chart-area": {
		source:
			'"use client"\n\nimport { TrendingUpIcon } from "lucide-react"\nimport { Area, AreaChart, CartesianGrid, XAxis } from "recharts"\n\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport {\n\tChartConfig,\n\tChartContainer,\n\tChartTooltip,\n\tChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n\t{ month: "Jan", revenue: 1500 },\n\t{ month: "Feb", revenue: 3200 },\n\t{ month: "Mar", revenue: 2900 },\n\t{ month: "Apr", revenue: 2100 },\n\t{ month: "May", revenue: 4000 },\n\t{ month: "Jun", revenue: 3700 },\n\t{ month: "Jul", revenue: 4300 },\n\t{ month: "Aug", revenue: 4900 },\n\t{ month: "Sep", revenue: 4700 },\n\t{ month: "Oct", revenue: 5200 },\n\t{ month: "Nov", revenue: 6000 },\n\t{ month: "Dec", revenue: 7200 },\n]\n\nconst chartConfig = {\n\trevenue: {\n\t\tlabel: "Revenue",\n\t\tcolor: "var(--chart-1)",\n\t},\n} satisfies ChartConfig\n\nexport default function ChartAreaDemo() {\n\tconst totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0)\n\tconst averageRevenue = totalRevenue / chartData.length\n\tconst lastMonthGrowth =\n\t\t((chartData[11].revenue - chartData[10].revenue) / chartData[10].revenue) *\n\t\t100\n\n\treturn (\n\t\t<Card className="flex w-full flex-col">\n\t\t\t<CardHeader className="text-center">\n\t\t\t\t<CardTitle>Monthly Revenue Trend</CardTitle>\n\t\t\t\t<CardDescription>Performance overview for 2024</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent className="flex-1">\n\t\t\t\t<ChartContainer config={chartConfig} className="h-[300px] w-full">\n\t\t\t\t\t<AreaChart\n\t\t\t\t\t\taccessibilityLayer\n\t\t\t\t\t\tdata={chartData}\n\t\t\t\t\t\tmargin={{\n\t\t\t\t\t\t\tleft: 12,\n\t\t\t\t\t\t\tright: 12,\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\t<CartesianGrid vertical={false} />\n\t\t\t\t\t\t<XAxis\n\t\t\t\t\t\t\tdataKey="month"\n\t\t\t\t\t\t\ttickLine={false}\n\t\t\t\t\t\t\taxisLine={false}\n\t\t\t\t\t\t\ttickMargin={8}\n\t\t\t\t\t\t\ttickFormatter={(value) => value.slice(0, 3)}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<ChartTooltip\n\t\t\t\t\t\t\tcursor={false}\n\t\t\t\t\t\t\tcontent={<ChartTooltipContent indicator="line" />}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Area\n\t\t\t\t\t\t\tdataKey="revenue"\n\t\t\t\t\t\t\ttype="natural"\n\t\t\t\t\t\t\tfill="var(--chart-1)"\n\t\t\t\t\t\t\tfillOpacity={0.2}\n\t\t\t\t\t\t\tstroke="var(--chart-1)"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</AreaChart>\n\t\t\t\t</ChartContainer>\n\t\t\t</CardContent>\n\t\t\t<CardFooter className="flex-col gap-2 text-sm leading-none">\n\t\t\t\t<div className="flex w-full justify-between font-medium">\n\t\t\t\t\t<span>Total Revenue:</span>\n\t\t\t\t\t<span>${totalRevenue.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Monthly Average:</span>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t$\n\t\t\t\t\t\t{averageRevenue.toLocaleString(undefined, {\n\t\t\t\t\t\t\tmaximumFractionDigits: 0,\n\t\t\t\t\t\t})}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Month-over-month growth:</span>\n\t\t\t\t\t<span className="flex items-center gap-1">\n\t\t\t\t\t\t<TrendingUpIcon className="size-4" />\n\t\t\t\t\t\t{lastMonthGrowth.toFixed(1)}%\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/chart/chart-area")),
		title: "chart-area",
		category: "chart",
		path: "src/components/demos/chart/chart-area.tsx",
	},
	"chart-bar": {
		source:
			'"use client"\n\nimport { TrendingUpIcon } from "lucide-react"\nimport { Bar, BarChart, CartesianGrid, Legend, XAxis } from "recharts"\n\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport {\n\tChartConfig,\n\tChartContainer,\n\tChartTooltip,\n\tChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n\t{ month: "Jan", revenue: 1500, expenses: 1200 },\n\t{ month: "Feb", revenue: 3200, expenses: 2800 },\n\t{ month: "Mar", revenue: 2900, expenses: 2500 },\n\t{ month: "Apr", revenue: 2100, expenses: 1900 },\n\t{ month: "May", revenue: 4000, expenses: 3500 },\n\t{ month: "Jun", revenue: 3700, expenses: 3200 },\n]\n\nconst chartConfig = {\n\trevenue: {\n\t\tlabel: "Revenue",\n\t\tcolor: "var(--chart-1)",\n\t},\n\texpenses: {\n\t\tlabel: "Expenses",\n\t\tcolor: "var(--chart-3)",\n\t},\n} satisfies ChartConfig\n\nexport default function ChartBarDemo() {\n\tconst totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0)\n\tconst totalExpenses = chartData.reduce((sum, item) => sum + item.expenses, 0)\n\tconst netProfit = totalRevenue - totalExpenses\n\tconst profitMargin = (netProfit / totalRevenue) * 100\n\n\treturn (\n\t\t<Card className="flex w-full flex-col">\n\t\t\t<CardHeader className="text-center">\n\t\t\t\t<CardTitle>Revenue vs Expenses</CardTitle>\n\t\t\t\t<CardDescription>First half of 2024</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent className="flex-1">\n\t\t\t\t<ChartContainer config={chartConfig} className="h-[300px] w-full">\n\t\t\t\t\t<BarChart\n\t\t\t\t\t\tdata={chartData}\n\t\t\t\t\t\tmargin={{\n\t\t\t\t\t\t\tleft: 12,\n\t\t\t\t\t\t\tright: 12,\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\t<CartesianGrid vertical={false} />\n\t\t\t\t\t\t<XAxis\n\t\t\t\t\t\t\tdataKey="month"\n\t\t\t\t\t\t\ttickLine={false}\n\t\t\t\t\t\t\taxisLine={false}\n\t\t\t\t\t\t\ttickMargin={8}\n\t\t\t\t\t\t\ttickFormatter={(value) => value.slice(0, 3)}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<ChartTooltip\n\t\t\t\t\t\t\tcursor={{ fill: "var(--background)" }}\n\t\t\t\t\t\t\tcontent={<ChartTooltipContent />}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Legend />\n\t\t\t\t\t\t<Bar\n\t\t\t\t\t\t\tdataKey="revenue"\n\t\t\t\t\t\t\tfill={chartConfig.revenue.color}\n\t\t\t\t\t\t\tradius={[4, 4, 0, 0]}\n\t\t\t\t\t\t\tmaxBarSize={32}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Bar\n\t\t\t\t\t\t\tdataKey="expenses"\n\t\t\t\t\t\t\tfill={chartConfig.expenses.color}\n\t\t\t\t\t\t\tradius={[4, 4, 0, 0]}\n\t\t\t\t\t\t\tmaxBarSize={32}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</BarChart>\n\t\t\t\t</ChartContainer>\n\t\t\t</CardContent>\n\t\t\t<CardFooter className="flex-col gap-2 text-sm leading-none">\n\t\t\t\t<div className="flex w-full justify-between font-medium">\n\t\t\t\t\t<span>Net Profit:</span>\n\t\t\t\t\t<span>${netProfit.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Profit Margin:</span>\n\t\t\t\t\t<span className="flex items-center gap-1">\n\t\t\t\t\t\t<TrendingUpIcon className="size-4" />\n\t\t\t\t\t\t{profitMargin.toFixed(1)}%\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Total Expenses:</span>\n\t\t\t\t\t<span>${totalExpenses.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/chart/chart-bar")),
		title: "chart-bar",
		category: "chart",
		path: "src/components/demos/chart/chart-bar.tsx",
	},
	"chart-demo": {
		source:
			'"use client"\n\nimport { Bar, BarChart, CartesianGrid, XAxis } from "recharts"\n\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport {\n\tChartConfig,\n\tChartContainer,\n\tChartTooltip,\n\tChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n\t{ month: "Jan", revenue: 1500 },\n\t{ month: "Feb", revenue: 3200 },\n\t{ month: "Mar", revenue: 2900 },\n\t{ month: "Apr", revenue: 2100 },\n\t{ month: "May", revenue: 4000 },\n\t{ month: "Jun", revenue: 3700 },\n\t{ month: "Jul", revenue: 4300 },\n\t{ month: "Aug", revenue: 4900 },\n\t{ month: "Sep", revenue: 4700 },\n\t{ month: "Oct", revenue: 5200 },\n\t{ month: "Nov", revenue: 6000 },\n\t{ month: "Dec", revenue: 7200 },\n]\n\nconst chartConfig = {\n\trevenue: {\n\t\tlabel: "Revenue",\n\t\tcolor: "var(--chart-2)",\n\t},\n\texpenses: {\n\t\tlabel: "Expenses",\n\t\tcolor: "var(--chart-3)",\n\t},\n} satisfies ChartConfig\n\nexport default function ChartDemo() {\n\tconst totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0)\n\tconst averageRevenue = totalRevenue / chartData.length\n\tconst highestRevenue = Math.max(...chartData.map((item) => item.revenue))\n\n\treturn (\n\t\t<Card className="flex w-full flex-col">\n\t\t\t<CardHeader className="text-center">\n\t\t\t\t<CardTitle>Monthly Revenue</CardTitle>\n\t\t\t\t<CardDescription>Performance overview for 2024</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent className="flex-1">\n\t\t\t\t<ChartContainer config={chartConfig} className="h-[300px] w-full">\n\t\t\t\t\t<BarChart accessibilityLayer data={chartData}>\n\t\t\t\t\t\t<CartesianGrid vertical={false} />\n\t\t\t\t\t\t<XAxis\n\t\t\t\t\t\t\tdataKey="month"\n\t\t\t\t\t\t\ttickLine={false}\n\t\t\t\t\t\t\taxisLine={false}\n\t\t\t\t\t\t\ttickMargin={8}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<ChartTooltip\n\t\t\t\t\t\t\tcursor={{ fill: "var(--background)" }}\n\t\t\t\t\t\t\tcontent={<ChartTooltipContent />}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Bar\n\t\t\t\t\t\t\tdataKey="revenue"\n\t\t\t\t\t\t\tfill="var(--chart-2)"\n\t\t\t\t\t\t\tradius={[4, 4, 0, 0]}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</BarChart>\n\t\t\t\t</ChartContainer>\n\t\t\t</CardContent>\n\t\t\t<CardFooter className="flex-col gap-2 text-sm leading-none">\n\t\t\t\t<div className="flex w-full justify-between font-medium">\n\t\t\t\t\t<span>Total Revenue:</span>\n\t\t\t\t\t<span>${totalRevenue.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Monthly Average:</span>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t$\n\t\t\t\t\t\t{averageRevenue.toLocaleString(undefined, {\n\t\t\t\t\t\t\tmaximumFractionDigits: 0,\n\t\t\t\t\t\t})}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Highest Month:</span>\n\t\t\t\t\t<span>${highestRevenue.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/chart/chart-demo")),
		title: "chart-demo",
		category: "chart",
		path: "src/components/demos/chart/chart-demo.tsx",
	},
	"chart-line": {
		source:
			'"use client"\n\nimport { CartesianGrid, Legend, Line, LineChart, XAxis } from "recharts"\n\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport {\n\tChartConfig,\n\tChartContainer,\n\tChartTooltip,\n\tChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n\t{ month: "Jan", users: 100, activeUsers: 80, newUsers: 20 },\n\t{ month: "Feb", users: 120, activeUsers: 90, newUsers: 30 },\n\t{ month: "Mar", users: 150, activeUsers: 100, newUsers: 50 },\n\t{ month: "Apr", users: 200, activeUsers: 140, newUsers: 60 },\n\t{ month: "May", users: 250, activeUsers: 180, newUsers: 70 },\n\t{ month: "Jun", users: 300, activeUsers: 220, newUsers: 80 },\n]\n\nconst chartConfig = {\n\tusers: {\n\t\tlabel: "Total Users",\n\t\tcolor: "var(--chart-1)",\n\t},\n\tactiveUsers: {\n\t\tlabel: "Active Users",\n\t\tcolor: "var(--chart-2)",\n\t},\n\tnewUsers: {\n\t\tlabel: "New Users",\n\t\tcolor: "var(--chart-3)",\n\t},\n} satisfies ChartConfig\n\nexport default function ChartLineDemo() {\n\tconst totalUsers = chartData[chartData.length - 1].users\n\tconst totalActiveUsers = chartData[chartData.length - 1].activeUsers\n\tconst userGrowth =\n\t\t((chartData[5].users - chartData[0].users) / chartData[0].users) * 100\n\tconst activeUsersRate = (totalActiveUsers / totalUsers) * 100\n\n\treturn (\n\t\t<Card className="flex w-full flex-col">\n\t\t\t<CardHeader className="text-center">\n\t\t\t\t<CardTitle>User Growth</CardTitle>\n\t\t\t\t<CardDescription>User metrics for first half of 2024</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent className="flex-1">\n\t\t\t\t<ChartContainer config={chartConfig} className="h-[300px] w-full">\n\t\t\t\t\t<LineChart\n\t\t\t\t\t\tdata={chartData}\n\t\t\t\t\t\tmargin={{\n\t\t\t\t\t\t\tleft: 12,\n\t\t\t\t\t\t\tright: 12,\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\t<CartesianGrid vertical={false} />\n\t\t\t\t\t\t<XAxis\n\t\t\t\t\t\t\tdataKey="month"\n\t\t\t\t\t\t\ttickLine={false}\n\t\t\t\t\t\t\taxisLine={false}\n\t\t\t\t\t\t\ttickMargin={8}\n\t\t\t\t\t\t\ttickFormatter={(value) => value.slice(0, 3)}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<ChartTooltip content={<ChartTooltipContent />} />\n\t\t\t\t\t\t<Legend />\n\t\t\t\t\t\t<Line\n\t\t\t\t\t\t\ttype="monotone"\n\t\t\t\t\t\t\tdataKey="users"\n\t\t\t\t\t\t\tstroke={chartConfig.users.color}\n\t\t\t\t\t\t\tstrokeWidth={2}\n\t\t\t\t\t\t\tdot={false}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Line\n\t\t\t\t\t\t\ttype="monotone"\n\t\t\t\t\t\t\tdataKey="activeUsers"\n\t\t\t\t\t\t\tstroke={chartConfig.activeUsers.color}\n\t\t\t\t\t\t\tstrokeWidth={2}\n\t\t\t\t\t\t\tdot={false}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Line\n\t\t\t\t\t\t\ttype="monotone"\n\t\t\t\t\t\t\tdataKey="newUsers"\n\t\t\t\t\t\t\tstroke={chartConfig.newUsers.color}\n\t\t\t\t\t\t\tstrokeWidth={2}\n\t\t\t\t\t\t\tdot={false}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</LineChart>\n\t\t\t\t</ChartContainer>\n\t\t\t</CardContent>\n\t\t\t<CardFooter className="flex-col gap-2 text-sm leading-none">\n\t\t\t\t<div className="flex w-full justify-between font-medium">\n\t\t\t\t\t<span>Total Users:</span>\n\t\t\t\t\t<span>{totalUsers.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Active Users Rate:</span>\n\t\t\t\t\t<span>{activeUsersRate.toFixed(1)}%</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>6-Month Growth:</span>\n\t\t\t\t\t<span>{userGrowth.toFixed(1)}%</span>\n\t\t\t\t</div>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/chart/chart-line")),
		title: "chart-line",
		category: "chart",
		path: "src/components/demos/chart/chart-line.tsx",
	},
	"chart-pie": {
		source:
			'"use client"\n\nimport { Cell, Legend, Pie, PieChart } from "recharts"\n\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport {\n\tChartConfig,\n\tChartContainer,\n\tChartTooltip,\n\tChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n\t{ category: "Sales", amount: 4000, fill: "var(--chart-1)" },\n\t{ category: "Marketing", amount: 3000, fill: "var(--chart-2)" },\n\t{ category: "IT", amount: 2000, fill: "var(--chart-3)" },\n\t{ category: "HR", amount: 1000, fill: "var(--chart-4)" },\n\t{ category: "Operations", amount: 1000, fill: "var(--chart-5)" },\n]\n\nconst chartConfig = {\n\tsales: {\n\t\tlabel: "Sales",\n\t\tcolor: "var(--chart-1)",\n\t},\n\tmarketing: {\n\t\tlabel: "Marketing",\n\t\tcolor: "var(--chart-2)",\n\t},\n\tit: {\n\t\tlabel: "IT",\n\t\tcolor: "var(--chart-3)",\n\t},\n\thr: {\n\t\tlabel: "HR",\n\t\tcolor: "var(--chart-4)",\n\t},\n\toperations: {\n\t\tlabel: "Operations",\n\t\tcolor: "var(--chart-5)",\n\t},\n} satisfies ChartConfig\n\nexport default function ChartPieDemo() {\n\tconst totalBudget = chartData.reduce((sum, item) => sum + item.amount, 0)\n\tconst highestBudget = Math.max(...chartData.map((item) => item.amount))\n\tconst highestCategory = chartData.find(\n\t\t(item) => item.amount === highestBudget\n\t)?.category\n\n\treturn (\n\t\t<Card className="flex w-full flex-col">\n\t\t\t<CardHeader className="pb-0 text-center">\n\t\t\t\t<CardTitle>Budget Distribution</CardTitle>\n\t\t\t\t<CardDescription>Department budget allocation for 2024</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent className="flex-1">\n\t\t\t\t<ChartContainer config={chartConfig} className="h-[300px] w-full">\n\t\t\t\t\t<PieChart>\n\t\t\t\t\t\t<ChartTooltip\n\t\t\t\t\t\t\tcursor={false}\n\t\t\t\t\t\t\tcontent={<ChartTooltipContent hideLabel />}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Legend />\n\t\t\t\t\t\t<Pie\n\t\t\t\t\t\t\tdata={chartData}\n\t\t\t\t\t\t\tdataKey="amount"\n\t\t\t\t\t\t\tnameKey="category"\n\t\t\t\t\t\t\tcx="50%"\n\t\t\t\t\t\t\tcy="50%"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{chartData.map((entry, index) => (\n\t\t\t\t\t\t\t\t<Cell key={`cell-${index}`} fill={entry.fill} />\n\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t</Pie>\n\t\t\t\t\t</PieChart>\n\t\t\t\t</ChartContainer>\n\t\t\t</CardContent>\n\t\t\t<CardFooter className="flex-col gap-2 text-sm leading-none">\n\t\t\t\t<div className="flex w-full justify-between font-medium">\n\t\t\t\t\t<span>Total Budget:</span>\n\t\t\t\t\t<span>${totalBudget.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Largest Department:</span>\n\t\t\t\t\t<span>{highestCategory}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Highest Budget:</span>\n\t\t\t\t\t<span>${highestBudget.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/chart/chart-pie")),
		title: "chart-pie",
		category: "chart",
		path: "src/components/demos/chart/chart-pie.tsx",
	},
	"chart-radar": {
		source:
			'"use client"\n\nimport { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"\n\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport {\n\tChartConfig,\n\tChartContainer,\n\tChartTooltip,\n\tChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n\t{ category: "Performance", a: 90, b: 60 },\n\t{ category: "Reliability", a: 75, b: 90 },\n\t{ category: "Scalability", a: 95, b: 90 },\n\t{ category: "Security", a: 88, b: 65 },\n\t{ category: "Usability", a: 92, b: 88 },\n]\n\nconst chartConfig = {\n\ta: {\n\t\tlabel: "Product A",\n\t\tcolor: "var(--chart-1)",\n\t},\n\tb: {\n\t\tlabel: "Product B",\n\t\tcolor: "var(--chart-2)",\n\t},\n} satisfies ChartConfig\n\nexport default function ChartRadarDemo() {\n\tconst productAAverage =\n\t\tchartData.reduce((sum, item) => sum + item.a, 0) / chartData.length\n\tconst productBAverage =\n\t\tchartData.reduce((sum, item) => sum + item.b, 0) / chartData.length\n\tconst bestPerformer =\n\t\tproductAAverage > productBAverage ? "Product A" : "Product B"\n\n\treturn (\n\t\t<Card className="flex w-full flex-col">\n\t\t\t<CardHeader className="text-center">\n\t\t\t\t<CardTitle>Product Comparison</CardTitle>\n\t\t\t\t<CardDescription>\n\t\t\t\t\tPerformance metrics across key categories\n\t\t\t\t</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent className="flex-1">\n\t\t\t\t<ChartContainer config={chartConfig} className="h-[300px] w-full">\n\t\t\t\t\t<RadarChart data={chartData}>\n\t\t\t\t\t\t<PolarGrid />\n\t\t\t\t\t\t<PolarAngleAxis dataKey="category" />\n\t\t\t\t\t\t<ChartTooltip content={<ChartTooltipContent />} />\n\t\t\t\t\t\t<Legend />\n\t\t\t\t\t\t<Radar\n\t\t\t\t\t\t\tname="Product A"\n\t\t\t\t\t\t\tdataKey="a"\n\t\t\t\t\t\t\tstroke={chartConfig.a.color}\n\t\t\t\t\t\t\tfill={chartConfig.a.color}\n\t\t\t\t\t\t\tfillOpacity={0.2}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Radar\n\t\t\t\t\t\t\tname="Product B"\n\t\t\t\t\t\t\tdataKey="b"\n\t\t\t\t\t\t\tstroke={chartConfig.b.color}\n\t\t\t\t\t\t\tfill={chartConfig.b.color}\n\t\t\t\t\t\t\tfillOpacity={0.2}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</RadarChart>\n\t\t\t\t</ChartContainer>\n\t\t\t</CardContent>\n\t\t\t<CardFooter className="flex-col gap-2 text-sm leading-none">\n\t\t\t\t<div className="flex w-full justify-between font-medium">\n\t\t\t\t\t<span>Best Overall:</span>\n\t\t\t\t\t<span>{bestPerformer}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Product A Average:</span>\n\t\t\t\t\t<span>{productAAverage.toFixed(1)}%</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Product B Average:</span>\n\t\t\t\t\t<span>{productBAverage.toFixed(1)}%</span>\n\t\t\t\t</div>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/chart/chart-radar")),
		title: "chart-radar",
		category: "chart",
		path: "src/components/demos/chart/chart-radar.tsx",
	},
	"chart-radial-bar": {
		source:
			'"use client"\n\nimport { RadialBar, RadialBarChart } from "recharts"\n\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport {\n\tChartConfig,\n\tChartContainer,\n\tChartTooltip,\n\tChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n\t{ browser: "chrome", visitors: 540, fill: "var(--color-chrome)" },\n\t{ browser: "safari", visitors: 410, fill: "var(--color-safari)" },\n\t{ browser: "firefox", visitors: 262, fill: "var(--color-firefox)" },\n\t{ browser: "edge", visitors: 160, fill: "var(--color-edge)" },\n\t{ browser: "other", visitors: 100, fill: "var(--color-other)" },\n]\n\nconst chartConfig = {\n\tvisitors: {\n\t\tlabel: "Visitors",\n\t},\n\tchrome: {\n\t\tlabel: "Chrome",\n\t\tcolor: "var(--chart-1)",\n\t},\n\tsafari: {\n\t\tlabel: "Safari",\n\t\tcolor: "var(--chart-2)",\n\t},\n\tfirefox: {\n\t\tlabel: "Firefox",\n\t\tcolor: "var(--chart-3)",\n\t},\n\tedge: {\n\t\tlabel: "Edge",\n\t\tcolor: "var(--chart-4)",\n\t},\n\tother: {\n\t\tlabel: "Other",\n\t\tcolor: "var(--chart-5)",\n\t},\n} satisfies ChartConfig\n\nexport default function ChartRadialBarDemo() {\n\tconst totalVisitors = chartData.reduce((sum, item) => sum + item.visitors, 0)\n\tconst highestVisitors = Math.max(...chartData.map((item) => item.visitors))\n\tconst topBrowser = chartData.find(\n\t\t(item) => item.visitors === highestVisitors\n\t)?.browser\n\n\treturn (\n\t\t<Card className="flex w-full flex-col">\n\t\t\t<CardHeader className="text-center">\n\t\t\t\t<CardTitle>Browser Usage</CardTitle>\n\t\t\t\t<CardDescription>Visitor distribution by browser</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent className="flex-1">\n\t\t\t\t<ChartContainer\n\t\t\t\t\tconfig={chartConfig}\n\t\t\t\t\tclassName="mx-auto aspect-square h-[250px]"\n\t\t\t\t>\n\t\t\t\t\t<RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>\n\t\t\t\t\t\t<ChartTooltip\n\t\t\t\t\t\t\tcursor={false}\n\t\t\t\t\t\t\tcontent={<ChartTooltipContent hideLabel nameKey="browser" />}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<RadialBar dataKey="visitors" background />\n\t\t\t\t\t</RadialBarChart>\n\t\t\t\t</ChartContainer>\n\t\t\t</CardContent>\n\t\t\t<CardFooter className="flex-col gap-2 text-sm leading-none">\n\t\t\t\t<div className="flex w-full justify-between font-medium">\n\t\t\t\t\t<span>Total Visitors:</span>\n\t\t\t\t\t<span>{totalVisitors.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Most Used Browser:</span>\n\t\t\t\t\t<span className="capitalize">{topBrowser}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Peak Visitors:</span>\n\t\t\t\t\t<span>{highestVisitors.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/chart/chart-radial-bar")
		),
		title: "chart-radial-bar",
		category: "chart",
		path: "src/components/demos/chart/chart-radial-bar.tsx",
	},
	"chart-scatter": {
		source:
			'"use client"\n\nimport {\n\tCartesianGrid,\n\tScatter,\n\tScatterChart,\n\tXAxis,\n\tYAxis,\n\tZAxis,\n} from "recharts"\n\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport {\n\tChartConfig,\n\tChartContainer,\n\tChartTooltip,\n\tChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n\t{ population: 850000, price: 425000, city: "San Francisco" },\n\t{ population: 2700000, price: 385000, city: "Chicago" },\n\t{ population: 8400000, price: 750000, city: "New York" },\n\t{ population: 4000000, price: 890000, city: "Los Angeles" },\n\t{ population: 2300000, price: 350000, city: "Houston" },\n\t{ population: 1600000, price: 420000, city: "Philadelphia" },\n\t{ population: 730000, price: 480000, city: "Seattle" },\n\t{ population: 690000, price: 445000, city: "Boston" },\n\t{ population: 710000, price: 320000, city: "Denver" },\n\t{ population: 950000, price: 295000, city: "Austin" },\n]\n\nconst chartConfig = {\n\tscatter: {\n\t\tlabel: "Cities",\n\t\tcolor: "var(--chart-1)",\n\t},\n} satisfies ChartConfig\n\nexport default function ChartScatterDemo() {\n\tconst averagePrice =\n\t\tchartData.reduce((sum, item) => sum + item.price, 0) / chartData.length\n\tconst highestPrice = Math.max(...chartData.map((item) => item.price))\n\tconst mostExpensiveCity = chartData.find(\n\t\t(item) => item.price === highestPrice\n\t)?.city\n\n\treturn (\n\t\t<Card className="flex w-full flex-col">\n\t\t\t<CardHeader className="text-center">\n\t\t\t\t<CardTitle>Housing Market Analysis</CardTitle>\n\t\t\t\t<CardDescription>\n\t\t\t\t\tPopulation vs House Prices in Major Cities\n\t\t\t\t</CardDescription>\n\t\t\t</CardHeader>\n\t\t\t<CardContent>\n\t\t\t\t<ChartContainer config={chartConfig} className="h-[300px] w-full">\n\t\t\t\t\t<ScatterChart>\n\t\t\t\t\t\t<CartesianGrid strokeDasharray="3 3" />\n\t\t\t\t\t\t<XAxis\n\t\t\t\t\t\t\ttype="number"\n\t\t\t\t\t\t\tdataKey="price"\n\t\t\t\t\t\t\tname="Average House Price"\n\t\t\t\t\t\t\tunit="$"\n\t\t\t\t\t\t\ttickLine={false}\n\t\t\t\t\t\t\taxisLine={false}\n\t\t\t\t\t\t\ttickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<YAxis\n\t\t\t\t\t\t\ttype="number"\n\t\t\t\t\t\t\tdataKey="population"\n\t\t\t\t\t\t\tname="Population"\n\t\t\t\t\t\t\ttickLine={false}\n\t\t\t\t\t\t\taxisLine={false}\n\t\t\t\t\t\t\ttickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<ZAxis type="category" dataKey="city" name="City" />\n\t\t\t\t\t\t<ChartTooltip\n\t\t\t\t\t\t\tcontent={\n\t\t\t\t\t\t\t\t<ChartTooltipContent\n\t\t\t\t\t\t\t\t\tnameKey="city"\n\t\t\t\t\t\t\t\t\tlabelKey="price"\n\t\t\t\t\t\t\t\t\thideIndicator\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Scatter\n\t\t\t\t\t\t\tname="Cities"\n\t\t\t\t\t\t\tdata={chartData}\n\t\t\t\t\t\t\tfill={chartConfig.scatter.color}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</ScatterChart>\n\t\t\t\t</ChartContainer>\n\t\t\t</CardContent>\n\t\t\t<CardFooter className="flex-col gap-2 text-sm leading-none">\n\t\t\t\t<div className="flex w-full justify-between font-medium">\n\t\t\t\t\t<span>Most Expensive City:</span>\n\t\t\t\t\t<span>{mostExpensiveCity}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Average House Price:</span>\n\t\t\t\t\t<span>${averagePrice.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t\t<div className="text-muted-foreground flex w-full justify-between">\n\t\t\t\t\t<span>Highest House Price:</span>\n\t\t\t\t\t<span>${highestPrice.toLocaleString()}</span>\n\t\t\t\t</div>\n\t\t\t</CardFooter>\n\t\t</Card>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/chart/chart-scatter")
		),
		title: "chart-scatter",
		category: "chart",
		path: "src/components/demos/chart/chart-scatter.tsx",
	},
	"checkbox-group-demo": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { Checkbox } from "@/components/ui/checkbox"\nimport { CheckboxGroup } from "@/components/ui/checkbox-group"\nimport { Label } from "@/components/ui/label"\n\nconst groceries = ["milk", "cheese", "bread", "apples"]\n\nexport default function CheckboxGroupDemo() {\n\tconst [checkedItems, setCheckedItems] = useState<string[]>([])\n\n\treturn (\n\t\t<CheckboxGroup\n\t\t\taria-labelledby="groceries"\n\t\t\tvalue={checkedItems}\n\t\t\tonValueChange={(value) => setCheckedItems(value)}\n\t\t\tallValues={groceries}\n\t\t>\n\t\t\t<Label className="flex items-center gap-2">\n\t\t\t\t<Checkbox\n\t\t\t\t\tparent\n\t\t\t\t\tindeterminate={\n\t\t\t\t\t\tcheckedItems.length > 0 && checkedItems.length !== groceries.length\n\t\t\t\t\t}\n\t\t\t\t/>\n\t\t\t\tGroceries\n\t\t\t</Label>\n\n\t\t\t{groceries.map((grocery) => (\n\t\t\t\t<Label className="ml-4 flex items-center gap-2" key={grocery}>\n\t\t\t\t\t<Checkbox name={grocery} />\n\t\t\t\t\t{grocery.charAt(0).toUpperCase() + grocery.slice(1)}\n\t\t\t\t</Label>\n\t\t\t))}\n\t\t</CheckboxGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox-group/checkbox-group-demo")
		),
		title: "checkbox-group-demo",
		category: "checkbox-group",
		path: "src/components/demos/checkbox-group/checkbox-group-demo.tsx",
	},
	"checkbox-demo": {
		source:
			'import { Checkbox } from "@/components/ui/checkbox"\n\nexport default function CheckboxDemo() {\n\treturn <Checkbox />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox/checkbox-demo")
		),
		title: "checkbox-demo",
		category: "checkbox",
		path: "src/components/demos/checkbox/checkbox-demo.tsx",
	},
	"checkbox-disabled": {
		source:
			'import { Checkbox } from "@/components/ui/checkbox"\n\nexport default function CheckboxDisabled() {\n\treturn <Checkbox disabled />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox/checkbox-disabled")
		),
		title: "checkbox-disabled",
		category: "checkbox",
		path: "src/components/demos/checkbox/checkbox-disabled.tsx",
	},
	"checkbox-error": {
		source:
			'import { Checkbox } from "@/components/ui/checkbox"\n\nexport default function CheckboxError() {\n\treturn <Checkbox aria-invalid />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox/checkbox-error")
		),
		title: "checkbox-error",
		category: "checkbox",
		path: "src/components/demos/checkbox/checkbox-error.tsx",
	},
	"checkbox-with-label": {
		source:
			'import { Checkbox } from "@/components/ui/checkbox"\nimport { Label } from "@/components/ui/label"\n\nexport default function CheckboxWithLabel() {\n\treturn (\n\t\t<div className="flex items-center gap-2">\n\t\t\t<Checkbox id="accept" />\n\t\t\t<Label htmlFor="accept">Accept</Label>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/checkbox/checkbox-with-label")
		),
		title: "checkbox-with-label",
		category: "checkbox",
		path: "src/components/demos/checkbox/checkbox-with-label.tsx",
	},
	"collapsible-demo": {
		source:
			'import { useState } from "react"\nimport { ChevronRightIcon } from "lucide-react"\n\nimport {\n\tCollapsible,\n\tCollapsibleContent,\n\tCollapsibleTrigger,\n} from "@/components/ui/collapsible"\n\nimport { cn } from "@/lib/utils"\n\nexport default function CollapsibleDemo() {\n\tconst [open, setOpen] = useState(false)\n\n\treturn (\n\t\t<Collapsible\n\t\t\tclassName="mx-auto w-40 py-12"\n\t\t\topen={open}\n\t\t\tonOpenChange={setOpen}\n\t\t>\n\t\t\t<CollapsibleTrigger className="bg-card flex w-full items-center justify-between rounded-sm border px-2 py-1">\n\t\t\t\t<span className="text-sm font-medium">Components</span>\n\t\t\t\t<div className={cn("transition-all duration-200", open && "rotate-90")}>\n\t\t\t\t\t<ChevronRightIcon size={16} />\n\t\t\t\t</div>\n\t\t\t</CollapsibleTrigger>\n\t\t\t<CollapsibleContent>\n\t\t\t\t<ol className="bg-card mt-2 space-y-1 rounded-sm border py-1 font-medium">\n\t\t\t\t\t<li className="px-2 py-1">Button</li>\n\t\t\t\t\t<li className="px-2 py-1">Badge</li>\n\t\t\t\t\t<li className="px-2 py-1">Breadcrumbs</li>\n\t\t\t\t</ol>\n\t\t\t</CollapsibleContent>\n\t\t</Collapsible>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/collapsible/collapsible-demo")
		),
		title: "collapsible-demo",
		category: "collapsible",
		path: "src/components/demos/collapsible/collapsible-demo.tsx",
	},
	"combobox-demo": {
		source:
			'import * as React from "react"\nimport { Check, ChevronsUpDownIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n\tCommand,\n\tCommandEmpty,\n\tCommandGroup,\n\tCommandInput,\n\tCommandItem,\n\tCommandList,\n} from "@/components/ui/command"\nimport {\n\tPopover,\n\tPopoverContent,\n\tPopoverTrigger,\n} from "@/components/ui/popover"\n\nimport { cn } from "@/lib/utils"\n\nconst statuses = [\n\t{\n\t\tvalue: "backlog",\n\t\tlabel: "Backlog",\n\t\tcolor: "bg-slate-500",\n\t},\n\t{\n\t\tvalue: "todo",\n\t\tlabel: "Todo",\n\t\tcolor: "bg-blue-500",\n\t},\n\t{\n\t\tvalue: "in-progress",\n\t\tlabel: "In Progress",\n\t\tcolor: "bg-yellow-500",\n\t},\n\t{\n\t\tvalue: "done",\n\t\tlabel: "Done",\n\t\tcolor: "bg-green-500",\n\t},\n\t{\n\t\tvalue: "canceled",\n\t\tlabel: "Canceled",\n\t\tcolor: "bg-red-500",\n\t},\n]\n\nexport default function ComboboxDemo() {\n\tconst [open, setOpen] = React.useState(false)\n\tconst [value, setValue] = React.useState("todo")\n\n\treturn (\n\t\t<Popover open={open} onOpenChange={setOpen}>\n\t\t\t<PopoverTrigger\n\t\t\t\trender={(props) => (\n\t\t\t\t\t<Button\n\t\t\t\t\t\t{...props}\n\t\t\t\t\t\tvariant="outline"\n\t\t\t\t\t\trole="combobox"\n\t\t\t\t\t\taria-expanded={open}\n\t\t\t\t\t\tclassName="w-[250px] justify-between"\n\t\t\t\t\t>\n\t\t\t\t\t\t{value && (\n\t\t\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tclassName={cn(\n\t\t\t\t\t\t\t\t\t\t"size-2 rounded-full",\n\t\t\t\t\t\t\t\t\t\tstatuses.find((status) => status.value === value)?.color\n\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t{statuses.find((status) => status.value === value)?.label}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t)}\n\t\t\t\t\t\t<ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />\n\t\t\t\t\t</Button>\n\t\t\t\t)}\n\t\t\t/>\n\t\t\t<PopoverContent className="w-[250px] p-0" sideOffset={4} arrow={false}>\n\t\t\t\t<Command>\n\t\t\t\t\t<CommandInput\n\t\t\t\t\t\tplaceholder="Search status..."\n\t\t\t\t\t\tclassName="border-none focus:ring-0"\n\t\t\t\t\t/>\n\t\t\t\t\t<CommandList>\n\t\t\t\t\t\t<CommandEmpty>No status found.</CommandEmpty>\n\t\t\t\t\t\t<CommandGroup>\n\t\t\t\t\t\t\t{statuses.map((status) => (\n\t\t\t\t\t\t\t\t<CommandItem\n\t\t\t\t\t\t\t\t\tkey={status.value}\n\t\t\t\t\t\t\t\t\tvalue={status.value}\n\t\t\t\t\t\t\t\t\tonSelect={(currentValue) => {\n\t\t\t\t\t\t\t\t\t\tsetValue(currentValue)\n\t\t\t\t\t\t\t\t\t\tsetOpen(false)\n\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t\t\t\t\t<div className={cn("size-2 rounded-full", status.color)} />\n\t\t\t\t\t\t\t\t\t\t<span>{status.label}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t{value === status.value && (\n\t\t\t\t\t\t\t\t\t\t<Check className="ml-auto size-4 shrink-0 opacity-50" />\n\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t</CommandGroup>\n\t\t\t\t\t</CommandList>\n\t\t\t\t</Command>\n\t\t\t</PopoverContent>\n\t\t</Popover>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/combobox/combobox-demo")
		),
		title: "combobox-demo",
		category: "combobox",
		path: "src/components/demos/combobox/combobox-demo.tsx",
	},
	"command-demo": {
		source:
			'import {\n\tArrowRightIcon,\n\tLayoutGridIcon,\n\tPlusIcon,\n\tUsersIcon,\n} from "lucide-react"\n\nimport {\n\tCommand,\n\tCommandEmpty,\n\tCommandGroup,\n\tCommandInput,\n\tCommandItem,\n\tCommandList,\n\tCommandSeparator,\n\tCommandShortcut,\n} from "@/components/ui/command"\nimport { Kbd } from "@/components/ui/kbd"\n\nexport default function CommandDemo() {\n\treturn (\n\t\t<Command>\n\t\t\t<CommandInput placeholder="Type a command or search..." />\n\t\t\t<CommandList>\n\t\t\t\t<CommandEmpty>No results found.</CommandEmpty>\n\t\t\t\t<CommandGroup heading="Projects">\n\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t<LayoutGridIcon />\n\t\t\t\t\t\t<span>Search projects...</span>\n\t\t\t\t\t\t<CommandShortcut>\n\t\t\t\t\t\t\t<Kbd>⌘</Kbd>\n\t\t\t\t\t\t\t<Kbd>P</Kbd>\n\t\t\t\t\t\t</CommandShortcut>\n\t\t\t\t\t</CommandItem>\n\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t<PlusIcon />\n\t\t\t\t\t\t<span>Create new project...</span>\n\t\t\t\t\t\t<CommandShortcut>\n\t\t\t\t\t\t\t<Kbd>C</Kbd>\n\t\t\t\t\t\t</CommandShortcut>\n\t\t\t\t\t</CommandItem>\n\t\t\t\t</CommandGroup>\n\t\t\t\t<CommandSeparator />\n\t\t\t\t<CommandGroup heading="Teams">\n\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t<UsersIcon />\n\t\t\t\t\t\t<span>Search teams...</span>\n\t\t\t\t\t</CommandItem>\n\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t<PlusIcon />\n\t\t\t\t\t\t<span>Create new team...</span>\n\t\t\t\t\t\t<CommandShortcut>\n\t\t\t\t\t\t\t<Kbd>T</Kbd>\n\t\t\t\t\t\t</CommandShortcut>\n\t\t\t\t\t</CommandItem>\n\t\t\t\t</CommandGroup>\n\t\t\t\t<CommandGroup heading="Navigation">\n\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t<ArrowRightIcon />\n\t\t\t\t\t\t<span>Go to home</span>\n\t\t\t\t\t</CommandItem>\n\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t<ArrowRightIcon />\n\t\t\t\t\t\t<span>Go to profile</span>\n\t\t\t\t\t</CommandItem>\n\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t<ArrowRightIcon />\n\t\t\t\t\t\t<span>Go to settings</span>\n\t\t\t\t\t</CommandItem>\n\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t<ArrowRightIcon />\n\t\t\t\t\t\t<span>Go to billing</span>\n\t\t\t\t\t</CommandItem>\n\t\t\t\t</CommandGroup>\n\t\t\t</CommandList>\n\t\t</Command>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/command/command-demo")
		),
		title: "command-demo",
		category: "command",
		path: "src/components/demos/command/command-demo.tsx",
	},
	"command-dialog": {
		source:
			'"use client"\n\nimport { useEffect, useState } from "react"\nimport {\n\tArrowRightIcon,\n\tLayoutGridIcon,\n\tPlusIcon,\n\tUsersIcon,\n} from "lucide-react"\n\nimport {\n\tCommandDialog,\n\tCommandEmpty,\n\tCommandGroup,\n\tCommandInput,\n\tCommandItem,\n\tCommandList,\n\tCommandSeparator,\n\tCommandShortcut,\n} from "@/components/ui/command"\nimport { Kbd } from "@/components/ui/kbd"\n\nexport default function CommandDialogDemo() {\n\tconst [open, setOpen] = useState(false)\n\n\tuseEffect(() => {\n\t\tconst down = (e: KeyboardEvent) => {\n\t\t\tif (e.key === "j" && (e.metaKey || e.ctrlKey)) {\n\t\t\t\te.preventDefault()\n\t\t\t\tsetOpen((open) => !open)\n\t\t\t}\n\t\t}\n\t\tdocument.addEventListener("keydown", down)\n\t\treturn () => document.removeEventListener("keydown", down)\n\t}, [])\n\n\treturn (\n\t\t<>\n\t\t\t<div className="flex items-center gap-2 text-sm">\n\t\t\t\t<Kbd>⌘</Kbd>+<Kbd>J</Kbd>\n\t\t\t</div>\n\t\t\t<CommandDialog open={open} onOpenChange={setOpen}>\n\t\t\t\t<CommandInput placeholder="Type a command or search..." />\n\t\t\t\t<CommandList>\n\t\t\t\t\t<CommandEmpty>No results found.</CommandEmpty>\n\t\t\t\t\t<CommandGroup heading="Projects">\n\t\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t\t<LayoutGridIcon />\n\t\t\t\t\t\t\t<span>Search projects...</span>\n\t\t\t\t\t\t\t<CommandShortcut>\n\t\t\t\t\t\t\t\t<Kbd>⌘</Kbd>\n\t\t\t\t\t\t\t\t<Kbd>P</Kbd>\n\t\t\t\t\t\t\t</CommandShortcut>\n\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t\t<PlusIcon />\n\t\t\t\t\t\t\t<span>Create new project...</span>\n\t\t\t\t\t\t\t<CommandShortcut>\n\t\t\t\t\t\t\t\t<Kbd>C</Kbd>\n\t\t\t\t\t\t\t</CommandShortcut>\n\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t</CommandGroup>\n\t\t\t\t\t<CommandSeparator />\n\t\t\t\t\t<CommandGroup heading="Teams">\n\t\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t\t<UsersIcon />\n\t\t\t\t\t\t\t<span>Search teams...</span>\n\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t\t<PlusIcon />\n\t\t\t\t\t\t\t<span>Create new team...</span>\n\t\t\t\t\t\t\t<CommandShortcut>\n\t\t\t\t\t\t\t\t<Kbd>T</Kbd>\n\t\t\t\t\t\t\t</CommandShortcut>\n\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t</CommandGroup>\n\t\t\t\t\t<CommandGroup heading="Navigation">\n\t\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t\t<ArrowRightIcon />\n\t\t\t\t\t\t\t<span>Go to home</span>\n\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t\t<ArrowRightIcon />\n\t\t\t\t\t\t\t<span>Go to profile</span>\n\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t\t<ArrowRightIcon />\n\t\t\t\t\t\t\t<span>Go to settings</span>\n\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t\t<CommandItem>\n\t\t\t\t\t\t\t<ArrowRightIcon />\n\t\t\t\t\t\t\t<span>Go to billing</span>\n\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t</CommandGroup>\n\t\t\t\t</CommandList>\n\t\t\t</CommandDialog>\n\t\t</>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/command/command-dialog")
		),
		title: "command-dialog",
		category: "command",
		path: "src/components/demos/command/command-dialog.tsx",
	},
	"context-menu-demo": {
		source:
			'"use client"\n\nimport {\n\tContextMenu,\n\tContextMenuCheckboxItem,\n\tContextMenuContent,\n\tContextMenuGroup,\n\tContextMenuItem,\n\tContextMenuLabel,\n\tContextMenuRadioGroup,\n\tContextMenuRadioItem,\n\tContextMenuSeparator,\n\tContextMenuShortcut,\n\tContextMenuSub,\n\tContextMenuSubContent,\n\tContextMenuSubTrigger,\n\tContextMenuTrigger,\n} from "@/components/ui/context-menu"\n\nexport default function ContextMenuDemo() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<ContextMenu>\n\t\t\t\t<ContextMenuTrigger className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed text-sm">\n\t\t\t\t\tRight Click Here\n\t\t\t\t</ContextMenuTrigger>\n\t\t\t\t<ContextMenuContent>\n\t\t\t\t\t<ContextMenuGroup>\n\t\t\t\t\t\t<ContextMenuItem>\n\t\t\t\t\t\t\tBack\n\t\t\t\t\t\t\t<ContextMenuShortcut>⌘[</ContextMenuShortcut>\n\t\t\t\t\t\t</ContextMenuItem>\n\t\t\t\t\t\t<ContextMenuItem disabled>\n\t\t\t\t\t\t\tForward\n\t\t\t\t\t\t\t<ContextMenuShortcut>⌘]</ContextMenuShortcut>\n\t\t\t\t\t\t</ContextMenuItem>\n\t\t\t\t\t\t<ContextMenuItem>\n\t\t\t\t\t\t\tReload\n\t\t\t\t\t\t\t<ContextMenuShortcut>⌘R</ContextMenuShortcut>\n\t\t\t\t\t\t</ContextMenuItem>\n\t\t\t\t\t\t<ContextMenuSub>\n\t\t\t\t\t\t\t<ContextMenuSubTrigger>More</ContextMenuSubTrigger>\n\t\t\t\t\t\t\t<ContextMenuSubContent>\n\t\t\t\t\t\t\t\t<ContextMenuItem>Save As</ContextMenuItem>\n\t\t\t\t\t\t\t\t<ContextMenuItem>Print</ContextMenuItem>\n\t\t\t\t\t\t\t\t<ContextMenuItem>Cast</ContextMenuItem>\n\t\t\t\t\t\t\t\t<ContextMenuSeparator />\n\t\t\t\t\t\t\t\t<ContextMenuItem>Inspect</ContextMenuItem>\n\t\t\t\t\t\t\t</ContextMenuSubContent>\n\t\t\t\t\t\t</ContextMenuSub>\n\t\t\t\t\t</ContextMenuGroup>\n\t\t\t\t\t<ContextMenuSeparator />\n\t\t\t\t\t<ContextMenuGroup>\n\t\t\t\t\t\t<ContextMenuLabel>Settings</ContextMenuLabel>\n\t\t\t\t\t\t<ContextMenuCheckboxItem>Always on Top</ContextMenuCheckboxItem>\n\t\t\t\t\t\t<ContextMenuCheckboxItem>Show full URL</ContextMenuCheckboxItem>\n\t\t\t\t\t</ContextMenuGroup>\n\t\t\t\t\t<ContextMenuSeparator />\n\t\t\t\t\t<ContextMenuGroup>\n\t\t\t\t\t\t<ContextMenuLabel>Zoom</ContextMenuLabel>\n\t\t\t\t\t\t<ContextMenuRadioGroup defaultValue="100">\n\t\t\t\t\t\t\t<ContextMenuRadioItem value="50">50%</ContextMenuRadioItem>\n\t\t\t\t\t\t\t<ContextMenuRadioItem value="100">100%</ContextMenuRadioItem>\n\t\t\t\t\t\t\t<ContextMenuRadioItem value="150">150%</ContextMenuRadioItem>\n\t\t\t\t\t\t</ContextMenuRadioGroup>\n\t\t\t\t\t</ContextMenuGroup>\n\t\t\t\t</ContextMenuContent>\n\t\t\t</ContextMenu>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/context-menu/context-menu-demo")
		),
		title: "context-menu-demo",
		category: "context-menu",
		path: "src/components/demos/context-menu/context-menu-demo.tsx",
	},
	"date-picker-demo": {
		source:
			'import * as React from "react"\nimport dayjs from "dayjs"\nimport { CalendarIcon, ChevronsUpDownIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport { Calendar } from "@/components/ui/calendar"\nimport {\n\tPopover,\n\tPopoverContent,\n\tPopoverTrigger,\n} from "@/components/ui/popover"\n\nexport default function DatePickerDemo() {\n\tconst [open, setOpen] = React.useState(false)\n\tconst [value, setValue] = React.useState<Date | undefined>(undefined)\n\n\treturn (\n\t\t<Popover open={open} onOpenChange={setOpen}>\n\t\t\t<PopoverTrigger\n\t\t\t\trender={(props) => (\n\t\t\t\t\t<Button\n\t\t\t\t\t\t{...props}\n\t\t\t\t\t\tvariant="outline"\n\t\t\t\t\t\tclassName="w-[250px] justify-between"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div className="flex items-center">\n\t\t\t\t\t\t\t<CalendarIcon className="mr-2 size-4" />\n\t\t\t\t\t\t\t{value ? (\n\t\t\t\t\t\t\t\t<span>{dayjs(value).format("DD MMMM YYYY")}</span>\n\t\t\t\t\t\t\t) : (\n\t\t\t\t\t\t\t\t<span>Select a date</span>\n\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />\n\t\t\t\t\t</Button>\n\t\t\t\t)}\n\t\t\t/>\n\t\t\t<PopoverContent className="w-[250px] p-0" sideOffset={4} arrow={false}>\n\t\t\t\t<Calendar\n\t\t\t\t\tclassName="border-0"\n\t\t\t\t\tmode="single"\n\t\t\t\t\tshowOutsideDays\n\t\t\t\t\tselected={value}\n\t\t\t\t\tonSelect={setValue}\n\t\t\t\t/>\n\t\t\t</PopoverContent>\n\t\t</Popover>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/date-picker/date-picker-demo")
		),
		title: "date-picker-demo",
		category: "date-picker",
		path: "src/components/demos/date-picker/date-picker-demo.tsx",
	},
	"dialog-demo": {
		source:
			'import { Button } from "@/components/ui/button"\nimport {\n\tDialog,\n\tDialogContent,\n\tDialogDescription,\n\tDialogFooter,\n\tDialogHeader,\n\tDialogTitle,\n\tDialogTrigger,\n} from "@/components/ui/dialog"\n\nexport default function DialogDemo() {\n\treturn (\n\t\t<Dialog>\n\t\t\t<DialogTrigger\n\t\t\t\trender={(props) => <Button {...props}>Privacy Policy</Button>}\n\t\t\t/>\n\t\t\t<DialogContent>\n\t\t\t\t<DialogHeader>\n\t\t\t\t\t<DialogTitle>Privacy Policy</DialogTitle>\n\t\t\t\t\t<DialogDescription>\n\t\t\t\t\t\tPlease read our privacy policy carefully.\n\t\t\t\t\t</DialogDescription>\n\t\t\t\t</DialogHeader>\n\t\t\t\t<div className="text-foreground max-h-80 overflow-y-auto text-sm outline-none">\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n\t\t\t\t\tultricies, odio quis blandit vestibulum, orci elit suscipit urna, at\n\t\t\t\t\tlobortis arcu enim vel purus. Maecenas luctus sem dui, lobortis\n\t\t\t\t\tdignissim enim consequat in. Nullam a volutpat purus. Aenean\n\t\t\t\t\tpellentesque eros nec rutrum suscipit. Fusce ac lectus volutpat,\n\t\t\t\t\tfeugiat nulla et, suscipit dui. Pellentesque habitant morbi tristique\n\t\t\t\t\tsenectus et netus et malesuada fames ac turpis egestas. Ut maximus,\n\t\t\t\t\trisus et convallis placerat, risus urna feugiat neque, in vestibulum\n\t\t\t\t\tleo arcu vitae justo. Duis magna mi, maximus at neque sed, tempor\n\t\t\t\t\tcongue ligula. In iaculis metus nec euismod egestas. Donec id\n\t\t\t\t\tporttitor nulla. Donec feugiat iaculis lacus, ut elementum dui\n\t\t\t\t\tfaucibus sed. Sed ut ipsum non tellus dignissim accumsan. Vivamus\n\t\t\t\t\tluctus malesuada lacus sed dictum.\n\t\t\t\t\t<br />\n\t\t\t\t\t<br />\n\t\t\t\t\tSed consectetur nibh mollis, ornare magna et, dictum tellus. Nam\n\t\t\t\t\tviverra dui a enim iaculis, sed blandit orci consectetur. Maecenas et\n\t\t\t\t\tnisi eleifend velit pretium eleifend sit amet eget nisl. Vestibulum\n\t\t\t\t\teget ipsum semper purus pulvinar iaculis. Sed ut odio eu felis\n\t\t\t\t\tporttitor ultrices eu sed odio. Nullam lorem sapien, pellentesque\n\t\t\t\t\tconvallis libero vel, tempus accumsan nisi. Morbi efficitur ex vitae\n\t\t\t\t\tfelis luctus cursus. Suspendisse nibh neque, gravida sed elementum\n\t\t\t\t\tullamcorper, gravida in nisi. Donec et luctus metus. Fusce sed est\n\t\t\t\t\tdictum, imperdiet nisi eu, suscipit odio. In id enim at tortor\n\t\t\t\t\tmalesuada vulputate eu eu sem. Mauris blandit faucibus euismod.\n\t\t\t\t\t<br />\n\t\t\t\t\t<br />\n\t\t\t\t\tCurabitur quam tortor, tristique euismod finibus viverra, bibendum sit\n\t\t\t\t\tamet nisl. Nulla lobortis pharetra mauris, ac semper urna tempor et.\n\t\t\t\t\tMaecenas enim magna, suscipit nec metus id, ornare pulvinar dolor.\n\t\t\t\t\tCras rhoncus ante sit amet tempus luctus. Donec in nisl a dolor auctor\n\t\t\t\t\ttincidunt. Cras at arcu tortor. Pellentesque ante felis, convallis sit\n\t\t\t\t\tamet erat id, consectetur consequat sapien. Aliquam volutpat velit in\n\t\t\t\t\test bibendum, vestibulum commodo leo interdum. Integer sodales ex eu\n\t\t\t\t\ttempus faucibus. Vestibulum ultricies erat vel leo accumsan posuere.\n\t\t\t\t\tCras commodo felis vitae lacus suscipit, in tristique lectus\n\t\t\t\t\tvenenatis. Sed et nibh urna. Praesent vitae eleifend turpis. Fusce sit\n\t\t\t\t\tamet pretium lorem, in tempus elit. Etiam at ornare est. Aenean felis\n\t\t\t\t\tarcu, fermentum scelerisque nibh at, lacinia sagittis neque.\n\t\t\t\t</div>\n\t\t\t\t<DialogFooter>\n\t\t\t\t\t<Button className="w-full">Accept</Button>\n\t\t\t\t</DialogFooter>\n\t\t\t</DialogContent>\n\t\t</Dialog>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/dialog/dialog-demo")
		),
		title: "dialog-demo",
		category: "dialog",
		path: "src/components/demos/dialog/dialog-demo.tsx",
	},
	"dialog-nested": {
		source:
			'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\nimport { Button } from "@/components/ui/button"\nimport {\n\tDialog,\n\tDialogClose,\n\tDialogContent,\n\tDialogDescription,\n\tDialogFooter,\n\tDialogHeader,\n\tDialogTitle,\n\tDialogTrigger,\n} from "@/components/ui/dialog"\n\nexport default function DialogNested() {\n\treturn (\n\t\t<Dialog>\n\t\t\t<DialogTrigger\n\t\t\t\trender={(props) => <Button {...props}>View Details</Button>}\n\t\t\t/>\n\t\t\t<DialogContent>\n\t\t\t\t<DialogHeader>\n\t\t\t\t\t<DialogTitle>Profile</DialogTitle>\n\t\t\t\t\t<DialogDescription>\n\t\t\t\t\t\tView and edit your profile details.\n\t\t\t\t\t</DialogDescription>\n\t\t\t\t</DialogHeader>\n\t\t\t\t<div>\n\t\t\t\t\t<div className="flex items-center gap-4">\n\t\t\t\t\t\t<Avatar>\n\t\t\t\t\t\t\t<AvatarImage src="/avatars/bora.png" />\n\t\t\t\t\t\t\t<AvatarFallback>BB</AvatarFallback>\n\t\t\t\t\t\t</Avatar>\n\t\t\t\t\t\t<span className="text-foreground">Bora Baloglu</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<DialogFooter>\n\t\t\t\t\t<Dialog>\n\t\t\t\t\t\t<DialogTrigger\n\t\t\t\t\t\t\trender={(props) => (\n\t\t\t\t\t\t\t\t<Button {...props} variant="outline">\n\t\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<DialogContent>\n\t\t\t\t\t\t\t<DialogTitle>Edit</DialogTitle>\n\t\t\t\t\t\t\t<DialogDescription>\n\t\t\t\t\t\t\t\tEdit the details of the item\n\t\t\t\t\t\t\t</DialogDescription>\n\t\t\t\t\t\t\t<DialogFooter>\n\t\t\t\t\t\t\t\t<DialogClose\n\t\t\t\t\t\t\t\t\trender={(props) => (\n\t\t\t\t\t\t\t\t\t\t<Button {...props} variant="ghost">\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<Button>Save</Button>\n\t\t\t\t\t\t\t</DialogFooter>\n\t\t\t\t\t\t</DialogContent>\n\t\t\t\t\t</Dialog>\n\t\t\t\t</DialogFooter>\n\t\t\t</DialogContent>\n\t\t</Dialog>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/dialog/dialog-nested")
		),
		title: "dialog-nested",
		category: "dialog",
		path: "src/components/demos/dialog/dialog-nested.tsx",
	},
	"drawer-demo": {
		source:
			'"use client"\n\nimport { useState } from "react"\nimport { StarIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n\tDrawer,\n\tDrawerClose,\n\tDrawerContent,\n\tDrawerDescription,\n\tDrawerFooter,\n\tDrawerHeader,\n\tDrawerTitle,\n\tDrawerTrigger,\n} from "@/components/ui/drawer"\nimport { Textarea } from "@/components/ui/textarea"\n\nimport { cn } from "@/lib/utils"\n\nexport default function DrawerDemo() {\n\tconst [rating, setRating] = useState<number | undefined>(undefined)\n\n\tconst handleChangeRating = (newRating: number) => {\n\t\tif (newRating === rating) {\n\t\t\tsetRating(undefined)\n\t\t} else {\n\t\t\tsetRating(newRating)\n\t\t}\n\t}\n\n\treturn (\n\t\t<Drawer shouldScaleBackground>\n\t\t\t<DrawerTrigger\n\t\t\t\trender={(props) => <Button {...props}>Open Drawer</Button>}\n\t\t\t/>\n\t\t\t<DrawerContent>\n\t\t\t\t<div className="mx-auto w-full max-w-md">\n\t\t\t\t\t<DrawerHeader>\n\t\t\t\t\t\t<DrawerTitle>Provide Your Feedback</DrawerTitle>\n\t\t\t\t\t\t<DrawerDescription>\n\t\t\t\t\t\t\tWe value your feedback. Please rate your experience and leave a\n\t\t\t\t\t\t\treview.\n\t\t\t\t\t\t</DrawerDescription>\n\t\t\t\t\t</DrawerHeader>\n\n\t\t\t\t\t<div className="flex flex-col gap-4 px-4">\n\t\t\t\t\t\t<div className="flex gap-2">\n\t\t\t\t\t\t\t{[1, 2, 3, 4, 5].map((star) => (\n\t\t\t\t\t\t\t\t<StarIcon\n\t\t\t\t\t\t\t\t\tkey={star}\n\t\t\t\t\t\t\t\t\tclassName={cn(\n\t\t\t\t\t\t\t\t\t\t"size-8 cursor-pointer transition-all",\n\t\t\t\t\t\t\t\t\t\trating && star <= rating\n\t\t\t\t\t\t\t\t\t\t\t? "fill-yellow-300 text-yellow-300"\n\t\t\t\t\t\t\t\t\t\t\t: "text-muted-foreground fill-none"\n\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t\tonClick={() => handleChangeRating(star)}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<Textarea placeholder="Write a review" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<DrawerFooter>\n\t\t\t\t\t\t<Button className="w-full">Submit</Button>\n\t\t\t\t\t\t<DrawerClose\n\t\t\t\t\t\t\trender={(props) => (\n\t\t\t\t\t\t\t\t<Button {...props} variant="outline" className="w-full">\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</DrawerFooter>\n\t\t\t\t</div>\n\t\t\t</DrawerContent>\n\t\t</Drawer>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/drawer/drawer-demo")
		),
		title: "drawer-demo",
		category: "drawer",
		path: "src/components/demos/drawer/drawer-demo.tsx",
	},
	"dropdown-menu-demo": {
		source:
			'"use client"\n\nimport { useState } from "react"\nimport {\n\tPauseIcon,\n\tPlayIcon,\n\tSkipBackIcon,\n\tSkipForwardIcon,\n} from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n\tDropdownMenu,\n\tDropdownMenuCheckboxItem,\n\tDropdownMenuContent,\n\tDropdownMenuGroup,\n\tDropdownMenuItem,\n\tDropdownMenuLabel,\n\tDropdownMenuRadioGroup,\n\tDropdownMenuRadioItem,\n\tDropdownMenuSeparator,\n\tDropdownMenuShortcut,\n\tDropdownMenuSub,\n\tDropdownMenuSubContent,\n\tDropdownMenuSubTrigger,\n\tDropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\n\nexport default function DropdownDemo() {\n\tconst [shuffle, setShuffle] = useState(false)\n\tconst [repeat, setRepeat] = useState(false)\n\tconst [sortBy, setSortBy] = useState("artist")\n\n\treturn (\n\t\t<DropdownMenu>\n\t\t\t<DropdownMenuTrigger\n\t\t\t\trender={(props) => <Button {...props}>Controls</Button>}\n\t\t\t/>\n\t\t\t<DropdownMenuContent>\n\t\t\t\t<DropdownMenuGroup>\n\t\t\t\t\t<DropdownMenuLabel>Playback</DropdownMenuLabel>\n\t\t\t\t\t<DropdownMenuItem>\n\t\t\t\t\t\t<PlayIcon />\n\t\t\t\t\t\tPlay\n\t\t\t\t\t\t<DropdownMenuShortcut>⌘P</DropdownMenuShortcut>\n\t\t\t\t\t</DropdownMenuItem>\n\t\t\t\t\t<DropdownMenuItem>\n\t\t\t\t\t\t<PauseIcon />\n\t\t\t\t\t\tPause\n\t\t\t\t\t\t<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>\n\t\t\t\t\t</DropdownMenuItem>\n\t\t\t\t\t<DropdownMenuItem>\n\t\t\t\t\t\t<SkipBackIcon />\n\t\t\t\t\t\tPrevious\n\t\t\t\t\t\t<DropdownMenuShortcut>⌘[</DropdownMenuShortcut>\n\t\t\t\t\t</DropdownMenuItem>\n\t\t\t\t\t<DropdownMenuItem>\n\t\t\t\t\t\t<SkipForwardIcon />\n\t\t\t\t\t\tNext\n\t\t\t\t\t\t<DropdownMenuShortcut>⌘]</DropdownMenuShortcut>\n\t\t\t\t\t</DropdownMenuItem>\n\t\t\t\t</DropdownMenuGroup>\n\t\t\t\t<DropdownMenuSeparator />\n\t\t\t\t<DropdownMenuCheckboxItem\n\t\t\t\t\tchecked={shuffle}\n\t\t\t\t\tonCheckedChange={setShuffle}\n\t\t\t\t>\n\t\t\t\t\tShuffle\n\t\t\t\t</DropdownMenuCheckboxItem>\n\t\t\t\t<DropdownMenuCheckboxItem checked={repeat} onCheckedChange={setRepeat}>\n\t\t\t\t\tRepeat\n\t\t\t\t</DropdownMenuCheckboxItem>\n\t\t\t\t<DropdownMenuCheckboxItem disabled>\n\t\t\t\t\tEnhanced Audio\n\t\t\t\t</DropdownMenuCheckboxItem>\n\t\t\t\t<DropdownMenuSeparator />\n\t\t\t\t<DropdownMenuGroup>\n\t\t\t\t\t<DropdownMenuLabel>Sort by</DropdownMenuLabel>\n\t\t\t\t\t<DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>\n\t\t\t\t\t\t<DropdownMenuRadioItem value="artist">Artist</DropdownMenuRadioItem>\n\t\t\t\t\t\t<DropdownMenuRadioItem value="album">Repeat</DropdownMenuRadioItem>\n\t\t\t\t\t\t<DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>\n\t\t\t\t\t</DropdownMenuRadioGroup>\n\t\t\t\t</DropdownMenuGroup>\n\t\t\t\t<DropdownMenuSeparator />\n\t\t\t\t<DropdownMenuSub>\n\t\t\t\t\t<DropdownMenuSubTrigger>Add to Playlist</DropdownMenuSubTrigger>\n\t\t\t\t\t<DropdownMenuSubContent>\n\t\t\t\t\t\t<DropdownMenuItem>Jazz</DropdownMenuItem>\n\t\t\t\t\t\t<DropdownMenuItem>Rock</DropdownMenuItem>\n\t\t\t\t\t\t<DropdownMenuItem>Pop</DropdownMenuItem>\n\t\t\t\t\t</DropdownMenuSubContent>\n\t\t\t\t</DropdownMenuSub>\n\t\t\t</DropdownMenuContent>\n\t\t</DropdownMenu>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/dropdown-menu/dropdown-menu-demo")
		),
		title: "dropdown-menu-demo",
		category: "dropdown-menu",
		path: "src/components/demos/dropdown-menu/dropdown-menu-demo.tsx",
	},
	"emoji-picker-demo": {
		source:
			'"use client"\n\nimport { Loader2 } from "lucide-react"\nimport { toast } from "sonner"\n\nimport {\n\tEmojiPicker,\n\tEmojiPickerContent,\n\tEmojiPickerEmpty,\n\tEmojiPickerList,\n\tEmojiPickerLoading,\n\tEmojiPickerSearch,\n} from "@/components/ui/emoji-picker"\n\nexport default function EmojiPickerDemo() {\n\treturn (\n\t\t<EmojiPicker\n\t\t\tonEmojiSelect={({ emoji, label }) => {\n\t\t\t\ttoast(() => (\n\t\t\t\t\t<p className="flex items-center gap-2 text-sm">\n\t\t\t\t\t\t<span className="text-lg">{emoji}</span>\n\t\t\t\t\t\t{label}\n\t\t\t\t\t</p>\n\t\t\t\t))\n\t\t\t}}\n\t\t>\n\t\t\t<EmojiPickerSearch />\n\t\t\t<EmojiPickerContent>\n\t\t\t\t<EmojiPickerLoading>\n\t\t\t\t\t<Loader2 className="size-4 animate-spin" />\n\t\t\t\t</EmojiPickerLoading>\n\t\t\t\t<EmojiPickerEmpty>No results</EmojiPickerEmpty>\n\t\t\t\t<EmojiPickerList />\n\t\t\t</EmojiPickerContent>\n\t\t</EmojiPicker>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/emoji-picker/emoji-picker-demo")
		),
		title: "emoji-picker-demo",
		category: "emoji-picker",
		path: "src/components/demos/emoji-picker/emoji-picker-demo.tsx",
	},
	"emoji-picker-popover": {
		source:
			'import * as React from "react"\nimport { Loader2 } from "lucide-react"\nimport { toast } from "sonner"\n\nimport { Button } from "@/components/ui/button"\nimport {\n\tEmojiPicker,\n\tEmojiPickerContent,\n\tEmojiPickerEmpty,\n\tEmojiPickerList,\n\tEmojiPickerLoading,\n\tEmojiPickerSearch,\n} from "@/components/ui/emoji-picker"\nimport {\n\tPopover,\n\tPopoverContent,\n\tPopoverTrigger,\n} from "@/components/ui/popover"\n\nexport default function EmojiPickerPopoverDemo() {\n\tconst [open, setOpen] = React.useState(false)\n\tconst [emoji, setEmoji] = React.useState<string | undefined>(undefined)\n\n\treturn (\n\t\t<Popover open={open} onOpenChange={setOpen}>\n\t\t\t<PopoverTrigger\n\t\t\t\trender={(props) => (\n\t\t\t\t\t<Button {...props} variant="outline" size="icon">\n\t\t\t\t\t\t{emoji ? emoji : "👇"}\n\t\t\t\t\t</Button>\n\t\t\t\t)}\n\t\t\t/>\n\t\t\t<PopoverContent className="w-full rounded-md p-0 outline-offset-0">\n\t\t\t\t<EmojiPicker\n\t\t\t\t\tclassName="border-none"\n\t\t\t\t\tonEmojiSelect={({ emoji, label }) => {\n\t\t\t\t\t\tsetEmoji(emoji)\n\t\t\t\t\t\tsetOpen(false)\n\t\t\t\t\t\ttoast(() => (\n\t\t\t\t\t\t\t<p className="flex items-center gap-2 text-sm">\n\t\t\t\t\t\t\t\t<span className="text-lg">{emoji}</span>\n\t\t\t\t\t\t\t\t{label}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t))\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t<EmojiPickerSearch />\n\t\t\t\t\t<EmojiPickerContent>\n\t\t\t\t\t\t<EmojiPickerLoading>\n\t\t\t\t\t\t\t<Loader2 className="size-4 animate-spin" />\n\t\t\t\t\t\t</EmojiPickerLoading>\n\t\t\t\t\t\t<EmojiPickerEmpty>No results</EmojiPickerEmpty>\n\t\t\t\t\t\t<EmojiPickerList />\n\t\t\t\t\t</EmojiPickerContent>\n\t\t\t\t</EmojiPicker>\n\t\t\t</PopoverContent>\n\t\t</Popover>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/emoji-picker/emoji-picker-popover")
		),
		title: "emoji-picker-popover",
		category: "emoji-picker",
		path: "src/components/demos/emoji-picker/emoji-picker-popover.tsx",
	},
	"form-demo": {
		source:
			'"use client"\n\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\n\nimport { Button } from "@/components/ui/button"\nimport {\n\tForm,\n\tFormControl,\n\tFormDescription,\n\tFormField,\n\tFormItem,\n\tFormLabel,\n\tFormMessage,\n} from "@/components/ui/form"\nimport { Input } from "@/components/ui/input"\n\nconst schema = z.object({\n\tdisplayName: z\n\t\t.string()\n\t\t.min(3, { message: "Please enter at least 3 characters." }),\n\temail: z.string().email({ message: "Please enter a valid email address." }),\n})\n\ntype FormValues = z.infer<typeof schema>\n\nexport default function FormDemo() {\n\tconst form = useForm<FormValues>({\n\t\tresolver: zodResolver(schema),\n\t\tdefaultValues: {\n\t\t\tdisplayName: "",\n\t\t\temail: "",\n\t\t},\n\t})\n\n\tconst onSubmit = (data: FormValues) => {\n\t\tconsole.log(data)\n\t}\n\n\treturn (\n\t\t<Form {...form}>\n\t\t\t<form\n\t\t\t\tonSubmit={form.handleSubmit(onSubmit)}\n\t\t\t\tclassName="flex w-96 flex-col gap-4"\n\t\t\t>\n\t\t\t\t<FormField\n\t\t\t\t\tname="displayName"\n\t\t\t\t\tcontrol={form.control}\n\t\t\t\t\trender={({ field }) => (\n\t\t\t\t\t\t<FormItem>\n\t\t\t\t\t\t\t<FormLabel>Display Name</FormLabel>\n\t\t\t\t\t\t\t<FormControl>\n\t\t\t\t\t\t\t\t<Input\n\t\t\t\t\t\t\t\t\tclassName="w-full"\n\t\t\t\t\t\t\t\t\tplaceholder="borabalogluu"\n\t\t\t\t\t\t\t\t\taria-invalid={!!form.formState.errors.displayName}\n\t\t\t\t\t\t\t\t\t{...field}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</FormControl>\n\t\t\t\t\t\t\t<FormDescription>\n\t\t\t\t\t\t\t\tThis is the name that will be displayed to other users.\n\t\t\t\t\t\t\t</FormDescription>\n\t\t\t\t\t\t\t<FormMessage />\n\t\t\t\t\t\t</FormItem>\n\t\t\t\t\t)}\n\t\t\t\t/>\n\t\t\t\t<FormField\n\t\t\t\t\tname="email"\n\t\t\t\t\tcontrol={form.control}\n\t\t\t\t\trender={({ field }) => (\n\t\t\t\t\t\t<FormItem>\n\t\t\t\t\t\t\t<FormLabel>Email</FormLabel>\n\t\t\t\t\t\t\t<FormControl>\n\t\t\t\t\t\t\t\t<Input\n\t\t\t\t\t\t\t\t\tclassName="w-full"\n\t\t\t\t\t\t\t\t\tplaceholder="your@email.com"\n\t\t\t\t\t\t\t\t\taria-invalid={!!form.formState.errors.email}\n\t\t\t\t\t\t\t\t\t{...field}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</FormControl>\n\t\t\t\t\t\t\t<FormDescription>Enter your email address</FormDescription>\n\t\t\t\t\t\t\t<FormMessage />\n\t\t\t\t\t\t</FormItem>\n\t\t\t\t\t)}\n\t\t\t\t/>\n\t\t\t\t<Button type="submit">Submit</Button>\n\t\t\t</form>\n\t\t</Form>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/form/form-demo")),
		title: "form-demo",
		category: "form",
		path: "src/components/demos/form/form-demo.tsx",
	},
	"input-otp-demo": {
		source:
			'import {\n\tInputOTP,\n\tInputOTPGroup,\n\tInputOTPSeparator,\n\tInputOTPSlot,\n} from "@/components/ui/input-otp"\n\nexport default function InputOTPDemo() {\n\treturn (\n\t\t<InputOTP maxLength={6}>\n\t\t\t<InputOTPGroup>\n\t\t\t\t<InputOTPSlot index={0} />\n\t\t\t\t<InputOTPSlot index={1} />\n\t\t\t\t<InputOTPSlot index={2} />\n\t\t\t</InputOTPGroup>\n\t\t\t<InputOTPSeparator />\n\t\t\t<InputOTPGroup>\n\t\t\t\t<InputOTPSlot index={3} />\n\t\t\t\t<InputOTPSlot index={4} />\n\t\t\t\t<InputOTPSlot index={5} />\n\t\t\t</InputOTPGroup>\n\t\t</InputOTP>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/input-otp/input-otp-demo")
		),
		title: "input-otp-demo",
		category: "input-otp",
		path: "src/components/demos/input-otp/input-otp-demo.tsx",
	},
	"input-demo": {
		source:
			'import { Input } from "@/components/ui/input"\n\nexport default function InputDemo() {\n\treturn <Input placeholder="Name" inputContainerClassName="w-80" />\n}\n',
		component: React.lazy(() => import("@/components/demos/input/input-demo")),
		title: "input-demo",
		category: "input",
		path: "src/components/demos/input/input-demo.tsx",
	},
	"input-disabled": {
		source:
			'import { Input } from "@/components/ui/input"\n\nexport default function InputDisabled() {\n\treturn <Input inputContainerClassName="w-80" placeholder="Name" disabled />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/input/input-disabled")
		),
		title: "input-disabled",
		category: "input",
		path: "src/components/demos/input/input-disabled.tsx",
	},
	"input-error": {
		source:
			'import { Input } from "@/components/ui/input"\n\nexport default function InputError() {\n\treturn (\n\t\t<Input inputContainerClassName="w-80" placeholder="Name" aria-invalid />\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/input/input-error")),
		title: "input-error",
		category: "input",
		path: "src/components/demos/input/input-error.tsx",
	},
	"input-with-icons": {
		source:
			'import { useState } from "react"\nimport { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react"\n\nimport { Input } from "@/components/ui/input"\n\nexport default function InputWithIcons() {\n\tconst [isPasswordVisible, setIsPasswordVisible] = useState(false)\n\n\tconst togglePasswordVisibility = () => {\n\t\tsetIsPasswordVisible(!isPasswordVisible)\n\t}\n\n\tconst passwordType = isPasswordVisible ? "text" : "password"\n\n\treturn (\n\t\t<Input\n\t\t\tplaceholder="Password"\n\t\t\tinputContainerClassName="w-80"\n\t\t\ttype={passwordType}\n\t\t\tleadingIcon={<LockIcon />}\n\t\t\ttrailingIcon={\n\t\t\t\tisPasswordVisible ? (\n\t\t\t\t\t<EyeIcon\n\t\t\t\t\t\tclassName="hover:text-foreground pointer-events-auto cursor-pointer transition-colors duration-200"\n\t\t\t\t\t\tonClick={togglePasswordVisibility}\n\t\t\t\t\t/>\n\t\t\t\t) : (\n\t\t\t\t\t<EyeOffIcon\n\t\t\t\t\t\tclassName="hover:text-foreground pointer-events-auto cursor-pointer transition-colors duration-200"\n\t\t\t\t\t\tonClick={togglePasswordVisibility}\n\t\t\t\t\t/>\n\t\t\t\t)\n\t\t\t}\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/input/input-with-icons")
		),
		title: "input-with-icons",
		category: "input",
		path: "src/components/demos/input/input-with-icons.tsx",
	},
	"kbd-demo": {
		source:
			'import { Kbd } from "@/components/ui/kbd"\n\nexport default function KbdDemo() {\n\treturn (\n\t\t<div className="flex items-center gap-2 text-sm">\n\t\t\t<Kbd>⌘</Kbd>+<Kbd>K</Kbd>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/kbd/kbd-demo")),
		title: "kbd-demo",
		category: "kbd",
		path: "src/components/demos/kbd/kbd-demo.tsx",
	},
	"menubar-demo": {
		source:
			'import {\n\tMenubar,\n\tMenubarContent,\n\tMenubarItem,\n\tMenubarMenu,\n\tMenubarRadioGroup,\n\tMenubarRadioItem,\n\tMenubarSeparator,\n\tMenubarShortcut,\n\tMenubarSub,\n\tMenubarSubContent,\n\tMenubarSubTrigger,\n\tMenubarTrigger,\n} from "@/components/ui/menubar"\n\nexport default function MenubarDemo() {\n\treturn (\n\t\t<Menubar>\n\t\t\t<MenubarMenu>\n\t\t\t\t<MenubarTrigger>File</MenubarTrigger>\n\t\t\t\t<MenubarContent>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tNew File\n\t\t\t\t\t\t<MenubarShortcut>⌘N</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tNew Window\n\t\t\t\t\t\t<MenubarShortcut>⇧⌘N</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarSeparator />\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tOpen\n\t\t\t\t\t\t<MenubarShortcut>⌘O</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tOpen Folder\n\t\t\t\t\t\t<MenubarShortcut>⇧⌘O</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>Open Recent</MenubarItem>\n\t\t\t\t\t<MenubarSeparator />\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tSave\n\t\t\t\t\t\t<MenubarShortcut>⌘S</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tSave As\n\t\t\t\t\t\t<MenubarShortcut>⇧⌘S</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarSeparator />\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tClose Window\n\t\t\t\t\t\t<MenubarShortcut>⌘W</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t</MenubarContent>\n\t\t\t</MenubarMenu>\n\t\t\t<MenubarMenu>\n\t\t\t\t<MenubarTrigger>Edit</MenubarTrigger>\n\t\t\t\t<MenubarContent>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tUndo\n\t\t\t\t\t\t<MenubarShortcut>⌘Z</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tRedo\n\t\t\t\t\t\t<MenubarShortcut>⌘Y</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarSeparator />\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tCut\n\t\t\t\t\t\t<MenubarShortcut>⌘X</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tCopy\n\t\t\t\t\t\t<MenubarShortcut>⌘C</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tPaste\n\t\t\t\t\t\t<MenubarShortcut>⌘V</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarSeparator />\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tFind\n\t\t\t\t\t\t<MenubarShortcut>⌘F</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tReplace\n\t\t\t\t\t\t<MenubarShortcut>⌥⌘F</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t</MenubarContent>\n\t\t\t</MenubarMenu>\n\t\t\t<MenubarMenu>\n\t\t\t\t<MenubarTrigger>View</MenubarTrigger>\n\t\t\t\t<MenubarContent>\n\t\t\t\t\t<MenubarSub>\n\t\t\t\t\t\t<MenubarSubTrigger>Appearance</MenubarSubTrigger>\n\t\t\t\t\t\t<MenubarSubContent>\n\t\t\t\t\t\t\t<MenubarRadioGroup>\n\t\t\t\t\t\t\t\t<MenubarRadioItem value="system">System</MenubarRadioItem>\n\t\t\t\t\t\t\t\t<MenubarRadioItem value="light">Light</MenubarRadioItem>\n\t\t\t\t\t\t\t\t<MenubarRadioItem value="dark">Dark</MenubarRadioItem>\n\t\t\t\t\t\t\t</MenubarRadioGroup>\n\t\t\t\t\t\t</MenubarSubContent>\n\t\t\t\t\t</MenubarSub>\n\t\t\t\t\t<MenubarSeparator />\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tShow/Hide Sidebar\n\t\t\t\t\t\t<MenubarShortcut>⌃⌥⌘*</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tCommand Palette\n\t\t\t\t\t\t<MenubarShortcut>⇧⌘P</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>Expand Tabs</MenubarItem>\n\t\t\t\t\t<MenubarSeparator />\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tZoom In\n\t\t\t\t\t\t<MenubarShortcut>⌘+</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tZoom Out\n\t\t\t\t\t\t<MenubarShortcut>⌘-</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t\t<MenubarItem>\n\t\t\t\t\t\tReset Zoom\n\t\t\t\t\t\t<MenubarShortcut>⌘0</MenubarShortcut>\n\t\t\t\t\t</MenubarItem>\n\t\t\t\t</MenubarContent>\n\t\t\t</MenubarMenu>\n\t\t\t<MenubarMenu>\n\t\t\t\t<MenubarTrigger>Help</MenubarTrigger>\n\t\t\t\t<MenubarContent>\n\t\t\t\t\t<MenubarItem>Getting Started</MenubarItem>\n\t\t\t\t\t<MenubarItem>Report Issue</MenubarItem>\n\t\t\t\t\t<MenubarItem>Check for Updates</MenubarItem>\n\t\t\t\t\t<MenubarItem>Contact the Team</MenubarItem>\n\t\t\t\t</MenubarContent>\n\t\t\t</MenubarMenu>\n\t\t</Menubar>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/menubar/menubar-demo")
		),
		title: "menubar-demo",
		category: "menubar",
		path: "src/components/demos/menubar/menubar-demo.tsx",
	},
	"meter-demo": {
		source:
			'import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"\n\nexport default function MeterDemo() {\n\treturn (\n\t\t<Meter className="mx-auto w-48" value={4} max={5}>\n\t\t\t<div className="flex items-center justify-between">\n\t\t\t\t<MeterLabel>Tasks Completed</MeterLabel>\n\t\t\t\t<MeterValue>{(formattedValue, value) => `${value} / 5`}</MeterValue>\n\t\t\t</div>\n\t\t</Meter>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/meter/meter-demo")),
		title: "meter-demo",
		category: "meter",
		path: "src/components/demos/meter/meter-demo.tsx",
	},
	"navigation-menu-demo": {
		source:
			'"use client"\n\nimport * as React from "react"\nimport Link from "next/link"\n\nimport { Icons } from "@/components/icons"\nimport {\n\tNavigationMenu,\n\tNavigationMenuContent,\n\tNavigationMenuItem,\n\tNavigationMenuLink,\n\tNavigationMenuList,\n\tNavigationMenuTrigger,\n\tnavigationMenuTriggerStyle,\n} from "@/components/ui/navigation-menu"\n\nimport { cn } from "@/lib/utils"\n\nconst components: { title: string; href: string; description: string }[] = [\n\t{\n\t\ttitle: "Alert Dialog",\n\t\thref: "/docs/components/alert-dialog",\n\t\tdescription:\n\t\t\t"A modal dialog for critical messages or confirmation actions.",\n\t},\n\t{\n\t\ttitle: "Preview Card",\n\t\thref: "/docs/components/preview-card",\n\t\tdescription: "Used to display a preview of content when hovered.",\n\t},\n\t{\n\t\ttitle: "Emoji Picker",\n\t\thref: "/docs/components/emoji-picker",\n\t\tdescription: "A component that allows users to pick an emoji.",\n\t},\n\t{\n\t\ttitle: "Progress",\n\t\thref: "/docs/components/progress",\n\t\tdescription: "Displays a progress bar with an optional label.",\n\t},\n\t{\n\t\ttitle: "Tabs",\n\t\thref: "/docs/components/tabs",\n\t\tdescription: "Used to organize content into tabbed navigation.",\n\t},\n\t{\n\t\ttitle: "Tooltip",\n\t\thref: "/docs/components/tooltip",\n\t\tdescription: "Used to provide context or hints for elements.",\n\t},\n]\n\nconst gettingStartedItems = [\n\t{\n\t\ttitle: "Introduction",\n\t\thref: "/docs/getting-started/introduction",\n\t\tdescription: "Learn about 9ui.",\n\t},\n\t{\n\t\ttitle: "Installation",\n\t\thref: "/docs/getting-started/installation",\n\t\tdescription: "How to install 9ui in your project.",\n\t},\n\t{\n\t\ttitle: "Roadmap",\n\t\thref: "/docs/getting-started/roadmap",\n\t\tdescription: "See what we are working on next.",\n\t},\n]\n\nexport default function NavigationMenuDemo() {\n\treturn (\n\t\t<NavigationMenu className="w-full">\n\t\t\t<NavigationMenuList className="flex-col items-start md:flex-row md:items-center">\n\t\t\t\t<NavigationMenuItem>\n\t\t\t\t\t<NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>\n\t\t\t\t\t<NavigationMenuContent>\n\t\t\t\t\t\t<ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2">\n\t\t\t\t\t\t\t{gettingStartedItems.map((item) => (\n\t\t\t\t\t\t\t\t<ListItem key={item.title} title={item.title} href={item.href}>\n\t\t\t\t\t\t\t\t\t{item.description}\n\t\t\t\t\t\t\t\t</ListItem>\n\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</NavigationMenuContent>\n\t\t\t\t</NavigationMenuItem>\n\t\t\t\t<NavigationMenuItem>\n\t\t\t\t\t<NavigationMenuTrigger>Components</NavigationMenuTrigger>\n\t\t\t\t\t<NavigationMenuContent>\n\t\t\t\t\t\t<ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2">\n\t\t\t\t\t\t\t{components.map((component) => (\n\t\t\t\t\t\t\t\t<ListItem\n\t\t\t\t\t\t\t\t\tkey={component.title}\n\t\t\t\t\t\t\t\t\ttitle={component.title}\n\t\t\t\t\t\t\t\t\thref={component.href}\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{component.description}\n\t\t\t\t\t\t\t\t</ListItem>\n\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</NavigationMenuContent>\n\t\t\t\t</NavigationMenuItem>\n\t\t\t\t<NavigationMenuItem>\n\t\t\t\t\t<NavigationMenuLink\n\t\t\t\t\t\thref="https://github.com/borabaloglu/9ui"\n\t\t\t\t\t\trender={({ ...props }) => (\n\t\t\t\t\t\t\t<a {...props} className={cn(navigationMenuTriggerStyle())}>\n\t\t\t\t\t\t\t\t<Icons.gitHub />\n\t\t\t\t\t\t\t\tSource Code\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t)}\n\t\t\t\t\t/>\n\t\t\t\t</NavigationMenuItem>\n\t\t\t</NavigationMenuList>\n\t\t</NavigationMenu>\n\t)\n}\n\nfunction ListItem({\n\ttitle,\n\tchildren,\n\thref,\n\t...props\n}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {\n\treturn (\n\t\t<li {...props}>\n\t\t\t<NavigationMenuLink\n\t\t\t\trender={(props) => (\n\t\t\t\t\t<Link href={href} {...props}>\n\t\t\t\t\t\t<div className="text-sm font-semibold">{title}</div>\n\t\t\t\t\t\t<p className="text-muted-foreground line-clamp-2 text-sm">\n\t\t\t\t\t\t\t{children}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</Link>\n\t\t\t\t)}\n\t\t\t/>\n\t\t</li>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/navigation-menu/navigation-menu-demo")
		),
		title: "navigation-menu-demo",
		category: "navigation-menu",
		path: "src/components/demos/navigation-menu/navigation-menu-demo.tsx",
	},
	"number-field-demo": {
		source:
			'import { NumberField, NumberFieldScrubArea } from "@/components/ui/number-field"\n\nexport default function NumberFieldDemo() {\n\treturn (\n\t\t<NumberField className="mx-auto" defaultValue={5} min={0} max={100}>\n\t\t\t<NumberFieldScrubArea />\n\t\t</NumberField>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/number-field/number-field-demo")
		),
		title: "number-field-demo",
		category: "number-field",
		path: "src/components/demos/number-field/number-field-demo.tsx",
	},
	"pagination-demo": {
		source:
			'import {\n\tPagination,\n\tPaginationContent,\n\tPaginationEllipsis,\n\tPaginationItem,\n\tPaginationLink,\n\tPaginationNext,\n\tPaginationPrevious,\n} from "@/components/ui/pagination"\n\nexport default function PaginationDemo() {\n\treturn (\n\t\t<Pagination>\n\t\t\t<PaginationContent>\n\t\t\t\t<PaginationItem>\n\t\t\t\t\t<PaginationPrevious href="#" />\n\t\t\t\t</PaginationItem>\n\t\t\t\t<PaginationItem>\n\t\t\t\t\t<PaginationLink href="#">1</PaginationLink>\n\t\t\t\t</PaginationItem>\n\t\t\t\t<PaginationItem>\n\t\t\t\t\t<PaginationLink href="#" isActive>\n\t\t\t\t\t\t2\n\t\t\t\t\t</PaginationLink>\n\t\t\t\t</PaginationItem>\n\t\t\t\t<PaginationItem>\n\t\t\t\t\t<PaginationLink href="#">3</PaginationLink>\n\t\t\t\t</PaginationItem>\n\t\t\t\t<PaginationItem>\n\t\t\t\t\t<PaginationEllipsis />\n\t\t\t\t</PaginationItem>\n\t\t\t\t<PaginationItem>\n\t\t\t\t\t<PaginationNext href="#" />\n\t\t\t\t</PaginationItem>\n\t\t\t</PaginationContent>\n\t\t</Pagination>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/pagination/pagination-demo")
		),
		title: "pagination-demo",
		category: "pagination",
		path: "src/components/demos/pagination/pagination-demo.tsx",
	},
	"phone-input-default-country": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nexport default function PhoneInputDefaultCountry() {\n\tconst [phoneNumber, setPhoneNumber] = useState<string>()\n\n\treturn (\n\t\t<div className="w-[300px]">\n\t\t\t<PhoneInput\n\t\t\t\tvalue={phoneNumber}\n\t\t\t\tonChange={setPhoneNumber}\n\t\t\t\tdefaultCountry="TR"\n\t\t\t\tplaceholder="Enter a phone number"\n\t\t\t/>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/phone-input/phone-input-default-country")
		),
		title: "phone-input-default-country",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-default-country.tsx",
	},
	"phone-input-demo": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nexport default function PhoneInputDemo() {\n\tconst [phoneNumber, setPhoneNumber] = useState<string>()\n\n\treturn (\n\t\t<div className="w-[300px]">\n\t\t\t<PhoneInput\n\t\t\t\tvalue={phoneNumber}\n\t\t\t\tonChange={setPhoneNumber}\n\t\t\t\tplaceholder="Enter a phone number"\n\t\t\t/>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/phone-input/phone-input-demo")
		),
		title: "phone-input-demo",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-demo.tsx",
	},
	"phone-input-form": {
		source:
			'"use client"\n\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { useForm } from "react-hook-form"\nimport { isValidPhoneNumber } from "react-phone-number-input"\nimport { z } from "zod"\n\nimport { Button } from "@/components/ui/button"\nimport {\n\tForm,\n\tFormControl,\n\tFormField,\n\tFormItem,\n\tFormLabel,\n\tFormMessage,\n} from "@/components/ui/form"\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nconst schema = z.object({\n\tphoneNumber: z.string().refine(isValidPhoneNumber, "Invalid phone number"),\n})\n\ntype FormValues = z.infer<typeof schema>\n\nexport default function PhoneInputForm() {\n\tconst form = useForm<FormValues>({\n\t\tresolver: zodResolver(schema),\n\t\tdefaultValues: {\n\t\t\tphoneNumber: "",\n\t\t},\n\t})\n\n\tconst onSubmit = (data: FormValues) => {\n\t\tconsole.log(data)\n\t}\n\n\treturn (\n\t\t<Form {...form}>\n\t\t\t<form\n\t\t\t\tonSubmit={form.handleSubmit(onSubmit)}\n\t\t\t\tclassName="flex w-[300px] flex-col gap-4"\n\t\t\t>\n\t\t\t\t<FormField\n\t\t\t\t\tname="phoneNumber"\n\t\t\t\t\tcontrol={form.control}\n\t\t\t\t\trender={({ field, fieldState }) => (\n\t\t\t\t\t\t<FormItem>\n\t\t\t\t\t\t\t<FormLabel>Phone Number</FormLabel>\n\t\t\t\t\t\t\t<FormControl>\n\t\t\t\t\t\t\t\t<PhoneInput\n\t\t\t\t\t\t\t\t\t{...field}\n\t\t\t\t\t\t\t\t\tplaceholder="Enter a phone number"\n\t\t\t\t\t\t\t\t\taria-invalid={!!fieldState.error}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</FormControl>\n\t\t\t\t\t\t\t<FormMessage />\n\t\t\t\t\t\t</FormItem>\n\t\t\t\t\t)}\n\t\t\t\t/>\n\t\t\t\t<Button type="submit">Submit</Button>\n\t\t\t</form>\n\t\t</Form>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/phone-input/phone-input-form")
		),
		title: "phone-input-form",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-form.tsx",
	},
	"phone-input-formatting-value": {
		source:
			'"use client"\n\nimport { useState } from "react"\nimport {\n\tCountry,\n\tformatPhoneNumber,\n\tformatPhoneNumberIntl,\n\tgetCountryCallingCode,\n} from "react-phone-number-input"\n\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nexport default function PhoneInputFormattingValue() {\n\tconst [phoneNumber, setPhoneNumber] = useState<string>()\n\tconst [country, setCountry] = useState<Country>()\n\n\treturn (\n\t\t<div className="w-[300px] space-y-4">\n\t\t\t<PhoneInput\n\t\t\t\tvalue={phoneNumber}\n\t\t\t\tonChange={setPhoneNumber}\n\t\t\t\tonCountryChange={setCountry}\n\t\t\t\tplaceholder="Enter a phone number"\n\t\t\t/>\n\t\t\t<div className="space-y-2 text-sm">\n\t\t\t\t<div>\n\t\t\t\t\t<span className="font-semibold">National:</span>{" "}\n\t\t\t\t\t{phoneNumber && formatPhoneNumber(phoneNumber)}\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span className="font-semibold">International:</span>{" "}\n\t\t\t\t\t{phoneNumber && formatPhoneNumberIntl(phoneNumber)}\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<span className="font-semibold">Country code:</span>{" "}\n\t\t\t\t\t{country && getCountryCallingCode(country)}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() =>
				import("@/components/demos/phone-input/phone-input-formatting-value")
		),
		title: "phone-input-formatting-value",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-formatting-value.tsx",
	},
	"phone-input-initial-value-format": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nexport default function PhoneInputInitialValueFormat() {\n\tconst [phoneNumber, setPhoneNumber] = useState<string>()\n\n\treturn (\n\t\t<div className="w-[300px]">\n\t\t\t<PhoneInput\n\t\t\t\tvalue={phoneNumber}\n\t\t\t\tonChange={setPhoneNumber}\n\t\t\t\tinitialValueFormat="national"\n\t\t\t\tplaceholder="Enter a phone number"\n\t\t\t/>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() =>
				import(
					"@/components/demos/phone-input/phone-input-initial-value-format"
				)
		),
		title: "phone-input-initial-value-format",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-initial-value-format.tsx",
	},
	"phone-input-international": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nexport default function PhoneInputInternational() {\n\tconst [phoneNumber, setPhoneNumber] = useState<string>()\n\n\treturn (\n\t\t<div className="w-[300px]">\n\t\t\t<PhoneInput\n\t\t\t\tvalue={phoneNumber}\n\t\t\t\tonChange={setPhoneNumber}\n\t\t\t\tinternational\n\t\t\t\tdefaultCountry="TR"\n\t\t\t\tplaceholder="Enter a phone number"\n\t\t\t/>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/phone-input/phone-input-international")
		),
		title: "phone-input-international",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-international.tsx",
	},
	"phone-input-internationalization": {
		source:
			'"use client"\n\nimport { useState } from "react"\nimport tr from "react-phone-number-input/locale/tr"\n\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nexport default function PhoneInputInternationalization() {\n\tconst [phoneNumber, setPhoneNumber] = useState<string>()\n\n\treturn (\n\t\t<div className="w-[300px]">\n\t\t\t<PhoneInput\n\t\t\t\tvalue={phoneNumber}\n\t\t\t\tonChange={setPhoneNumber}\n\t\t\t\tlabels={tr}\n\t\t\t\tdefaultCountry="TR"\n\t\t\t\tplaceholder="Telefon numarası"\n\t\t\t/>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() =>
				import(
					"@/components/demos/phone-input/phone-input-internationalization"
				)
		),
		title: "phone-input-internationalization",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-internationalization.tsx",
	},
	"phone-input-national": {
		source:
			'"use client"\n\nimport { useState } from "react"\n\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nexport default function PhoneInputNational() {\n\tconst [phoneNumber, setPhoneNumber] = useState<string>()\n\n\treturn (\n\t\t<div className="w-[300px]">\n\t\t\t<PhoneInput\n\t\t\t\tvalue={phoneNumber}\n\t\t\t\tonChange={setPhoneNumber}\n\t\t\t\tinternational={false}\n\t\t\t\tdefaultCountry="TR"\n\t\t\t\tplaceholder="Enter a phone number"\n\t\t\t/>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/phone-input/phone-input-national")
		),
		title: "phone-input-national",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-national.tsx",
	},
	"phone-input-with-validation": {
		source:
			'"use client"\n\nimport { useState } from "react"\nimport { isValidPhoneNumber } from "react-phone-number-input"\n\nimport { PhoneInput } from "@/components/ui/phone-input"\n\nexport default function PhoneInputWithValidation() {\n\tconst [phoneNumber, setPhoneNumber] = useState<string>()\n\tconst [error, setError] = useState<string>()\n\n\tconst handleChange = (value: string | undefined) => {\n\t\tsetPhoneNumber(value)\n\t\tif (value && !isValidPhoneNumber(value)) {\n\t\t\tsetError("Please enter a valid phone number")\n\t\t} else {\n\t\t\tsetError(undefined)\n\t\t}\n\t}\n\n\treturn (\n\t\t<div className="w-[300px] space-y-2">\n\t\t\t<PhoneInput\n\t\t\t\tvalue={phoneNumber}\n\t\t\t\tonChange={handleChange}\n\t\t\t\tplaceholder="Enter a phone number"\n\t\t\t\taria-invalid={!!error}\n\t\t\t/>\n\t\t\t{error && <p className="text-destructive text-sm">{error}</p>}\n\t\t\t{phoneNumber && !error && (\n\t\t\t\t<p className="text-muted-foreground text-sm">\n\t\t\t\t\tValid phone number entered\n\t\t\t\t</p>\n\t\t\t)}\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/phone-input/phone-input-with-validation")
		),
		title: "phone-input-with-validation",
		category: "phone-input",
		path: "src/components/demos/phone-input/phone-input-with-validation.tsx",
	},
	"popover-demo": {
		source:
			'import { CopyIcon, Share2Icon } from "lucide-react"\nimport { toast } from "sonner"\n\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n\tPopover,\n\tPopoverContent,\n\tPopoverDescription,\n\tPopoverHeader,\n\tPopoverTitle,\n\tPopoverTrigger,\n} from "@/components/ui/popover"\n\nexport default function PopoverDemo() {\n\tconst copyToClipboard = () => {\n\t\ttoast.success("Copied to clipboard")\n\t\tnavigator.clipboard.writeText(window.location.href)\n\t}\n\n\treturn (\n\t\t<Popover>\n\t\t\t<PopoverTrigger\n\t\t\t\trender={(props) => (\n\t\t\t\t\t<Button {...props} variant="outline" size="icon">\n\t\t\t\t\t\t<Share2Icon />\n\t\t\t\t\t</Button>\n\t\t\t\t)}\n\t\t\t/>\n\t\t\t<PopoverContent className="w-[calc(100vw-4rem)] sm:w-[500px]">\n\t\t\t\t<PopoverHeader>\n\t\t\t\t\t<PopoverTitle>Share</PopoverTitle>\n\t\t\t\t\t<PopoverDescription>Share this component.</PopoverDescription>\n\t\t\t\t</PopoverHeader>\n\t\t\t\t<div className="mt-2 flex w-full gap-2">\n\t\t\t\t\t<Input\n\t\t\t\t\t\tinputContainerClassName="w-full"\n\t\t\t\t\t\tvalue={window.location.href}\n\t\t\t\t\t\tautoFocus={false}\n\t\t\t\t\t\treadOnly\n\t\t\t\t\t/>\n\t\t\t\t\t<Button className="shrink-0" size="icon" onClick={copyToClipboard}>\n\t\t\t\t\t\t<CopyIcon />\n\t\t\t\t\t</Button>\n\t\t\t\t</div>\n\t\t\t</PopoverContent>\n\t\t</Popover>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/popover/popover-demo")
		),
		title: "popover-demo",
		category: "popover",
		path: "src/components/demos/popover/popover-demo.tsx",
	},
	"preview-card-demo": {
		source:
			'"use client"\n\nimport { Icons } from "@/components/icons"\nimport {\n\tPreviewCard,\n\tPreviewCardContent,\n\tPreviewCardTrigger,\n} from "@/components/ui/preview-card"\n\nexport default function PreviewCardDemo() {\n\treturn (\n\t\t<PreviewCard>\n\t\t\t<p>\n\t\t\t\tThis is a preview card component from{" "}\n\t\t\t\t<PreviewCardTrigger className="cursor-pointer underline underline-offset-2">\n\t\t\t\t\t9ui\n\t\t\t\t</PreviewCardTrigger>\n\t\t\t\t.\n\t\t\t</p>\n\t\t\t<PreviewCardContent>\n\t\t\t\t<Icons.logo className="mx-auto w-10" />\n\t\t\t\t<p className="mt-4 text-sm">\n\t\t\t\t\tBeautiful, customizable components built with{" "}\n\t\t\t\t\t<a\n\t\t\t\t\t\thref="https://base-ui.com"\n\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\tBase UI\n\t\t\t\t\t</a>{" "}\n\t\t\t\t\tand{" "}\n\t\t\t\t\t<a\n\t\t\t\t\t\thref="https://tailwindcss.com"\n\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\tTailwind CSS\n\t\t\t\t\t</a>\n\t\t\t\t\t.\n\t\t\t\t</p>\n\t\t\t\t<div className="mt-4 flex flex-col gap-1 text-sm">\n\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t<span className="text-muted-foreground">Creator:</span>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\thref="https://x.com/borabalogluu"\n\t\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tBora Baloglu\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t<span className="text-muted-foreground">Source code:</span>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\thref="https://github.com/borabaloglu/9ui"\n\t\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tGithub\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t<span className="text-muted-foreground">Website</span>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\thref="https://www.9ui.dev"\n\t\t\t\t\t\t\tclassName="underline underline-offset-2"\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t9ui.dev\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</PreviewCardContent>\n\t\t</PreviewCard>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/preview-card/preview-card-demo")
		),
		title: "preview-card-demo",
		category: "preview-card",
		path: "src/components/demos/preview-card/preview-card-demo.tsx",
	},
	"progress-demo": {
		source:
			'import * as React from "react"\n\nimport { Progress } from "@/components/ui/progress"\n\nexport default function ProgressDemo() {\n\tconst [value, setValue] = React.useState(0)\n\n\tReact.useEffect(() => {\n\t\tconst interval = setInterval(() => {\n\t\t\tsetValue((prev) => (prev === 100 ? 100 : prev + 2))\n\t\t}, 100)\n\t\treturn () => clearInterval(interval)\n\t}, [])\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Progress value={value} />\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/progress/progress-demo")
		),
		title: "progress-demo",
		category: "progress",
		path: "src/components/demos/progress/progress-demo.tsx",
	},
	"progress-with-value": {
		source:
			'import * as React from "react"\n\nimport { Progress, ProgressValue } from "@/components/ui/progress"\n\nexport default function ProgressWithValueDemo() {\n\tconst [value, setValue] = React.useState(0)\n\n\tReact.useEffect(() => {\n\t\tconst interval = setInterval(() => {\n\t\t\tsetValue((prev) => (prev === 100 ? 100 : prev + 2))\n\t\t}, 100)\n\t\treturn () => clearInterval(interval)\n\t}, [])\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Progress value={value}>\n\t\t\t\t<ProgressValue />\n\t\t\t</Progress>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/progress/progress-with-value")
		),
		title: "progress-with-value",
		category: "progress",
		path: "src/components/demos/progress/progress-with-value.tsx",
	},
	"radio-group-demo": {
		source:
			'import { Label } from "@/components/ui/label"\nimport { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"\n\nexport default function RadioGroupDemo() {\n\treturn (\n\t\t<RadioGroup aria-labelledby="radio-group-plan">\n\t\t\t<div id="radio-group-plan" className="text-foreground font-medium">\n\t\t\t\tSelect a plan\n\t\t\t</div>\n\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t<RadioGroupItem id="basic" value="basic" />\n\t\t\t\t<Label htmlFor="basic">Basic</Label>\n\t\t\t</div>\n\n\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t<RadioGroupItem id="standard" value="standard" />\n\t\t\t\t<Label htmlFor="standard">Standard</Label>\n\t\t\t</div>\n\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t<RadioGroupItem id="premium" value="premium" />\n\t\t\t\t<Label htmlFor="premium">Premium</Label>\n\t\t\t</div>\n\t\t</RadioGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/radio-group/radio-group-demo")
		),
		title: "radio-group-demo",
		category: "radio-group",
		path: "src/components/demos/radio-group/radio-group-demo.tsx",
	},
	"radio-group-disabled": {
		source:
			'import { Label } from "@/components/ui/label"\nimport { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"\n\nexport default function RadioGroupDisabled() {\n\treturn (\n\t\t<RadioGroup aria-labelledby="radio-group-notifications" disabled>\n\t\t\t<div\n\t\t\t\tid="radio-group-notifications"\n\t\t\t\tclassName="text-foreground font-medium"\n\t\t\t>\n\t\t\t\tNotifications\n\t\t\t</div>\n\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t<RadioGroupItem id="email" value="email" />\n\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t</div>\n\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t<RadioGroupItem id="sms" value="sms" />\n\t\t\t\t<Label htmlFor="sms">SMS</Label>\n\t\t\t</div>\n\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t<RadioGroupItem id="email-and-sms" value="email-and-sms" />\n\t\t\t\t<Label htmlFor="email-and-sms">Email & SMS</Label>\n\t\t\t</div>\n\t\t</RadioGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/radio-group/radio-group-disabled")
		),
		title: "radio-group-disabled",
		category: "radio-group",
		path: "src/components/demos/radio-group/radio-group-disabled.tsx",
	},
	"resizable-demo": {
		source:
			'import {\n\tResizableHandle,\n\tResizablePanel,\n\tResizablePanelGroup,\n} from "@/components/ui/resizable"\n\nexport default function ResizableDemo() {\n\treturn (\n\t\t<ResizablePanelGroup\n\t\t\tdirection="horizontal"\n\t\t\tclassName="max-w-md rounded-lg border md:min-w-[450px]"\n\t\t>\n\t\t\t<ResizablePanel defaultSize={50}>\n\t\t\t\t<div className="flex h-[200px] items-center justify-center p-6">\n\t\t\t\t\t<span className="font-semibold">One</span>\n\t\t\t\t</div>\n\t\t\t</ResizablePanel>\n\t\t\t<ResizableHandle />\n\t\t\t<ResizablePanel defaultSize={50}>\n\t\t\t\t<ResizablePanelGroup direction="vertical">\n\t\t\t\t\t<ResizablePanel defaultSize={25}>\n\t\t\t\t\t\t<div className="flex h-full items-center justify-center p-6">\n\t\t\t\t\t\t\t<span className="font-semibold">Two</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ResizablePanel>\n\t\t\t\t\t<ResizableHandle />\n\t\t\t\t\t<ResizablePanel defaultSize={75}>\n\t\t\t\t\t\t<div className="flex h-full items-center justify-center p-6">\n\t\t\t\t\t\t\t<span className="font-semibold">Three</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ResizablePanel>\n\t\t\t\t</ResizablePanelGroup>\n\t\t\t</ResizablePanel>\n\t\t</ResizablePanelGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/resizable/resizable-demo")
		),
		title: "resizable-demo",
		category: "resizable",
		path: "src/components/demos/resizable/resizable-demo.tsx",
	},
	"resizable-vertical": {
		source:
			'import {\n\tResizableHandle,\n\tResizablePanel,\n\tResizablePanelGroup,\n} from "@/components/ui/resizable"\n\nexport default function ResizableVertical() {\n\treturn (\n\t\t<ResizablePanelGroup\n\t\t\tdirection="vertical"\n\t\t\tclassName="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"\n\t\t>\n\t\t\t<ResizablePanel defaultSize={25}>\n\t\t\t\t<div className="flex h-full items-center justify-center p-6">\n\t\t\t\t\t<span className="font-semibold">Header</span>\n\t\t\t\t</div>\n\t\t\t</ResizablePanel>\n\t\t\t<ResizableHandle />\n\t\t\t<ResizablePanel defaultSize={75}>\n\t\t\t\t<div className="flex h-full items-center justify-center p-6">\n\t\t\t\t\t<span className="font-semibold">Content</span>\n\t\t\t\t</div>\n\t\t\t</ResizablePanel>\n\t\t</ResizablePanelGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/resizable/resizable-vertical")
		),
		title: "resizable-vertical",
		category: "resizable",
		path: "src/components/demos/resizable/resizable-vertical.tsx",
	},
	"resizable-with-handle": {
		source:
			'import {\n\tResizableHandle,\n\tResizablePanel,\n\tResizablePanelGroup,\n} from "@/components/ui/resizable"\n\nexport default function ResizableWithHandle() {\n\treturn (\n\t\t<ResizablePanelGroup\n\t\t\tdirection="horizontal"\n\t\t\tclassName="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"\n\t\t>\n\t\t\t<ResizablePanel defaultSize={25}>\n\t\t\t\t<div className="flex h-full items-center justify-center p-6">\n\t\t\t\t\t<span className="font-semibold">Sidebar</span>\n\t\t\t\t</div>\n\t\t\t</ResizablePanel>\n\t\t\t<ResizableHandle withHandle />\n\t\t\t<ResizablePanel defaultSize={75}>\n\t\t\t\t<div className="flex h-full items-center justify-center p-6">\n\t\t\t\t\t<span className="font-semibold">Content</span>\n\t\t\t\t</div>\n\t\t\t</ResizablePanel>\n\t\t</ResizablePanelGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/resizable/resizable-with-handle")
		),
		title: "resizable-with-handle",
		category: "resizable",
		path: "src/components/demos/resizable/resizable-with-handle.tsx",
	},
	"scroll-area-demo": {
		source:
			'import { ScrollArea } from "@/components/ui/scroll-area"\nimport { Separator } from "@/components/ui/separator"\n\nconst versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`)\n\nexport default function ScrollAreaDemo() {\n\treturn (\n\t\t<ScrollArea className="h-60 w-full max-w-60 rounded-md border">\n\t\t\t<div className="p-4">\n\t\t\t\t<h4 className="text-sm font-medium">Versions</h4>\n\t\t\t\t<Separator className="my-2" />\n\t\t\t\t<div className="mt-2 flex flex-col gap-2 text-sm">\n\t\t\t\t\t{versions.map((version) => (\n\t\t\t\t\t\t<div key={version}>{version}</div>\n\t\t\t\t\t))}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ScrollArea>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/scroll-area/scroll-area-demo")
		),
		title: "scroll-area-demo",
		category: "scroll-area",
		path: "src/components/demos/scroll-area/scroll-area-demo.tsx",
	},
	"scroll-area-horizontal": {
		source:
			'import { ScrollArea } from "@/components/ui/scroll-area"\n\nconst versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`).join(\n\t", "\n)\n\nexport default function ScrollAreaHorizontal() {\n\treturn (\n\t\t<ScrollArea className="w-full rounded-md border" orientation="horizontal">\n\t\t\t<div className="inline-block p-4 text-sm text-nowrap">{versions}</div>\n\t\t</ScrollArea>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/scroll-area/scroll-area-horizontal")
		),
		title: "scroll-area-horizontal",
		category: "scroll-area",
		path: "src/components/demos/scroll-area/scroll-area-horizontal.tsx",
	},
	"select-demo": {
		source:
			'import {\n\tSelect,\n\tSelectContent,\n\tSelectItem,\n\tSelectTrigger,\n\tSelectValue,\n} from "@/components/ui/select"\n\nconst items = [\n\t{\n\t\tlabel: "Select a fruit",\n\t\tvalue: null,\n\t},\n\t{\n\t\tlabel: "Apple",\n\t\tvalue: "apple",\n\t},\n\t{\n\t\tlabel: "Banana",\n\t\tvalue: "banana",\n\t},\n\t{\n\t\tlabel: "Cherry",\n\t\tvalue: "cherry",\n\t},\n]\n\nexport default function SelectDemo() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Select items={items}>\n\t\t\t\t<SelectTrigger className="w-full">\n\t\t\t\t\t<SelectValue />\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent>\n\t\t\t\t\t{items.map((item) => (\n\t\t\t\t\t\t<SelectItem key={item.value} value={item.value}>\n\t\t\t\t\t\t\t{item.label}\n\t\t\t\t\t\t</SelectItem>\n\t\t\t\t\t))}\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/select/select-demo")
		),
		title: "select-demo",
		category: "select",
		path: "src/components/demos/select/select-demo.tsx",
	},
	"select-multiple": {
		source:
			'import {\n\tSelect,\n\tSelectContent,\n\tSelectItem,\n\tSelectTrigger,\n\tSelectValue,\n} from "@/components/ui/select"\n\nconst languages = {\n\tjavascript: "JavaScript",\n\ttypescript: "TypeScript",\n\tpython: "Python",\n\tjava: "Java",\n\tcsharp: "C#",\n\tphp: "PHP",\n\tcpp: "C++",\n\trust: "Rust",\n\tgo: "Go",\n\tswift: "Swift",\n}\n\ntype Language = keyof typeof languages\n\nconst values = Object.keys(languages) as Language[]\n\nfunction renderValue(value: Language[]) {\n\tif (value.length === 0) {\n\t\treturn "Select languages..."\n\t}\n\n\tconst firstLanguage = languages[value[0]]\n\tconst additionalLanguages =\n\t\tvalue.length > 1 ? ` (+${value.length - 1} more)` : ""\n\treturn firstLanguage + additionalLanguages\n}\n\nexport default function SelectMultiple() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Select multiple>\n\t\t\t\t<SelectTrigger className="w-full">\n\t\t\t\t\t<SelectValue>{renderValue}</SelectValue>\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent>\n\t\t\t\t\t{values.map((value) => (\n\t\t\t\t\t\t<SelectItem key={value} value={value}>\n\t\t\t\t\t\t\t{languages[value]}\n\t\t\t\t\t\t</SelectItem>\n\t\t\t\t\t))}\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/select/select-multiple")
		),
		title: "select-multiple",
		category: "select",
		path: "src/components/demos/select/select-multiple.tsx",
	},
	"select-with-custom-value": {
		source:
			'import { useState } from "react"\nimport Image from "next/image"\n\nimport {\n\tSelect,\n\tSelectContent,\n\tSelectItem,\n\tSelectTrigger,\n\tSelectValue,\n} from "@/components/ui/select"\n\nconst users = {\n\t"karen-smith": {\n\t\tname: "Karen Smith",\n\t\timage: "/memoji-1.png",\n\t},\n\t"chris-williams": {\n\t\tname: "Chris Williams",\n\t\timage: "/memoji-3.png",\n\t},\n\t"melissa-johnson": {\n\t\tname: "Melissa Johnson",\n\t\timage: "/memoji-2.png",\n\t},\n\t"frank-lee": {\n\t\tname: "Frank Lee",\n\t\timage: "/memoji-4.png",\n\t},\n}\n\nexport default function SelectWithCustomValue() {\n\tconst [selected, setSelected] = useState<keyof typeof users | null>(null)\n\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Select\n\t\t\t\tvalue={selected}\n\t\t\t\tonValueChange={(value) => setSelected(value as keyof typeof users)}\n\t\t\t>\n\t\t\t\t<SelectTrigger className="w-full">\n\t\t\t\t\t<SelectValue>\n\t\t\t\t\t\t{() =>\n\t\t\t\t\t\t\tselected ? (\n\t\t\t\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t\t\t\t<Image\n\t\t\t\t\t\t\t\t\t\tsrc={users[selected].image}\n\t\t\t\t\t\t\t\t\t\talt={users[selected].name}\n\t\t\t\t\t\t\t\t\t\twidth={16}\n\t\t\t\t\t\t\t\t\t\theight={16}\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t{users[selected].name}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t) : (\n\t\t\t\t\t\t\t\t"Assign to"\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t}\n\t\t\t\t\t</SelectValue>\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent>\n\t\t\t\t\t{Object.entries(users).map(([id, user]) => (\n\t\t\t\t\t\t<SelectItem key={id} value={id}>\n\t\t\t\t\t\t\t<div className="flex items-center gap-2">\n\t\t\t\t\t\t\t\t<Image\n\t\t\t\t\t\t\t\t\tsrc={user.image}\n\t\t\t\t\t\t\t\t\talt={user.name}\n\t\t\t\t\t\t\t\t\twidth={16}\n\t\t\t\t\t\t\t\t\theight={16}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t{user.name}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</SelectItem>\n\t\t\t\t\t))}\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/select/select-with-custom-value")
		),
		title: "select-with-custom-value",
		category: "select",
		path: "src/components/demos/select/select-with-custom-value.tsx",
	},
	"select-with-groups": {
		source:
			'import {\n\tSelect,\n\tSelectContent,\n\tSelectGroup,\n\tSelectItem,\n\tSelectLabel,\n\tSelectTrigger,\n\tSelectValue,\n} from "@/components/ui/select"\n\nconst items = [\n\t{\n\t\tlabel: "Select an option",\n\t\tvalue: null,\n\t},\n\t{\n\t\tlabel: "Apple",\n\t\tvalue: "apple",\n\t},\n\t{\n\t\tlabel: "Banana",\n\t\tvalue: "banana",\n\t},\n\t{\n\t\tlabel: "Cherry",\n\t\tvalue: "cherry",\n\t},\n\t{\n\t\tlabel: "Carrot",\n\t\tvalue: "carrot",\n\t},\n\t{\n\t\tlabel: "Potato",\n\t\tvalue: "potato",\n\t},\n\t{\n\t\tlabel: "Tomato",\n\t\tvalue: "tomato",\n\t},\n]\n\nexport default function SelectWithGroups() {\n\treturn (\n\t\t<div className="w-80">\n\t\t\t<Select items={items}>\n\t\t\t\t<SelectTrigger className="w-full">\n\t\t\t\t\t<SelectValue />\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent>\n\t\t\t\t\t<SelectGroup>\n\t\t\t\t\t\t<SelectLabel>Fruits</SelectLabel>\n\t\t\t\t\t\t<SelectItem value="apple">Apple</SelectItem>\n\t\t\t\t\t\t<SelectItem value="banana">Banana</SelectItem>\n\t\t\t\t\t\t<SelectItem value="cherry">Cherry</SelectItem>\n\t\t\t\t\t</SelectGroup>\n\t\t\t\t\t<SelectGroup>\n\t\t\t\t\t\t<SelectLabel>Vegetables</SelectLabel>\n\t\t\t\t\t\t<SelectItem value="carrot">Carrot</SelectItem>\n\t\t\t\t\t\t<SelectItem value="potato">Potato</SelectItem>\n\t\t\t\t\t\t<SelectItem value="tomato">Tomato</SelectItem>\n\t\t\t\t\t</SelectGroup>\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/select/select-with-groups")
		),
		title: "select-with-groups",
		category: "select",
		path: "src/components/demos/select/select-with-groups.tsx",
	},
	"separator-demo": {
		source:
			'import { Separator } from "@/components/ui/separator"\n\nexport default function SeparatorDemo() {\n\treturn (\n\t\t<div>\n\t\t\t<p>9ui is a component library for building modern web applications.</p>\n\t\t\t<Separator className="my-2.5" />\n\t\t\t<div className="flex gap-2.5">\n\t\t\t\t<p>Website</p>\n\t\t\t\t<Separator orientation="vertical" />\n\t\t\t\t<p>Documentation</p>\n\t\t\t\t<Separator orientation="vertical" />\n\t\t\t\t<p>Community</p>\n\t\t\t</div>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/separator/separator-demo")
		),
		title: "separator-demo",
		category: "separator",
		path: "src/components/demos/separator/separator-demo.tsx",
	},
	"sheet-demo": {
		source:
			'"use client"\n\nimport { Button } from "@/components/ui/button"\nimport { Label } from "@/components/ui/label"\nimport {\n\tSheet,\n\tSheetClose,\n\tSheetContent,\n\tSheetDescription,\n\tSheetFooter,\n\tSheetHeader,\n\tSheetTitle,\n\tSheetTrigger,\n} from "@/components/ui/sheet"\nimport { Textarea } from "@/components/ui/textarea"\n\nexport default function SheetDemo() {\n\treturn (\n\t\t<Sheet>\n\t\t\t<SheetTrigger\n\t\t\t\trender={(props) => <Button {...props}>Open Sheet</Button>}\n\t\t\t/>\n\t\t\t<SheetContent>\n\t\t\t\t<SheetClose />\n\t\t\t\t<SheetHeader>\n\t\t\t\t\t<SheetTitle>Submit Feedback</SheetTitle>\n\t\t\t\t\t<SheetDescription>\n\t\t\t\t\t\tPlease share your feedback with us to help improve our service.\n\t\t\t\t\t</SheetDescription>\n\t\t\t\t</SheetHeader>\n\t\t\t\t<div className="space-y-2 px-4">\n\t\t\t\t\t<Label htmlFor="feedback">Your Feedback</Label>\n\t\t\t\t\t<Textarea id="feedback" placeholder="Type your feedback here." />\n\t\t\t\t</div>\n\t\t\t\t<SheetFooter>\n\t\t\t\t\t<Button size="sm">Submit</Button>\n\t\t\t\t\t<SheetClose\n\t\t\t\t\t\trender={(props) => (\n\t\t\t\t\t\t\t<Button {...props} size="sm" variant="ghost">\n\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t)}\n\t\t\t\t\t/>\n\t\t\t\t</SheetFooter>\n\t\t\t</SheetContent>\n\t\t</Sheet>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/sheet/sheet-demo")),
		title: "sheet-demo",
		category: "sheet",
		path: "src/components/demos/sheet/sheet-demo.tsx",
	},
	"sheet-sides": {
		source:
			'"use client"\n\nimport { Button } from "@/components/ui/button"\nimport { Label } from "@/components/ui/label"\nimport {\n\tSheet,\n\tSheetClose,\n\tSheetContent,\n\tSheetDescription,\n\tSheetFooter,\n\tSheetHeader,\n\tSheetTitle,\n\tSheetTrigger,\n} from "@/components/ui/sheet"\nimport { Textarea } from "@/components/ui/textarea"\n\nconst SHEET_SIDES = ["top", "right", "bottom", "left"] as const\n\nexport default function SheetSides() {\n\treturn (\n\t\t<div className="grid grid-cols-2 gap-2">\n\t\t\t{SHEET_SIDES.map((side) => (\n\t\t\t\t<Sheet key={side}>\n\t\t\t\t\t<SheetTrigger\n\t\t\t\t\t\trender={(props) => (\n\t\t\t\t\t\t\t<Button {...props} className="w-full">\n\t\t\t\t\t\t\t\t{side}\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t)}\n\t\t\t\t\t/>\n\t\t\t\t\t<SheetContent side={side}>\n\t\t\t\t\t\t<SheetClose />\n\t\t\t\t\t\t<SheetHeader>\n\t\t\t\t\t\t\t<SheetTitle>Submit Feedback</SheetTitle>\n\t\t\t\t\t\t\t<SheetDescription>\n\t\t\t\t\t\t\t\tPlease share your feedback with us to help improve our service.\n\t\t\t\t\t\t\t</SheetDescription>\n\t\t\t\t\t\t</SheetHeader>\n\t\t\t\t\t\t<div className="space-y-2 px-4">\n\t\t\t\t\t\t\t<Label htmlFor="feedback">Your Feedback</Label>\n\t\t\t\t\t\t\t<Textarea id="feedback" placeholder="Type your feedback here." />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<SheetFooter>\n\t\t\t\t\t\t\t<Button size="sm">Submit</Button>\n\t\t\t\t\t\t\t<SheetClose\n\t\t\t\t\t\t\t\trender={(props) => (\n\t\t\t\t\t\t\t\t\t<Button {...props} size="sm" variant="ghost">\n\t\t\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</SheetFooter>\n\t\t\t\t\t</SheetContent>\n\t\t\t\t</Sheet>\n\t\t\t))}\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/sheet/sheet-sides")),
		title: "sheet-sides",
		category: "sheet",
		path: "src/components/demos/sheet/sheet-sides.tsx",
	},
	"skeleton-demo": {
		source:
			'import { Skeleton } from "@/components/ui/skeleton"\n\nexport default function SkeletonDemo() {\n\treturn (\n\t\t<div className="flex w-64 flex-col gap-4 rounded-lg border p-4">\n\t\t\t<Skeleton className="aspect-video w-full" />\n\t\t\t<Skeleton className="h-5 w-2/3" />\n\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t<Skeleton className="h-4 w-full" />\n\t\t\t\t<Skeleton className="h-4 w-full" />\n\t\t\t\t<Skeleton className="h-4 w-2/3" />\n\t\t\t</div>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/skeleton/skeleton-demo")
		),
		title: "skeleton-demo",
		category: "skeleton",
		path: "src/components/demos/skeleton/skeleton-demo.tsx",
	},
	"slider-demo": {
		source:
			'import { Slider } from "@/components/ui/slider"\n\nexport default function SliderDemo() {\n\treturn <Slider className="max-w-100" defaultValue={50} />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/slider/slider-demo")
		),
		title: "slider-demo",
		category: "slider",
		path: "src/components/demos/slider/slider-demo.tsx",
	},
	"slider-disabled": {
		source:
			'import { Slider } from "@/components/ui/slider"\n\nexport default function SliderDisabled() {\n\treturn <Slider className="max-w-100" defaultValue={50} disabled />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/slider/slider-disabled")
		),
		title: "slider-disabled",
		category: "slider",
		path: "src/components/demos/slider/slider-disabled.tsx",
	},
	"slider-range": {
		source:
			'import { Slider } from "@/components/ui/slider"\n\nexport default function SliderRange() {\n\treturn <Slider className="max-w-100" defaultValue={[20, 80]} />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/slider/slider-range")
		),
		title: "slider-range",
		category: "slider",
		path: "src/components/demos/slider/slider-range.tsx",
	},
	"slider-with-value": {
		source:
			'import { Slider, SliderValue } from "@/components/ui/slider"\n\nexport default function SliderWithValue() {\n\treturn (\n\t\t<Slider className="max-w-100" defaultValue={50}>\n\t\t\t<div className="flex justify-between">\n\t\t\t\t<span className="text-muted-foreground mt-3 text-xs font-medium">\n\t\t\t\t\tOpacity\n\t\t\t\t</span>\n\t\t\t\t<SliderValue />\n\t\t\t</div>\n\t\t</Slider>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/slider/slider-with-value")
		),
		title: "slider-with-value",
		category: "slider",
		path: "src/components/demos/slider/slider-with-value.tsx",
	},
	"sonner-action": {
		source:
			'import { toast } from "sonner"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function SonnerActionDemo() {\n\treturn (\n\t\t<Button\n\t\t\tonClick={() =>\n\t\t\t\ttoast("Your email has been sent", {\n\t\t\t\t\tdescription: "We\'ll get back to you as soon as possible",\n\t\t\t\t\taction: {\n\t\t\t\t\t\tlabel: "Unsend",\n\t\t\t\t\t\tonClick: () => toast.success("Email unsent"),\n\t\t\t\t\t},\n\t\t\t\t})\n\t\t\t}\n\t\t>\n\t\t\tShow Toast\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/sonner/sonner-action")
		),
		title: "sonner-action",
		category: "sonner",
		path: "src/components/demos/sonner/sonner-action.tsx",
	},
	"sonner-demo": {
		source:
			'import { toast } from "sonner"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function SonnerDemo() {\n\treturn (\n\t\t<Button\n\t\t\tonClick={() =>\n\t\t\t\ttoast("Your request has been sent", {\n\t\t\t\t\tdescription: "We\'ll get back to you as soon as possible",\n\t\t\t\t})\n\t\t\t}\n\t\t>\n\t\t\tShow Toast\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/sonner/sonner-demo")
		),
		title: "sonner-demo",
		category: "sonner",
		path: "src/components/demos/sonner/sonner-demo.tsx",
	},
	"sonner-promise": {
		source:
			'import { toast } from "sonner"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function SonnerPromiseDemo() {\n\treturn (\n\t\t<Button\n\t\t\tonClick={() =>\n\t\t\t\ttoast.promise(\n\t\t\t\t\tnew Promise((resolve) => {\n\t\t\t\t\t\tsetTimeout(() => {\n\t\t\t\t\t\t\tresolve("Request sent")\n\t\t\t\t\t\t}, 2000)\n\t\t\t\t\t}),\n\t\t\t\t\t{\n\t\t\t\t\t\tloading: "Sending request...",\n\t\t\t\t\t\tsuccess: "Request sent",\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t>\n\t\t\tShow Toast\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/sonner/sonner-promise")
		),
		title: "sonner-promise",
		category: "sonner",
		path: "src/components/demos/sonner/sonner-promise.tsx",
	},
	"sonner-rich-colors": {
		source:
			'import { toast } from "sonner"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function SonnerRichColorsDemo() {\n\treturn (\n\t\t<div className="grid grid-cols-2 gap-2">\n\t\t\t<Button onClick={() => toast.success("Success", { richColors: true })}>\n\t\t\t\tsuccess\n\t\t\t</Button>\n\t\t\t<Button onClick={() => toast.error("Error", { richColors: true })}>\n\t\t\t\terror\n\t\t\t</Button>\n\t\t\t<Button onClick={() => toast.warning("Warning", { richColors: true })}>\n\t\t\t\twarning\n\t\t\t</Button>\n\t\t\t<Button onClick={() => toast.info("Info", { richColors: true })}>\n\t\t\t\tinfo\n\t\t\t</Button>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/sonner/sonner-rich-colors")
		),
		title: "sonner-rich-colors",
		category: "sonner",
		path: "src/components/demos/sonner/sonner-rich-colors.tsx",
	},
	"switch-demo": {
		source:
			'import { Switch } from "@/components/ui/switch"\n\nexport default function SwitchDemo() {\n\treturn <Switch />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/switch/switch-demo")
		),
		title: "switch-demo",
		category: "switch",
		path: "src/components/demos/switch/switch-demo.tsx",
	},
	"switch-disabled": {
		source:
			'import { Switch } from "@/components/ui/switch"\n\nexport default function SwitchDisabled() {\n\treturn <Switch disabled />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/switch/switch-disabled")
		),
		title: "switch-disabled",
		category: "switch",
		path: "src/components/demos/switch/switch-disabled.tsx",
	},
	"switch-with-label": {
		source:
			'import { Label } from "@/components/ui/label"\nimport { Switch } from "@/components/ui/switch"\n\nexport default function SwitchWithLabel() {\n\treturn (\n\t\t<Label className="flex items-center gap-2">\n\t\t\t<Switch />\n\t\t\tEnable notifications\n\t\t</Label>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/switch/switch-with-label")
		),
		title: "switch-with-label",
		category: "switch",
		path: "src/components/demos/switch/switch-with-label.tsx",
	},
	"table-demo": {
		source:
			'import {\n\tTable,\n\tTableBody,\n\tTableCaption,\n\tTableCell,\n\tTableHead,\n\tTableHeader,\n\tTableRow,\n} from "@/components/ui/table"\n\nconst movies = [\n\t{ title: "The Shawshank Redemption", year: 1994, rating: 9.3 },\n\t{ title: "The Godfather", year: 1972, rating: 9.2 },\n\t{ title: "The Dark Knight", year: 2008, rating: 9.0 },\n\t{ title: "The Godfather Part II", year: 1974, rating: 9.0 },\n\t{ title: "12 Angry Men", year: 1957, rating: 9.0 },\n\t{ title: "Schindler\'s List", year: 1993, rating: 9.0 },\n\t{\n\t\ttitle: "The Lord of the Rings: The Return of the King",\n\t\tyear: 2003,\n\t\trating: 9.0,\n\t},\n\t{ title: "Pulp Fiction", year: 1994, rating: 8.9 },\n\t{\n\t\ttitle: "The Lord of the Rings: The Fellowship of the Ring",\n\t\tyear: 2001,\n\t\trating: 8.8,\n\t},\n\t{ title: "Forrest Gump", year: 1994, rating: 8.8 },\n]\n\nexport default function TableDemo() {\n\treturn (\n\t\t<div className="w-full overflow-hidden rounded-lg border pb-2">\n\t\t\t<Table>\n\t\t\t\t<TableCaption>Top 10 Movies of All Time</TableCaption>\n\t\t\t\t<TableHeader>\n\t\t\t\t\t<TableRow>\n\t\t\t\t\t\t<TableHead>Title</TableHead>\n\t\t\t\t\t\t<TableHead className="w-20">Year</TableHead>\n\t\t\t\t\t\t<TableHead className="w-20 text-right">IMDB</TableHead>\n\t\t\t\t\t</TableRow>\n\t\t\t\t</TableHeader>\n\t\t\t\t<TableBody>\n\t\t\t\t\t{movies.map((movie) => (\n\t\t\t\t\t\t<TableRow key={movie.title}>\n\t\t\t\t\t\t\t<TableCell className="py-4 font-medium sm:py-0">\n\t\t\t\t\t\t\t\t{movie.title}\n\t\t\t\t\t\t\t</TableCell>\n\t\t\t\t\t\t\t<TableCell>{movie.year}</TableCell>\n\t\t\t\t\t\t\t<TableCell className="text-right">{movie.rating}</TableCell>\n\t\t\t\t\t\t</TableRow>\n\t\t\t\t\t))}\n\t\t\t\t</TableBody>\n\t\t\t</Table>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/table/table-demo")),
		title: "table-demo",
		category: "table",
		path: "src/components/demos/table/table-demo.tsx",
	},
	"tabs-demo": {
		source:
			'import { Button } from "@/components/ui/button"\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\n\nexport default function TabsDemo() {\n\treturn (\n\t\t<Tabs className="w-full max-w-96" defaultValue="login">\n\t\t\t<TabsList>\n\t\t\t\t<TabsTrigger value="login">Login</TabsTrigger>\n\t\t\t\t<TabsTrigger value="signup">Sign up</TabsTrigger>\n\t\t\t</TabsList>\n\t\t\t<TabsContent value="login">\n\t\t\t\t<Card>\n\t\t\t\t\t<CardHeader>\n\t\t\t\t\t\t<CardTitle>Login</CardTitle>\n\t\t\t\t\t\t<CardDescription>Login to your account to continue</CardDescription>\n\t\t\t\t\t</CardHeader>\n\t\t\t\t\t<CardContent className="space-y-4">\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</CardContent>\n\t\t\t\t\t<CardFooter>\n\t\t\t\t\t\t<Button className="w-full">Login</Button>\n\t\t\t\t\t</CardFooter>\n\t\t\t\t</Card>\n\t\t\t</TabsContent>\n\t\t\t<TabsContent value="signup">\n\t\t\t\t<Card>\n\t\t\t\t\t<CardHeader>\n\t\t\t\t\t\t<CardTitle>Sign up</CardTitle>\n\t\t\t\t\t\t<CardDescription>Sign up to create an account</CardDescription>\n\t\t\t\t\t</CardHeader>\n\t\t\t\t\t<CardContent className="space-y-4">\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</CardContent>\n\t\t\t\t\t<CardFooter>\n\t\t\t\t\t\t<Button className="w-full">Sign up</Button>\n\t\t\t\t\t</CardFooter>\n\t\t\t\t</Card>\n\t\t\t</TabsContent>\n\t\t</Tabs>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/tabs/tabs-demo")),
		title: "tabs-demo",
		category: "tabs",
		path: "src/components/demos/tabs/tabs-demo.tsx",
	},
	"tabs-disabled": {
		source:
			'import { Button } from "@/components/ui/button"\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\nimport {\n\tTooltip,\n\tTooltipContent,\n\tTooltipTrigger,\n} from "@/components/ui/tooltip"\n\nexport default function TabsUnderline() {\n\treturn (\n\t\t<Tabs className="w-full max-w-96" defaultValue="login">\n\t\t\t<TabsList>\n\t\t\t\t<TabsTrigger value="login">Login</TabsTrigger>\n\t\t\t\t<Tooltip>\n\t\t\t\t\t<TooltipTrigger\n\t\t\t\t\t\tclassName="w-full"\n\t\t\t\t\t\trender={(props) => (\n\t\t\t\t\t\t\t<div {...props}>\n\t\t\t\t\t\t\t\t<TabsTrigger disabled>Sign up</TabsTrigger>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t)}\n\t\t\t\t\t/>\n\t\t\t\t\t<TooltipContent className="w-64">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\tSign ups are temporarily disabled. Please check back later.\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</TooltipContent>\n\t\t\t\t</Tooltip>\n\t\t\t</TabsList>\n\t\t\t<TabsContent value="login">\n\t\t\t\t<Card>\n\t\t\t\t\t<CardHeader>\n\t\t\t\t\t\t<CardTitle>Login</CardTitle>\n\t\t\t\t\t\t<CardDescription>Login to your account to continue</CardDescription>\n\t\t\t\t\t</CardHeader>\n\t\t\t\t\t<CardContent className="space-y-4">\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</CardContent>\n\t\t\t\t\t<CardFooter>\n\t\t\t\t\t\t<Button className="w-full">Login</Button>\n\t\t\t\t\t</CardFooter>\n\t\t\t\t</Card>\n\t\t\t</TabsContent>\n\t\t</Tabs>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/tabs/tabs-disabled")
		),
		title: "tabs-disabled",
		category: "tabs",
		path: "src/components/demos/tabs/tabs-disabled.tsx",
	},
	"tabs-underline": {
		source:
			'import { Button } from "@/components/ui/button"\nimport {\n\tCard,\n\tCardContent,\n\tCardDescription,\n\tCardFooter,\n\tCardHeader,\n\tCardTitle,\n} from "@/components/ui/card"\nimport { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\n\nexport default function TabsUnderline() {\n\treturn (\n\t\t<Tabs className="w-full max-w-96" defaultValue="login" variant="underline">\n\t\t\t<TabsList>\n\t\t\t\t<TabsTrigger value="login">Login</TabsTrigger>\n\t\t\t\t<TabsTrigger value="signup">Sign up</TabsTrigger>\n\t\t\t</TabsList>\n\t\t\t<TabsContent value="login">\n\t\t\t\t<Card>\n\t\t\t\t\t<CardHeader>\n\t\t\t\t\t\t<CardTitle>Login</CardTitle>\n\t\t\t\t\t\t<CardDescription>Login to your account to continue</CardDescription>\n\t\t\t\t\t</CardHeader>\n\t\t\t\t\t<CardContent className="space-y-4">\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</CardContent>\n\t\t\t\t\t<CardFooter>\n\t\t\t\t\t\t<Button className="w-full">Login</Button>\n\t\t\t\t\t</CardFooter>\n\t\t\t\t</Card>\n\t\t\t</TabsContent>\n\t\t\t<TabsContent value="signup">\n\t\t\t\t<Card>\n\t\t\t\t\t<CardHeader>\n\t\t\t\t\t\t<CardTitle>Sign up</CardTitle>\n\t\t\t\t\t\t<CardDescription>Sign up to create an account</CardDescription>\n\t\t\t\t\t</CardHeader>\n\t\t\t\t\t<CardContent className="space-y-4">\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="email">Email</Label>\n\t\t\t\t\t\t\t<Input id="email" placeholder="Email" type="email" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div className="flex flex-col gap-2">\n\t\t\t\t\t\t\t<Label htmlFor="password">Password</Label>\n\t\t\t\t\t\t\t<Input id="password" placeholder="Password" type="password" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</CardContent>\n\t\t\t\t\t<CardFooter>\n\t\t\t\t\t\t<Button className="w-full">Sign up</Button>\n\t\t\t\t\t</CardFooter>\n\t\t\t\t</Card>\n\t\t\t</TabsContent>\n\t\t</Tabs>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/tabs/tabs-underline")
		),
		title: "tabs-underline",
		category: "tabs",
		path: "src/components/demos/tabs/tabs-underline.tsx",
	},
	"textarea-demo": {
		source:
			'import { Textarea } from "@/components/ui/textarea"\n\nexport default function TextareaDemo() {\n\treturn <Textarea className="w-80" placeholder="Enter your message..." />\n}\n',
		component: React.lazy(
			() => import("@/components/demos/textarea/textarea-demo")
		),
		title: "textarea-demo",
		category: "textarea",
		path: "src/components/demos/textarea/textarea-demo.tsx",
	},
	"textarea-disabled": {
		source:
			'import { Textarea } from "@/components/ui/textarea"\n\nexport default function TextareaDisabled() {\n\treturn (\n\t\t<Textarea className="w-80" placeholder="Enter your message..." disabled />\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/textarea/textarea-disabled")
		),
		title: "textarea-disabled",
		category: "textarea",
		path: "src/components/demos/textarea/textarea-disabled.tsx",
	},
	"textarea-error": {
		source:
			'import { Textarea } from "@/components/ui/textarea"\n\nexport default function TextareaError() {\n\treturn (\n\t\t<Textarea\n\t\t\tclassName="w-80"\n\t\t\tplaceholder="Enter your message..."\n\t\t\taria-invalid\n\t\t/>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/textarea/textarea-error")
		),
		title: "textarea-error",
		category: "textarea",
		path: "src/components/demos/textarea/textarea-error.tsx",
	},
	"theme-toggle": {
		source:
			'"use client"\n\nimport * as React from "react"\nimport { MoonIcon, SunIcon } from "lucide-react"\nimport { useTheme } from "next-themes"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ThemeToggleDemo() {\n\tconst { setTheme, resolvedTheme } = useTheme()\n\n\tconst toggleTheme = React.useCallback(() => {\n\t\tsetTheme(resolvedTheme === "dark" ? "light" : "dark")\n\t}, [resolvedTheme, setTheme])\n\n\treturn (\n\t\t<Button onClick={toggleTheme} variant="ghost" size="icon">\n\t\t\t<MoonIcon className="dark:hidden" />\n\t\t\t<SunIcon className="hidden dark:block" />\n\t\t\t<span className="sr-only">Toggle theme</span>\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/theme-toggle/theme-toggle")
		),
		title: "theme-toggle",
		category: "theme-toggle",
		path: "src/components/demos/theme-toggle/theme-toggle.tsx",
	},
	"toast-action": {
		source:
			'"use client"\n\nimport { useToast } from "@/hooks/use-toast"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ToastActionDemo() {\n\tconst toast = useToast()\n\n\treturn (\n\t\t<Button\n\t\t\tonClick={() => {\n\t\t\t\tconst id = toast.add({\n\t\t\t\t\ttitle: "Your email has been sent",\n\t\t\t\t\tdescription: "We\'ll get back to you as soon as possible",\n\t\t\t\t\tactionProps: {\n\t\t\t\t\t\tchildren: "Unsend",\n\t\t\t\t\t\tonClick: () => {\n\t\t\t\t\t\t\ttoast.close(id)\n\t\t\t\t\t\t\ttoast.add({\n\t\t\t\t\t\t\t\ttitle: "Email unsent",\n\t\t\t\t\t\t\t\ttype: "success",\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t\t})\n\t\t\t}}\n\t\t>\n\t\t\tShow Toast\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toast/toast-action")
		),
		title: "toast-action",
		category: "toast",
		path: "src/components/demos/toast/toast-action.tsx",
	},
	"toast-demo": {
		source:
			'"use client"\n\nimport { useToast } from "@/hooks/use-toast"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ToastDemo() {\n\tconst toast = useToast()\n\n\treturn (\n\t\t<Button\n\t\t\tonClick={() =>\n\t\t\t\ttoast.add({\n\t\t\t\t\ttitle: "Your request has been sent",\n\t\t\t\t\tdescription: "We\'ll get back to you as soon as possible",\n\t\t\t\t})\n\t\t\t}\n\t\t>\n\t\t\tShow Toast\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(() => import("@/components/demos/toast/toast-demo")),
		title: "toast-demo",
		category: "toast",
		path: "src/components/demos/toast/toast-demo.tsx",
	},
	"toast-promise": {
		source:
			'"use client"\n\nimport { useToast } from "@/hooks/use-toast"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ToastPromiseDemo() {\n\tconst toast = useToast()\n\n\treturn (\n\t\t<Button\n\t\t\tonClick={() =>\n\t\t\t\ttoast.promise(\n\t\t\t\t\tnew Promise<string>((resolve) => {\n\t\t\t\t\t\tsetTimeout(() => {\n\t\t\t\t\t\t\tresolve("Request sent")\n\t\t\t\t\t\t}, 2000)\n\t\t\t\t\t}),\n\t\t\t\t\t{\n\t\t\t\t\t\tloading: "Sending request...",\n\t\t\t\t\t\tsuccess: (data: string) => `Success: ${data}`,\n\t\t\t\t\t\terror: (err: Error) => `Error: ${err.message}`,\n\t\t\t\t\t}\n\t\t\t\t)\n\t\t\t}\n\t\t>\n\t\t\tShow Toast\n\t\t</Button>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toast/toast-promise")
		),
		title: "toast-promise",
		category: "toast",
		path: "src/components/demos/toast/toast-promise.tsx",
	},
	"toast-rich-colors": {
		source:
			'"use client"\n\nimport { useToast } from "@/hooks/use-toast"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ToastRichColorsDemo() {\n\tconst toast = useToast()\n\n\treturn (\n\t\t<div className="grid grid-cols-2 gap-2">\n\t\t\t<Button\n\t\t\t\tonClick={() =>\n\t\t\t\t\ttoast.add({\n\t\t\t\t\t\ttitle: "Success",\n\t\t\t\t\t\ttype: "success",\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t>\n\t\t\t\tsuccess\n\t\t\t</Button>\n\t\t\t<Button\n\t\t\t\tonClick={() =>\n\t\t\t\t\ttoast.add({\n\t\t\t\t\t\ttitle: "Error",\n\t\t\t\t\t\ttype: "error",\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t>\n\t\t\t\terror\n\t\t\t</Button>\n\t\t\t<Button\n\t\t\t\tonClick={() =>\n\t\t\t\t\ttoast.add({\n\t\t\t\t\t\ttitle: "Warning",\n\t\t\t\t\t\ttype: "warning",\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t>\n\t\t\t\twarning\n\t\t\t</Button>\n\t\t\t<Button\n\t\t\t\tonClick={() =>\n\t\t\t\t\ttoast.add({\n\t\t\t\t\t\ttitle: "Info",\n\t\t\t\t\t\ttype: "info",\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t>\n\t\t\t\tinfo\n\t\t\t</Button>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toast/toast-rich-colors")
		),
		title: "toast-rich-colors",
		category: "toast",
		path: "src/components/demos/toast/toast-rich-colors.tsx",
	},
	"toggle-group-demo": {
		source:
			'import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\nimport { ToggleGroup } from "@/components/ui/toggle-group"\n\nexport default function ToggleGroupDemo() {\n\treturn (\n\t\t<ToggleGroup>\n\t\t\t<Toggle value="left">\n\t\t\t\t<AlignLeftIcon />\n\t\t\t</Toggle>\n\t\t\t<Toggle value="center">\n\t\t\t\t<AlignCenterIcon />\n\t\t\t</Toggle>\n\t\t\t<Toggle value="right">\n\t\t\t\t<AlignRightIcon />\n\t\t\t</Toggle>\n\t\t</ToggleGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle-group/toggle-group-demo")
		),
		title: "toggle-group-demo",
		category: "toggle-group",
		path: "src/components/demos/toggle-group/toggle-group-demo.tsx",
	},
	"toggle-group-multiple": {
		source:
			'import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\nimport { ToggleGroup } from "@/components/ui/toggle-group"\n\nexport default function ToggleGroupMultiple() {\n\treturn (\n\t\t<ToggleGroup toggleMultiple>\n\t\t\t<Toggle value="bold">\n\t\t\t\t<BoldIcon />\n\t\t\t</Toggle>\n\t\t\t<Toggle value="italic">\n\t\t\t\t<ItalicIcon />\n\t\t\t</Toggle>\n\t\t\t<Toggle value="underline">\n\t\t\t\t<UnderlineIcon />\n\t\t\t</Toggle>\n\t\t</ToggleGroup>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle-group/toggle-group-multiple")
		),
		title: "toggle-group-multiple",
		category: "toggle-group",
		path: "src/components/demos/toggle-group/toggle-group-multiple.tsx",
	},
	"toggle-custom-control": {
		source:
			'"use client"\n\nimport { useState } from "react"\nimport { PinIcon, PinOffIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleCustomControl() {\n\tconst [isPinned, setIsPinned] = useState(false)\n\n\treturn (\n\t\t<Toggle aria-label="Pin" pressed={isPinned} onPressedChange={setIsPinned}>\n\t\t\t{isPinned ? <PinIcon /> : <PinOffIcon />}\n\t\t</Toggle>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-custom-control")
		),
		title: "toggle-custom-control",
		category: "toggle",
		path: "src/components/demos/toggle/toggle-custom-control.tsx",
	},
	"toggle-demo": {
		source:
			'import { PinIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleDemo() {\n\treturn (\n\t\t<Toggle aria-label="Pin">\n\t\t\t<PinIcon />\n\t\t</Toggle>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-demo")
		),
		title: "toggle-demo",
		category: "toggle",
		path: "src/components/demos/toggle/toggle-demo.tsx",
	},
	"toggle-disabled": {
		source:
			'import { PinIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleDisabled() {\n\treturn (\n\t\t<Toggle aria-label="Pin" disabled>\n\t\t\t<PinIcon />\n\t\t</Toggle>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-disabled")
		),
		title: "toggle-disabled",
		category: "toggle",
		path: "src/components/demos/toggle/toggle-disabled.tsx",
	},
	"toggle-outline": {
		source:
			'import { PinIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleOutline() {\n\treturn (\n\t\t<Toggle aria-label="Pin" variant="outline">\n\t\t\t<PinIcon />\n\t\t</Toggle>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-outline")
		),
		title: "toggle-outline",
		category: "toggle",
		path: "src/components/demos/toggle/toggle-outline.tsx",
	},
	"toggle-sizes": {
		source:
			'import { PinIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleSizes() {\n\treturn (\n\t\t<div className="flex items-center gap-4">\n\t\t\t<Toggle aria-label="Pin" size="sm">\n\t\t\t\t<PinIcon />\n\t\t\t</Toggle>\n\t\t\t<Toggle aria-label="Pin" size="default">\n\t\t\t\t<PinIcon />\n\t\t\t</Toggle>\n\t\t\t<Toggle aria-label="Pin" size="lg">\n\t\t\t\t<PinIcon />\n\t\t\t</Toggle>\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toggle/toggle-sizes")
		),
		title: "toggle-sizes",
		category: "toggle",
		path: "src/components/demos/toggle/toggle-sizes.tsx",
	},
	"toolbar-demo": {
		source:
			'"use client"\n\nimport { GlobeIcon, LightbulbIcon, SparklesIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n\tPopover,\n\tPopoverClose,\n\tPopoverContent,\n\tPopoverDescription,\n\tPopoverFooter,\n\tPopoverHeader,\n\tPopoverTitle,\n\tPopoverTrigger,\n} from "@/components/ui/popover"\nimport {\n\tSelect,\n\tSelectContent,\n\tSelectItem,\n\tSelectTrigger,\n\tSelectValue,\n} from "@/components/ui/select"\nimport { Textarea } from "@/components/ui/textarea"\nimport { Toggle } from "@/components/ui/toggle"\nimport { ToggleGroup } from "@/components/ui/toggle-group"\nimport {\n\tToolbar,\n\tToolbarButton,\n\tToolbarSeparator,\n} from "@/components/ui/toolbar"\n\nconst models = [\n\t{\n\t\tlabel: "Select a model",\n\t\tvalue: null,\n\t},\n\t{\n\t\tlabel: "Grok 3",\n\t\tvalue: "grok-3",\n\t},\n\t{\n\t\tlabel: "Claude 3.7 Sonnet",\n\t\tvalue: "claude-3.7-sonnet",\n\t},\n\n\t{\n\t\tlabel: "GPT-4o",\n\t\tvalue: "gpt-4o",\n\t},\n\t{\n\t\tlabel: "04-mini",\n\t\tvalue: "o4-mini",\n\t},\n]\n\nexport default function ToolbarDemo() {\n\treturn (\n\t\t<Toolbar>\n\t\t\t<ToggleGroup className="border-none bg-transparent p-0" toggleMultiple>\n\t\t\t\t<ToolbarButton\n\t\t\t\t\tsize="icon"\n\t\t\t\t\trender={\n\t\t\t\t\t\t<Toggle\n\t\t\t\t\t\t\tclassName="data-[pressed]:bg-green-950 data-[pressed]:text-green-200"\n\t\t\t\t\t\t\taria-label="Show AI thinking"\n\t\t\t\t\t\t\tvalue="ai-thinking"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<LightbulbIcon />\n\t\t\t\t\t\t</Toggle>\n\t\t\t\t\t}\n\t\t\t\t/>\n\t\t\t\t<ToolbarButton\n\t\t\t\t\tsize="icon"\n\t\t\t\t\trender={\n\t\t\t\t\t\t<Toggle\n\t\t\t\t\t\t\tclassName="data-[pressed]:bg-blue-950 data-[pressed]:text-blue-200"\n\t\t\t\t\t\t\taria-label="Use web search"\n\t\t\t\t\t\t\tvalue="web-search"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<GlobeIcon />\n\t\t\t\t\t\t</Toggle>\n\t\t\t\t\t}\n\t\t\t\t/>\n\t\t\t</ToggleGroup>\n\n\t\t\t<ToolbarSeparator />\n\n\t\t\t<Select items={models}>\n\t\t\t\t<SelectTrigger className="w-40 md:w-52">\n\t\t\t\t\t<SelectValue className="truncate" />\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent className="w-52">\n\t\t\t\t\t{models.map((model) => (\n\t\t\t\t\t\t<SelectItem key={model.value} value={model.value}>\n\t\t\t\t\t\t\t{model.label}\n\t\t\t\t\t\t</SelectItem>\n\t\t\t\t\t))}\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\n\t\t\t<ToolbarSeparator />\n\n\t\t\t<Popover>\n\t\t\t\t<ToolbarButton\n\t\t\t\t\tsize="icon"\n\t\t\t\t\tvariant="outline"\n\t\t\t\t\trender={<PopoverTrigger />}\n\t\t\t\t\taria-label="Edit prompt"\n\t\t\t\t>\n\t\t\t\t\t<SparklesIcon />\n\t\t\t\t</ToolbarButton>\n\t\t\t\t<PopoverContent className="w-80 space-y-2">\n\t\t\t\t\t<PopoverHeader>\n\t\t\t\t\t\t<PopoverTitle>Edit Prompt Template</PopoverTitle>\n\t\t\t\t\t\t<PopoverDescription>\n\t\t\t\t\t\t\tCustomize the system prompt used for AI generation\n\t\t\t\t\t\t</PopoverDescription>\n\t\t\t\t\t</PopoverHeader>\n\t\t\t\t\t<Textarea\n\t\t\t\t\t\tclassName="resize-none"\n\t\t\t\t\t\tdefaultValue="You are a helpful AI assistant. Your task is to help the user with their writing needs. Be concise, accurate, and helpful."\n\t\t\t\t\t/>\n\t\t\t\t\t<PopoverFooter>\n\t\t\t\t\t\t<PopoverClose\n\t\t\t\t\t\t\trender={<Button variant="outline">Save Prompt</Button>}\n\t\t\t\t\t\t/>\n\t\t\t\t\t</PopoverFooter>\n\t\t\t\t</PopoverContent>\n\t\t\t</Popover>\n\t\t</Toolbar>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toolbar/toolbar-demo")
		),
		title: "toolbar-demo",
		category: "toolbar",
		path: "src/components/demos/toolbar/toolbar-demo.tsx",
	},
	"toolbar-file-explorer": {
		source:
			'"use client"\n\nimport {\n\tLayoutGridIcon,\n\tLayoutListIcon,\n\tMoreHorizontalIcon,\n\tSearchIcon,\n\tShareIcon,\n} from "lucide-react"\n\nimport {\n\tDropdownMenu,\n\tDropdownMenuContent,\n\tDropdownMenuItem,\n\tDropdownMenuSeparator,\n\tDropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\nimport { Input } from "@/components/ui/input"\nimport { Toggle } from "@/components/ui/toggle"\nimport { ToggleGroup } from "@/components/ui/toggle-group"\nimport {\n\tToolbar,\n\tToolbarButton,\n\tToolbarGroup,\n\tToolbarInput,\n\tToolbarSeparator,\n} from "@/components/ui/toolbar"\n\nexport default function ToolbarFileExplorerDemo() {\n\treturn (\n\t\t<Toolbar>\n\t\t\t<ToggleGroup className="border-none bg-transparent p-0">\n\t\t\t\t<ToolbarButton\n\t\t\t\t\tsize="icon"\n\t\t\t\t\trender={\n\t\t\t\t\t\t<Toggle aria-label="Grid view" value="grid-view">\n\t\t\t\t\t\t\t<LayoutGridIcon />\n\t\t\t\t\t\t</Toggle>\n\t\t\t\t\t}\n\t\t\t\t/>\n\t\t\t\t<ToolbarButton\n\t\t\t\t\tsize="icon"\n\t\t\t\t\trender={\n\t\t\t\t\t\t<Toggle aria-label="List view" value="list-view">\n\t\t\t\t\t\t\t<LayoutListIcon />\n\t\t\t\t\t\t</Toggle>\n\t\t\t\t\t}\n\t\t\t\t/>\n\t\t\t</ToggleGroup>\n\n\t\t\t<ToolbarSeparator />\n\n\t\t\t<ToolbarGroup>\n\t\t\t\t<ToolbarButton size="icon" variant="outline">\n\t\t\t\t\t<ShareIcon />\n\t\t\t\t</ToolbarButton>\n\t\t\t\t<DropdownMenu>\n\t\t\t\t\t<ToolbarButton\n\t\t\t\t\t\tsize="icon"\n\t\t\t\t\t\tvariant="outline"\n\t\t\t\t\t\trender={<DropdownMenuTrigger />}\n\t\t\t\t\t>\n\t\t\t\t\t\t<MoreHorizontalIcon />\n\t\t\t\t\t</ToolbarButton>\n\t\t\t\t\t<DropdownMenuContent>\n\t\t\t\t\t\t<DropdownMenuItem>New File</DropdownMenuItem>\n\t\t\t\t\t\t<DropdownMenuItem>New Folder</DropdownMenuItem>\n\t\t\t\t\t\t<DropdownMenuSeparator />\n\t\t\t\t\t\t<DropdownMenuItem>Open in New Tab</DropdownMenuItem>\n\t\t\t\t\t\t<DropdownMenuItem>Get Info</DropdownMenuItem>\n\t\t\t\t\t</DropdownMenuContent>\n\t\t\t\t</DropdownMenu>\n\t\t\t</ToolbarGroup>\n\t\t\t<ToolbarSeparator />\n\n\t\t\t<ToolbarInput\n\t\t\t\trender={<Input placeholder="Search" leadingIcon={<SearchIcon />} />}\n\t\t\t/>\n\t\t</Toolbar>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/toolbar/toolbar-file-explorer")
		),
		title: "toolbar-file-explorer",
		category: "toolbar",
		path: "src/components/demos/toolbar/toolbar-file-explorer.tsx",
	},
	"tooltip-custom-position": {
		source:
			'import {\n\tTooltip,\n\tTooltipContent,\n\tTooltipTrigger,\n} from "@/components/ui/tooltip"\n\nconst positions = ["top", "right", "bottom", "left"] as const\n\nexport default function TooltipCustomPosition() {\n\treturn (\n\t\t<div className="grid grid-cols-2 gap-2">\n\t\t\t{positions.map((position) => (\n\t\t\t\t<Tooltip key={position}>\n\t\t\t\t\t<TooltipTrigger className="w-full rounded-md border px-2 py-1.5 text-sm">\n\t\t\t\t\t\t{position}\n\t\t\t\t\t</TooltipTrigger>\n\t\t\t\t\t<TooltipContent className="max-w-56" side={position}>\n\t\t\t\t\t\t<span>This tooltip is positioned at the {position} side.</span>\n\t\t\t\t\t</TooltipContent>\n\t\t\t\t</Tooltip>\n\t\t\t))}\n\t\t</div>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/tooltip/tooltip-custom-position")
		),
		title: "tooltip-custom-position",
		category: "tooltip",
		path: "src/components/demos/tooltip/tooltip-custom-position.tsx",
	},
	"tooltip-demo": {
		source:
			'import { Icons } from "@/components/icons"\nimport { buttonVariants } from "@/components/ui/button"\nimport {\n\tTooltip,\n\tTooltipContent,\n\tTooltipTrigger,\n} from "@/components/ui/tooltip"\n\nexport default function TooltipDemo() {\n\treturn (\n\t\t<Tooltip>\n\t\t\t<TooltipTrigger\n\t\t\t\tclassName={buttonVariants({ variant: "outline", size: "icon" })}\n\t\t\t>\n\t\t\t\t<Icons.twitter />\n\t\t\t</TooltipTrigger>\n\t\t\t<TooltipContent>\n\t\t\t\t<span>\n\t\t\t\t\tFollow me{" "}\n\t\t\t\t\t<a\n\t\t\t\t\t\tclassName="font-medium"\n\t\t\t\t\t\thref="https://x.com/borabalogluu"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\t@borabalogluu\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</TooltipContent>\n\t\t</Tooltip>\n\t)\n}\n',
		component: React.lazy(
			() => import("@/components/demos/tooltip/tooltip-demo")
		),
		title: "tooltip-demo",
		category: "tooltip",
		path: "src/components/demos/tooltip/tooltip-demo.tsx",
	},
}
