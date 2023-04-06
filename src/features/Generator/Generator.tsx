import {Form} from "./Form";
import {Box} from "@chakra-ui/react";
import {Result} from "./Result";

import {useState} from "react";
import {Download} from "./Download";

export const Generator = () => {
    const [value, setValue] = useState<string | null>(null);

    const onSubmit = async (value: string) => {
        setValue(value);
    }

    return (
        <Box>
            <Result value={value}/>
            <Box mt={8} display={'flex'} justifyContent={'center'}>
                <Download value={value}/>
            </Box>
            <Box mt={8}>
                <Form onComplete={onSubmit}/>
            </Box>
        </Box>
    )
}
