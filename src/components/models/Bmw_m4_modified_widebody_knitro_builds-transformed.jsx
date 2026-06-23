

import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import useStore from '../../store'
import { noChangeParts } from '../../constants/index.js'
import { Color } from 'three'

export default function BMWM4(props) {
  const { color } = useStore()
  const { nodes, materials, scene } = useGLTF('/models/bmw_m4_modified_widebody_knitro_builds-transformed.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (!noChangeParts.includes(child.name)) {
          child.material.color = new Color(color)
        }
      }
    })
  }, [color])


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0, 0.424, 0]} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021EngineA_Material1} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Coloured_Material_004} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021Carbon1_Material1} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha5A_Material1} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha9A_Material1} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021InteriorA_Material1} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.phong2} position={[0, 0.444, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_43.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha6A_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha7A_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021GrilleNoAlpha8A_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_49.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021BadgeA_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.PaletteMaterial002} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_55.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021LightA_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_57.geometry} material={materials.bBMW_M4CompetitionG82TNR0_2021ManufacturerPlateA_Material1} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_60.geometry} material={materials.PaletteMaterial003} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_68.geometry} material={materials.PaletteMaterial004} position={[0, 0.446, 0]} rotation={[Math.PI / 2, 0, 0]} scale={4.822} />
      <mesh geometry={nodes.Object_76.geometry} material={materials.PaletteMaterial005} position={[0, 0.172, 0]} />
      <mesh geometry={nodes.Object_78.geometry} material={materials.PaletteMaterial006} position={[0, 0.172, 0]} />
      <mesh geometry={nodes.Object_112.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/models/bmw_m4_modified_widebody_knitro_builds-transformed-transformed.glb')
