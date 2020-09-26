import jsdom from "jsdom";
import fetch from "node-fetch";

export default async (req, res) => {
    let {
        query: { url },
    } = req;

    if (!url.startsWith("http")) {
        url = `https://${url}`;
    }

    try {
        const preview = await getPreview(url);
        res.status(200).json(preview);
    } catch (e) {
        res.status(200).json({});
    }
};

async function getPreview(url) {
    const response = await fetch(url);
    const body = await response.text();

    const { JSDOM } = jsdom;
    const dom = new JSDOM(body);

    return {
        title: getTitle(dom),
        description: getContent(dom),
        image: getImage(dom),
    };
}

function getTitle(dom) {
    try {
        return dom.window.document.querySelector("meta[property='og:title']").getAttribute("content");
    } catch (e) {
        return dom.window.document.querySelector("title").textContent;
    }
}

function getContent(dom) {
    try {
        return dom.window.document.querySelector("meta[property='og:description']").getAttribute("content");
    } catch (e) {
        return "";
    }
}

function getImage(dom) {
    try {
        return dom.window.document.querySelector("meta[property='og:image']").getAttribute("content");
    } catch (e) {
        return dom.window.document.querySelector("link[rel*='icon']").getAttribute("icon");
    }
}
