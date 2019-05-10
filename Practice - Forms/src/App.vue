<template>
    <div class="container">
        <div v-if="!submitted">
            <form>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <!-- Exercise 1 -->
                        <!-- Create a Signup Form where you retrieve the following Information -->
                        <!-- Full Name (First Name + Last Name) -->
                        <name-form v-model="fullName"></name-form>
                        <!-- Mail -->
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="mail">E-Mail</label>
                            <input type="email"
                                   id="mail"
                                   v-model="mail">
                        </div>
                        <!-- Password -->
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="password">Password</label>
                            <input type="password"
                                   id="password"
                                   v-model="password">
                        </div>
                        <!-- Store Data? Yes/No -->
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="store">Store Data?</label>
                            <input type="checkbox"
                                   id="store"
                                   v-model="store">
                        </div>
                        <!-- Exercise 2 -->
                        <!-- Only display the Form if it has NOT been submitted -->
                        <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                    class="btn btn-primary"
                                    @click.prevent="submitted = true">Submit!
                            </button>
                        </div>
                        <!-- Exercise 3 -->
                        <!-- Edit the Example from above and create a custom "Full Name" Control -->
                        <!-- which still holds the First Name and Last Name Input Field -->
                    </div>
                </div>
            </form>
        </div>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName[0]}} {{fullName[1]}}</p>
                        <p>Mail: {{mail}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{store}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NameForm from "./components/NameForm.vue";

    export default {
        data() {
            return {
                fullName: ["", ""],
                mail: "",
                password: "",
                store: false,
                submitted: false,
            }
        },
        components: {
            nameForm: NameForm
        }
    }
</script>

<style>
</style>
