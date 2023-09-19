
// fc05f158a80a9d953e74b7948d421309


import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AllRoutes } from './routes/AllRoutes';


function App() {
  return (
    <div className="App">
    <Header />
     <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
