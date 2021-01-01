<template>
    <div>
        <v-container>
            <v-row align="center" justify="center" class="fill-height">
                <v-col lg="8" sm="12" xs="12">
                    <v-breadcrumbs :items="getLink">
                        <template v-slot:item="{ item }">
                        <v-breadcrumbs-item
                            :href="item.href"
                            :disabled="item.disabled"
                        >
                            {{ item.text.toUpperCase() }}
                        </v-breadcrumbs-item>
                        </template>
                    </v-breadcrumbs>
                    <v-layout row wrap >
                        <v-flex xs12 lg6 md8 p-2>
                            <v-card flat>
                                <v-container>
                                    <v-app-bar flat color="white">
                                        <v-toolbar-title>
                                            Subject Details
                                        </v-toolbar-title>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="updateSubject" color="green darken-1" text>
                                            Save
                                        </v-btn>
                                    </v-app-bar>
                                    <v-container>
                                        <v-form class="mt-3">
                                            <v-row>
                                                <v-col lg="8" sm="12" xs="12">
                                                    <v-text-field
                                                    v-model="subject_form.subject"
                                                    label="Subject"
                                                    outlined
                                                    dense
                                                    class="shrink"
                                                    >
                                                    </v-text-field>
                                                    <v-select
                                                    v-model="subject_form.grade"
                                                    dense
                                                    outlined
                                                    :items="gradeOption"
                                                    label="Grade"
                                                    ></v-select>
                                                    <v-textarea
                                                    v-model="subject_form.description"
                                                    outlined
                                                    dense
                                                    name="input-7-4"
                                                    label="Description"
                                                    :value="subject_form.description"
                                                    ></v-textarea>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-container>
                                </v-container>
                            </v-card>
                        </v-flex>
                         <v-flex xs12 md4 p-2>
                            <v-card flat>
                                <v-container>
                                    <v-app-bar flat color="white">
                                        <v-btn 
                                        depressed
                                        block
                                        color="error"
                                        >Delete Subject</v-btn>
                                    </v-app-bar>
                                    <v-card-text>
                                        <span class="overline">Topic Outline</span>
                                        <v-btn block color="primary" @click.stop="indialog = true">Instructional Design</v-btn>
                                        <v-divider></v-divider>
                                        <span class="overline">Subject Status</span>
                                        <v-btn block color="warning mb-5">For approval</v-btn>
                                        <span class="overline">Subject Thumbnail</span>
                                        <v-container>
                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                            class="white--text align-end"
                                            height="200px"></v-img>
                                        </v-container>
                                    </v-card-text>
                                </v-container> 
                            </v-card>
                        </v-flex>
                    </v-layout> 
                </v-col>
            </v-row>  
        </v-container>
        <v-dialog
        v-model="indialog"
        max-width="400px"
        >
            <v-card>
                <v-card-title><span class="headline grey--text darken-3">Instructional Design</span></v-card-title>
                <v-card-text>
                    <v-container class="mt-2">
                        <v-btn block color="primary" @click="addINS">
                            <v-icon>mdi-plus</v-icon>
                            Add
                        </v-btn>

                        <div v-for="(input, index) in instructional" :key="index">
                            <v-card class="mt-3">
                                <v-card-title>
                                    <v-spacer></v-spacer>
                                    <v-btn icon color="red" @click="deleteINS(index)">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-card-title>
                                <v-card-text>
                                    <v-select 
                                    v-model="input.type"
                                    clearable
                                    dense 
                                    outlined
                                    required
                                    label="Select Type" 
                                    :items="instype"></v-select>
                                    <v-text-field
                                    v-model="input.title"
                                    clearable
                                    dense
                                    outlined
                                    required
                                    label="Title"
                                    ></v-text-field>
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-container>
                </v-card-text>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="saveINS">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar
        v-model="snackbar"
        :timeout="time"
        :value="true"
        color="success"
        >Subject Updated!</v-snackbar>
    </div>
</template>

<script>

    import { mapGetters, mapState } from 'vuex'

    export default {
        data() {
            return {
                gradeOption: [1, 2, 3, 4, 5],
                instructional: [],
                instype:['Topic', 'Quiz'],
                indialog: false,
                snackbar: false,
                inputs: [],
                time: 2000
            }
        },
        computed: {
            ...mapGetters('subject',[
                'subject_form',
                'getsnack',
                'getLink'
            ])
        },
        methods: {
            updateSubject() {
               this.$store.dispatch('subject/updateSubject', this.subject_form).then(() => {
                    this.snackbar = this.getsnack
               })
            },
            addINS() {
                this.instructional.push({ 
                    sid: this.subject_form.id, 
                    type: '', 
                    title: '' 
                })
            },
            deleteINS(index) {
                this.instructional.splice(index, 1)
            },
            saveINS() {
                this.$store.dispatch('instructional/addInstructional', this.instructional).then(() => {
                    this.instructional = [],
                    this.indialog = false
                })
                console.log(this.instructional)
            }
        },
        mounted() {
            this.$store.dispatch('subject/showSubject', this.$route.params.suuid)
            console.log(this.$route.params.suuid)
        }
    }
</script>

<style scoped>
    .v-text-field {
        font-size: 12px; 
    }
</style>