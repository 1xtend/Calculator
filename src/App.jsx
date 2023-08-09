import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Calculator from './components/Calculator/Calculator';

function checkTheme() {
  const savedTheme = localStorage.getItem('theme');

  return savedTheme ? savedTheme : 'theme1';
}

const body = document.body;

function App() {
  const [theme, setTheme] = useState(checkTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    body.classList.add(theme);

    return () => {};
  }, [theme]);

  function changeTheme(newTheme) {
    if (newTheme === theme) {
      return;
    }

    body.classList.remove(theme);
    setTheme(newTheme);
  }

  return (
    <div className="wrapper">
      <Calculator changeTheme={changeTheme} theme={theme} />
    </div>
  );
}
export default App;
