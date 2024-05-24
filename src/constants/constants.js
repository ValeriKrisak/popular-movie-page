import {
    faBell,
    faLanguage,
    faPlus,
    faUser,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const SORT_COLLECTION = [
    "Popularity Descending",
    "Popularity Ascending",
    "Rating Descending",
    "Rating Ascending",
    "Release Date Descending",
    "Release Date Ascending",
    "Title (A-Z)",
    "Title (Z-A)",
];

export const MENU_LIST = [
    {
        id: 1,
        name: "Movies",
        categories: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
    },
    {
        id: 2,
        name: "TV Shows",
        categories: ["Popular", "Airing Today", "On TV", "Top Rated"],
    },
    {
        id: 3,
        name: "People",
        categories: ["Popular People"],
    },
    {
        id: 4,
        name: "More",
        categories: ["Disscusion", "Leaderboard", "Support", "API"],
    },
];

export const ICON_MENU = [
    { id: 1, name: faPlus },
    { id: 2, name: faLanguage },
    { id: 3, name: faBell },
    { id: 4, name: faUser },
    { id: 5, name: faMagnifyingGlass },
];

export const SHOW_ME_OPTIONS = [
    { id: 1, value: "Everything" },
    { id: 2, value: "Movies I Haven't Seen" },
    { id: 3, value: "Movies I Have Seen" }
]

export const SLIDER_ONE = [0, 5, 10];

export const SLIDER_TWO = [0, 100, 200, 300, 400, 500];

export const SLIDER_THREE = [0, 120, 240, 360];