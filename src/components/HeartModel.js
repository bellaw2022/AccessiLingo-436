import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../App.css';

const HeartModel = () => {
  const mountRef = useRef(null);
  const heartRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(500, 500);

    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 5);
    scene.add(directionalLight);

    //extra lights
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight1.position.set(1, 2, 3);
    scene.add(directionalLight1);


    for (let i = 0; i < 20; i++) {
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(i * 1.2, i * 2, i * 2);
        scene.add(directionalLight);
      }

    const loader = new GLTFLoader();
    loader.load('/models/heart_in_love/scene.gltf', gltf => {
      gltf.scene.scale.set(0.02, 0.02, 0.02);
      scene.add(gltf.scene);
      heartRef.current = gltf.scene;
    }, undefined, error => console.error('An error happened', error));

    camera.position.set(0, 0, 5);

    const onMouseMove = (event) => {
      if (heartRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = (event.clientY / window.innerHeight) * 2 + 1;
        heartRef.current.rotation.y = x * Math.PI;
        heartRef.current.rotation.x = y * Math.PI;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();


    return () => {
        window.removeEventListener('mousemove', onMouseMove);
    
        if (mountRef.current) {
            if (mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        }
    
        // camera.remove();
        // ambientLight.remove();
        // directionalLight.remove();    
    };
    
  }, []);

  return <div className="heart-model" ref={mountRef} />;
};

export default HeartModel;
