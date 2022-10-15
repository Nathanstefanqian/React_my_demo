import Comments from "./Comment.js";
import Counter from "./Counter.js";
import Parent from "./Parant&Son.js";
import SontoParent from "./Son&Parent.js";
import Contextapp from "./Context_app.js";
import Circle from "./Lifecircle.js";
import MouseApp from "./Mouse.js";
import Hoc from "./Hoc.js";
import Randomapp from "./Random_app.js";
import Routerapp from "./Router.js";
const Home = () => {
    return (
        <>
            <Comments />
            <hr />
            <Counter />
            <Parent />
            <hr />
            <SontoParent />
            <hr />
            <Contextapp />
            <hr />
            <Circle />
            <hr />
            <MouseApp />
            <hr />
            <Hoc />
            <hr />
            <Randomapp />
            <hr />
            <Routerapp />
        </>
    )
}
export default Home;