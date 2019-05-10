<template>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <label for="firstName">First Name</label>
        <input type="text"
               id="firstName"
               :value="value[0]"
               @input="$emit('input', [$event.target.value, value[1]])">
        <label for="lastName">Last Name</label>
        <input type="text"
               id="lastName"
               @input="$emit('input', [value[0], $event.target.value])">
    </div>
</template>

<script>
    export default {
        name: "NameForm",
        props: ["value"]
    }
</script>

<style scoped>

</style>