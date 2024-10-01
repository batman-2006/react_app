import { MouseEvent, useState } from "react";

interface Props 
{
  items: string[];
  heading: string;
}

function ListGroup ({items , heading}: Props)
{
    const [selectedIndex , setSelectedIndex] = useState(-1);

    const handleClick = (event : MouseEvent) => console.log(event);
    return ( 
  <>
      <div className="container w-75">

  <center>
    <h2>{heading}</h2>
    {
    items.length === 0 && <>
      <div className="alert alert-danger" role="alert">
  No Records To Show !
</div>
</>
}
      <ul className="list-group">
       {
       items.map((item , index) => (
       <li key={index} 
       className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
       onClick={() =>setSelectedIndex(index)}
       >{item}</li>
       ))
       }
      </ul>
      </center>
      </div>

  </>
    );
}

export default ListGroup;