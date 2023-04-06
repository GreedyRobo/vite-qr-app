import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import QrCode from "qrcode";
import {FC} from "react";

interface Props {
    value: string | null;
}

export const Download: FC<Props> = ({value}) => {
    const getSvgUrl = async (value: string) => {
        const text = await QrCode.toString(value, {
            type: 'svg',
            errorCorrectionLevel: 'H', width: 600, margin: 1, color: {light: '#0000'}
        })

        return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(text)
    }

    const getTransparentImageUrl = async (value: string, type: "image/png" | "image/webp") => {
        return QrCode.toDataURL(value, {type, errorCorrectionLevel: 'H', width: 600, margin: 1, color: {light: '#0000'}});
    }

    const getImageUrl = async (value: string) => {
        return QrCode.toDataURL(value, {type: 'image/jpeg', errorCorrectionLevel: 'H', width: 600, margin: 1});
    }

    const getContentByType = (type: 'image/png' | 'image/jpeg' | 'image/webp' | 'svg', value: string) => {
        if(type === "svg") {
            return getSvgUrl(value);
        }

        if(type === 'image/jpeg'){
            return getImageUrl(value);
        }

        return getTransparentImageUrl(value, type);
    }

    const onDownload = async (type: 'image/png' | 'image/jpeg' | 'image/webp' | 'svg', extension: string) => {
        if (!value) return;

        const content = await getContentByType(type, value);

        let link = document.createElement("a");
        link.download = `asdfa.${extension}`;
        link.href = content;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Menu>
            <MenuButton isDisabled={!value} as={Button} rightIcon={<ChevronDownIcon/>}>Download</MenuButton>
            <MenuList>
                <MenuItem onClick={() => onDownload('image/png', 'png')}>PNG</MenuItem>
                <MenuItem onClick={() => onDownload('image/jpeg', 'jpeg')}>JPEG</MenuItem>
                <MenuItem onClick={() => onDownload('image/webp', 'webp')}>WEBP</MenuItem>
                <MenuItem onClick={() => onDownload('svg', 'svg')}>SVG</MenuItem>
            </MenuList>
        </Menu>
    )
}
