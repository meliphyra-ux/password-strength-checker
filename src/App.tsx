import { ChangeEvent, useEffect, useState } from 'react';
// Checks === RegExp[]
import checks, { securityLevels } from './utils/constants';

import './App.css';

function App() {
  const [password, setPassword] = useState('');
  // Used useState, but useRef could be used
  const [securityLevel, setSecurityLevel] = useState<
    'none' | 'easy' | 'medium' | 'strong'
  >('none');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };

  useEffect(() => {
    if (password.length === 0) {
      setSecurityLevel(securityLevels[0]);
    } else {
      // Setting newSecurityLevel variable to the number of successful checks
      const newSecurityLevel = checks
        .reduce(
          (prevValue, check) => [...prevValue, check.test(password)],
          [] as boolean[]
        )
        .filter((check) => check).length;
      // Setting level of security from the securityLevels[]
      setSecurityLevel(securityLevels[newSecurityLevel]);
    }
  }, [password]);
  return (
    <>
      <h1>Simple password strength checker</h1>
      <form>
        {/* Set type="text" because my browser didn't show up eye icon. Ideally switch to type="password" */}
        <input type="text" value={password} onChange={handleOnChange} />
        <div
          // Simple logic to manage classnames. Color logic in CSS
          className={`indicator ${
            password.length < 8 && securityLevel !== 'none'
              ? 'not-8-symbols'
              : securityLevel
          } `}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {password.length >= 8 && securityLevel !== 'none' ? (
          <span>{securityLevel[0].toUpperCase() + securityLevel.slice(1)}</span>
        ) : (
          <span>Not secure enought</span>
        )}
      </form>
    </>
  );
}

export default App;
