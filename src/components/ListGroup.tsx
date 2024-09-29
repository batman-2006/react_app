
function ListGroup ()
{

    const items = 
    [
        'New York',
        'Port Said',
        'Texas',
    ];


    return ( 
  <>
    <h2>The List Group Component</h2>
      <ul className="list-group">
       {
       items.map((item) => (
       <li key={item} className="list-group-item">{item}</li>
       ))
       }
      </ul>
  </>
    );
}

export default ListGroup;