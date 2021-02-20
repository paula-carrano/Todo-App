import "./App.css";
import { Public } from './Screens/Public'
import { Private } from './Screens/Private'
import { useAuth } from './hooks'

const App = () => {
  const { isAuthenticated } = useAuth()

  console.log(isAuthenticated)

  return (isAuthenticated ? <Private /> : <Public />)
};

export default App;
