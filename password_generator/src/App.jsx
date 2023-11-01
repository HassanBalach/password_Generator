import { useState, useCallback,useEffect, useRef } from "react";


function App() {


  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null);

  const passwordGenerater = useCallback(()=>{

  let pass ="";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    if (numberAllow) str += "1023456789";
    if (charAllow) str += "!@#$%^&*(){}|~`";

    for (let i = 1; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
     }

     setPassword(pass);

    },[length , numberAllow , charAllow , password]);




      const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
      },[password])

      useEffect(()=>{
      passwordGenerater()
      },[length, numberAllow, charAllow, setPassword]);

   

   

  return(
  
    <div className=" bg-gray-700 w-full max-w-md mx-auto rounded-lg px-4 py-3 text-orange-500 mt-10 ">

    <h1 className="text-white text-center my-3 ">Password Generater</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <
        input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly

      />
    <button 
    onClick={copyPasswordToClipboard}
    className="outline-none bg-blue-800 text-white px-3 py-0.5 " >
      copy
    </button>
    </div>
    <div className="flex text-sm gap-x-1">
      <div className="flex items-center gap-x-1">
        <input
        
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e)=>{setLength(e.target.value)}}
        
        />
        <label>Length: {length} </label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
         type="checkbox"
         defaultChecked={numberAllow}
         id="numberInput"
         onChange={()=>{
          setNumberAllow((prev)=>!prev)
         }}
         />
         <label>Numbers</label>

      </div>
      <div className="flex items-center gap-x-1">
        <input
         type="checkbox"
         defaultChecked={charAllow}
         id="characterInput"
         onChange={()=>{
          setCharAllow((prev)=> !prev)
         }}
         
         />
         <label>Characters</label>

      </div>
    </div>

    </div>

  )
}

export default App;
