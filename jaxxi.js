import React,{useState, useEffect} from 'react'

function Q1({url,render}) {

    const [data,setData] = useState([])
    const [error,setError] = useState(null)

    useEffect(()=>{
        const xhr = new XMLHttpRequest();

        xhr.open('GET',url);
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState===4){
                if(xhr.status===200){
                    try{
                        setData(JSON.parse(xhr.responseText));
                    }
                    catch(e){
                        setError(e)
                    }
                }
                else{
                    setError(new Error(`HTTP ${xhr.status}`))
                }
            }
        }
        xhr.send();
    },[url])

    if(error){
        return(
            <>
            <p>Error: {error.message}</p>
            </>
        );
    }

    return(
        render(data)
    );
  
}





export default Q1





{/*<Q1
        url="/orders.json"
        render={orders => (
          <ul>
            {orders.filter(o=>o.orderId===102||o.orderId===101).map(o=>(<li key={o.orderId}>
              Order ID: {o.orderId} <br/>
              Order Amount: {o.amount} <br/>
              Order Status: {o.status} <br/> <br/> <br/>
            </li>))}
          </ul>
        )}
      /> */}