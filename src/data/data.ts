import { Content } from "@/types";

import Frontend from "@/assets/image/frontend.png";
import Backend from "@/assets/image/backend.png";
import Fullstack from "@/assets/image/fullstack.png";

export const skills: Content[] = [
  {
    title: "Frontend Developer",
    subtitle: "{ Vue js, Vuetify, Tailwindcss }",
    image: Frontend,
    descreption: "",
  },
  {
    title: "Backend Developer",
    subtitle: "{ Node js, Mongodb, Socket.io }",
    image: Backend,
    descreption: "",
  },
  {
    title: "FullStack Developer",
    subtitle: "{ Nuxt js, Laravel }",
    image: Fullstack,
    descreption: "",
  },
];

export const portfolios: Content[] = [
  {
    title: "Pct Shop",
    subtitle: "POS App with { Vue, Express Api, And MongoDB }",
    image: undefined,
    link: "https://pct-shop.fly.dev",
    descreption:
      "A POS (Point Of Sales) App with vue js framework, express js api backend, and mongoDB database",
  },
  {
    title: "Nasikha E-commerce",
    subtitle:
      "E-commerce App with { Vue, Express Api, MongoDB, And Midtrans Payment Gateway }",
    image: undefined,
    link: "https://nasikha-ecommerce.netlify.app",
    descreption:
      "A E-commerce App with vue js framework, express js api backend, Midtrans Paymant Gateway, and mongoDB database",
  },
  {
    title: "Chat On Dayy",
    subtitle: "Chat App with { Vue, Express Api, MongoDB, and Socket.io }",
    image: undefined,
    link: "https://chat-on-dayy.netlify.app",
    descreption:
      "A Chat App with vue js framework, express js api backend, Socket.io, and mongoDB database",
  },
];
