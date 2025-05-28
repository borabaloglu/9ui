import cloneDeep from "lodash/cloneDeep"
import template from "lodash/template"

import { colors, PrimaryColor, Shade } from "@/config/colors"

export const generateTheme = (
	shade: Shade,
	primaryColor: PrimaryColor,
	radius: number = 0.5,
	flat: boolean = false,
	forceStyles = false
) => {
	const shadeColors = cloneDeep(colors.shades[shade])

	if (flat) {
		shadeColors.cssVars.light = {
			...shadeColors.cssVars.light,
			card: shadeColors.cssVars.light.background,
			popover: shadeColors.cssVars.light.background,
			input: shadeColors.cssVars.light.background,
		}
		shadeColors.cssVars.dark = {
			...shadeColors.cssVars.dark,
			card: shadeColors.cssVars.dark.background,
			popover: shadeColors.cssVars.dark.background,
			input: shadeColors.cssVars.dark.background,
		}
	}

	const primaryColors =
		primaryColor === "neutral" ? shadeColors : colors.primary[primaryColor]

	const styles = template(STYLES_TEMPLATE)({
		colors: {
			shade: {
				light: shadeColors.cssVars.light,
				dark: shadeColors.cssVars.dark,
			},
			primary: {
				light: primaryColors.cssVars.light,
				dark: primaryColors.cssVars.dark,
			},
		},
		radius: radius,
	})

	if (forceStyles) {
		return styles
	}

	return styles.replaceAll(" !important", "")
}

const STYLES_TEMPLATE = `@layer base {
  :root {
    --background: <%- colors.shade.light["background"] %> !important;
    --foreground: <%- colors.shade.light["foreground"] %> !important;
    --card: <%- colors.shade.light["card"] %> !important;
    --card-foreground: <%- colors.shade.light["card-foreground"] %> !important;
    --popover: <%- colors.shade.light["popover"] %> !important;
    --popover-foreground: <%- colors.shade.light["popover-foreground"] %> !important;
    --primary: <%- colors.primary.light["primary"] %> !important;
    --primary-foreground: <%- colors.primary.light["primary-foreground"] %> !important;
    --secondary: <%- colors.shade.light["secondary"] %> !important;
    --secondary-foreground: <%- colors.shade.light["secondary-foreground"] %> !important;
    --muted: <%- colors.shade.light["muted"] %> !important;
    --muted-foreground: <%- colors.shade.light["muted-foreground"] %> !important;
    --accent: <%- colors.shade.light["accent"] %> !important;
    --accent-foreground: <%- colors.shade.light["accent-foreground"] %> !important;
    --destructive: <%- colors.shade.light["destructive"] %> !important;
    --destructive-foreground: <%- colors.shade.light["destructive-foreground"] %> !important;
    --danger: <%- colors.shade.light["danger"] %> !important;
    --danger-foreground: <%- colors.shade.light["danger-foreground"] %> !important;
    --danger-border: <%- colors.shade.light["danger-border"] %> !important;
    --warning: <%- colors.shade.light["warning"] %> !important;
    --warning-foreground: <%- colors.shade.light["warning-foreground"] %> !important;
    --warning-border: <%- colors.shade.light["warning-border"] %> !important;
    --info: <%- colors.shade.light["info"] %> !important;
    --info-foreground: <%- colors.shade.light["info-foreground"] %> !important;
    --info-border: <%- colors.shade.light["info-border"] %> !important;
    --success: <%- colors.shade.light["success"] %> !important;
    --success-foreground: <%- colors.shade.light["success-foreground"] %> !important;
    --success-border: <%- colors.shade.light["success-border"] %> !important;
    --border: <%- colors.shade.light["border"] %> !important;
    --input: <%- colors.shade.light["input"] %> !important;
    --ring: <%- colors.shade.light["ring"] %> !important;
    --radius: <%- radius %>rem !important;
    --chart-1: <%- colors.shade.light["chart-1"] %> !important;
    --chart-2: <%- colors.shade.light["chart-2"] %> !important;
    --chart-3: <%- colors.shade.light["chart-3"] %> !important;
    --chart-4: <%- colors.shade.light["chart-4"] %> !important;
    --chart-5: <%- colors.shade.light["chart-5"] %> !important;
  }
  .dark {
    --background: <%- colors.shade.dark["background"] %> !important;
    --foreground: <%- colors.shade.dark["foreground"] %> !important;
    --card: <%- colors.shade.dark["card"] %> !important;
    --card-foreground: <%- colors.shade.dark["card-foreground"] %> !important;
    --popover: <%- colors.shade.dark["popover"] %> !important;
    --popover-foreground: <%- colors.shade.dark["popover-foreground"] %> !important;
    --primary: <%- colors.primary.dark["primary"] %> !important;
    --primary-foreground: <%- colors.primary.dark["primary-foreground"] %> !important;
    --secondary: <%- colors.shade.dark["secondary"] %> !important;
    --secondary-foreground: <%- colors.shade.dark["secondary-foreground"] %> !important;
    --muted: <%- colors.shade.dark["muted"] %> !important;
    --muted-foreground: <%- colors.shade.dark["muted-foreground"] %> !important;
    --accent: <%- colors.shade.dark["accent"] %> !important;
    --accent-foreground: <%- colors.shade.dark["accent-foreground"] %> !important;
    --destructive: <%- colors.shade.dark["destructive"] %> !important;
    --destructive-foreground: <%- colors.shade.dark["destructive-foreground"] %> !important;
    --danger: <%- colors.shade.dark["danger"] %> !important;
    --danger-foreground: <%- colors.shade.dark["danger-foreground"] %> !important;
    --danger-border: <%- colors.shade.dark["danger-border"] %> !important;
    --warning: <%- colors.shade.dark["warning"] %> !important;
    --warning-foreground: <%- colors.shade.dark["warning-foreground"] %> !important;
    --warning-border: <%- colors.shade.dark["warning-border"] %> !important;
    --info: <%- colors.shade.dark["info"] %> !important;
    --info-foreground: <%- colors.shade.dark["info-foreground"] %> !important;
    --info-border: <%- colors.shade.dark["info-border"] %> !important;
    --success: <%- colors.shade.dark["success"] %> !important;
    --success-foreground: <%- colors.shade.dark["success-foreground"] %> !important;
    --success-border: <%- colors.shade.dark["success-border"] %> !important;
    --border: <%- colors.shade.dark["border"] %> !important;
    --input: <%- colors.shade.dark["input"] %> !important;
    --ring: <%- colors.shade.dark["ring"] %> !important;
    --chart-1: <%- colors.shade.dark["chart-1"] %> !important;
    --chart-2: <%- colors.shade.dark["chart-2"] %> !important;
    --chart-3: <%- colors.shade.dark["chart-3"] %> !important;
    --chart-4: <%- colors.shade.dark["chart-4"] %> !important;
    --chart-5: <%- colors.shade.dark["chart-5"] %> !important;
  }
}
`
