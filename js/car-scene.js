import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.module.js';

const container = document.getElementById('car3d-canvas');
if (!container) throw new Error('No #car3d-canvas element');

const width = container.clientWidth;
const height = container.clientHeight;

// Scene
const scene = new THREE.Scene();
scene.background = null; // transparent — blends with the dark page background

// Camera
const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
camera.position.set(4, 2.2, 5);
camera.lookAt(0, 0.3, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
container.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0x1a2542, 0.6);
scene.add(ambientLight);

const goldLight = new THREE.PointLight(0xf2ca50, 2.5, 20);
goldLight.position.set(3, 4, 2);
scene.add(goldLight);

const blueLight = new THREE.PointLight(0x4862b8, 1.2, 15);
blueLight.position.set(-3, 3, -2);
scene.add(blueLight);

const rimLight = new THREE.DirectionalLight(0xecefff, 0.4);
rimLight.position.set(-2, 5, -3);
scene.add(rimLight);

// Procedural low-poly car
function buildCar() {
  const group = new THREE.Group();

  // Custom shader material for dirty-to-clean transition
  const carMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uProgress: { value: 0.0 },
      uTime: { value: 0.0 },
      uDirtyColor: { value: new THREE.Color(0x3a2a1a) },
      uCleanColor: { value: new THREE.Color(0x0a0a12) },
      uGoldAccent: { value: new THREE.Color(0xf2ca50) },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uProgress;
      uniform float uTime;
      uniform vec3 uDirtyColor;
      uniform vec3 uCleanColor;
      uniform vec3 uGoldAccent;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        // Base color: dirty brown → deep black
        vec3 base = mix(uDirtyColor, uCleanColor, uProgress);

        // Fresnel for edge glow (stronger when clean)
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);

        // Gold reflection that appears as car gets cleaner
        vec3 goldReflect = uGoldAccent * fresnel * uProgress * 0.6;

        // Specular highlight (increases with cleanliness)
        vec3 lightDir = normalize(vec3(3.0, 4.0, 2.0) - vPosition);
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(vNormal, halfDir), 0.0), mix(8.0, 64.0, uProgress));
        vec3 specColor = mix(vec3(0.1), uGoldAccent, uProgress) * spec * mix(0.3, 1.5, uProgress);

        // Dirt noise (fades out as car cleans)
        float noise = fract(sin(dot(vPosition.xz * 10.0, vec2(12.9898, 78.233))) * 43758.5453);
        float dirtSpots = noise * 0.15 * (1.0 - uProgress);

        vec3 color = base + goldReflect + specColor + vec3(dirtSpots * 0.5, dirtSpots * 0.3, dirtSpots * 0.1);

        // Subtle ambient occlusion from normals
        float ao = max(dot(vNormal, vec3(0.0, 1.0, 0.0)) * 0.3 + 0.7, 0.0);
        color *= ao;

        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });

  // Glass material
  const glassMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uProgress: carMaterial.uniforms.uProgress,
      uGoldAccent: { value: new THREE.Color(0xf2ca50) },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uProgress;
      uniform vec3 uGoldAccent;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.0);
        vec3 dirtyGlass = vec3(0.15, 0.12, 0.1);
        vec3 cleanGlass = vec3(0.05, 0.06, 0.12);
        vec3 base = mix(dirtyGlass, cleanGlass, uProgress);
        vec3 reflect = uGoldAccent * fresnel * 0.3 * uProgress;
        gl_FragColor = vec4(base + reflect, mix(0.7, 0.4, uProgress));
      }
    `,
    transparent: true,
  });

  // Tire material (rubber)
  const tireMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 0.9,
    metalness: 0.0,
  });

  // Gold accent material (trim lines)
  const goldTrimMaterial = new THREE.MeshStandardMaterial({
    color: 0xf2ca50,
    emissive: 0xf2ca50,
    emissiveIntensity: 0.3,
    metalness: 0.8,
    roughness: 0.2,
  });

  // Body — lower section
  const bodyGeo = new THREE.BoxGeometry(3.6, 0.7, 1.6);
  bodyGeo.translate(0, 0.55, 0);
  const body = new THREE.Mesh(bodyGeo, carMaterial);
  group.add(body);

  // Cabin — upper section
  const cabinGeo = new THREE.BoxGeometry(1.8, 0.6, 1.4);
  cabinGeo.translate(-0.1, 1.2, 0);
  const cabin = new THREE.Mesh(cabinGeo, glassMaterial);
  group.add(cabin);

  // Hood slope
  const hoodGeo = new THREE.BoxGeometry(0.6, 0.15, 1.35);
  hoodGeo.translate(0.9, 1.0, 0);
  const hood = new THREE.Mesh(hoodGeo, carMaterial);
  group.add(hood);

  // Trunk slope
  const trunkGeo = new THREE.BoxGeometry(0.5, 0.12, 1.35);
  trunkGeo.translate(-1.2, 0.98, 0);
  const trunk = new THREE.Mesh(trunkGeo, carMaterial);
  group.add(trunk);

  // Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16);
  wheelGeo.rotateX(Math.PI / 2);
  const wheelPositions = [
    [1.1, 0.3, 0.85], [1.1, 0.3, -0.85],
    [-1.1, 0.3, 0.85], [-1.1, 0.3, -0.85],
  ];
  wheelPositions.forEach(([x, y, z]) => {
    const wheel = new THREE.Mesh(wheelGeo, tireMaterial);
    wheel.position.set(x, y, z);
    group.add(wheel);
  });

  // Gold trim lines along the sides
  const trimGeo = new THREE.BoxGeometry(3.2, 0.02, 0.02);
  [0.82, -0.82].forEach(z => {
    const trim = new THREE.Mesh(trimGeo, goldTrimMaterial);
    trim.position.set(0, 0.88, z);
    group.add(trim);
  });

  // Headlights (gold glow)
  const headlightGeo = new THREE.BoxGeometry(0.04, 0.12, 0.3);
  [-0.55, 0.55].forEach(z => {
    const hl = new THREE.Mesh(headlightGeo, goldTrimMaterial);
    hl.position.set(1.82, 0.6, z);
    group.add(hl);
  });

  // Ground reflection plane
  const groundGeo = new THREE.PlaneGeometry(12, 12);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x050914,
    roughness: 0.8,
    metalness: 0.2,
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  scene.add(ground);

  return { group, carMaterial };
}

const { group: car, carMaterial } = buildCar();
scene.add(car);

// Scroll-driven progress
let progress = 0;
let targetProgress = 0;

function updateProgress() {
  // Use the parent section for a wider scroll range
  const section = container.closest('section') || container;
  const rect = section.getBoundingClientRect();
  const viewHeight = window.innerHeight;
  // 0 when section top hits viewport bottom, 1 when section bottom hits viewport top
  const raw = (viewHeight - rect.top) / (viewHeight + rect.height);
  targetProgress = Math.max(0, Math.min(1, raw));
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// Animation loop
let time = 0;
function animate() {
  requestAnimationFrame(animate);
  time += 0.016;

  // Smooth progress interpolation
  progress += (targetProgress - progress) * 0.12;
  carMaterial.uniforms.uProgress.value = progress;
  carMaterial.uniforms.uTime.value = time;

  // Slow auto-rotation
  car.rotation.y = time * 0.15 + progress * Math.PI * 0.3;

  // Subtle floating motion
  car.position.y = Math.sin(time * 0.5) * 0.05;

  // Gold light intensity increases with cleanliness
  goldLight.intensity = 1.5 + progress * 2.0;

  renderer.render(scene, camera);
}
animate();

// Handle resize
window.addEventListener('resize', () => {
  const w = container.clientWidth;
  const h = container.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});
