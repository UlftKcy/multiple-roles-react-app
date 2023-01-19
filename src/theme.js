// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. breakpoints
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '67em',
  xl: '80em',
  '2xl': '96em',
}
const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.200', 'gray.800')(props),
      lineHeight: 'base',
    },
  }),
};

// 3. extend the theme
const theme = extendTheme({ config,breakpoints, styles})

export default theme;