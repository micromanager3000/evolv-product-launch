// Deterministic motion previz for the hero reveal. The proxy communicates camera path,
// framing, and the rhythm of the background rings to SeedDance; the approved photographs
// remain the sole authority for the real product's appearance and geometry.

import type * as Three from "three";
import { defineThreeScene } from "framediff/three";

export const deviceRevealBlockoutScene = defineThreeScene({
  id: "device-reveal-blockout",

  async create({ scene, renderer }) {
    const THREE = await import("three");
    const geometries: Three.BufferGeometry[] = [];
    const materials: Three.Material[] = [];
    const ownGeometry = <T extends Three.BufferGeometry>(geometry: T): T => {
      geometries.push(geometry);
      return geometry;
    };
    const ownMaterial = <T extends Three.Material>(material: T): T => {
      materials.push(material);
      return material;
    };

    renderer.setClearColor(0x06111f, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.fog = new THREE.Fog(0x06111f, 12, 27);

    const ground = new THREE.Mesh(
      ownGeometry(new THREE.CircleGeometry(18, 96)),
      ownMaterial(new THREE.MeshStandardMaterial({ color: 0x081a2b, roughness: 0.82, metalness: 0.12 })),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.015;
    ground.receiveShadow = true;
    scene.add(ground);

    const proxyMaterial = ownMaterial(new THREE.MeshStandardMaterial({
      color: 0xf0a34a,
      roughness: 0.36,
      metalness: 0.08,
    }));
    const accentMaterial = ownMaterial(new THREE.MeshStandardMaterial({
      color: 0x00b4b4,
      emissive: 0x006f75,
      emissiveIntensity: 0.75,
      roughness: 0.25,
    }));
    const device = new THREE.Group();
    device.position.set(0, 1.72, 0.05);
    device.rotation.y = -0.12;
    scene.add(device);

    const armGeometry = ownGeometry(new THREE.CapsuleGeometry(0.44, 2.55, 12, 28));
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(armGeometry, proxyMaterial);
      arm.position.set(side * 1.12, 0, 0.18);
      arm.rotation.x = Math.PI / 2;
      arm.scale.set(1, 1, 0.78);
      arm.castShadow = true;
      arm.receiveShadow = true;
      device.add(arm);

      const accent = new THREE.Mesh(
        ownGeometry(new THREE.BoxGeometry(0.055, 0.055, 1.72)),
        accentMaterial,
      );
      accent.position.set(side * 1.12, 0.37, 0.38);
      accent.castShadow = true;
      device.add(accent);
    }

    const bridge = new THREE.Mesh(
      ownGeometry(new THREE.TorusGeometry(1.12, 0.34, 20, 72, Math.PI)),
      proxyMaterial,
    );
    bridge.position.set(0, 0, -1.46);
    bridge.rotation.x = Math.PI / 2;
    bridge.castShadow = true;
    bridge.receiveShadow = true;
    device.add(bridge);

    const rings: Three.Mesh[] = [];
    const ringMaterials: Three.MeshBasicMaterial[] = [];
    for (let index = 0; index < 5; index += 1) {
      const material = ownMaterial(new THREE.MeshBasicMaterial({
        color: index % 2 === 0 ? 0x17d9df : 0x0b8eaa,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      ringMaterials.push(material);
      const ring = new THREE.Mesh(
        ownGeometry(new THREE.TorusGeometry(2.1 + index * 0.82, 0.035, 12, 128)),
        material,
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0, 0.08 + index * 0.03, -0.1);
      ring.scale.setScalar(0.88 + index * 0.025);
      rings.push(ring);
      scene.add(ring);
    }

    scene.add(new THREE.HemisphereLight(0xbcefff, 0x020711, 1.5));
    const key = new THREE.DirectionalLight(0xffffff, 4.6);
    key.position.set(-4.5, 8.5, 6.5);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 0.1;
    key.shadow.camera.far = 28;
    key.shadow.camera.left = -7;
    key.shadow.camera.right = 7;
    key.shadow.camera.top = 7;
    key.shadow.camera.bottom = -7;
    scene.add(key);

    const rim = new THREE.PointLight(0x8edee2, 18, 18, 1.7);
    rim.position.set(5.5, 5.1, -4.5);
    scene.add(rim);

    return {
      // The product proxy is intentionally static. Only camera and background energy move.
      update(time) {
        for (let index = 0; index < rings.length; index += 1) {
          const phase = time * 0.72 - index * 0.48;
          const breathe = 1 + Math.sin(phase) * 0.035;
          rings[index].scale.setScalar((0.88 + index * 0.025) * breathe);
          ringMaterials[index].opacity = 0.1 + (Math.sin(phase + 1.1) * 0.5 + 0.5) * 0.19;
        }
      },
      dispose() {
        scene.remove(device, ground, key, rim, ...rings);
        for (const geometry of geometries) geometry.dispose();
        for (const material of materials) material.dispose();
      },
    };
  },

  cameras: {
    reveal: {
      interpolation: "ease",
      keyframes: [
        {
          frame: 0,
          pose: {
            cameraPosition: [4.4, 5.4, 10.4],
            cameraTarget: [0, 1.64, 0],
            focalLength: 52,
          },
        },
        {
          frame: 435,
          pose: {
            cameraPosition: [4.05, 4.97, 9.55],
            cameraTarget: [0, 1.64, 0],
            focalLength: 52,
          },
        },
        {
          frame: 450,
          pose: {
            cameraPosition: [4.05, 4.97, 9.55],
            cameraTarget: [0, 1.64, 0],
            focalLength: 52,
          },
        },
      ],
    },
  },
});
