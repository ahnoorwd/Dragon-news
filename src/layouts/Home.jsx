import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Leftside from "../components/layoutcomponent/Leftside";
import Navbar from "../components/Navbar";
import Right from "./Right";

const Home = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      
      <section className="w-8/12 mx-auto">
        <Latest></Latest>
      </section>

      <nav>
        <section className="w-8/12 mx-auto mt-6">
          <Navbar></Navbar>
        </section>
      </nav>
      
      <main className="w-8/12 mx-auto mt-6 grid md:grid-cols-12 gap-3">
      
        <aside className="col-span-3"><Leftside></Leftside></aside>
        <section className="col-span-6">
        
        <main> <Outlet></Outlet></main>
        </section>
        <aside className="col-span-3"><Right></Right></aside>
      </main>
    </div>
  );
};

export default Home;
