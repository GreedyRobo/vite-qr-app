import {Button, Stack, Text} from "@chakra-ui/react";

import {FC, useMemo} from "react";
import {downloadImageByType} from "./Download.service";

interface Props {
    value: string | null;
}

export const Download: FC<Props> = ({value}) => {
    const isDisabled = useMemo(() => {
        return !value?.length;
    }, [value]);

    return (
        <Stack mt={4} spacing={4} direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'sm'}>Download:</Text>
            <Stack spacing={4} direction={'row'} align={'center'}>
                <Button size={'sm'} isDisabled={isDisabled}
                        onClick={() => downloadImageByType(value ?? '', 'svg')}>.svg</Button>
                <Button size={'sm'} isDisabled={isDisabled}
                        onClick={() => downloadImageByType(value ?? '', 'image/jpeg')}>.jpeg</Button>
                <Button size={'sm'} isDisabled={isDisabled}
                        onClick={() => downloadImageByType(value ?? '', 'image/png')}>.png</Button>
                <Button size={'sm'} isDisabled={isDisabled}
                        onClick={() => downloadImageByType(value ?? '', 'image/webp')}>.webp</Button>
            </Stack>
        </Stack>
    )
}
