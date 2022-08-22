import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  
  theme: {
    
    overflow: {
      'no-scrollbar': 'scrollbar-width: none;'
    },
    extend: {
      colors: {
        'primary': "#232323",
        'secondary': "#656565",
        'hover':"#989898",
        'textP':"#dfd8e8",
        'textTitle':"#69369e",
        'textSubTitle':"#69369e",
        'button':"#a78afb",
      },
      display: (theme) => ({
        // Use a own gradient
        'noScrollbar': `scrollbar-width: none;`,
        // Integrate with gradient colors stops (from-*, via-*, to-*)
        'gradient-15':
          'linear-gradient(.15turn, var(--tw-gradient-stops,var(--tw-gradient-from,transparent),var(--tw-gradient-to,transparent)))',
      }),
    }
  },
};


if (IS_BROWSER) setup(config);
