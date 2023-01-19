import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import theme from './theme';
import { router } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App;
