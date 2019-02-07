import { useEffect } from 'react';

export default () =>
  useEffect(() => console.log("You used the 'useConsoleLog' hook!"), []);
