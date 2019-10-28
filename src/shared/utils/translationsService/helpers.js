const storage = sessionStorage;
const LOCALIZATION_TOKEN_KEY = 'localization';
const CURRENT_LOCALE = 'currentLang';

export const setCurrentLocale = (lang) => {
  storage.setItem(CURRENT_LOCALE, lang);
};

export const getCurrentLocale = () => storage.getItem(CURRENT_LOCALE);

export const getAllLocalization = () => JSON.parse(storage.getItem(LOCALIZATION_TOKEN_KEY));

export const getLocalization = () => {
  const currentLocale = getCurrentLocale();
  const allLocalization = getAllLocalization();

  return allLocalization[currentLocale];
};

export const setLocalization = (lang, content) => {
  const existingLocale = getAllLocalization();
  const data = JSON.stringify({
    ...existingLocale,
    [lang]: content,
  });

  storage.setItem(LOCALIZATION_TOKEN_KEY, data);
};

export function clearAll() {
  storage.clear();
}
