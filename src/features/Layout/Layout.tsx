import {FC, ReactNode} from "react";
import {Box, Container} from "@chakra-ui/react";

interface Props {
    children: ReactNode;
}

export const Layout: FC<Props> = ({children}) => {
    return (
        <Box w={'100vw'} minH={'100vh'} display={'flex'} alignItems={'center'}>
            <Container>{children}</Container>
        </Box>
    )
}
