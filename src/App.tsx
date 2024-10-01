import ListGroup from './components/ListGroup';

function app ()
{
  let cities = 
    [
        'New York',
        'Port Said',
        'Texas',
    ];

    let Countries = 
    [
        'Egypt',
        'England',
        'USA',
    ];

  return (<div>
    <ListGroup items={cities} heading='Cities' />
    <br />
    <ListGroup items={Countries} heading='Countries' />

    </div> );
}

export default app;