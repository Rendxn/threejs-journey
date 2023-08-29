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
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geometry, material);

// Position
mesh.position.set(0.7, -0.6, 1);
scene.add(mesh);

// Scale
mesh.scale.set(2, 0.5, 0.5);

/**
 * Rotation: It's relative to the current position of the object.
 * It's cumbersome, so that's why Quaternions are recommended.
 */
mesh.rotation.reorder("YXZ"); // <- Rotate first on Y, then X, then Z
mesh.rotation.x = Math.PI / 4;
mesh.rotation.y = Math.PI / 4;

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Make the object's -z face the target provided
camera.lookAt(mesh.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas ?? undefined,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

/**
 * Position is a Vector3
 */
console.log("Magnitude of vector", mesh.position.length());
console.log("Distance from cube to camera", mesh.position.distanceTo(camera.position));
console.log("Normalized vector", mesh.position.normalize());
