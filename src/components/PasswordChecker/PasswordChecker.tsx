import { ChangeEvent, useState } from 'react';
import Indicator from '../Indicator/Indicator';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };

  return (
    <form>
      <h1>Simple password strength checker</h1>
      <input type="password" value={password} onChange={handleOnChange} />
      <Indicator password={password} />
    </form>
  );
};

export default PasswordChecker;
