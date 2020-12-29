<template>
    <div>
        <v-container>
           <v-row align="center" justify="center" class="mt-5">
               <v-col lg="8" md="12" sm="12">
                   <v-card>
                       <v-toolbar flat >
                           <v-toolbar-title>Subjects</v-toolbar-title>
                           <v-spacer></v-spacer>
                           <v-btn icon>
                                <v-icon @click="openDialog">mdi-plus</v-icon>
                            </v-btn>
                            <v-row justify="center">
                                <v-dialog model="dialog" persistent max-width="600px">
                                    <template>
                                        
                                    </template>
                                    <v-card>
                                        <v-card-title> <span class="headline">Add Subject</span> </v-card-title>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                            <template v-slot:extension>
                                <v-tabs v-model="tab" align-with-title>
                                    <v-tabs-slider color="gray"></v-tabs-slider>
                                    <v-tab v-for="item in items" :key="item">
                                        {{ item }}
                                    </v-tab>
                                </v-tabs>
                            </template>
                       </v-toolbar>
                        <v-tabs-items v-model="tab">
                            <v-tab-item v-for="item in items" :key="item">
                                <v-card flat>
                                    <v-card-text v-text="text"></v-card-text>
                                    <v-card-text>
                                        <v-container>

                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                   </v-card>
               </v-col>
           </v-row>
        </v-container>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                tab: null,
                items: [
                'All', 'Publish', 'For Approval', 'Drafts',
                ],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
        methods: {
            openDialog() {
                this.dialog = !this.dialog
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>