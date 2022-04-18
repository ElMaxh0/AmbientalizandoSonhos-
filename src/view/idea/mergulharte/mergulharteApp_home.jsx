import React, { useEffect } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import styledComponents from "styled-components";
import { useTexture } from "@react-three/drei"
import { DoubleSide, Vector3 } from 'three';
import { Suspense } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { MeshStandardMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import { useImgUrl } from "../../hooks/imgurl";
import { BackSide } from "three";
import { useLargura } from "../../hooks/largura";
import { useAltura } from "../../hooks/altura";
import { useComprimento } from "../../hooks/comprimento";
const MergulharteAppWindowStyle = styledComponents.div `
width:90vw; height:80vh; border-radius:"25px";`
function Room(){
  const {larguraid, setlarguraid} = useLargura();
  const {Alturaid, setAlturaid} = useAltura();
  const {comprimentoid, setcomprimentoid} = useComprimento();
  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 10;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
  
  const {ImgUrl, setImgUrl}= useImgUrl();
  let largura= larguraid
  let altura = Alturaid
  let Profundidade = comprimentoid
  var image = ImgUrl
  console.log(ImgUrl)
  const Cena = () => {
    const texture = useTexture(image);
  
    return (
      <mesh scale={new Vector3(-1, 1, 1)}>
        <boxBufferGeometry args={[(largura * 10), (altura *10), (Profundidade*10), 32]} />
        <meshBasicMaterial map={texture} side={BackSide} />
      </mesh>
    );
  }
  const Pedestral = () => {
    const texture = useTexture(image);
  
    return (
      <mesh scale={new Vector3(1, 1, 1)}>
        <boxBufferGeometry args={[2, 6, 3, 5]} />
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
    );
  }
  
    return (
      <MergulharteAppWindowStyle>
        <Canvas camera={{
          near: 1,
          far: 1100,
          aspect: 16 / 9,
          fov: 70
        }}>
          <CameraController />
          <Suspense fallback={null}>
            <Cena />
            
          </Suspense>
        </Canvas>
      </MergulharteAppWindowStyle>
    );
  }
export default Room