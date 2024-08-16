import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };


  return (
    <>
     
      {/* <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Header />
      <MainContent />
      <Footer /> */}
      {/* <Counter initialCount={0} /> */}
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    </>
    
  );
}

export default App;
