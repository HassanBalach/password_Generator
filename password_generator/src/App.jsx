import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(fasle);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerater = useCallback(() => {
    //  useCallback is function and defendences:

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    //What is being happened in this code :str a (variable) is being called and add
    // if the defendences are being true:

    if (numberAllow) str += 1023456789;
    if (charAllow) str += "!@#$%^&*(){}|~`";
  }, [length, numberAllow, charAllow, password]); //Defendences are always written in array

  return <></>;
}

export default App;
