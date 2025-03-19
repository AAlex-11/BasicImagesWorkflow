//<head>
//   <meta http-equiv="Content-Security-Policy" content="img-src 'self'"/>
//</head>
//<body></body>


const imageUrl = 'http://localhost:3000/images/Frontend.png'
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
        // Create a <pre> element to display the final state of the <img> tag
        const pre = document.createElement('pre');
        pre.textContent = `<img src="${dataUrl}">`; // Display the full <img> tag
        document.body.appendChild(pre);

        const img = document.createElement('img');
        img.src = dataUrl; // Use the base64 data URL as the image source
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error('Error:', error);
    });