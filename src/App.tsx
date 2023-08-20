import { LoginCard } from "./components/LoginCard";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='85vh' backgroundColor='#918191' padding='25px'>
          <LoginCard />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
