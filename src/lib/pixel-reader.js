import $ from 'jquery';

export default function pixelReader(potentialImage) {
  const imageArray = [];
  const image = getImage(potentialImage);
  const canvas = getImageCanvasContext(image);



  for(let x = 0; x < image.width; x++) {
    imageArray[x] = [];

    for(let y = 0; y < image.height; y++) {
      const imageData = canvas.getImageData(y, x, 1, 1);
      imageArray[x][y] = getImageDataObject(imageData);
    }
  }

  return imageArray;
}

function getImage(potentialImage) {
  const image = $(potentialImage)[0];

  if (image instanceof HTMLImageElement === false) {
    throw new Error('Not an image');
  }

  return image;
}

function getImageCanvasContext(image) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = image.width;
  canvas.height = image.height;

  context.drawImage(image, 0, 0, image.width, image.height);

  return context;
}

function getImageDataObject(imageData) {
  return {
    red: imageData.data[0],
    green: imageData.data[1],
    blue: imageData.data[2],
    alpha: imageData.data[3]
  };
}
