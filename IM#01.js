const imageUrl = 'https://www.easygifanimator.net/images/samples/video-to-gif-sample.gif';

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

downloadImageAsync(imageUrl).then(blobUrl => {
    console.log(blobUrl);
    return fetch(blobUrl);
})
    .then(response => response.blob()) // Convert the response to a Blob
    .then(blob => {
        // Convert the Blob to an ArrayBuffer
        return blob.arrayBuffer();
    })
    .then(arrayBuffer => {
        // Convert the ArrayBuffer to a Uint8Array to view binary data
        const uint8Array = new Uint8Array(arrayBuffer);

        // Log the binary data as a Uint8Array
        console.log('Binary data (Uint8Array):', uint8Array);

        // Optionally, convert the binary data to a base64 string and log it
        const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
        console.log('Binary data (Base64):', base64String);
    })
    .catch(error => {
        console.error('Error:', error);
    });