
import './App.css';
import UserProvider from './context/UserProvider.jsx';

import AppRouter from "./router/AppRouter.jsx"





function App() {
 
  return (
<UserProvider>
<AppRouter/>
</UserProvider>
 
  )
}

export default App;
