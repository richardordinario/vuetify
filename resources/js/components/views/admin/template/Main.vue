<template>
     <v-app>
        <v-navigation-drawer app v-model="drawer">
            <Sidebar/>
        </v-navigation-drawer>

        <v-app-bar app color="gray" flat fixed>
            <v-app-bar-nav-icon class="body-1 grey--text" @click.stop="drawer = !drawer">
            </v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text" >
                <span class="font-weight-light body-1">LMS</span>
            </v-toolbar-title>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    import Sidebar from './Sidebar.vue'
    export default {
        components: {
            Sidebar
        },
        data() {
            return {
                drawer: null,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>