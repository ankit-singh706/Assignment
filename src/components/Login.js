import styled from 'styled-components';
import {React} from 'react';

const Login = (props) =>{
    return(
        <Container>
            <Content>
                <CTA>
                    <Signup>GET ALL THERE</Signup>
                    <Description>
                    With Premier Access, you can access the medicines and service releases at the same time.
                    </Description>
                    <CTALogoTwo src="/images/cta-bottom-logo.jpg" alt=""/> 
                </CTA>
                </Content>
        </Container>
    )
}

const Container= styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width:100%;
    position:relative;
    min-height:100vh ;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`; 

const CTA = styled.div`
    margin-bottom:2vw;
    max-width:650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:0;
    align-items:center;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
    transition-timing-function:ease-out;
    transition : opacity 0.2s;
    width:100%;
`

const Signup = styled.a`
    font-weight:bold;
    color:white;
    background-color:#0063e5;
    margin-bottom:12px;
    width:100%;
    letter-spacing:1.5px;
    font-size:18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color:#0483ee;
        
    }
`;

const Description = styled.p`
    color: hsla(0,0%,95.3%,1);
    font-size: 13px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing:1px;
`;

const CTALogoTwo = styled.img`
    max-width:600px;
    border: 1px transparent;
    border-radius: 30px;
    margin-bottom:20px;
    display: inline-block;
    vertical-align:bottom;
    width:100%;
`
export default Login; 