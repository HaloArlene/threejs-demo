<template>
  <div>
    <breadcrumb :crumbs="['Three', 'Model Renderer']"/>
    <div class="main-page">
      <div class="three-canvas-frame" id="canvas-frame"></div>
    </div>
  </div>
</template>

<script>
  import ModelLoader from "../../utils/modelLoader";
  import Breadcrumb from "../../components/breadcrumb";
  import * as THREE from 'three';

  export default {
    components: {Breadcrumb},
    mounted() {
      const modelLoader = new ModelLoader({elId: 'canvas-frame', fileType: 'gcode'});

      // modelLoader.loader.load('../../../static/stl/齐天大圣.stl', geometry => {
      //   modelLoader.renderMesh(geometry);
      // });
      const geometry = new THREE.BufferGeometry();
      const points = [];

      modelLoader.loader.load('../../../static/gcode/test.gcode', data => {
        const layers = data[0];
        const layerIndices = data[1];
        console.log('-layers-', layers);
        console.log('-layerIndices-', layerIndices);
        console.log('-point-', layers[10][10][0]);
        if (layers.length) {
          for (let i = 0, len = layers.length; i < len; i++) {
            if (layers[i].length) {
              for (let j = 0, jLen = layers[i].length; j < jLen; j++) {
                if (layers[i][j].length) {
                  for (let k = 0, kLen = layers[i][j].length; k < kLen; k++) {
                    if (layers[i][j][k]) {
                      points.push(layers[i][j][k]);
                    }
                  }
                }
              }
            }
          }
        }
        console.log('-points-', points);
        geometry.setFromPoints(points);
        modelLoader.renderMesh(geometry, null, new THREE.MeshPhysicalMaterial({
          color: 0x6d0c74,  //物体颜色
          metalness: 0.7,
          roughness: 0.7,
          reflectivity: 1,
          side: THREE.DoubleSide,
        }));
      });
    },
  }
</script>
