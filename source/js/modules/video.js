const video = document.querySelector('.gym__video');
const VIDEO_ID = '9TZXsZItgdw';

function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('title', 'video-supergym');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

const initVideo = () => {
  const link = video.querySelector('.video__link');
  const button = video.querySelector('.video__button');
  const id = VIDEO_ID;

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
};

export {initVideo};
