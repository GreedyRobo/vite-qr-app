import {Box, Button, Input} from "@chakra-ui/react";
import {FC, useState} from "react";

interface Props {
    onComplete: (value: string) => void;
}

export const Form: FC<Props> = ({onComplete}) => {
    const [value, setValue] = useState<string>('');

    const onClick = () => {
        onComplete(value);
    };

    return (
        <Box>
            <Box>
                <Input placeholder={'Please enter text...'} value={value} onChange={(evt) => setValue(evt.target.value)}/>
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={6}>
                <Button size={'lg'} isDisabled={!value} onClick={onClick}>Generate</Button>
            </Box>
        </Box>
    )
}
