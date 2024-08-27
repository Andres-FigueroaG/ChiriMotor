import React from 'react';
import ThreeScene from './ThreeScene';

const ThreeScenesContainer = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: '10px',
            boxSizing: 'border-box'
        }}>
            <div style={{ width: '30%', height: '100%' }}>
                <ThreeScene modelPath="/r8.glb" />
            </div>
            <div style={{ width: '30%', height: '100%' }}>
            <ThreeScene modelPath="/ford.glb" />
            </div>
            <div style={{ width: '30%', height: '100%' }}>
            <ThreeScene modelPath="/ford.glb" />

            </div>
        </div>
    );
};

export default ThreeScenesContainer;