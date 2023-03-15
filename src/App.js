import "./App.css";
import Post from "./components/HooksPraktika2/Post/Post";
import Posts from "./components/HooksPraktika3/Posts/Posts";
import Tasks from "./components/HooksPraktika5/Tasks/Tasks";
import Tasks2 from './components/HooksPraktika6/Tasks/Tasks';
import Users from "./components/HooksPraktika7/Users/Users";
import Students from "./components/ReactFormsPraktika1/Students/Students";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navigation />
            
            <div className="container">
                <Routes>
                    <Route path="/praktika-2" element={<Post />} />
                    <Route path="/praktika-3" element={<Posts />} />
                    <Route path="/praktika-5" element={<Tasks />} />
                    <Route path="/praktika-6" element={<Tasks2 />} />
                    <Route path="/praktika-7" element={<Users />} />
                    <Route path="/praktika-1" element={<Students />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
