import React from 'react'

function OrderHistory({orderHistory}) {
  return (
    <>
    <table border="2px solid black">
        <thead>
            <tr>
                <td>ID</td>
                <td>Customer</td>
                <td>Total</td>
            </tr>
        </thead>
        <tbody>
            {orderHistory.map((d,i)=>(
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.customer}</td>
                    <td>{d.total}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default OrderHistory






      {/* <Q4 
      orders={orderData}
      /> */}