import { defineStore } from 'pinia'
import { ref } from 'vue'
export const usePluginStore = defineStore('plugin', () => {
  const formList = ref<any[]>([{ row: 12, column: 12, gap: 2 }])
  return {
    formList
  }
})
