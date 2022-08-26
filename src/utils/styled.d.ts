// import original module declarations
import 'styled-components';

// and extend them! add new field whenever you wish to extend your theme, or alter it
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
