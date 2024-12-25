import { useParams } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";

const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1>This is news</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>

        </div>
    );
};

export default News;