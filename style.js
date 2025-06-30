const fs = require('fs');
const crypto = require('crypto');
const {Transform} = require('stream');
const zlib = require('zlib'); 
const { buffer } = require('stream/consumers');
const { log } = require('console');

  

class StreamEncryption extends Transform{
  constructor(key, vector){
     super();
     this.key = key;
     this.vector = vector;
  }

  _transform(chunk, encoding, cb){
    const cipher = crypto.createCipheriv('aes-256-cbc',this.key, this.vector);
    const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]);
    this.push(encrypted);
    cb();
  }
}

const key = crypto.randomBytes(32);
const vector = crypto.randomBytes(16);
const readableStream = fs.createReadStream('paragraph.txt');
const zlibStream = zlib.createGzip();

const encryptStream = new StreamEncryption(key, vector);
  
const writeableStream = fs.createWriteStream('output.txt.gz.enc');
console.log("Encryption process:");

console.log("readStream -> compress -> encryptStream -> writeStream");

readableStream.pipe(zlibStream).pipe(encryptStream).pipe(writeableStream);

console.log("decryption process:");

 
 
 