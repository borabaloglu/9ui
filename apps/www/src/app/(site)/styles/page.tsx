import type { Metadata } from "next";

import { StylesLab } from "@/styles-lab/styles-lab";

import "@/styles-lab/styles/index.css";

export const metadata: Metadata = {
	title: "Styles lab",
	description: "Prototype: one set of components, several visual styles.",
};

const StylesPage = () => <StylesLab />;

export default StylesPage;
