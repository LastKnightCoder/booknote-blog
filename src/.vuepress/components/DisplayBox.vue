<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<style scoped>
.box {
    width: 100%;
    padding: 25px 35px;
    background-color: white;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
    user-select: none;
}
.theme-dark .box {
    background-color: rgb(73, 92, 105);
    border: 1px solid #111;
}
</style>