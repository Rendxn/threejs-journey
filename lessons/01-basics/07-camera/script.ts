import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const sizes = {
  width: 800,
  height: 600,
};

/**
 * Base scene
 */
const canvas: HTMLCanvasElement = document.querySelector("canvas.webgl")!;
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(75, aspectRatio);
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1);
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas ?? undefined,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

/**
 * Follow Cursor
 */
// const cursor = {
//   x: 0,
//   y: 0,
// };

// document.addEventListener("mousemove", (event) => {
//   cursor.x = event.clientX / sizes.width - 0.5;
//   cursor.y = (-1 * event.clientY) / sizes.height + 0.5;
// });

/**
 * Or use built-in controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const tick = () => {
  // camera.position.x = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 3;
  // camera.lookAt(mesh.position);

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
