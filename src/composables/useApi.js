import { ref } from 'vue'

export function useApi(requestFn) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function execute() {
    try {
      loading.value = true
      error.value = null

      data.value = await requestFn()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    execute,
  }
}
