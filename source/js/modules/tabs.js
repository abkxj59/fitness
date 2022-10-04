const subscriptions = document.querySelector('.subscriptions');
const buttons = subscriptions.querySelectorAll('.subscriptions__time-button');
const tabs = subscriptions.querySelectorAll('.subscriptions__list');

const initTabs = () => {
  if (subscriptions !== null) {
    subscriptions.classList.remove('subscriptions--nojs');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {
        buttons.forEach((button) => {
          button.classList.remove('subscriptions__time-button--active');
        });
        tabs.forEach((tab) => {
          tab.classList.remove('subscriptions__list--active');
        });
        buttons[i].classList.add('subscriptions__time-button--active');
        tabs[i].classList.add('subscriptions__list--active');
      });
    }
  }
};

export {initTabs};
