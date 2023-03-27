import {Form} from "./Form";
import {Box} from "@chakra-ui/react";

export const Generator = () => {

    const onSubmit = (value: string) => {
        window.alert(value);
    }

    return (
        <Box>
            <Form onComplete={onSubmit}/>
        </Box>
    )
}
