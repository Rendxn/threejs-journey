import * as THREE from "three";
import "./styles.css";

// Canvas
const canvas = document.getElementById("threejs-canvas");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0x0000ff }));

cube2.position.x = -2;
cube3.position.x = 2;

group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
group.add(cube1, cube2, cube3);

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas ?? undefined,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

/**
 * Position is a Vector3
 */
// console.log("Magnitude of vector", mesh.position.length());
// console.log("Distance from cube to camera", mesh.position.distanceTo(camera.position));
// console.log("Normalized vector", mesh.position.normalize());
