<template>
    <div>
        <v-container>
           <v-row align="center" justify="center" class="mt-5">
               <v-col xl="8" lg="10" md="12" sm="12">
                   <v-card>
                       <v-toolbar flat>
                           <v-toolbar-title></v-toolbar-title>
                           <v-spacer></v-spacer>
                           <v-btn icon @click.stop="dialog = true">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>

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
                            <v-tab-item v-if="subjects">
                                <v-card flat>
                                    <v-card-text>
                                        <v-container>
                                            <v-card-text>
                                                <v-row>
                                                    <v-col v-for="all in subjects" :key="all['id']" lg="4" md="6" sm="6" xs="12">
                                                        <v-card class="" max-width="300">
                                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                                            class="white--text align-end"
                                                            height="300px">
                                                                <v-card-title>{{all['subject'] + ' ' + all['grade']}} </v-card-title>
                                                            </v-img>
                                                            <v-card-subtitle class="pb-0">
                                                                Teacher Dela Cruz
                                                            </v-card-subtitle>
                                                            <v-card-text>
                                                               <div class="">Lorem Ipsum</div>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-btn text color="primary">
                                                                    Read More
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="text-center">
                                            <v-container>
                                                <v-row justify="center">
                                                    <v-col cols="8">
                                                    <v-container class="max-width">
                                                        <v-pagination
                                                        v-model="page"
                                                        class="my-2"
                                                        :length="total"
                                                        @input="onPageChange"
                                                        ></v-pagination>
                                                    </v-container>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </v-tab-item>
                            <!-- <v-tab-item v-if="publish">
                                <v-card flat>
                                    <v-card-text>
                                        <v-container>
                                            <v-card-text>
                                                <v-row>
                                                    <v-col v-for="item in publish" :key="item['id']" lg="4" md="6" sm="6" xs="12">
                                                        <v-card class="" max-width="300">
                                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                                            class="white--text align-end"
                                                            height="300px">
                                                                <v-card-title>{{item['subject']}}</v-card-title>
                                                            </v-img>
                                                            <v-card-subtitle class="pb-0">
                                                                Teacher Dela Cruz
                                                            </v-card-subtitle>
                                                            <v-card-text>
                                                               <div class="">Lorem Ipsum</div>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-btn text color="primary">
                                                                    Read More
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item v-if="approval">
                                <v-card flat>
                                    <v-card-text>
                                        <v-container>
                                            <v-card-text>
                                                <v-row>
                                                    <v-col v-for="approvals in approval" :key="approvals['id']" lg="4" md="6" sm="6" xs="12">
                                                        <v-card class="" max-width="300">
                                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                                            class="white--text align-end"
                                                            height="300px">
                                                                <v-card-title>{{approvals['subject']}}</v-card-title>
                                                            </v-img>
                                                            <v-card-subtitle class="pb-0">
                                                                Teacher Dela Cruz
                                                            </v-card-subtitle>
                                                            <v-card-text>
                                                               <div class="">Lorem Ipsum</div>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-btn text color="primary">
                                                                    Read More
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item v-if="draft">
                                <v-card flat>
                                    <v-card-text>
                                        <v-container>
                                            <v-card-text>
                                                <v-row>
                                                    <v-col v-for="item in draft" :key="item['id']" lg="4" md="6" sm="6" xs="12">
                                                        <v-card class="" max-width="300">
                                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                                            class="white--text align-end"
                                                            height="300px">
                                                                <v-card-title>{{item['subject']}}</v-card-title>
                                                            </v-img>
                                                            <v-card-subtitle class="pb-0">
                                                                Teacher Dela Cruz
                                                            </v-card-subtitle>
                                                            <v-card-text>
                                                               <div class="">Lorem Ipsum</div>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-btn text color="primary">
                                                                    Read More
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item> -->
                        </v-tabs-items>
                   </v-card>
               </v-col>
           </v-row>
        </v-container>
        <v-dialog v-model="dialog" max-width="400px">
            <v-card>
                <v-card-title><span class="headline green--text">Add Subject</span> </v-card-title>
                <v-card-text>
                    <v-container class="mt-5">
                        <v-text-field v-model="form.subject" clearable rounded dense outlined label="Name"></v-text-field>
                        <v-select v-model="form.grade" clearable rounded dense outlined label="Grade Level" :items="grade"></v-select>
                    </v-container>
                </v-card-text>
                <v-card-actions class="mt-0 pt-0">
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="dialog = false">
                        Cancel
                    </v-btn>

                    <v-btn color="green darken-1" text @click="addSubject">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                dialog: false,
                form: {
                    subject: null,
                    grade: null,
                },
                grade: [1, 2, 3, 4, 5],
                tab: null,
                items: [
                'All', 'Publish', 'For Approval', 'Drafts',
                ],
                pagination: {
                    page: 1,
                    total: 0,
                }

            }
        },
        computed: {
            ...mapGetters('subject',[
                'subjects',
                'page',
                'total'
            ]),

            // all: function() {
            //     return this.subjects['all']
            // },
            // approval: function() {
            //     return this.subjects['catergory']
            // },
            // publish: function() {
            //     return this.subjects['catergory']
            // },
            // draft: function() {
            //     return this.subjects['catergory']
            // }
        },
        methods: {
            addSubject() {
                this.$store.dispatch('subject/addSubject', this.form).then(() => {
                    this.fetchSubject()
                    this.dialog = false
                })
            },
            fetchSubject() {
                this.$store.dispatch('subject/allSubject')
            },
            onPageChange() {
                // this.$store.dispatch('subject/paginateSubject')
                this.$store.dispatch('subject/allSubject')
            }
        },
        mounted() {
            this.fetchSubject()

            // this.pagination.page = this.$store.getters['subject/page']
            // this.pagination.total = this.$store.getters['subject/total']
        }
    }
</script>

<style lang="scss" scoped>

</style>
