<template>

    <header lang="pug">
        <div class="header__inner">
            <div class="header__row">
                <a href="/" class="logo">
                    <picture><img src="../assets/logo.svg" alt="logotype" class="logo__img"/></picture>
                </a>
                <div class="header__contacts">

                </div>
            </div>
        </div>
        
    </header>
</template>

<script>

export default {
    name: "Header",
};
</script>

<style lang="scss">
.header {
    &__inner {
        width: 100%;
        max-width: $container-xxl;
        margin: 0 auto;
    }
    &__row {
        display: flex;
    }
}
</style>
