<template>
    <div class="Repos">
        <p><br><br><br><br><br></p>
        <p v-for="data in data" :key="data.name">
            <div class="gitBox">
                <a :href="data.html_url">{{data.name}}</a>
            </div>
        </p>
    </div>
    <div class="mainBox">
        <p>Temporary text !</p>
        <p>Come back later ;)</p>
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
    flex-direction: column;
    color:rgb(229, 184, 244);
    text-shadow: 1px 1px 1px rgb(193, 71, 233);
    background-color: rgb(45, 3, 59);
    width: 100vw;
    height: 100vh;
}
.gitBox {
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    display:flex;
    text-align: left;
    border: 10px solid rgb(129, 12, 168);
    color:rgb(229, 184, 244);
    text-shadow: 1px 1px 1px rgb(193, 71, 233);
    background-color: rgb(193, 71, 233);
    width: 30vw;
    height: 10px;
    align-items:center;
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