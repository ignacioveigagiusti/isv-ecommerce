import acustiverR from '../assets/acustiverR.png'
import durlock from '../assets/durlock.png'
import acustiverP from '../assets/acustiverP.png'
import glass from '../assets/glass.png'
import absorcion from '../assets/absorcion.png'
import aislamiento from '../assets/aislamiento.png'
import logoISV from '../assets/logoISV.png'

const items = [
    { id:'1', category:'producto', name:'Lana de Vidrio (m)', price:450 , picture:require('../assets/acustiverR.png')},
    { id:'2', category:'producto', name:'Placa de Yeso (m2)', price:500 , picture:require('../assets/durlock.png')},
    { id:'3', category:'producto', name:'Placa de Lana de Vidrio', price:450 , picture:require('../assets/acustiverP.png')},
    { id:'4', category:'producto', name:'Vidrio PVB (m2)', price:10000 , picture:require('../assets/glass.png')},
    { id:'5', category:'servicio', name:'Asesoramiento (h)', price:1500 , picture:require('../assets/absorcion.png')},
    { id:'6', category:'servicio', name:'Instalación (h)', price:1500 , picture:require('../assets/aislamiento.png')},
    { id:'7', category:'servicio', name:'Mantenimiento (h)', price:1000 , picture:require('../assets/aislamiento.png')},
    { id:'8', category:'programación', name:'Desarrollo de Aplicaciones (h)', price:2500 , picture:require('../assets/logoISV.png')}
];

export const getItems = new Promise( (res,rej) => {
    let condition = true;
    if (condition) {
        setTimeout(()=>{
            res(items);
        }, 2000)
    }
    else{
        rej('No Items found')
    }
})