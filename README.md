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
