import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const texture = new THREE.TextureLoader().load('./imgs/rock.jpg');
// immediately use the texture for material creation

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


console.log(texture);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
}
animate();

// Event Listener for button(s)
const button1 = document.querySelector('#yellow');
const button2 = document.querySelector('#rock');
button1.addEventListener('click', (e)=> 
{
  const color = e.target.id.toString();
  const material = new THREE.MeshBasicMaterial( { map: '' } );

  cube.material.dispose();
  cube.material.color = new THREE.Color(color);
});

button2.addEventListener('click', (e)=>
{
const material = new THREE.MeshBasicMaterial( { map: texture } );
cube.material.dispose();
cube.material = material;
})


