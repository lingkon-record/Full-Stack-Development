import React, { useState } from 'react';

const App = () => {
  // 3-generation family data
  const generations = [
    {
      name: "Abdullah", // Grandfather
      son: {
        name: "Karim", // Father
        son: {
          name: "Rafiq" // Son
        }
      }
    }
  ];

  // State to toggle display
  const [show, setShow] = useState(false);

  // Get names
  const grandfather = generations[0].name;
  const father = generations[0].son.name;
  const son = generations[0].son.son.name;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Family Tree (3 Generations)</h2>
        <button style={styles.button} onClick={() => setShow(true)}>Show Names</button>

        {show && (
          <div style={styles.output}>
            <p><strong>Son's Name:</strong> {son}</p>
            <p><strong>Father's Name:</strong> {father}</p>
            <p><strong>Grandfather's Name:</strong> {grandfather}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Simple styling
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    background: '#f9f9f9',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  button: {
    padding: '10px 20px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px'
  },
  output: {
    marginTop: '20px',
    fontSize: '18px'
  }
};

export default App;
