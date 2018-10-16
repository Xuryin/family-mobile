<template>
    <div id="app">
        <Header></Header>
        <router-view />
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style>
@import "../static/css/reset.css";
@import "../static/css/public.css";
</style>
