import "./App.css";
import { Public } from './Screens/Public'
import { Private } from './Screens/Private'


const App = () => {
  const isAuthenticity = true;

  return (isAuthenticity ? <Private /> : <Public />)
};

export default App;
