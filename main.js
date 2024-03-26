import * as THREE from 'three'; // Import toàn bộ module 'three' vào biến THREE.

const scene = new THREE.Scene(); // Khởi tạo một scene (cảnh).
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Khởi tạo camera với góc nhìn, tỷ lệ khung hình, và khoảng cách hiển thị.

const renderer = new THREE.WebGLRenderer(); // Khởi tạo một renderer để vẽ đối tượng vào canvas.
renderer.setSize(window.innerWidth, window.innerHeight); // Thiết lập kích thước của renderer bằng kích thước của cửa sổ trình duyệt.
document.body.appendChild(renderer.domElement); // Thêm canvas của renderer vào body của trang web.

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1); // Tạo hình hộp (cube) với kích thước 1x1x1.
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Tạo vật liệu cơ bản với màu xanh lá cây.
const cube = new THREE.Mesh(geometry, material); // Tạo mesh (đối tượng 3D) từ hình hộp và vật liệu.
scene.add(cube); // Thêm mesh vào scene.

// sphere
const geometry2 = new THREE.SphereGeometry(0.5, 32, 32); // Tạo một hình cầu với bán kính 0.5 và độ phân giải 32x32.
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geometry2, material2);
scene.add(sphere);


camera.position.z = 5; // Đặt vị trí của camera.

function animate() { // Khai báo hàm animate.
	requestAnimationFrame(animate); // Yêu cầu trình duyệt gọi hàm animate trước khi vẽ một frame tiếp theo.

	cube.rotation.x += 0.01; // Quay cube theo trục x.
	cube.rotation.y += 0.01; // Quay cube theo trục y.

	sphere.rotation.x += 0.01; // Quay hình cầu cũng giống như hình hộp.
	sphere.rotation.y += 0.01;
	
	renderer.render(scene, camera); // Vẽ scene.
}

animate(); // Gọi hàm animate để bắt đầu vòng lặp vẽ frame.
