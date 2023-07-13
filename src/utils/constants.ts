// RegExp's for password check
const lettersRegExp = /[a-zA-Z]/;

const numbersRegExp = /\d/;

const symbolsRegExp = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

export default [lettersRegExp, numbersRegExp, symbolsRegExp];

// Security levels for easy usage in useEffect
export const securityLevels: ('none' | 'easy' | 'medium' | 'strong')[] = [
  'none',
  'easy',
  'medium',
  'strong',
];
