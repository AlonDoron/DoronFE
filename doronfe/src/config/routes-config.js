import {
  HomePage,
  AboutPage,
  ContactUsPage,
  NotFoundPage
} from "../components/Pages";

export const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/contactus",
    component: ContactUsPage
  },
  {
    path: "*",
    component: NotFoundPage
  }
];
