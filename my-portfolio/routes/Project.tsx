/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

interface projectProps{
    title: string,
    tools: string,
    hardware: string,
    goal: string,
    solution: string,
    github: string,
    immage: string,
}

// TODO - display image/embeded video on left of div
// TODO - project infromation to the right of div including title, tools used, goal and solution to goal

/**
 * container receves a JSON for a project then displayes it. The JSON contains
 * a image or video link, title, skiills used, and goal of project and breif 
 * description of how it was accomplished
 */

export default function Project(props: projectProps) {
    return (
        <div>
          <div class={tw`text-5xl`}>{props.title}</div>
          <div class={tw` flex`}>
            <div class={tw`font-bold`}>Tools:</div>
            <div class={tw``}>{props.tools}</div>
          </div>
          {props.hardware != null &&
            <div class={tw` flex`}>
                <div class={tw`font-bold`}>Hardware:</div>
                <div class={tw``}>{props.tools}</div>
            </div>
          }
          <div class={tw` flex`}>
            <div class={tw`font-bold`}>Goal:</div>
            <div class={tw``}>{props.goal}</div>
          </div>
          <div class={tw` flex`}>
            <div class={tw`font-bold`}>Solution:</div>
            <div class={tw``}>{props.solution}</div>
          </div>
        </div>
      );
  }