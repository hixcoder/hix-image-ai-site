import "./styles/homePage.css";
import ShortDesc from "./components/HomePage//ShortDesc";
import { EmblaCarousel } from "./components/HomePage/EmblaCarousel";
import Prompt from "./components/HomePage/Prompt";
import Questions from "./components/HomePage/Questions";

export default function HomePage() {
  return (
    <div className="flex flex-col w-screen h-fit">
      <div className="flex flex-row w-screen h-fit mt-24">
        <ShortDesc />
        <Prompt />
      </div>
      <EmblaCarousel />
      <Questions />
      <hr className="mx-10 bg-[#ffffff61] " />
      <footer className="flex flex-col justify-center items-center text-[#ffffff61] m-8 text-sm">
        Copyright © 2023 Midjourney AI All rights reserved.
      </footer>
    </div>
  );
}
