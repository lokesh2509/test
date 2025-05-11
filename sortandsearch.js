import React, { useState } from 'react';
import Q1 from './c2/Q1';

function App() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by Customer Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="button" value="Sort by Name" onClick={() => setSort('name')} />
      <input type="button" value="Sort by Amount" onClick={() => setSort('amount')} />
      <input type="button" value="Sort by Date" onClick={() => setSort('date')} />

      <Q1
        url="/orders.json"
        render={orders => {
          const filtered = orders
            .filter(order =>
              order.customer.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => {
              if (sort === 'name') {
                return a.customer.localeCompare(b.customer);
              }
              if (sort === 'amount') {
                return parseInt(a.amount) - parseInt(b.amount);
              }
              if (sort === 'date') {
                return new Date(a.date) - new Date(b.date);
              }
              return 0;
            });

          return (
            <ul>
              {filtered.map(order => (
                <li key={order.orderId}>
                  Order ID: {order.orderId} <br />
                  Customer: {order.customer} <br />
                  Amount: ₹{order.amount} <br />
                  Status: {order.status} <br />
                  Date: {order.date}
                  <hr />
                </li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
}

export default App;
