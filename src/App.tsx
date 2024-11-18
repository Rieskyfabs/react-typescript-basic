import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonsList } from './components/PersonsList';

function App() {
  const PersonName = {
    first: 'Riesky',
    last: 'Fabiansyah'
  }

  const NameList = [
    {
      first: "Vincent",
      last: "Suhendar",
    },
    {
      first: "Riesky",
      last: "Fabiansyah",
    },
    {
      first: "Tensa",
      last: "Rooseno",
    },
    {
      first: "Brian",
      last: "Rangga",
    },
  ];

  return (
    <div className="App">
      <Greet 
        name="Riesky" 
        messageCount={5}
        IsLoggedIn={true}
      />
      <Person name={PersonName} />
      <PersonsList names={NameList} />
    </div>
  );
}

export default App;
