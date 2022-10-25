/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react';
import { ThemeProvider as Provider } from 'srn-components-lib';

type Props = React.ComponentProps<typeof Provider>;

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      [key: string]: any;
    }

    interface Theme {
      [key: string]: any;
    }
  }
}

const ThemeProvider = ({ children, settings, theme }: Props) => {
  return (
    <Provider settings={settings} theme={theme}>
      {children}
    </Provider>
  );
};

export { ThemeProvider };
