
<script lang="ts" setup>
import { ref, onMounted, onBeforeMount} from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref<boolean>(false)
const width = ref<number>(0)

// const handleClose = (done: () => void) => {
//   ElMessageBox.confirm('Are you sure to close this dialog?')
//     .then(() => {
//       done()
//     })
//     .catch(() => {
//       // catch error
//     })
// }

//  const updateWindowWidth = computed(() => {
//       return width.value;
//     });

//     const getWindowWidth = () => {
//       width.value = window.innerWidth;
//     };

//       onMounted(() => {
//       getWindowWidth();
//       window.addEventListener('resize', getWindowWidth);
//     });

//     onBeforeUnmount(() => {
//       window.removeEventListener('resize', getWindowWidth);
//     });


const centerDialogVisible = ref(false)

</script>
<template>

  <el-button text @click="centerDialogVisible = true">
    Click to open the Dialog
  </el-button>

  <el-dialog
    v-model="centerDialogVisible"
    title="Warning"
    width="30%"
    align-center
  >
    <span>Open the dialog from the center from the screen</span>
 
  </el-dialog>

</template>

<style scoped>

</style>


<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
  z-index: 1000;
}
.menor{
  z-index: 10;
}
.t{
    width: 80%;
}
.dialog{
  z-index: 10000;
position: absolute;
top: 50%;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
