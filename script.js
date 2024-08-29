document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    document.getElementById('gameScreen').hidden = false;
    loadNewImage();
}

function loadNewImage() {
    const basePath = 'https://lanchi10.github.io/omer/'; // כתובת המאגר
    const images = [basePath + 'images/elephant.jpg', basePath + 'images/dog.jpg', basePath + 'images/cat.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('imageDisplay').src = randomImage;
    prepareSoundButton(randomImage);
}

function prepareSoundButton(imageName) {
    document.getElementById('soundButton').onclick = function() {
        playSound(imageName);
    };
}

function playSound(imageName) {
    const basePath = 'https://lanchi10.github.io/omer/';
    const soundMap = {
        [basePath + 'images/elephant.jpg']: basePath + 'sound/elephant.mp3',
        [basePath + 'images/dog.jpg']: basePath + 'sound/dog.mp3',
        [basePath + 'images/cat.jpg']: basePath + 'sound/cat.mp3'
    };
    const audio = new Audio(soundMap[imageName]);
    audio.play();
    provideFeedback();
}

function provideFeedback() {
    document.getElementById('feedback').innerText = 'מצוין!';
}
