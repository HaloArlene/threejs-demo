<template>
  <div class="comp-wave-progress">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
  import Retina from './retina';
  import Wave from "./wave";

  export default {
    props: ['type'],
    data() {
      return {
        canvas: null,
        radius: 0,
        nowRange: 0,
        rangeValue: 60,
        wave1: null,
        wave2: null,
        isDrawContainer: false,
        drawCanvas: null
      }
    },
    mounted() {
      const canvas = this.$refs['canvas'];
      canvas.width = 300;
      canvas.height = 300;
      this.canvas = canvas;
      this.radius = this.canvas.width / 2;
      Retina.run(this.canvas);  //高清适配
      this.wave1 = new Wave({
        canvasWidth: this.canvas.width,
        canvasHeight: this.canvas.height,
        waveWidth: 0.06,
        waveHeight: 8,
        colors: ['#F39C6B', '#A0563B'],
        xOffset: 0,
        speed: 0.08
      });
      this.wave2 = new Wave({
        canvasWidth: this.canvas.width,
        canvasHeight: this.canvas.height,
        waveWidth: 0.04,
        waveHeight: 6,
        colors: ['rgba(243, 156, 107, 0.48)', 'rgba(160, 86, 59, 0.48)'],
        xOffset: 4,
        speed: 0.04,
      });
      this.drawCanvas = this.draw.bind(this);
      this.draw();
    },
    methods: {
      draw() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (!this.isDrawContainer) {
          this.drawContainer(ctx);
        }
        if (this.nowRange <= this.rangeValue) {
          this.nowRange += 1;
        }
        if (this.nowRange > this.rangeValue) {
          this.nowRange -= 1;
        }
        this.wave2.update({nowRange: this.nowRange});
        this.wave2.draw(ctx);
        this.wave1.update({nowRange: this.nowRange});
        this.wave1.draw(ctx);
        requestAnimationFrame(this.drawCanvas);
      },
      drawContainer(ctx) {
        const type = this.type;
        switch (type) {
          case 'circle':
            this.drawCircle(ctx);
            break;
          case 'star':
            this.drawStar(ctx);
            break;
          case 'roundRect':
            this.drawRoundRect(ctx);
            break;
          case 'heart':
            this.drawHeart(ctx);
            break;
          default:
            this.drawCircle(ctx);
            break;
        }
      },
      drawCircle(ctx) {
        const r = this.canvas.width / 2;
        const lineWidth = 4;
        const cR = r - lineWidth;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.arc(r, r, cR, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(186, 165, 130, 0.3)';
        ctx.stroke();
        ctx.clip();
        this.isDrawContainer = true;
      },
      drawStar(ctx, r = 70, R = 140, x = 145, y = 160) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(186, 165, 130, 0.3)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 5; i += 1) {
          ctx.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72) / 180 * Math.PI) * R + y);
          ctx.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * r + x, -Math.sin((54 + i * 72) / 180 * Math.PI) * r + y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.clip();
        this.isDrawContainer = true;
      },
      drawRoundRect(ctx, x = 10, y = 10, width = 100, height = 250) {
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.strokeStyle = 'rgba(186, 165, 130, 0.3)';
        ctx.lineWidth = 2;
        const value = height - width;
        let radius = width / 2;
        if (value < 0) {
          radius = height / 2;
        }
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
        ctx.lineTo(width - radius + x, y);
        ctx.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
        ctx.lineTo(width + x, height + y - radius);
        ctx.arc(width - radius + x, height - radius + y, radius, 0, Math.PI / 2);
        ctx.lineTo(radius + x, height + y);
        ctx.arc(radius + x, height - radius + y, radius, Math.PI / 2, Math.PI);
        ctx.closePath();
        ctx.stroke();

        ctx.clip();
        this.isDrawContainer = true;
      },
      drawHeart(ctx, x = 150, y = 130, a = 9) {
        const vertices = [];
        for (let i = 0; i < 50; i += 1) {
          const step = i / 50 * (Math.PI * 2); // 设置心上面两点之间的角度，具体分成多少份，好像需要去试。
          const vector = {
            x: a * (16 * Math.pow(Math.sin(step), 3)),
            y: a * (13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step))
          };
          vertices.push(vector);
        }
        ctx.save();
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.rotate(Math.PI);
        for (let i = 0; i < 50; i += 1) {
          const vector = vertices[i];
          ctx.lineTo(vector.x, vector.y);
        }
        ctx.strokeStyle = 'rgba(186, 165, 130, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
        ctx.clip();
        this.isDrawContainer = true;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/variables";


</style>
