const videoElement  = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select mediastream, pass to video element, and then play

const selectMediaStream = async function () {
    try {
        const captureStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = captureStream;
        videoElement.onloadedmetadata = () => videoElement.play();
    } catch(error) {
        console.log('whoops something is wrong', error)
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})
selectMediaStream();