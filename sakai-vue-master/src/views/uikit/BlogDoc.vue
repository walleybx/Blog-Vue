<template>
    <div v-loading="loading" class="flex-auto">
        <Waterfall :list="list" :breakpoints="{ 1200: { rowPerView: 4 }, 800: { rowPerView: 3 }, 500: { rowPerView: 2 } }" :loadProps="{ loading, error }" :backgroundColor="isDarkTheme ? '#18181B' : '#ffffff'">
            <template #item="{ item, url }">
                <div class="overflow-hidden transition-all duration-300 ease-linear bg-transparent rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-600 group" @click="openDialog(item)">
                    <div class="overflow-hidden">
                        <LazyImg :url="url" title="title" :alt="item.name" class="transition-all duration-300 ease-linear cursor-pointer group-hover:scale-105" />
                    </div>
                </div>
                <h2 class="group-hover:text-yellow-100" :class="{ 'text-gray-50': isDarkTheme, 'text-gray-900': !isDarkTheme }">
                    {{ item.title }}
                </h2>
            </template>
        </Waterfall>

        <!-- <div v-show="!loading" class="flex justify-center py-10 bg-gray-900">
      <button class="px-5 py-2 text-white transition-all duration-300 bg-gray-700 rounded-full cursor-pointer text-md hover:bg-gray-800" @click="handleLoadMore">
        加载更多
      </button>
    </div> -->
    </div>
</template>

<script setup>
import { useLayout } from '@/layout/composables/layout';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next';
import 'vue-waterfall-plugin-next/dist/style.css';

const router = useRouter();
const list = ref([
    {
        title: 'The Legend of Zelda: Breath of the Wild',
        name: 'nam1',
        description: 'Explore the vast world of Hyrule in this critically acclaimed action-adventure game.',
        src: new URL('../../assets/images/p1.jpg', import.meta.url).href, // 本地图像路径,
        comments: ['One of the best games of all time!', 'A masterpiece of open-world design.', 'Amazing graphics and gameplay.']
    },
    {
        title: 'The Witcher 3: Wild Hunt',
        name: 'nam2',
        description: 'Step into the shoes of Geralt of Rivia, a monster hunter for hire, in this epic RPG.',
        src: new URL('../../assets/images/p2.jpg', import.meta.url).href, // 本地图像路径,
        comments: ['Incredible storytelling and world-building.', 'A must-play for RPG fans.', 'The expansions are just as good as the base game.']
    },
    {
        title: 'The Witcher 3: Wild Hunt',
        name: 'nam2',
        description: 'Step into the shoes of Geralt of Rivia, a monster hunter for hire, in this epic RPG.',
        src: new URL('../../assets/images/p2.jpg', import.meta.url).href, // 本地图像路径,
        comments: ['Incredible storytelling and world-building.', 'A must-play for RPG fans.', 'The expansions are just as good as the base game.']
    },
    {
        title: 'The Witcher 3: Wild Hunt',
        name: 'nam4',
        description: 'Step into the shoes of Geralt of Rivia, a monster hunter for hire, in this epic RPG.',
        src: new URL('../../assets/images/p2.jpg', import.meta.url).href, // 本地图像路径,
        comments: ['Incredible storytelling and world-building.', 'A must-play for RPG fans.', 'The expansions are just as good as the base game.']
    },
    {
        title: 'The Witcher 3: Wild Hunt',
        name: 'nam5',
        description: 'Step into the shoes of Geralt of Rivia, a monster hunter for hire, in this epic RPG.',
        src: new URL('../../assets/images/p3.jpg', import.meta.url).href, // 本地图像路径,
        comments: ['Incredible storytelling and world-building.', 'A must-play for RPG fans.', 'The expansions are just as good as the base game.']
    }
]);

const productDialog = ref(false);
const selectedItem = ref(null);

const { isDarkTheme } = useLayout();

const dialogStyle = {
    width: '60%',
    height: '80%',
    margin: 'auto'
};

const toast = useToast();
////////////////////////////////////////////////////////////////////////
const openDialog = (item) => {
    selectedItem.value = item;
    router.push('/blog/TravelContent'); // 导航到 /test 路径
};

function showSuccess() {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Detail', life: 3000 });
}

function gotoUser() {
    console.log('gotoUser');
}
</script>

<style scoped>
.lazy__img[lazy='loading'] {
    padding: 5em 0;
    width: 48px;
}

.lazy__img[lazy='loaded'] {
    width: 100%;
}

.lazy__img[lazy='error'] {
    padding: 5em 0;
    width: 48px;
}

.dialog-content {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    height: 100%;
    margin-top: 20px;
}

.left-section {
    flex: 7;
}

.ml-auto {
    margin-left: auto; /* 将头像和用户名推到容器的最右边 */
}

.clickable {
    cursor: pointer; /* 让元素可点击 */
}

.clickable:hover {
    transform: scale(1.05); /* 鼠标悬停时轻微放大 */
    transition: transform 0.2s ease-in-out; /* 添加平滑过渡效果 */
}
</style>
