//import { useEffect, useState } from "react";
import { ChakraProvider} from "@chakra-ui/react";
import { MainRouter } from "./routes/MainRouter";
import { CartProvider } from "./context/CartContext";


function App() {

  return (
    <ChakraProvider>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
