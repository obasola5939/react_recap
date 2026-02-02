import React, { useState } from "react"



// React state is a component's internal memory. It allows a component to remember information(like a form input, a counter, or a toggle status) and, crucially, re-render the UI whenever that information changes.


export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const handleIncrement = () => {
       setCount(count + 1)
    } 


  return (
    <div style={styles.card}>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement} style={styles.button}>
            Increment +
        </button>
        
    </div>
  );
}; 


// Read Only
const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        minWidth: '250px',
        marginBottom: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer'
    }
} as const;