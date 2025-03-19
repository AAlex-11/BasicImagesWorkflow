import https from "https";

const url = 'https://www.easygifanimator.net/images/samples/video-to-gif-sample.gif';

https.get(url, (response) => {
    let data = [];

    response.on('data', (chunk) => {
        data.push(chunk);
    });

    response.on('end', () => {
        // Concatenate all chunks into a single Buffer
        const buffer = Buffer.concat(data);

        // Convert the Buffer to a base64 string
        const base64String = buffer.toString('base64');
        console.log('Base64 string:', base64String);

        // Create a data URL
        const dataUrl = `data:image/gif;base64,${base64String}`;
        console.log('Data URL:', dataUrl);
    });
}).on('error', (err) => {
    console.error('Error fetching image:', err);
});