const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('universe').appendChild(renderer.domElement);

const starsGeometry = new THREE.BufferGeometry();
const starsCount = 10000;
const posArray = new Float32Array(starsCount * 3);

for (let i = 0; i < starsCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 2000;
}
starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const stars = new THREE.Points(starsGeometry, starMaterial);
scene.add(stars);

const textureLoader = new THREE.TextureLoader();
const planetTexture = textureLoader.load('textures/planet.jpg');
const planetGeometry = new THREE.SphereGeometry(5, 64, 64);
const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

const light = new THREE.PointLight(0xffffff, 1.5);
light.position.set(10, 10, 10);
scene.add(light);

camera.position.z = 20;

function animate() {
  requestAnimationFrame(animate);
  planet.rotation.y += 0.002;
  renderer.render(scene, camera);
}

animate();