// import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TvSection from './components/TvSection'
import MobileSection from './components/MobileSection'
import WatchSection from './components/WatchSection'
import KidsSection from './components/KidsSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TvSection/>
      <MobileSection/>
      <WatchSection/>
      <KidsSection/>
    </div>
  )
}

export default App