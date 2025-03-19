import fs from "fs";

// Read a file as a Buffer
fs.readFile('ImageServer/images/Frontend.png', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Convert the Buffer to a base64 string
    const base64String = data.toString('base64');
    console.log('Base64 string:', base64String);

    // If you want to use it in a browser-like context (e.g., for testing)
    const dataUrl = `data:image/gif;base64,${base64String}`;
    console.log('Data URL:', dataUrl);
});