import 'whatwg-fetch';
import {
  LANGUAGE,
  setCurrentLocale,
  setLocalization,
  getLocalization,
} from './helpers';

export const defaultLocale = LANGUAGE.en;

export const getLocaleFromLanguage = (language) => LANGUAGE[language] || defaultLocale;

export const translate = (key, params = {}) => {
  const localizationValues = getLocalization();
  let localizedValue = localizationValues[key] || key;
  const paramKeys = Object.keys(params);

  if (paramKeys.length > 0) {
    paramKeys.forEach((k) => {
      localizedValue = localizedValue.replace(new RegExp(k, 'g'), params[k]);
    });
  }

  return localizedValue;
};

export async function loadTranslations(selectedLocale = defaultLocale) {
  const productBasedUrl = '/api/v1/localization/translations';
  const translationUrl = `${productBasedUrl}/messages.${selectedLocale}.json`;

  const response = await fetch(translationUrl);
  const data = await response.json();

  setCurrentLocale(selectedLocale);
  setLocalization(selectedLocale, data);
}
