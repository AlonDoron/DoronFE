import {
  HomePage,
  AboutPage,
  ContactUsPage,
  LeadPage,
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
    path: "/lead",
    component: LeadPage
  },
  {
    path: "*",
    component: NotFoundPage
  }
];
