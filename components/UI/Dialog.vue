
<script lang="ts" setup>
import { ref, onMounted, onBeforeMount} from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(true)
const width = ref(0)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

 const updateWindowWidth = computed(() => {
      return width.value;
    });

    const getWindowWidth = () => {
      width.value = window.innerWidth;
    };

      onMounted(() => {
      getWindowWidth();
      window.addEventListener('resize', getWindowWidth);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', getWindowWidth);
    });



</script>
<template>
  <el-button text @click="dialogVisible = true">
    Make Reservation
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="Fill out some info for your appointment"
    width="''85%"
    :before-close="handleClose"
  >
  {{ width/10}}
    <div>This is a message</div>
    <div>This is a message</div>
    <div>This is a message</div>
    <div>This is a message</div>
    <div>This is a message</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>


<style scoped>
.t{
    width: 80%;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
