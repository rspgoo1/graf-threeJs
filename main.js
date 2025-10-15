import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría común (mismo tamaño para todos)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear materiales con diferentes colores
const material1 = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // rojo
const material2 = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // verde
const material3 = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // azul

// Crear los tres cubos
const cube1 = new THREE.Mesh(geometry, material1);
const cube2 = new THREE.Mesh(geometry, material2);
const cube3 = new THREE.Mesh(geometry, material3);

// Posicionar los cubos para que no se superpongan
cube1.position.x = -2;
cube2.position.x = 0;
cube3.position.x = 2;

// Agregar los cubos a la escena
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Agregar una luz direccional (misma iluminación)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación
function animate() {
  // Cubo rojo: rotación lenta
  cube1.rotation.x += 0.005;
  cube1.rotation.y += 0.005;

  // Cubo verde: rotación media
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  // Cubo azul: rotación rápida
  cube3.rotation.x += 0.02;
  cube3.rotation.y += 0.02;

  renderer.render(scene, camera);
}

// Iniciar animación
renderer.setAnimationLoop(animate);
