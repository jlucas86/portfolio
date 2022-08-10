/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Project from "../routes/componets/Project.tsx";
import About from "../routes/componets/About.tsx";
import Skills from "./Skills.tsx";
import Contact from "./Contact.tsx";
import NavBar from "./NavBar.tsx";
import { useState, useEffect, useRef} from "preact/hooks";

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

  let foodMap: [string, string, string, string, string, string, string, string] = ["Food Map", "tools", "hardware", "goal",
    "solution", "github", "https://picsum.photos/200/300","random image"]

  let projects: Array<[string, string, string, string, string, string, string, string]> = [foodMap, foodMap, foodMap, foodMap, foodMap, foodMap, foodMap, foodMap, foodMap, foodMap, foodMap, foodMap, foodMap]

  let skillList: Array<[string, string]> = [fresh, c, cpp, java, javaScript, html5, css3, react, nodejs, mysql,
    postgresql, bootstrap, jupyterNoteBook, python, github, virtualBox, django, docker];

  let screenPos: number = 0;

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

    useEffect(() => {
      console.log(aboutRef.current);
      console.log(skillsRef.current);
      console.log(projectsRef.current);
      console.log(contactRef.current);
    }, [aboutRef, skillsRef, projectsRef, contactRef]);

    const handleScroll = (ref) => {
      console.log(ref)
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    };


  return (
    <div class={tw`font-mono `} onscroll="console.log('butts')" >
      <NavBar aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
    
      <div class={tw`mx-auto max-w-screen-2xlg`}>
        
        <About ref={aboutRef}/>
        
        <Skills skills={skillList} ref={skillsRef} />
        <div ref={projectsRef}>
          {projects.map(project => (
                <Project 
                  title={project[0]}
                  tools={project[1]}
                  hardware={project[2]}
                  goal={project[3]}
                  solution={project[4]}
                  github={project[5]}
                  image={project[6]}
                  imageAlt={project[7]}
                />
              ))}
          </div>
        <Contact id="contact" contactRef={contactRef} ref={contactRef} />
        
        
      </div>
    </div>
  );
}
