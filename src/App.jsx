import { useState } from 'react';
import { data } from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  const [show, setShow] = useState(true);
  const list = people.map((person) => {
  	return <List {...person} key={person.id} />;
  });
  const handleClearAll = () => {
  	setPeople([]);
  	setShow(false);
  };
  return (
  <main>
    {show ? (
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      {list}
      <button onClick={handleClearAll}>clear all</button>
      </section>
    ) : (
    <section className="container center">
    	<h3>No Birthdays Today</h3>
    </section>
    )}
  </main>
  );
}

export default App;
