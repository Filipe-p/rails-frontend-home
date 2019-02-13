// app/javascript/components/banner.js
import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life now!", "Learn to code"],
    typeSpeed: 120,
    loop: true
  });
};

export { loadDynamicBannerText };
