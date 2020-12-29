<template>
    <div id="MainApp">
       <!-- <MainAdmin/> -->
       <MainTeacher/>
    </div>  
</template>

<script>
    import MainAdmin from './components/views/admin/template/Main.vue'
    import MainTeacher from './components/views/teacher/template/Main.vue'
    export default {
        components: {
            MainAdmin,
            MainTeacher
        },
        data() {
            return {
                drawer: null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>