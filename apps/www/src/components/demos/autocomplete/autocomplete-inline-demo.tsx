import {
	Autocomplete,
	AutocompleteEmpty,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompletePopup,
} from "@/components/ui/autocomplete";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function AutocompleteInlineDemo() {
	return (
		<Field className="max-w-sm">
			<FieldLabel>Fruit</FieldLabel>
			<Autocomplete items={fruits} mode="both">
				<AutocompleteInput placeholder="e.g. Apple" render={<Input />} />
				<AutocompletePopup>
					<AutocompleteEmpty>No fruits found.</AutocompleteEmpty>
					<AutocompleteList>
						{(fruit: Fruit) => (
							<AutocompleteItem key={fruit.value} value={fruit}>
								{fruit.label}
							</AutocompleteItem>
						)}
					</AutocompleteList>
				</AutocompletePopup>
			</Autocomplete>
		</Field>
	);
}

interface Fruit {
	label: string;
	value: string;
}

const fruits: Fruit[] = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Grape", value: "grape" },
	{ label: "Mango", value: "mango" },
	{ label: "Orange", value: "orange" },
	{ label: "Peach", value: "peach" },
	{ label: "Strawberry", value: "strawberry" },
	{ label: "Watermelon", value: "watermelon" },
	{ label: "Pineapple", value: "pineapple" },
	{ label: "Kiwi", value: "kiwi" },
	{ label: "Lemon", value: "lemon" },
	{ label: "Lime", value: "lime" },
	{ label: "Avocado", value: "avocado" },
	{ label: "Blackberry", value: "blackberry" },
	{ label: "Cantaloupe", value: "cantaloupe" },
	{ label: "Coconut", value: "coconut" },
	{ label: "Cherry", value: "cherry" },
	{ label: "Cranberry", value: "cranberry" },
	{ label: "Date", value: "date" },
	{ label: "Dragonfruit", value: "dragonfruit" },
	{ label: "Elderberry", value: "elderberry" },
	{ label: "Fig", value: "fig" },
	{ label: "Gooseberry", value: "gooseberry" },
	{ label: "Guava", value: "guava" },
	{ label: "Honeydew", value: "honeydew" },
	{ label: "Jackfruit", value: "jackfruit" },
	{ label: "Kumquat", value: "kumquat" },
	{ label: "Lychee", value: "lychee" },
	{ label: "Mandarin", value: "mandarin" },
	{ label: "Mulberry", value: "mulberry" },
	{ label: "Nectarine", value: "nectarine" },
	{ label: "Olive", value: "olive" },
	{ label: "Papaya", value: "papaya" },
	{ label: "Passionfruit", value: "passionfruit" },
	{ label: "Pear", value: "pear" },
	{ label: "Persimmon", value: "persimmon" },
	{ label: "Plantain", value: "plantain" },
	{ label: "Plum", value: "plum" },
	{ label: "Pomegranate", value: "pomegranate" },
	{ label: "Quince", value: "quince" },
	{ label: "Raspberry", value: "raspberry" },
	{ label: "Red Currant", value: "red-currant" },
	{ label: "Salak", value: "salak" },
	{ label: "Sapodilla", value: "sapodilla" },
	{ label: "Sorrel", value: "sorrel" },
	{ label: "Soursop", value: "soursop" },
	{ label: "Starfruit", value: "starfruit" },
	{ label: "Tamarind", value: "tamarind" },
	{ label: "Tangerine", value: "tangerine" },
	{ label: "Ugli Fruit", value: "ugli-fruit" },
	{ label: "White Currant", value: "white-currant" },
	{ label: "Yuzu", value: "yuzu" },
	{ label: "Ackee", value: "ackee" },
	{ label: "Atemoya", value: "atemoya" },
	{ label: "Breadfruit", value: "breadfruit" },
	{ label: "Buddha's Hand", value: "buddhas-hand" },
	{ label: "Calamansi", value: "calamansi" },
	{ label: "Custard Apple", value: "custard-apple" },
	{ label: "Feijoa", value: "feijoa" },
	{ label: "Finger Lime", value: "finger-lime" },
	{ label: "Gac", value: "gac" },
	{ label: "Horned Melon", value: "horned-melon" },
	{ label: "Jabuticaba", value: "jabuticaba" },
	{ label: "Jujube", value: "jujube" },
	{ label: "Langsat", value: "langsat" },
	{ label: "Longan", value: "longan" },
	{ label: "Loquat", value: "loquat" },
	{ label: "Mamoncillo", value: "mamoncillo" },
	{ label: "Marang", value: "marang" },
	{ label: "Medlar", value: "medlar" },
	{ label: "Miracle Fruit", value: "miracle-fruit" },
	{ label: "Monstera", value: "monstera" },
	{ label: "Mountain Soursop", value: "mountain-soursop" },
	{ label: "Naranjilla", value: "naranjilla" },
	{ label: "Palmyra Fruit", value: "palmyra-fruit" },
	{ label: "Pawpaw", value: "pawpaw" },
	{ label: "Pepino", value: "pepino" },
	{ label: "Physalis", value: "physalis" },
	{ label: "Pomelo", value: "pomelo" },
	{ label: "Rambutan", value: "rambutan" },
	{ label: "Salmonberry", value: "salmonberry" },
	{ label: "Santol", value: "santol" },
	{ label: "Sapote", value: "sapote" },
	{ label: "Satsuma", value: "satsuma" },
	{ label: "Soncoya", value: "soncoya" },
	{ label: "Surinam Cherry", value: "surinam-cherry" },
	{ label: "Tangelo", value: "tangelo" },
	{ label: "White Sapote", value: "white-sapote" },
	{ label: "Yangmei", value: "yangmei" },
	{ label: "Youngberry", value: "youngberry" },
	{ label: "Ziziphus", value: "ziziphus" },
	{ label: "Bilberry", value: "bilberry" },
	{ label: "Boysenberry", value: "boysenberry" },
	{ label: "Cloudberry", value: "cloudberry" },
	{ label: "Currant", value: "currant" },
	{ label: "Damson", value: "damson" },
	{ label: "Goji Berry", value: "goji-berry" },
	{ label: "Juneberry", value: "juneberry" },
	{ label: "Seagrape", value: "seagrape" },
];
