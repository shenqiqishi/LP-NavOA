(() => {
  // English remains readable when JavaScript is unavailable.
  const textEntries = Array.from(document.querySelectorAll('[data-zh]'), (element) => {
    const attribute = element.dataset.i18nAttribute;
    return {
      element,
      attribute,
      en: attribute ? element.getAttribute(attribute) : element.textContent,
      zh: element.dataset.zh,
    };
  });
  const imageEntries = Array.from(document.querySelectorAll('[data-zh-alt]'), (element) => ({
    element,
    en: element.alt,
    zh: element.dataset.zhAlt,
  }));
  const buttons = document.querySelectorAll('[data-language]');

  function setLanguage(language) {
    const selected = language === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = selected === 'zh' ? 'zh-CN' : 'en';
    textEntries.forEach(({ element, attribute, ...text }) => {
      if (attribute) element.setAttribute(attribute, text[selected]);
      else element.textContent = text[selected];
    });
    imageEntries.forEach(({ element, ...text }) => { element.alt = text[selected]; });
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === selected));
    });
    try { localStorage.setItem('lp-navoa-language', selected); } catch { /* Storage is optional. */ }
  }

  let preferred = 'en';
  try { preferred = localStorage.getItem('lp-navoa-language') || preferred; } catch { /* Use English. */ }
  buttons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  setLanguage(preferred);
  document.querySelector('.language-switch').hidden = false;
})();
