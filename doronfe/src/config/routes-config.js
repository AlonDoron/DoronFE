import {
  HomePage,
  AboutPage,
  ContactUsPage,
  LeadPage,
  NotFoundPage,
  BituahHovaPage,
  BituahZadGimelPage
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
    path: "/bituahHova",
    component: BituahHovaPage
  },
  {
    path: "/bituahZadGimel",
    component: BituahZadGimelPage
  },
  {
    path: "*",
    component: NotFoundPage
  }
];
