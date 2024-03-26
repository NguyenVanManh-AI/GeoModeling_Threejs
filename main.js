import * as THREE from 'three';

// Khởi tạo scene, camera và renderer cho cube
const sceneCube = new THREE.Scene();
const cameraCube = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const rendererCube = new THREE.WebGLRenderer();
rendererCube.setSize(window.innerWidth / 2, window.innerHeight);
document.getElementById("cube").appendChild(rendererCube.domElement);

// Khởi tạo scene, camera và renderer cho cylinder
const sceneCylinder = new THREE.Scene();
const cameraCylinder = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const rendererCylinder = new THREE.WebGLRenderer();
rendererCylinder.setSize(window.innerWidth / 2, window.innerHeight);
document.getElementById("cylinder").appendChild(rendererCylinder.domElement);

// cube
const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const materialCube = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometryCube, materialCube);
sceneCube.add(cube);

// cylinder
const geometryCylinder = new THREE.CylinderGeometry(0.5, 0.5, 1, 32); // Tạo một hình trụ với bán kính đáy là 0.5, bán kính trên là 0.5, chiều cao là 1 và độ phân giải là 32.
const materialCylinder = new THREE.MeshBasicMaterial({ color: 0xff00ff }); // Màu hồng
const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
sceneCylinder.add(cylinder);

cameraCube.position.z = 5;
cameraCylinder.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	cylinder.rotation.x += 0.01;
	cylinder.rotation.y += 0.01;
	
	rendererCube.render(sceneCube, cameraCube); // Render cho cube
	rendererCylinder.render(sceneCylinder, cameraCylinder); // Render cho cylinder
}

animate();
