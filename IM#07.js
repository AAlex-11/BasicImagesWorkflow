import fs from "fs";
import {Transform} from "stream";


// Create a transform stream to convert data to base64
const base64Stream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString('base64'));
        callback();
    }
});

// Read a file and pipe it through the transform stream
fs.createReadStream('ImageServer/images/Frontend.png')
    .pipe(base64Stream)
    .on('data', (chunk) => {
        console.log('Base64 chunk:', chunk);
    })
    .on('end', () => {
        console.log('Finished reading file.');
    });