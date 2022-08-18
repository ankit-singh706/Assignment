/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import styled from "styled-components"
import Search from "./Search"
const Home = (props) =>{
    return(
        <Container>
            <Search/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top:72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url('/images/bg_NEW.jpeg') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }

`
export default Home;