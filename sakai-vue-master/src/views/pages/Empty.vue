<template>
    <div class="flex flex-col travel-page md:flex-row">
        <div class="flex-grow main-content md:mr-4">
            <h1 class="mb-4 text-2xl font-bold itinerary-title">The Legend of Zelda: Breath of the Wild</h1>
            <TravelItinerary />
        </div>
        <div class="w-full sidebar md:w-64 md:flex-shrink-0">
            <div class="flex flex-col items-center mb-4 user-info">
                <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt="User Avatar" class="w-20 h-20 mb-2 rounded-full avatar" />
                <span class="mb-2 font-bold username">Amy Elsner</span>
                <Button label="关注" class="p-button-rounded p-button-danger" />
            </div>
            <div class="flex flex-wrap justify-center gap-2 itinerary-tags">
                <Tag><i class="pi pi-clock text-primary"></i>Primary</Tag>
                <Tag severity="success"><i class="pi pi-comments text-primary"></i>Success</Tag>
                <Tag severity="info"><i class="pi pi-eye text-primary"></i>Info</Tag>
            </div>
        </div>
    </div>
</template>

<script>
import TravelItinerary from '@/views/pages/blog/TravelItinerary.vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EmptyPage',
    components: {
        TravelItinerary,
        Button,
        Tag
    }
});
</script>

<style lang="postcss" scoped>
.travel-page {
    @apply max-w-6xl mx-auto p-5 bg-gray-100;
}

.main-content {
    @apply bg-white p-4 rounded-lg shadow;
}

.sidebar {
    @apply bg-white p-4 rounded-lg shadow mt-4 md:mt-0;
}

.avatar {
    @apply w-20 h-20 rounded-full;
}

.username {
    @apply font-bold text-lg;
}

.itinerary-tags {
    @apply mt-4;
}
</style>
