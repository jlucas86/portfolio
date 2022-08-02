/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Counter from "../islands/Counter.tsx";
import Project from "./Project.tsx";
import About from "./componets/About.tsx";
import Skills from "../islands/Skills.tsx";
import Contact from "./componets/Contact.tsx";
import NavBar from "./componets/NavBar.tsx";

/**
 * prtfoli to demonstart skill and experience of creator
 */

export default function Home() {

  let fresh: [string, string] = ["Fresh","/logo.svg"];
  let c: [string, string] = ["C","/img/c.png"];
  let cpp: [string, string] = ["C++","/img/c++.png"];
  let java: [string, string] = ["Java","/img/java.png"];
  let javaScript: [string, string] = ["Java Script","/img/javaScript.png"];
  let html5: [string, string] = ["HTML5","/img/html5.png"];
  let css3: [string, string] = ["CSS3","/img/css3.png"];
  let react: [string, string] = ["React","/img/react.png"];
  let nodejs: [string, string] = ["Node.js","/img/nodejs.png"];
  let mysql: [string, string] = ["mySQL","/img/mysql.svg"];
  let postgresql: [string, string] = ["PostgreSQL","/img/postgresql.png"];
  let bootstrap: [string, string] = ["Boot Strap","/img/bootstrap.png"];
  let jupyterNoteBook: [string, string] = ["Jupyter Note Book","/img/jupyterNoteBook.png"];
  let python: [string, string] = ["Python","/img/python.png"];
  let github: [string, string] = ["Github","/img/github.png"];
  let virtualBox: [string, string] = ["Virtual Box","/img/virtualBox.png"];
  let django: [string, string] = ["Django","/img/django.png"];
  let docker: [string, string] = ["Docker","/img/docker.png"];


  

  let skillList: Array<[string, string]> = [fresh, c, cpp, java, javaScript, html5, css3, react, nodejs, mysql,
    postgresql, bootstrap, jupyterNoteBook, python, github, virtualBox, django, docker];
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
        <Skills skills={skillList}/>
        <Contact/>
        
        
      </div>
    </div>
  );
}
