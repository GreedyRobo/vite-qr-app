import QrCode from "qrcode";

const getSvgUrl = async (value: string) => {
    const text = await QrCode.toString(value, {
        type: 'svg',
        errorCorrectionLevel: 'H', width: 600, margin: 1, color: {light: '#0000'}
    })

    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(text)
}

const getTransparentUrl = async (value: string, type: "image/png" | "image/webp") => {
    return QrCode.toDataURL(value, {type, errorCorrectionLevel: 'H', width: 600, margin: 1, color: {light: '#0000'}});
}

const getDefaultUrl = async (value: string) => {
    return QrCode.toDataURL(value, {type: 'image/jpeg', errorCorrectionLevel: 'H', width: 600, margin: 1});
}

const downloadImage = (content: string, filename: string) => {
    let link = document.createElement("a");
    link.download = filename;
    link.href = content;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const getBaseName = (value: string) => {
    const start = value.slice(0 ,15);

    const now = new Date();

    const end = `${now.getFullYear()} ${now.getMonth()} ${now.getDate()} ${now.getHours()} ${now.getMinutes()}`;

    return `${start} ${end}`.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

export const downloadImageByType = async (value: string, type: 'image/png' | 'image/jpeg' | 'image/webp' | 'svg') => {
    const baseName = getBaseName(value);

    if (type === "svg") {
        const url = await getSvgUrl(value);
        downloadImage(url, `${baseName}.svg`);
        return;
    }

    if (type === 'image/jpeg') {
        const url = await getDefaultUrl(value);
        downloadImage(url, `${baseName}.jpeg`);
        return;
    }

    if (type === 'image/png') {
        const url = await getTransparentUrl(value, type);
        downloadImage(url, `${baseName}.png`);
        return;
    }

    if (type === 'image/webp') {
        const url = await getTransparentUrl(value, type);
        downloadImage(url, `${baseName}.webp`);
        return;
    }
}
