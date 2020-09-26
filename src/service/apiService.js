//Fetch using local API

export const fetchPreviewData = async (data) => {
    const encodedURL = encodeURIComponent(data);
    const response_data = await fetch(`/urlPreviewApp/api/preview/${encodedURL}`);
    return await response_data.json();
};
