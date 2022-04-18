export const PERSONAL_FORM = 'PERSONAL_FORM';
export const PROFESSIONAL_FORM = 'PROFESSIONAL_FORM';

export const personalAction = (values) => ({
  type: PERSONAL_FORM,
  values,
});

export const professionalAction = (values) => ({
  type: PROFESSIONAL_FORM,
  values,
});
