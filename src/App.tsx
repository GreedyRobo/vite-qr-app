import {ChakraProvider, extendBaseTheme} from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import {Layout} from "./features/Layout";
import {Generator} from "./features/Generator";

const {Button, Container, Input} = chakraTheme.components

const theme = extendBaseTheme({
    components: {
        Button,
        Container,
        Input
    },
})

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Generator/>
            </Layout>
        </ChakraProvider>
    )
}

export default App
