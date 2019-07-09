import './landing-page.css';
// import * as THREE from 'three';
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   BoxGeometry,
//   MeshStandardMaterial,
//   Mesh,
//   PointLight,
//   AmbientLight,
//   Fog,
// } from 'three/src/Three';

// allows for the best minification
import { Scene } from 'three/src/scenes/Scene';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { BoxGeometry } from 'three/src/geometries/BoxGeometry';
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial';
import { Mesh } from 'three/src/objects/Mesh';
import { PointLight } from 'three/src/lights/PointLight';
import { AmbientLight } from 'three/src/lights/AmbientLight';
import { Fog } from 'three/src/scenes/Fog';

// import Scene from 'three/build/Scene';

// This creates and returns a dom element containing a cool 3d scene using three.js
// for the background of the landing page

function landingPageBackground() {
  // set up the scene
  let scene = new Scene();
  let camera = new PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
  // let camera = new OrthographicCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  let renderer = new WebGLRenderer();
  renderer.antialias = true;
  renderer.setSize(window.innerWidth, window.innerHeight);

  // init variables
  let geometry;
  let material;
  let object;

  let cubeDimension = 1;
  let innerRad = 3;
  let outerRad = 7;
  let tunnelDepth = 100;
  let numCubes = 200;

  let cubeGeometry = new BoxGeometry(cubeDimension, cubeDimension, cubeDimension);
  let cubeMaterial = new MeshStandardMaterial({
    color: 0x3bc4ff
  });

  let cubes = [];
  let lights = [];

  function getRandomRadians() {
    return Math.random() * 2 * Math.PI;
  }

  function getRandomPointInRing(inner, outer) {
    const randRadians = getRandomRadians();
    // get a radius somewhere in the ring
    const randomRadius = inner + Math.random() * (outer - inner);
    return {
      x: Math.cos(randRadians) * randomRadius,
      y: Math.sin(randRadians) * randomRadius 
    }
  }

  // randomly distribute the cubes both along the z axis and in a ring
  // denoted by innerRad and outerRad
    for (let i = 0; i < numCubes; i++) {
      object = new Mesh(cubeGeometry, cubeMaterial);
      const point = getRandomPointInRing(innerRad, outerRad);
      
      object.position.x = point.x;
      object.position.y = point.y;
      object.position.z = -Math.random() * tunnelDepth;

      object.rotation.x = getRandomRadians();
      object.rotation.y = getRandomRadians();

      cubes.push(object);
      scene.add(object);
    }

  // lighting

  // light pulses that travel down the tunnel
  let pointLight = new PointLight(0xffffff, 1, 40, 2);
  pointLight.position.set(0, 0, 40);
  scene.add(pointLight);

  let pointLight2 = new PointLight(0xffffff, 1, 40, 2);
  pointLight2.position.set(0, 0, 0);
  scene.add(pointLight2);

  let ambientLight = new AmbientLight(0x111111); // soft white light
  scene.add(ambientLight);


  // add fog
  scene.fog = new Fog(0x000000, 1, 60);


  // position camera
  camera.position.z = 0;


  // render loop
  function animate() {
    requestAnimationFrame(animate);

    // move frames towards camera
    for (let cube of cubes) {
      cube.position.z += 0.04;
      if (cube.position.z > 0) {
        cube.position.z -= tunnelDepth;
      }
    }
    
    // pulse light through
    pointLight.position.z -= 0.2;
    pointLight2.position.z -= 0.2;
    if (pointLight.position.z < -tunnelDepth) {
      pointLight.position.z = 40;
    }
    if (pointLight2.position.z < -tunnelDepth) {
      pointLight2.position.z = 40;
    }

    renderer.render(scene, camera);
  }

  animate();

  return renderer.domElement;
}

export {
  landingPageBackground,
};