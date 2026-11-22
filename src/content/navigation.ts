export interface NavItem {
  label: string;
  href: string;
}

/**
 * Primary navigation items for the site header.
 * Note: Care is intentionally excluded here and lives in the footer.
 */
export const primaryNavigation: NavItem[] = [
  { label: "Collection", href: "/#collection" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Atelier", href: "/#atelier" },
  { label: "Contact", href: "/#enquiries" },
];

/**
 * Footer navigation items including Care.
 */
export const footerNavigation: NavItem[] = [
  { label: "Collection", href: "/#collection" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Atelier", href: "/#atelier" },
  { label: "Contact", href: "/#contact" },
];
