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


// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignIn from '../src/pages/SignIn';
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import TvSection from './components/TvSection'
// import MobileSection from './components/MobileSection'
// import WatchSection from './components/WatchSection'
// import KidsSection from './components/KidsSection'
// import Faq from './components/Faq'
// import Footer from './components/Footer'



// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//         <Route path="/login" element={<SignIn />} />
//         </Routes>
//       </Router>
//       <Navbar/>
//       <Hero/>

  
//       <TvSection/>
//       <MobileSection/>
//       <WatchSection/>
//       <KidsSection/>
//       <Faq/>
//       <Footer/>


     
    
//     </div>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../src/pages/SignIn';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TvSection from './components/TvSection';
import MobileSection from './components/MobileSection';
import WatchSection from './components/WatchSection';
import KidsSection from './components/KidsSection';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<SignIn />} />
        
        </Routes>
        <Hero />
        <TvSection />
        <MobileSection />
        <WatchSection />
        <KidsSection />
        <Faq />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
