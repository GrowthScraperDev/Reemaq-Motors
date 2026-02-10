import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import ScrollerComp from "./components/ScrollerComp";
import SwiperSlider from "./components/SwiperSlide";
import Header from "./components/Header";
import SubscribeForm from "./components/SubscribeForm";
import ContactForm from "./components/ContactForm";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "5uBUmbXApNcY3UJXo27Bti",
      token: "YCG86QTkCs39TR1P1fZxvhLvsswo3fFWcusZRH9QOKz9BNFkySUEkAQScduEeKeXrncVHkbIeRaw6J39y6A",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
PLASMIC.registerComponent(ScrollerComp, {
  name: 'ScrollerComp',
  props: {
    children: 'slot',
    speed: 'number',
    style: 'object',
  },
});
PLASMIC.registerComponent(Header, {
  name: 'Header',
  props: {
    activePath:'string',
    menu:'object',
    address:'string',
    contactEmail:'string',
    contactPhone1:'string',
    contactPhone2:'string',
    enableDrawer:'boolean',
  },
});
PLASMIC.registerComponent(SubscribeForm, {
  name: 'SubscribeForm',
  props: {
  },
});
PLASMIC.registerComponent(ContactForm, {
  name: 'ContactForm',
  props: {
  },
});
PLASMIC.registerComponent(SwiperSlider, {
  name: 'SwiperSlider',
  props: {
    children: 'slot',
    pagination: 'boolean',
    centeredSlides: 'boolean',
    autoplay: 'boolean',
    mobileSlides: 'number',
    tabletSlides:'number',
    desktopSlides: 'number',
    marquee: 'boolean',
    paginationPosition:'string',
    paginationBg:'string',
    noloop:'boolean'
  },
});