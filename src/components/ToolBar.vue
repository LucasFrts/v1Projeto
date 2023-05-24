<template>
     <div class="tool-bar">
        <fa icon="bars"></fa>
        <fa :icon="['fab', 'firefox']"></fa>
        <fa icon="envelope"></fa>
    </div>
</template>
<style scoped>
.tool-bar{
    width: 5rem;
    background-color: #1a0d0ef2;
    height: 100vh;
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
@media(max-width:768px){
.tool-bar{
    width: 100vw;
    background-color: #1a0d0ef2;
    height: 5rem;
    position: fixed;
    bottom: 0;
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: row;
    padding-left: 1rem;
    padding-right: 1rem;
}
}
.tool-bar:nth-child(n){
    color:#fafafa;
    font-size: 2rem;
}
</style>