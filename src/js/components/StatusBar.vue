<template>
    <b-container fluid class="bg-light text-dark pt-0 pb-1 px-1 fixed-bottom">
        <b-row>
            <b-col>
                <span class="stats">Words: 0 | Characters: 0</span>
            </b-col>
            <b-col class="text-right">
                <span class="status">Status Text</span>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
export default {

};
</script>

<style lang="scss">
.stats, .status {
    text-transform: uppercase;
    font-size: .6rem;
}
</style>
