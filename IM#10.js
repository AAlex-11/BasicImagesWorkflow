const proxyUrl = 'http://localhost:3000/proxy?url=';
const imageUrl = 'https://www.easygifanimator.net/images/samples/video-to-gif-sample.gif';

fetch(proxyUrl + encodeURIComponent(imageUrl))
    .then(response => response.blob())
    .then(blob => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error('Error:', error);
    });