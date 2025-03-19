Main workflow to working with images include:

    Browser CORS (Cross-Origin Requests) and CSP (Content Security Policy).
    Node Image Server with special CORS policy middleware (app.use(cors())
    Node Image Proxy server with Node-Fetch with Response.Body.Pipe(Res).
    Fetch, Response.blob(), Blob.arrayBuffer(), DownloadImageAsync with Then().Then().Then(), Fetch.Then().Then().
    Dynamically add image to DOM in Browser - document.body.appendChild(img)
    Browser FileReader() with FileReader.Onloadend and FileReader.ReadAsDataURL(blob)
    New Promise(resolve, reject) and Await
    Encoding image as data `data:image/gif;base64,${base64String}`
    Concatenate all chunks into a single Buffer with Buffer.concat(data)
    Create a transform stream to convert data to base64 with fs.createReadStream().pipe(base64Stream) and Transform(chunk)
![BlobAndCors-1](https://github.com/user-attachments/assets/60bfe88b-13b2-4e68-ace8-1911fa3197e8)
![BlobAndCors-2](https://github.com/user-attachments/assets/8b4d1cda-f6fe-48e0-928a-07d11f34317a)
![BlobAndCors-3](https://github.com/user-attachments/assets/21cd0a7a-dc1f-4034-b195-ad5a5e283374)
![BlobAndCors-4](https://github.com/user-attachments/assets/0f58f56d-6062-4e90-aff2-cd2fb997e1fe)
![BlobAndCors-5](https://github.com/user-attachments/assets/8a06bcc0-2285-4575-8344-2da7d7275f48)
![BlobAndCors-6](https://github.com/user-attachments/assets/870d1131-d8e8-4e4c-a50b-4f0a70190881)
