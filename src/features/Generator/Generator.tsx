import {Form} from "./Form";
import {Box} from "@chakra-ui/react";
import {Result} from "./Result";

import {useState} from "react";
import {Download} from "./Download";

export const Generator = () => {
    const [value, setValue] = useState<string | null>(null);

    return (
        <Box>
            <Box><Result value={value}/></Box>
            <Box mt={8}>
                <Form onInput={(value) => setValue(value?.length ? value : null)}/>
            </Box>
            <Box>
                <Download value={value}/>
            </Box>
        </Box>
    )
}
