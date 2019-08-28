import {
  HomePage,
  AboutPage,
  ContactUsPage,
  LeadPage,
  NotFoundPage,
  BituahHovaPage,
  BituahZadGimelPage,
  BituahMakifPage,
  BituahDiraPage,
  BituahEsekPage,
  BituahNesiotPage
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
    path: "/bituahMakif",
    component: BituahMakifPage
  },
  {
    path: "/bituahDira",
    component: BituahDiraPage
  },
  {
    path: "/bituahEsek",
    component: BituahEsekPage
  },
  {
    path: "/bituahNesiot",
    component: BituahNesiotPage
  },
  {
    path: "*",
    component: NotFoundPage
  }
];
