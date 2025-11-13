<script setup></script>

<template>
    <div class="member">
        <div>
            <h4><slot name = "name"></slot></h4>
        </div>
        <h5 class="title"><slot name = "title"></slot></h5>
        <slot name = "image"></slot>
    </div>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

.member {
    display: flex;
    background-color: $primary;
    text-align: center;
    border-radius: 10px;
    flex-direction: column;
    align-content: stretch;
    height: 75%;
    width: 15%;
    min-width: 175px;

    h4,
    h5 {
        margin: 0;
        height: 6%;
        color: white;
    }

    div {
        border-radius: 10px 10px 0px 0px;
        padding: 1px 5px;
        background: #6a829f;

        h4 {

            background: linear-gradient(#cd2d3a, #e35730);
            width: min-content;
            height: 108%;
            padding: 0 12px;
            margin: auto;
            border-radius: 8px;
        }
    }

    h5 {
        border-radius: 0px 0px 10px 10px;
        padding: 4px 1px;
        background: #6a829f;
        text-transform: uppercase;
    }
}
</style>