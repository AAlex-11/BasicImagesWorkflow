//<body>
//<img src="https://www.easygifanimator.net/images/samples/video-to-gif-sample.gif" alt="Sample GIF"/> - working fine
//</body>

async function downloadImageAsync(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob(); // Get the image as a Blob
        return URL.createObjectURL(blob); // Creates a temporary URL for Blob
    } catch (error) {
        console.error('Error downloading image:', error);
        return null
    }
}

downloadImageAsync('https://www.easygifanimator.net/images/samples/video-to-gif-sample.gif').then(blobUrl => {
    const img = document.createElement('img');
    img.src = blobUrl;
    document.body.appendChild(img)
})
