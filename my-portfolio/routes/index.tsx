/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Counter from "../islands/Counter.tsx";
import Project from "./Project.tsx";
import About from "./componets/About.tsx";
import Skills from "./componets/Skills.tsx";
import Contact from "./componets/Contact.tsx";
import NavBar from "./componets/NavBar.tsx";

/**
 * prtfoli to demonstart skill and experience of creator
 */

export default function Home() {
  return (
    <div class={tw`font-mono`}>
      <NavBar/>
    
      <div class={tw`p-10  mx-auto max-w-screen-md`}>
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6 bg-purple-400`}>
          dont tell me what to do!!!!!!
          
        </p>
        <Counter start={5} />

        <About/>
        <Project/>
        <Skills/>
        <Contact/>
        
        
      </div>
    </div>
  );
}
