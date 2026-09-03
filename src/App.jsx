import AddPost from "../components/AddPost";
import PostList from "../components/PostList";
import PlatformSelector from "../components/PlatformSelector";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>🌐 MultiSocial Hub</h1>
      <p>Redux Toolkit Experiment</p>
      <hr />
      <PlatformSelector />
      <hr />
      <AddPost />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
