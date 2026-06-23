
import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import useStore from '../../store'
import { noChangeParts } from '../../constants/index.js'
import { Color } from 'three'

export default function BMWM3(props) {
  const { color } = useStore()
  const { nodes, materials, scene } = useGLTF('/models/bmw_m3_competition_g80-transformed.glb')

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
      <mesh geometry={nodes.model_0_Material010_0.geometry} material={materials.PaletteMaterial001} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_1_Material020_0.geometry} material={materials.PaletteMaterial002} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_6_Material015_0.geometry} material={materials.PaletteMaterial003} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_7_Material012_0.geometry} material={materials.PaletteMaterial004} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_8_Material004_0.geometry} material={materials.PaletteMaterial005} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_10_Material014_0.geometry} material={materials.PaletteMaterial006} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_11_Material008_0.geometry} material={materials.PaletteMaterial007} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_12_Material006_0.geometry} material={materials.PaletteMaterial008} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_15_Material016_0.geometry} material={materials.PaletteMaterial009} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_16_Material001_0.geometry} material={materials.PaletteMaterial010} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_20_Material007_0.geometry} material={materials['Material.007']} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_21_Material019_0.geometry} material={materials.PaletteMaterial011} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_25_Material027_0.geometry} material={materials.PaletteMaterial012} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_27_Material024_0.geometry} material={materials.PaletteMaterial013} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_28_Material021_0.geometry} material={materials['Material.021']} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_30_Material022_0.geometry} material={materials.PaletteMaterial014} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_36_Material026_0.geometry} material={materials.PaletteMaterial015} rotation={[-1.569, 0, 0]} scale={0.156} />
      <mesh geometry={nodes.model_39_Material018_0.geometry} material={materials.PaletteMaterial016} rotation={[-1.569, 0, 0]} scale={0.156} />
    </group>
  )
}

useGLTF.preload('/models/bmw_m3_competition_g80-transformed.glb')
