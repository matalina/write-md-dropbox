<template>
     <b-container fluid class="h-100">
        <b-row class="h-100">
            <b-col cols="12" class="h-100">
                <textarea id="editor"
                    wrap="soft"
                    class="form-control h-100"
                    v-model="editor"
                >
                </textarea>
            </b-col>
        </b-row>
     </b-container>
</template>

<script>
export default {
    data: function() {
        return {
            editor: null,
        };
    }
}
</script>

<style lang="scss">

</style>
