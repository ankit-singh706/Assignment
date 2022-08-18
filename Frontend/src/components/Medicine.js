import styled from "styled-components";
import React,{useState,useEffect} from "react";


const Medicine = (props) =>{

    const [medicine,getMedicine] =useState([{}]);

    useEffect(()=>{
        fetch("/medicines").then(
            response => response.json()
        ).then(
            data => {
                getMedicine(data)
                // console.log(data)
            }
        )
    },[])

    return(
        <Container>
            <h4>Medicines available in the store--</h4>
            <Content>
                {(typeof medicine === 'undefined') ? (
                    <p>Loading...</p>
                ):(
                    medicine.map((meds,i)=>(
                        <Wrap>
                        <img src ="./images/meds-logo.svg" alt="Displaypic"/>
                        <div>
                            <p key={meds.id}>{meds.name}</p>
                            <p key={meds.id}>{meds.available}</p>
                            <p key={meds.id}>{meds.quantity}</p>
                        </div>
                        </Wrap>
                    ))
                )}
            </Content>
        </Container>
    )
};

const Container = styled.div`
    padding: 0 0 13px;
    margin-top: 50px;
    h4{
        color: black;
        font-weight: bold;
        font-size: 20px;
    }

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media(max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`

const Wrap = styled.div`
    margin-top: 20px;
    padding-top: 126px;
    padding-bottom: 20px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249,249,249,0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        border:1px transparent;
        border-radius: 20px;
        /* inset: 0px; */
        display: block;
        height: 40%;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 40%;
        z-index: 1;
        top: 0;
        margin-top:20px;
    }

    div{
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    }

    p{
        font-size: 15px;
        color:#8E8C8C;
        font-weight: bolder;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,294,0.8);
    }
`
export default Medicine;