<template lang="pug">
    -
        let arr = [
            {
                icon: "../assets/icons/Calendar.svg",
                text: 'Меню составляется индивидуально под вас'
            },
            {
                icon: "../assets/icons/Apple.svg",
                text: 'Всегда свежие и полезные ингредиенты'
            },
            {
                icon: "../assets/icons/Moto.svg",
                text: 'Быстрая бесплатная доставка'
            },
        ];
    .offer-block
        each item in arr
            .offer-block__item
                picture
                    img(src=item[0], alt="Icon")
                span=item[1]
</template>

<script>
export default {
    name: "OfferBlock"
};
</script>

<style lang="scss"></style>
