"use client";

import { useEffect } from "react";

const SELECTOR =
	'input:not([autocomplete="off"]), textarea:not([autocomplete="off"])';
const PENDING_SCOPE =
	'[data-autofill-scope]:not([data-hydrated]), [hidden][id^="S:"]';

function disableAutofill(element: Element) {
	element.setAttribute("autocomplete", "off");
	element.setAttribute("data-1p-ignore", "");
	element.setAttribute("data-lpignore", "true");
	element.setAttribute("data-bwignore", "");
}

function isPending(element: Element) {
	return element.closest(PENDING_SCOPE) !== null;
}

export function disableAutofillWithin(root: Element) {
	const elements = root.matches(SELECTOR)
		? [root, ...root.querySelectorAll(SELECTOR)]
		: root.querySelectorAll(SELECTOR);
	for (const element of elements) {
		if (!isPending(element)) disableAutofill(element);
	}
}

export function DisableAutofill() {
	useEffect(() => {
		disableAutofillWithin(document.body);

		const observer = new MutationObserver((records) => {
			for (const record of records) {
				for (const node of record.addedNodes) {
					if (node instanceof Element) disableAutofillWithin(node);
				}
			}
		});
		observer.observe(document.body, { childList: true, subtree: true });

		return () => observer.disconnect();
	}, []);

	return null;
}
