import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      'primary': "#232323",
      'secondary': "#656565",
      'hover':"#989898",
      'textP':"#dfd8e8",
      'textS':"#69369e",
      'button':"#7951a8",
    },
    extend: {
      
      
    }
  },
};
if (IS_BROWSER) setup(config);
