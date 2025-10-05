//import { useState } from 'react'
import { JSX, useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/layout/navbar';

function App(): JSX.Element {
  const [see, setSee] = useState("");
  useEffect(() =>{
       const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/", {
          credentials: "include"
        });
        const data = await res.json();
        setSee(data.message);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    fetchData();
  },[]);
 
 // const [count, setCount] = useState(0)
  return (
    <>
      <Navbar/>
      <h1>Mi App Croteria</h1>
      <p>{see}</p>
    </>
  );
}
export default App
