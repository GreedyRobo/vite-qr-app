import {Box, Input} from "@chakra-ui/react";
import {FC} from "react";

interface Props {
    onInput: (value: string) => void;
}

export const Form: FC<Props> = ({onInput}) => {

    return (
        <Box>
            <Input placeholder={'Enter url...'} onInput={(evt) => onInput(evt.currentTarget.value)}/>
        </Box>
    )
}
