import { has, isEqual } from 'lodash';

export const generateEmptyFormErrors = () => [];

export const generateEmptyFieldErrors = () => ({});

export const generateEmptyErrors = () => ({
  formErrors: generateEmptyFormErrors(),
  fieldErrors: generateEmptyFieldErrors(),
});

export const entryIsErroneous = (entry) => entry.errors
  && !isEqual(entry.errors, generateEmptyErrors());


const mapApiErrors = (errors) => {
  const mappedErrors = {};

  errors.forEach((error) => {
    mappedErrors[error.field] = error.error;
  });

  return mappedErrors;
};

export const handleApiErrors = (response) => {
  const errors = {
    fieldErrors: {},
    formErrors: [],
  };

  if (has(response, 'errors')) {
    if (response.errors.fieldErrors && response.errors.fieldErrors.length > 0) {
      errors.fieldErrors = mapApiErrors(response.errors.fieldErrors);
    }

    if (response.errors.formErrors && response.errors.formErrors.length > 0) {
      errors.formErrors = response.errors.formErrors;
    } else if (response.status === 403) {
      errors.formErrors.push(response.statusText);
    }
  }

  return errors;
};
