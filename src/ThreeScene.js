import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ThreeScene.css'; // Importa el archivo CSS
import { useModel } from './ModelContext'; // Importa el contexto

const ThreeScene = ({ modelPath, color }) => {
    const mountRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar la expansión
    const navigate = useNavigate(); // Usa useNavigate para redirigir
    const { setModelPath } = useModel(); // Usa el contexto para actualizar el modelo

    useEffect(() => {
        // Crear la escena
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xeeeeee); // Fondo gris claro

        // Configurar la cámara
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);

        // Configurar el renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Configurar los controles
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
        controls.enableRotate = true; // Permitir rotación con el mouse
        controls.enablePan = false; // Deshabilitar el paneo para mantener el objeto en el centro

        // Añadir luz a la escena
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Luz ambiental
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        let model;
        if (modelPath) {
            // Cargar el modelo GLTF
            const loader = new GLTFLoader();
            loader.load(
                modelPath,
                (gltf) => {
                    model = gltf.scene;
                    model.scale.set(0.3, 0.3, 0.3); // Reducir el tamaño del modelo

                    // Centrar el modelo ajustando su posición
                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
                    model.position.sub(center); // Centrar el modelo en la escena

                    scene.add(model);
                },
                undefined,
                (error) => {
                    console.error('Error loading model:', error);
                }
            );
        } else {
            // Crear un cubo con color
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color });
            model = new THREE.Mesh(geometry, material);
            model.position.set(0, 0, 0);
            scene.add(model);
        }

        const resize = () => {
            const width = isExpanded ? window.innerWidth : mountRef.current.clientWidth;
            const height = isExpanded ? window.innerHeight : mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', resize);
        resize();

        camera.position.set(0, 0, 20); // Alejar la cámara aumentando el valor en el eje Z
        controls.update(); // Asegurar que la cámara esté bien posicionada

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Actualizar controles en cada cuadro
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [modelPath, color, isExpanded]);

    // Manejar la expansión del modelo
    const handleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    // Manejar la cotización
    const handleQuote = () => {
        setModelPath(modelPath); // Actualiza el modelo en el contexto
        navigate('/quote-form'); // Redirige a la página del formulario de cotización
    };

    return (
        <div className={`container ${isExpanded ? 'expanded' : 'normal'}`}>
            <div
                ref={mountRef}
                className="canvas-container"
            />
            {isExpanded ? (
                <>
                    <button
                        onClick={handleQuote}
                        className="quote-button"
                    >
                        Cotizar
                    </button>
                    <button
                        onClick={handleExpand}
                        className="close-button"
                    >
                        X
                    </button>
                </>
            ) : (
                <button
                    onClick={handleExpand}
                    className="expand-button"
                >
                    Expand
                </button>
            )}
        </div>
    );
};

export default ThreeScene;
