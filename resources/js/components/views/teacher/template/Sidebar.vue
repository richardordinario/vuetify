<template>
    <div>
        <v-list dense color="green" dark>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item color="primary"  v-for="item in items" :key="item.title" link :to="item.link">
                <v-list-item-icon>
                    <v-icon color="muted">{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="secondary--text">{{item.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>

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
