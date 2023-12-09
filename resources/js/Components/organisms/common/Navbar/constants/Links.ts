export const NAV_LINKS_ROUTES = [
    { name: "Home", route: "home" },
    { name: "About", route: "about" },
    { name: "Safety", route: "home" },
    { name: "Support", route: "home" },
    { name: "Careers", route: "home" },
] as const;

export const LINK_NAMES = NAV_LINKS_ROUTES.map((route) => route.name);
