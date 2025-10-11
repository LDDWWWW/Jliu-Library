<template>
    <div id="app">
        <h1>Book Counter</h1>

        <button @click="getBookCount">Get Book Count</button>

        <p v-if="count !== null">Total number of books: {{ count }}</p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// 定义响应式变量
const count = ref(null)
const error = ref(null)

// 定义异步函数
const getBookCount = async () => {
    try {
        const response = await axios.get('https://YOUR_ENDPOINT_HERE.cloudfunctions.net/countBooks')
        count.value = response.data.count
        error.value = null
    } catch (err) {
        console.error('Error fetching book count:', err)
        error.value = err.message || 'Error fetching data'
        count.value = null
    }
}
</script>
