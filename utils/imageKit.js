const ImageKit = require("imagekit");

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL,
});
console.log("Imagekit ready", process.env.IMAGEKIT_PUBLIC_KEY, process.env.IMAGEKIT_PRIVATE_KEY, process.env.IMAGEKIT_URL);

module.exports = imageKit;
