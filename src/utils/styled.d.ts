// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borders: string[];
    radii: { [k: string]: string };
    colors: { [k: string]: string };
    fontSizes: { [k: string]: string };
    fontWeights: number[];
    lineHeights: { [k: string]: number };
    space: number[];
    shadows: {
      boxShadow: { [k: string]: string };
    };
  }
}
