// Code working in Browser
//<body>
//</body>
// FileReader is Browser only function, missing in Node

//const imageUrl = 'http://localhost:3000/image';
//or
//const imageUrl = 'http://localhost:3000/images/Frontend.png';

fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob); // Convert Blob to base64 data URL
        });
    })
    .then(dataUrl => {
        const img = document.createElement('img');
        img.src = dataUrl; // Use the base64 data URL as the image source
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error('Error:', error);
    });