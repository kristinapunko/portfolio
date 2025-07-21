// import {useState, useRef, Suspense} from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import {  PointMaterial, Points, Preload } from '@react-three/drei'
// import * as random from 'maath/random/dist/maath-random.esm'

// const Stars = (props) => {
//   const ref = useRef();

//   const sphere = random.inSphere(new Float32Array(5000), {radius:1.2})

//   useFrame((state, delta)=>{
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   })

//   return (
//    <group rotation={[0, 0, Math.PI/4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//    </group>
//   )
// }

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{position:[0,0,1]}}>
//         <Suspense fallback={null}>
//           <Stars/>
//         </Suspense>
//         <Preload all/>
//       </Canvas>
//     </div>
//   )
// }

// export default StarsCanvas


import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = ({ darkMode }) => {
  const ref = useRef();
  const positionsRef = useRef(null);

  if (!positionsRef.current) {
    positionsRef.current = new Float32Array(5000 * 3); // Для 5000 точок
    for (let i = 0; i < positionsRef.current.length; i += 3) {
      const [x, y, z] = random.inSphere(new Float32Array(3), { radius: 1.2 });
      positionsRef.current[i] = isNaN(x) ? 0 : x;
      positionsRef.current[i + 1] = isNaN(y) ? 0 : y;
      positionsRef.current[i + 2] = isNaN(z) ? 0 : z;
    }
    if (positionsRef.current.some(isNaN)) {
      console.error('NaN found in positions array');
    }
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positionsRef.current} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={darkMode ? '#ffffff' : '#594936'}
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ darkMode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars darkMode={darkMode} />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;