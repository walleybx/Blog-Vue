<template>
    <div class="custom-timeline">
        <div v-for="(item, index) in items" :key="index" class="timeline-item">
            <div class="timeline-icon" :style="{ backgroundColor: item.iconColor || '#007bff' }">
                <i :class="item.icon"></i>
            </div>
            <!-- <div class="timeline-content" @click="openDialog(item)"> -->
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>{{ item.title }}</h3>
                    <span class="timeline-time" v-if="item.time">{{ item.time }}</span>
                </div>
                <div class="timeline-links" v-if="item.links && item.links.length">
                    <a v-for="(link, linkIndex) in item.links" :key="linkIndex" :href="link.url" target="_blank" class="link-icon">
                        <!-- <i :class="link.icon"></i> -->
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="link.icon"></use>
                        </svg>
                    </a>
                </div>
                <div class="timeline-images" v-if="item.images && item.images.length">
                    <div v-for="(img, imgIndex) in item.images" :key="imgIndex" class="image-container">
                        <img :src="img" />
                    </div>
                </div>
                <p v-if="item.description" class="timeline-description">{{ item.description }}</p>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="displayDialog" closable="false" :style="dialogStyle" maximizable header="Game Details" :modal="true">
        <!-- 你的内容 -->
        <p>内容待定啦</p>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});

const displayDialog = ref(false);
const dialogStyle = {
    width: '60vw', // 占屏幕宽度的 60%
    height: 'auto', // 根据内容自动调整高度
    margin: '0 auto', // 水平居中
    top: '20%', // 距离顶部 20%，使其垂直居中
    maxHeight: '80vh', // 最大高度为 80% 的视口高度，防止内容过多时溢出
    overflowY: 'auto' // 内容溢出时启用滚动条
};

function openDialog(item) {
    displayDialog.value = true;
    console.log(item); // 可以在这里处理打开对话框时的逻辑
}
</script>

<style scoped>
.custom-timeline {
    position: relative;
    padding-left: 40px;
}

.timeline-item {
    position: relative;
    margin-bottom: 30px;
}

.timeline-icon {
    position: absolute;
    left: -40px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.timeline-content {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 4px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.12),
        0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer; /* 鼠标指针变成一只手 */
}

/* 悬停效果 */
.timeline-content:hover {
    box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.2),
        0 3px 6px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

/* 点击效果 */
.timeline-content:active {
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.timeline-header h3 {
    margin: 0;
    font-size: 1.2em;
}

.timeline-time {
    font-size: 0.9em;
    color: #6c757d;
}

.timeline-tags {
    margin-bottom: 10px;
}

.tag {
    background-color: #e9ecef;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8em;
    margin-right: 5px;
}

.timeline-links {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 10px;
}

.link-icon {
    margin-right: 10px;
    font-size: 1.2em;
    color: #007bff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.timeline-images {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
}

.image-container {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.timeline-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.timeline-description {
    margin: 0;
    font-size: 0.9em;
}

/* 连接线 */
.custom-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    width: 2px;
    background-color: #e9ecef;
}

.icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
}
</style>
