import { v4 as uuidv4 } from "uuid";
import EcommerceBackEngImg from "../images/EcommerceBackEnd.png";
import WeatherAppImg from "../images/WeatherApp.png";
import MountainExpressImg from "../images/MountainExpress.png";
import EatSipImg from "../images/eatNsip.png";
import NoteTakerImg from "../images/NoteTaker.png";

const projects = [
  {
    id: uuidv4(),
    name: "Weather Application",
    desc: "This application helps you check the weather of every city that you type in.",
    img: WeatherAppImg,
  },
  {
    id: uuidv4(),
    name: "Mountain Express",
    desc: "Shuttle Service company providing transportation service in the Mountians of Colorado.",
    img: MountainExpressImg,
  },
  {
    id: uuidv4(),
    name: "EatNSip",
    desc: "You have left overs at home? Here is where you can make your own recipe from that.",
    img: EatSipImg,
  },
  {
    id: uuidv4(),
    name: "Note Taker",
    desc: "Why put everything in mind when you have a note taker where you can manage your to do list.",
    img: NoteTakerImg,
  },
  {
    id: uuidv4(),
    name: "Ecommerce Back End",
    desc: "Here you can find how I worked on routes at the Back end to create a ecommerce for products",
    img: EcommerceBackEngImg,
  },
];

export default projects;
