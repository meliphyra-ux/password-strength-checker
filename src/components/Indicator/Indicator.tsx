import { getSecurityLevel } from '../../utils/functions/getSecurityLevel';

const Indicator = ({ password }: { password: string }) => {
  const securityLevel = getSecurityLevel(password);
  return (
    <ul
      // Simple logic to manage classnames. Color logic in CSS
      className={`indicator ${
        password.length < 8 && securityLevel !== 'none'
          ? 'not-8-symbols'
          : securityLevel
      }`}
    >
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default Indicator;
