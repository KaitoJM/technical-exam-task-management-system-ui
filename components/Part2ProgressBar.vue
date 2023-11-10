<template>
  <div class="s-progress-bar">
    <div class="progress-labels">
      <div class="label">{{ label }}</div>
      <div class="percentage" :style="'color:' + color">{{ percentage }}%</div>
    </div>
    <div class="s-progress-bar-container">
      <div class="s-progress" :style="'width:' + percentage + '%; background-color:' + color"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: '',
    percentage: 0,
  },
  computed: {
    color() {
      let color = 'red';
      if (this.percentage > 0) {
        color =  '#fe6260';
      }
      
      if (this.percentage > 50) {
        color =  '#ffa953';
      }

      if (this.percentage == 100) {
        color =  '#22c55f';
      }

      return color;
    }
  }
}
</script>

<style lang="scss" scoped>
.s-progress-bar {
  width: 100%;

  .progress-labels {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 3px;

    .label {
      flex: 1;
      font-size: 1.1em;
    }

    .percentage {
      width: 30px;
    }
  }

  .s-progress-bar-container {
    position: relative;
    height: 7px;
    border-radius: 7px;
    width: 100%;
    overflow: hidden;
    background-color: #e4e8ee;

    .s-progress {
      position: absolute;
      top:0px;
      left: 0px;
      border-radius: 7px;
      height: 100%;
    }
  }
}
</style>