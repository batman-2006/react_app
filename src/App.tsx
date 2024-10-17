
import { useState } from "react";

function app ()
{
  const [Product , setProduct] = useState({
   title: "T-shirt",
   price: 1,
  });

return (<div>
  <h1>Hello React From Azure !</h1>
  <br></br>
</div>
);
}

export default app;
