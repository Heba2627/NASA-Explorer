import {useEffect , useState} from 'react';
function UseLocalStorage(key,initialValue)
{
    const [value,setValue]=useState(()=>{
        const storedValue=localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
    }, [key,value]);
    return [value,setValue];
}
export default function MyCounter()
{
    const [count,setCount]=UseLocalStorage("count",0);

    return(
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    );
}