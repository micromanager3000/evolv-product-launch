// Deterministic motion previz for the hero reveal. The proxy communicates only camera path,
// framing, floor contact, and timing to Seedance; the approved photograph remains the sole
// authority for the real product's appearance and geometry.

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

    renderer.setClearColor(0xd8dee6, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.fog = new THREE.Fog(0xd8dee6, 13, 26);

    const plinthMaterial = ownMaterial(new THREE.MeshStandardMaterial({
      color: 0xb8c1cc,
      roughness: 0.82,
      metalness: 0.02,
    }));
    const plinth = new THREE.Mesh(
      ownGeometry(new THREE.CylinderGeometry(4.8, 4.95, 0.72, 96)),
      plinthMaterial,
    );
    plinth.position.y = 0.36;
    plinth.receiveShadow = true;
    scene.add(plinth);

    const ground = new THREE.Mesh(
      ownGeometry(new THREE.CircleGeometry(18, 96)),
      ownMaterial(new THREE.MeshStandardMaterial({ color: 0xc9d0d9, roughness: 0.95 })),
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
    device.position.set(0, 1.16, 0.05);
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

    const contactMarkerMaterial = ownMaterial(new THREE.MeshBasicMaterial({
      color: 0x273444,
      transparent: true,
      opacity: 0.16,
    }));
    for (const side of [-1, 1]) {
      const marker = new THREE.Mesh(
        ownGeometry(new THREE.CircleGeometry(0.34, 32)),
        contactMarkerMaterial,
      );
      marker.rotation.x = -Math.PI / 2;
      marker.position.set(side * 1.12, -0.43, 1.43);
      device.add(marker);
    }

    scene.add(new THREE.HemisphereLight(0xf8fbff, 0x5b6675, 2.2));
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
    rim.position.set(5.5, 4.5, -4.5);
    scene.add(rim);

    return {
      // The product proxy is intentionally static. All motion lives in the named camera.
      update() {},
      dispose() {
        scene.remove(device, plinth, ground, key, rim);
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
            cameraTarget: [0, 1.12, 0],
            focalLength: 52,
          },
        },
        {
          frame: 435,
          pose: {
            cameraPosition: [4.05, 4.97, 9.55],
            cameraTarget: [0, 1.12, 0],
            focalLength: 52,
          },
        },
        {
          frame: 450,
          pose: {
            cameraPosition: [4.05, 4.97, 9.55],
            cameraTarget: [0, 1.12, 0],
            focalLength: 52,
          },
        },
      ],
    },
  },
});
