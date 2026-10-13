import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentUser && <Header currentUser={currentUser} onLogout={handleLogout} />}
      
      <main className="flex-grow">
        {!currentUser ? (
          <Auth onLogin={setCurrentUser} />
        ) : (
          <Dashboard currentUser={currentUser} />
        )}
      </main>

      {currentUser && <Footer />}
    </div>
  );
}

export default App;
