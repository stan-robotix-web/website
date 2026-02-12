<script setup>

const props = defineProps({
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
    <div class="member">
        <div>
            <h4><slot name = "name"></slot></h4>
            <h5 class="title"><slot name = "title"></slot></h5>
        </div>
        <slot name = "image"></slot>
        <img :src=link>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/base.scss";

.member {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: base.$primary;
    border-radius: 10px;
    width: 15%;
    min-width: 175px;

    h4,
    h5 {
        margin: 0;
        color: white;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 4px;
        border-radius: 10px 10px 0px 0px;
        background: base.$secondary;

        h4 {
            background: linear-gradient(base.$accent, base.$orange);
            padding: 0 8px;
            border-radius: 8px;
        }

        h5 {
            text-transform: uppercase;
        }
    }

    img {
        border-radius: 0 0 10px 10px;
        aspect-ratio: 2 / 3;
    }
}
</style>