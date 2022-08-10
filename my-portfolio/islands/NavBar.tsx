/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { useState, useEffect, useReducer} from "preact/hooks";


/**
 * compontet houses buttons for navigating the app as well as directin the user to other webapps.
 * these buttons inclued one for each section of the webapp, about, projects, skills, contact.
 * other buttons include a resume button that linkes the the resume, and a github button that linkes
 * to gethub. This navigation bar will sick to the top of the screen. When the user is at the top of
 * the page or hovers the mouse over it, the back gound will be solid. other wise the background will 
 * be translucen.
 */
export default function NavBar({aboutRef, skillsRef, projectsRef, contactRef}) {

    const [display, setDisplay] = useState(tw` fixed flow-root bg-purple-400 h-14 w-screen`);

    const mouseOn = (()=>{
        setDisplay(tw` fixed flow-root bg-purple-400 h-14 w-screen duration-300 scale-y-10`)
    }) 

    const mouseOut = (()=>{
    
        navBarControl()
    })

    const navBarControl = (() =>{
        
        if(window.scrollY === 0){
            setDisplay(tw` fixed flow-root bg-purple-400 h-14 w-screen duration-300 scale-y-10`)
        }else{
            setDisplay(tw` fixed flow-root bg-purple-400 h-14 w-screen bg-opacity-100 ttransition-opacity duration-300 ease-out bg-opacity-10`)
        } 
           
    })

    useEffect(() => {
        window.addEventListener('scroll', () => navBarControl())
        return () => {
            window.removeEventListener('scroll', navBarControl)
        }
      }, [window.scrollY])

      const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.current.base.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };

      const handleProjectsScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };

    return (
            <div class={display} onmouseover={()=> mouseOn()} onmouseleave={()=> mouseOut()}>
                <div class={tw`float-left mx-20`}>Joshua Lucas</div>
                <div class={tw` flex float-right mx-20`}>
                    <div class={tw`px-1 cursor-pointer`} onClick={() =>handleScroll(aboutRef)}> About </div>
                    <div class={tw`px-1 cursor-pointer`} onClick={() =>handleScroll(skillsRef)}> Skills </div>
                    <div class={tw`px-1 cursor-pointer`} onClick={() =>handleProjectsScroll(projectsRef)}> Projects </div>
                    <div class={tw`px-1 cursor-pointer`} onClick={() =>handleScroll(contactRef)}> Contact </div>
                    <div class={tw`px-1 cursor-pointer`} onClick="window.open('/generalResume.pdf')">resume </div>
                    <div class={tw`px-1 cursor-pointer`} onClick="window.open('https://github.com/jlucas86')">github </div>
                </div>
            </div>
      );
  }