const Sharp = require('sharp');

const mirrorX = (imagePath, outputPath) => {
  Sharp(imagePath).flop().toFile(outputPath, (err, info) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log(info);
    }
  });
};

mirrorX('images/self_isolation.jpg', 'output/horizontal_mirrored_image.jpg');

const mirrorY = (imagePath, outputPath) => {
  Sharp(imagePath).flip().toFile(outputPath, (err, info) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log(info);
    }
  });
};

mirrorY('images/self_isolation.jpg', 'output/vertical_mirrored_image.jpg');

const blackWhiteImage = (imagePath, outputPath) => {
  Sharp(imagePath).grayscale().toFile(outputPath, (err, info) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log(info);
    }
  });
};

blackWhiteImage('images/self_isolation.jpg', 'output/black_and_white_image.jpg');

const resizeImage = (imagePath, outputPath) => {
  Sharp(imagePath).resize(300,300).toFile(outputPath, (err, info) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log(info);
    }
  });
};

resizeImage('images/self_isolation.jpg', 'output/resized_image.jpg');

const rotateImage = (imagePath, outputPath) => {
  Sharp(imagePath).rotate(270).toFile(outputPath, (err, info) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log(info);
    }
  });
};

rotateImage('images/self_isolation.jpg', 'output/rotated_image.jpg');