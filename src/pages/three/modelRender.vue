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

  export default {
    components: {Breadcrumb},
    data() {
      return {
        modelLoader: null
      }
    },
    mounted() {
      this.modelLoader = new ModelLoader({elId: 'canvas-frame'});

      // ../../../static/stl/齐天大圣.stl
      this.modelLoader.loader.load('http://d2qude1qt7mm3w.cloudfront.net/EE661C03705A6B4DA24F212274ECD3CB', geometry => {
        this.modelLoader.renderMesh(geometry);
      });
      // const geometry = new THREE.BufferGeometry();
      // const points = [];
      //
      // this.modelLoader.loader.load('../../../static/gcode/test.gcode', data => {
      //   const layers = data[0];
      //   const layerIndices = data[1];
      //   console.log('-layers-', layers);
      //   console.log('-layerIndices-', layerIndices);
      //   console.log('-point-', layers[10][10][0]);
      //   if (layers.length) {
      //     for (let i = 0, len = layers.length; i < len; i++) {
      //       if (layers[i].length) {
      //         for (let j = 0, jLen = layers[i].length; j < jLen; j++) {
      //           if (layers[i][j].length) {
      //             for (let k = 0, kLen = layers[i][j].length; k < kLen; k++) {
      //               if (layers[i][j][k]) {
      //                 points.push(layers[i][j][k]);
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      //   console.log('-points-', points);
      //   geometry.setFromPoints(points);
      //   this.modelLoader.renderMesh(geometry, null, new THREE.MeshPhysicalMaterial({
      //     color: 0x6d0c74,  //物体颜色
      //     metalness: 0.7,
      //     roughness: 0.7,
      //     reflectivity: 1,
      //     side: THREE.DoubleSide,
      //   }));
      // });
    },
    beforeDestroy() {
      this.modelLoader && this.modelLoader.cleanAll();
    }
  }
</script>
