<template>
<div id="app">
    <main>
        <router-link to="about">About</router-link>
    </main>
    <AddTodo @add-todo="addTodo" />
    <hr />
    <TodoList :todos="todos" @remove-item="removeItem" v-if="todos.length" />
    <p v-else>No todos!</p>
</div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
export default {
    name: "App",
    components: {
        TodoList,
        AddTodo
    },
    methods: {
        removeItem(id) {
            this.todos = this.todos.filter(t => t.id !== id);
        },
        addTodo(item) {
            this.todos.push(item);
            this.title = " ";
        }
    },
    mounted() {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            .then(response => response.json())
            .then(json => {
                this.todos = json;
            });
    },
    data() {
        return {
            todos: [{
                    id: 1,
                    title: "купить Хлеб ",
                    completed: false
                },
                {
                    id: 2,
                    title: "купить Халву ",
                    completed: false
                },
                {
                    id: 3,
                    title: "купить Колбасу",
                    completed: false
                }
            ]
        };
    }
};
</script>

<style lang="scss">
@import "~normalize.css";

body {
    font-family: "Robobo";
    font-size: 16px;
}

// @import '~bootstrap';
// @import '~bootstrap-vue';

@import '"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"';
@import "~pixel-glass/styles.css";

html {
    background-repeat: no-repeat;
    background-position: 50% 0;
    /* Mobile layout by default */
    background-image: url("./assets/320.png");
}

/* Tablet */
@media (min-width: 760px) {
    html {
        /* Tablet layout */
        background-image: url("./assets/760.png");
    }
}

/* Desktop */
@media (min-width: 960px) {
    html {
        /* Desktop layout */
        background-image: url("./assets/960.png");
    }
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
