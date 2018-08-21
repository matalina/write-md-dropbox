<template>
    <b-navbar toggleable="md" type="light" variant="light" fixed="top">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/" exact>Write MD Dropbox</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item to="/"><i class="fas fa-home fa-fw"></i></b-nav-item>
                <b-nav-item to="/about"><i class="fas fa-info fa-fw"></i></b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item to="/tree"><i class="fas fa-folder fa-fw"></i></b-nav-item>
                <b-nav-item to="/"><i class="fas fa-folder-open fa-fw"></i></b-nav-item>
                <b-nav-item to="/preview"><i class="far fa-eye fa-fw"></i></b-nav-item>
                <b-nav-item to="/editor"><i class="fas fa-edit fa-fw"></i></b-nav-item>
                <b-nav-item to="/settings"><i class="fal fa-cog fa-fw"></i></b-nav-item>

            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
export default {

};
</script>

<style lang="scss">

</style>
