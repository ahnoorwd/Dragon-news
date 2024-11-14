import Header from "../components/Header";
import Latest from "../components/Latest";

const Home = () => {
    return (
        <div className="font-poppins"> 
         <header><Header></Header></header>
         <section className="w-8/12 mx-auto">
            <Latest></Latest>
         </section>
         <nav></nav>
         <main></main>
        </div>
    );
};

export default Home;