import UserContext from "./UserContext";
import UserProfile from "./UserProfile";

function App() {
  const user = {
    name: "Armaan",
    branch: "CSE-DS",
    college: "ABES Engineering College"
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to My Website</h1>

        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;