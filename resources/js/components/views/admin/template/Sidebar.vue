<template>
    <v-list dense nav>
        <v-list-item class="ml-3 pb-0 pt-0">
            <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title class="overline grey--text">John Leider</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
            <v-list-item-icon>
                <v-icon class="subtitle-1 grey--text">{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title  class="overline grey--text">{{item.title}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
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