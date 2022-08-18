import styled from "styled-components";
import { useDispatch, useSelector, } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName,selectUserPhoto,setSignOutState,setUserLoginDetails } from "../features/user/userSlice";
import {React, useEffect} from 'react';
import { auth,provider } from "../firebase"


const Header = (props) =>{

    const dispatch = useDispatch();
    const history = useNavigate();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user);
                // history('/home');
            }
        });
    },[username])

    const handleAuth = () =>{
        if(!username){
        auth.signInWithPopup(provider).then((result)=>{
            setUser(result.user)
            // console.log(result)
        }).catch((error)=>{
            alert(error.message)
        })
    } else if(username){
        auth.signOut().then(()=>{
            dispatch(setSignOutState())
            history('/');
        }).catch((error)=>alert(error.message))
    }
    };

    const setUser = (user) =>{
        dispatch(
            setUserLoginDetails({
            name: user.displayName,
            email : user.email,
            photo: user.photoURL,
        })
        );
        
    }
    return <Nav>
        <Logo>
            <img src="/images/logo.png" alt="HealthXOXO"/>
        </Logo>

        {
            !username ?
            (<Login onClick={handleAuth}>Login</Login>)
            :(
                <>
                <NavMenu>
                    <a href="/home">
                        <img src="images/home-icon.svg" alt="Home"/>
                        <span>HOME</span>
                    </a>
                    <a href="/doctor">
                        <img src="images/search-icon.svg" alt="Search"/>
                        <span>24x7 DOCTOR</span>
                    </a>
                    <a href="/medicine">
                        <img src="images/med-icon.svg" alt="WATCHLIST"/>
                        <span>MEDICINE</span>
                    </a>
                    <a>
                        <img src="images/original-icon.svg" alt="ORIGINALS"/>
                        <span>REMINDER</span>
                    </a>
                    <a href="/home">
                        <img src="images/shopping-cart.png" alt="Movies"/>
                        <span>CART</span>
                    </a>

                </NavMenu>
                <SignOut>
                <UserImg src={userPhoto} alt={username}/>
                <DropDown>
                    <span onClick={handleAuth}>Sign out</span>
                </DropDown>
                </SignOut>
                <Features>
                    <p>Account</p>
                    <p>Help</p>
                    <p>Invite a Friend</p>
                </Features>
                </>
            )  
        }
    </Nav>;
}

const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    background-color:#090b12;
    display:flex;
    justify-content:space-between;
    padding: 0 36px;
    align-items:center;
    letter-spacing:16px;
    z-index: 3;
`

const Logo = styled.a`
    padding:0;
    width:45px;
    
    margin-top:4px;
    max-height:70px;
    font-size:0;
    display:inline-block;
    img{
        display:block;
        border:1px transparent;
        border-radius: 15px;
        width:100%;
    }
`

const NavMenu = styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    justify-content:flex-end;
    position:relative;
    margin:0;
    padding:0;
    margin-right:auto;
    margin-left: 25px;
    @media(max-width:768px){
        display: none;
    }
    
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
        }

        span{
            color:rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height:1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
        

        &:before{
            background-color: rgb(249,249,249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: '';
            height: 2px;
            opacity: 0;
            position: absolute;
            right: 0px;
            left: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility: hidden;
            width: auto;
        } 
    }

        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
`

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform:uppercase;
    letter-spacing: 1.7px;
    border:1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const UserImg = styled.img`
    height: 100%;
`


const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0; 
`

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
`

const Features = styled.div`
    top:0px;
    right: 100px;
    bottom: 0px;
    font-size: 15px;
    letter-spacing: 4.7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    position: absolute;

    p{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`

export default Header;