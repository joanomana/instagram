import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Footer from "../components/Footer";

const Home = () => (
  <div className="max-w-md mx-auto border ">
    <Header />
    <Stories />
    <Post />
    <Footer />
  </div>
);

export default Home;
