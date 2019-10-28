import 'whatwg-fetch';
import { setCurrentLocale, setLocalization, getLocalization } from './helpers';

const LANGUAGE = {
  en: 'en-GB',
  de: 'de-DE',
  fr: 'fr-FR',
};
const defaultLocale = LANGUAGE.en;

export const getLocaleFromLanguage = (language) => LANGUAGE[language] || defaultLocale;

export const translate = (key, params = {}) => {
  const localizationValues = getLocalization();
  let localizedValue = localizationValues[key] || key;
  const paramKeys = Object.keys(params);

  if (paramKeys.length > 0) {
    paramKeys.forEach((k) => {
      localizedValue = localizedValue.replaceAll(k, params[k]);
    });
  }

  return localizedValue;
};

export async function loadTranslations(selectedLocale = defaultLocale) {
  const productBasedUrl = '/api/v1/localization/translations';
  const translationUrl = 'api/translations';//`${productBasedUrl}/messages.${selectedLocale}.json`;

  const response = await fetch(translationUrl);
  const data = await response.json();

  setCurrentLocale(selectedLocale);
  setLocalization(selectedLocale, data);
}
