import {Box, Center, Image, Text} from "@chakra-ui/react";
import {Placeholder} from "./Placeholder";
import {FC, useEffect, useState} from "react";
import QrCode from "qrcode";

interface Props {
    value: string | null
}

export const Result: FC<Props> = ({value}) => {
    const [content, setContent] = useState<string | null>(null);

    useEffect(() => {
        if(!value) {
            setContent(null);
            return;
        }

        QrCode.toDataURL(value, {type: "image/jpeg", width: 300, margin: 0, errorCorrectionLevel: 'H'}, (err, content) => {
            if(err) console.error(err);

            setContent(content);
        })
    }, [value]);

    return (
        <Center flexDir={'column'}>
            <Box p={3} border={'1px'} borderColor={'gray.200'} w={300} h={300} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                {!content && <Placeholder/>}
                {!!content && <Image w={300} src={content} alt={'Generated Code'}/>}
            </Box>
            <Text fontSize='sm' mt={2}>{value ?? "\u00A0"}</Text>
        </Center>
    )
}
