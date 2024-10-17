
import { useState } from "react";

function app ()
{
  const [Product , setProduct] = useState({
   title: "T-shirt",
   price: 1,
  });
  const handleClick = () => {
    const newPrice = Product.price + 1;
     setProduct({...Product , price: newPrice})
  }
return (<div>
  <h1>{Product.price}</h1>
  <br></br>
  <IncButton onClick={handleClick}  styling="btn btn-primary">Click To Increment</IncButton>
</div>
);
}

export default app;
