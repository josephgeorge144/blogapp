



import Header from "../../header/Header";
import Posts from "../../posts/posts";
import Sidebar from "../../sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  // const location = useLocation();
  // console.log(location);
   return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar />
      </div>
    </>
  );
}
