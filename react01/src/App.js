import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
    return (
        <Wrapper>
            <Header />
            <Main kim="KimJay" work="study" />
            <Main kim="LeeJay" work="danc" />
            <Main kim="ParkJay" work="sing" />
            <Main kim="HanJay" />
            <Footer />
        </Wrapper>
    )
}

export default App;