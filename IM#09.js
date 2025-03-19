//<head>
//    <meta http-equiv="Content-Security-Policy" content="img-src 'self' blob:"/>
<!-- Allow images from the same origin and blob: URLs -->
//</head>

const imageUrl = 'http://localhost:3000/images/Frontend.png';

fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
        // Create an object URL from the Blob
        const objectUrl = URL.createObjectURL(blob);

        // Create a <pre> element to display the final state of the <img> tag
        const pre = document.createElement('pre');
        pre.textContent = `<img src="${objectUrl}">`; // Display the <img> tag as plain text
        document.body.appendChild(pre);

        // Create an image element and set its src to the object URL
        const img = document.createElement('img');
        img.src = objectUrl; // Use the object URL as the image source
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error('Error:', error);
    });