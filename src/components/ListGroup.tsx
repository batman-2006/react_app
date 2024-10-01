import { MouseEvent, useState } from "react";

interface Props 
{
  items: string[];
  heading: string;
  onSelectItem: (itme:string) => void;
}

function ListGroup ({items , heading , onSelectItem}: Props)
{
    const [selectedIndex , setSelectedIndex] = useState(-1);

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
       onClick={
        () => {
          setSelectedIndex(index);
          onSelectItem(item);
        }
      
      }
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