// import * as THREE from 'three'; // importar la libreria 
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js'; // necesitamos una libreria, esta es de un repositorio local

const scene = new THREE.Scene(); // creamos una escena
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // creamos una camara, tambien el ancho y laygo, la longitud
// se esta rederizando los elementos
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ); // ubicarlo al borde de la pagina
document.body.appendChild( renderer.domElement );

// creamos los componentes
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // el cubo
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // material
const cube = new THREE.Mesh( geometry, material ); // nuestro objeto principal es "cubo" 
scene.add( cube );
camera.position.z = 5; // posicion

// funcionalidad
function animate() {
    // rotacion
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );