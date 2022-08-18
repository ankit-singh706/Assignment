const express = require('express')
const app = express()
const port = 2000


const medicines = [
    {
        id:10,
        name:'Acetaminophen',
        available:'Available',
        quantity:10
    },
    {
        id:20,
        name:'Adderall',
        available:'Not Available',
        quantity:0
    },
    {
        id:30,
        name:'Cymbalta',
        available:'Available',
        quantity:110
    },
    {
        id:40,
        name:'Entyvio',
        available:'Available',
        quantity:5
    },
    {
        id:50,
        name:'Ozempic',
        available:'Not Available',
        quantity:0
    },
    {
        id:60,
        name:'Mankind',
        available:'Available',
        quantity:23
    },
    {
        id:70,
        name:'Atorvastatin',
        available:'Not Available',
        quantity:0
    },
    {
        id:80,
        name:'Amoxicillin ',
        available:'Available',
        quantity:65
    },
    {
        id:90,
        name:'Amlodipine',
        available:'Not Available',
        quantity:0
    },
    {
        id:100,
        name:'DOLO 650',
        available:'Not Available',
        quantity:0
    },
    {
        id:119,
        name:'Solvin Cold',
        available:'Available',
        quantity:345
    }
]
const arrayOfDocs = [
    { 
        id:1,
        name:'Doctor 01',
        degree:'MBBS',
        expYears:20,
        hospital:'XYZ',
        achievements:'Gold Medal'
    },
    { 
        id:2,
        name:'Doctor 02',
        degree:'MBBS',
        expYears:10,
        hospital:'ABC',
        achievements:'Silver Medal'
    },
    { 
        id:3,
        name:'Doctor 03',
        degree:'MBBS',
        expYears:20,
        hospital:'XYZ',
        achievements:'Gold Medal'
    },
    { 
        id:4,
        name:'Doctor 04',
        degree:'MBBS',
        expYears:10,
        hospital:'ABC',
        achievements:'Silver Medal'
    },
    { 
        id:5,
        name:'Doctor 05',
        degree:'MBBS',
        expYears:10,
        hospital:'ABC',
        achievements:'Silver Medal'
    },
    { 
        id:6,
        name:'Doctor 06',
        degree:'M.Phil',
        expYears:10,
        hospital:'ABC',
        achievements:'Silver Medal'
    }
];

app.get('/doctors',(req,res)=>{
    res.json(arrayOfDocs)
})

app.get('/medicines',(req,res)=>{
    res.json(medicines)
})

// app.post('/doctors', (req,res)=>{
//     const doctor = {
//         id: arrayOfDocs.length +1,
//         name: req.body.name,
//         degree:req.body.degree,
//         expYears:req.body.expYears,
//         hospital:req.body.hospital,
//         achievements: req.body.achievements
//     };
//     arrayOfDocs.push(doctor);
//     res.send(doctor);
// })


app.get('/doctors/:id',(req,res)=>{
    const id = req.params.id;
    const doctor = arrayOfDocs.find(c => c.id === parseInt(id))
    if(!doctor){
        res.status(404).send('No doctors are present for this speciality')
    }
    res.send(doctor)
})






// What i want--

// 1.List of doctors
// 2.Details of doctor from backend
// 3.Detail of 1 doctor
// 4.Alert of medicines


// Two parameters - Route parameters = :id(To see use req.params)
//                  Query parameters = groupBy = name(to see use req.query)

app.listen(port,()=> console.log(`Listening to port ${port}...`));