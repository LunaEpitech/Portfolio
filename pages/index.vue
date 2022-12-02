<template>
    <div class="Repos">
        <li v-for="data in data" :key="data.name">
            <a :href="data.html_url">{{data.name}}<br></a>
        </li>
    </div>
    <div class="mainBox">
        <p>Le <a href="https://thomy-lorenzatti.notion.site/thomy-lorenzatti/Pr-sentation-JAM-Portfolio-1e8c57ecb4044871bb57198238500928" target="_blank">Notion</a></p>
        <p>Documentation <a href="https://v3.nuxtjs.org/" target="_blank">Nuxt 3</a></p>
        <p>Documentation <a href="https://vuejs.org/" target="_blank">Vuejs</a></p>
    </div>
    <header>
        <p>Working towards a better future</p>
    </header>
    <footer>
        <p>  ©2022</p>
    </footer>
</template>

<script setup>
    const data = await $fetch('/api/hello')
</script>

<style scoped>

.mainBox {
    right: 0;
    display: flex;
    float:right;
    color:rgb(229, 184, 244);
    text-shadow: 1px 1px 1px rgb(193, 71, 233);
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position:fixed;
    font-size: 30px;
    width: 30vw;
    height: 100vh;
    background-color: rgb(45, 3, 59);
}

.Repos {
    display:flex;
    float:left;
    left: 5%;
    justify-content: center;
    color:rgb(229, 184, 244);
    text-shadow: 1px 1px 1px rgb(193, 71, 233);
    background-color: rgb(45, 3, 59);
    width: 100vw;
    height: 100vh;
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    text-align: center;
    color:rgb(229, 184, 244);
    text-shadow: 5px 5px 5px rgb(193, 71, 233);
    font-size: 3vw;
    padding-top: 2px;
    padding-bottom: 20px;
    background: rgb(255,128,0);
    background: linear-gradient(180deg, rgb(129, 12, 168) 70%, rgba(0, 0, 0, 0) 100%);
}
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 1px;
    padding-left: 5px;
    color: rgb(229, 184, 244);
    text-shadow: 1px 1px 1px rgb(193, 71, 233);
    background: rgb(255,128,0);
    background: linear-gradient(0deg, rgb(129, 12, 168) 70%, rgba(0, 0, 0, 0) 100%);
}

a {
    text-decoration: underline;
}
</style>