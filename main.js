const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("universe").appendChild(renderer.domElement);

// 粒子星空背景
const starsGeometry = new THREE.BufferGeometry();
const starsCount = 10000;
const posArray = new Float32Array(starsCount * 3);
for (let i = 0; i < starsCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 2000;
}
starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
const stars = new THREE.Points(starsGeometry, starMaterial);
scene.add(stars);

// 星球
const loader = new THREE.TextureLoader();
const planetTexture = loader.load('https://threejs.org/examples/textures/earth_atmos_2048.jpg');
const planetGeometry = new THREE.SphereGeometry(5, 64, 64);
const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

// 光源
const light = new THREE.Po
