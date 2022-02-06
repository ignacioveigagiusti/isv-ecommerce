const items = [
    { id:'1', category:'Producto', cat:'productos', name:'Lana de Vidrio (m)', price:450 , stock:10 , picture:require('../assets/acustiverR.png'), description:'Aislante de lana de Vidrio hidrorepelente Isover revestido en una de sus caras con velo de vidrio reforzado. Aislamiento térmico y acústico, para instalaciones en paredes, sobre techos inclinados o cielorrasos suspendidos y entretechos en posición horizontal o inclinado sin carga.'},
    { id:'2', category:'Producto', cat:'productos', name:'Placa de Yeso (m2)', price:500 , stock:10 , picture:require('../assets/durlock.png'), description:'Placas de yeso, solución estándar para renovar o construir paredes, cielorrasos y revestimientos interiores en ambientes secos, como dormitorios, oficinas, locales comerciales, etc.'},
    { id:'3', category:'Producto', cat:'productos', name:'Placa de Lana de Vidrio', price:450 , stock:10 , picture:require('../assets/acustiverP.png'), description:'Paneles de lana de vidrio ISOVER G3. Aislamiento acústico y térmico, diseñado para sistemas en seco y sobre cielorrasos de cualquier tipo. Tratamiento fonoabsorbente de locales para disminuir el Tiempo de Reverberación de los mismos. Sirve como revestimiento de muros, en el interior de tabiques y cielorrasos.'},
    { id:'4', category:'Producto', cat:'productos', name:'Vidrio PVB (m2)', price:10000 , stock:10 , picture:require('../assets/glass.png'), description:'Vidrio laminado con placa interior de PVB. Aislamiento térmico y acústico para ventanas y puertas, con la posibilidad de utilizarse en arreglos de doble vidriado con cámara de aire para un aislamiento aún mayor.'},
    { id:'5', category:'Servicio', cat:'servicios', subcategory:'consultoria', name:'Asesoramiento (h)', price:1500 , stock:10 , picture:require('../assets/absorcion.png'), description:'Asesoramiento y planeamiento de soluciones constructivas para recintos desde una perspectiva acústica.'},
    { id:'6', category:'Servicio', cat:'servicios', subcategory:'instalacion', name:'Instalación (h)', price:1500 , stock:10 , picture:require('../assets/aislamiento.png'), description:'Instalación de soluciones constructivas con fines primordialmente acústicos.'},
    { id:'7', category:'Servicio', cat:'servicios', subcategory:'instalacion', name:'Mantenimiento (h)', price:1000 , stock:10 , picture:require('../assets/aislamiento.png'), description:'Mantenimiento, arreglo y refacción de cerramientos existentes que hayan podido haber perdido parte de sus cualidades de absorción, reflexión o aislamiento acústico.'},
    { id:'8', category:'Programación', cat:'servicios', subcategory:'programacion', name:'Desarrollo de Aplicaciones (h)', price:2500 , stock:10 , picture:require('../assets/logoISV.png'), description:'Programación de aplicaciones con fines ingenieriles relacionados al ámbito de la acústica. Lenguajes: MATLAB, Python, R, posibilidad de desarrollo de app web (MERN Stack).'}
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