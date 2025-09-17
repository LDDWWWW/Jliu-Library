<template>
    <div>
        <h1>Books with ISBN > 1000</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../firebase/init.js';

const books = ref([]);

const fetchBooks = async () => {
    const q = query(collection(db, 'books'), where('isbn', '>', 1000));
    const querySnapshot = await getDocs(q);
    books.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

// 在页面挂在的时候使用 
onMounted(fetchBooks);
</script>
