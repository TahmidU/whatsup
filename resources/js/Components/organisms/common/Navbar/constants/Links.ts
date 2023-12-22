export const NAV_LINKS_ROUTES = [
    { name: "Home", route: "home" },
    { name: "About", route: "about" },
    { name: "Safety", route: "safety" },
    { name: "Support", route: "support" },
    { name: "Careers", route: "careers" },
] as const;

export const LINK_NAMES = NAV_LINKS_ROUTES.map((route) => route.name);
