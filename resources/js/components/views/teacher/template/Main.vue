<template>
     <v-app style="background: #e6e6e6">
        <v-app-bar app color="white" elevation="0" dark>
            <v-app-bar-nav-icon class="body-1 black--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer">
            <Sidebar/>
        </v-navigation-drawer>
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
                items: [
                    {title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard'},
                    {title: 'Subjects', icon: 'mdi-book' , link: '/subject'},
                    {title: 'Account', icon: 'mdi-account', link: '/account'},
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
