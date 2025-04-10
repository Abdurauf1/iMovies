import { FooterLinksType, NavLinksType, SectionsType } from "../types";

export const navLinks: NavLinksType[] = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Movies",
    path: "/movie"
  },
  {
    title: "Series",
    path: "/tv"
  }
]

export const sections: SectionsType[] = [
  {
    title: "Trending movies",
    category: "movie",
    type: "popular",
  },
  {
    title: "Top rated movies",
    category: "movie",
    type: "top_rated",
  },
  {
    title: "Trending series",
    category: "tv",
    type: "popular",
  },
  {
    title: "Top rated series",
    category: "tv",
    type: "top_rated",
  }
]

export const footerLinks: FooterLinksType[] = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Contact Us",
    path: "#"
  },
  {
    title: "Term Of Services",
    path: "#"
  },
  {
    title: "About Us",
    path: "#"
  },
  {
    title: "Live",
    path: "#"
  },
  {
    title: "FAQ",
    path: "#"
  },
  {
    title: "Premium",
    path: "#"
  },
  {
    title: "Privacy Policy",
    path: "#"
  },
  {
    title: "You Must Watch",
    path: "#"
  },
  {
    title: "Recent Release",
    path: "#"
  },
  {
    title: "Top IMDB",
    path: "#"
  },
]