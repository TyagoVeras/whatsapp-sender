import parsePhoneNumber, { isValidPhoneNumber } from 'libphonenumber-js';

export const formatNumber = (number) => {
  if (!isValidPhoneNumber(number, 'BR')) {
    throw new Error('Number to brazil is invlaid');
  }

  const phoneNumber = parsePhoneNumber(number, 'BR')?.format('E.164')?.replace('+', '');

  return phoneNumber?.endsWith('@c.us') ? phoneNumber : `${phoneNumber}@c.us`;
}

export const getMessage = (name) => {
  return `Olá, ${name}!\n\nÉ um prazer entrar em contato! =)`;
};

