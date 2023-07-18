// checks === RegExp[]
import checks, { securityLevels } from '../constants';

export const getSecurityLevel = (password: string) => {
  if (password.length === 0) {
    return securityLevels[0];
  } else {
    // Setting newSecurityLevel variable to the number of successful checks
    const newSecurityLevel = checks
      .reduce(
        (prevValue, check) => [...prevValue, check.test(password)],
        [] as boolean[]
      )
      .filter((check) => check).length;
    // Setting level of security from the securityLevels[]
    return securityLevels[newSecurityLevel];
  }
};
