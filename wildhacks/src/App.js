import React, { useState } from "react";

export default function GroceryListInput() {
  const [groceryList, setGroceryList] = useState("");
  const [submittedList, setSubmittedList] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groceryList.trim()) {
      setSubmittedList(groceryList.trim());
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Enter Your Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="e.g., 2 apples, 1 gallon of milk, a loaf of bread"
          value={groceryList}
          onChange={(e) => setGroceryList(e.target.value)}
          rows={6}
          style={{ width: '100%', padding: '1rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}
        />
        <button
          type="submit"
          style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
      {submittedList && (
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Your Grocery List:</h2>
          <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '8px' }}>{submittedList}</pre>
        </div>
      )}
    </div>
  );
}
