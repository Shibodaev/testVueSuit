<template lang="pug">
    section.title-section
        picture.title-section__bg
            img(src="../assets/images/bg-titleSection.jpg", alt="Background")
        .title-section__row
            a.logo(href='/')
                    picture
                        img.logo__img(src='../assets/logo.svg' alt='logotype')
            .title-section__group-links
                a(href='/')
                    svg
                        use(xlink:href='../assets/icons/map.svg#map')
                    span Москва
                div
                    svg
                        use(xlink:href='../assets/icons/phone.svg#phone')
                    a(href='tel:84955485214') 8 495 548 5214
        .title-section__row
            h1 Доставка сытных обедов
            p Полезные и вкусные обеды, как для небольшой компании, так и для целого офиса
            b.btn Заказать дегустацию
        .title-section__row
            

</template>

<script>
export default {
  name: "TitleSection"
};
</script>

<style></style>
