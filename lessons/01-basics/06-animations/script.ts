import gsap from "gsap";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

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
 * Animations
 */

const clock = new THREE.Clock();
// let time = Date.now();

// gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });

const tick = () => {
  /**
   * To avoid framerate dependencies,
   * we use time. We can also use THREE Clock.
   */
  const elapsedTime = clock.getElapsedTime();
  mesh.position.x = Math.cos(elapsedTime);
  mesh.position.y = Math.sin(elapsedTime);
  mesh.rotation.y = elapsedTime * 2 * Math.PI;

  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // mesh.rotation.y += 0.001 * deltaTime;

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
