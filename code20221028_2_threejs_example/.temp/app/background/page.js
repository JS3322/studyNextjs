import * as THREE from "three";
import "../../styles/background.css"

function animation_bg() {
    const container = document.querySelector(".three_bg");
    const leader = new THREE.TextureLoader();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(

    )

    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
}



export default animation_bg()
