import { MouseEvent } from "react";

function ListGroup ()
{

    let items = 
    [
        'New York',
        'Port Said',
        'Texas',
    ];

    const handleClick = (event : MouseEvent) => console.log(event);
    return ( 
  <>
  <center>
    <h2>The List Group Component</h2>
    {
    items.length === 0 && <>
    <div className="container w-75">
      <div className="alert alert-danger" role="alert">
  No Records To Show !
</div>
</div>
</>
}
      <ul className="list-group">
       {
       items.map((item , index) => (
       <li key={index} 
       className="list-group-item"
       onClick={handleClick}
       >{item}</li>
       ))
       }
      </ul>
      </center>
  </>
    );
}

export default ListGroup;