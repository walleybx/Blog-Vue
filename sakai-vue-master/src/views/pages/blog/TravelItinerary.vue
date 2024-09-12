<template>
    <!-- <div class="travel-itinerary"> -->
    <div class="flex justify-end gap-2 mb-4">
        <Button v-for="(day, index) in itinerary" :key="index" @click="active = String(index)" :rounded="true" :label="index + 1" class="w-8 h-8 p-0" :outlined="active !== String(index)" />
    </div>
    <Accordion v-model:value="active">
        <AccordionPanel v-for="(day, index) in itinerary" :key="index" :value="String(index)">
            <AccordionHeader>{{ day.title }}</AccordionHeader>
            <AccordionContent>
                <CustomTimeline :items="day.activities" />
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
    <!-- </div> -->
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import { defineComponent, ref } from 'vue';
import CustomTimeline from './CustomTimeline.vue';

export default defineComponent({
    name: 'TravelItinerary',
    components: {
        Accordion,
        AccordionPanel,
        CustomTimeline
    },
    setup() {
        const active = ref('0');
        const itinerary = ref([
            {
                title: 'Day 1 - 广州到汕头',
                value: '0',
                activities: [
                    {
                        icon: 'pi pi-train',
                        iconColor: '#1e88e5',
                        title: '出发：广州东站出发',
                        description: '乘坐07:08的D7716班列车，从广州东站出发，预计10:18到达汕头站。全程3个小时10分钟',
                        time: '07:08',
                        links: [
                            { icon: '#icon-maps', url: 'https://surl.amap.com/3OFOZeI1ughz' },
                            { icon: '#icon-xiaohongshu', url: '#' }
                        ]
                    },
                    {
                        icon: 'pi pi-utensils',
                        iconColor: '#fb8c00',
                        title: '午餐：杏花吴记牛肉火锅',
                        description: '一下汕头站，直接前往杏花吴记牛肉拿号。这家真的超火，排队超多，但是超级好吃！',
                        time: '10:40',
                        links: [
                            { icon: '#icon-maps', url: '#' },
                            { icon: '#icon-xiaohongshu', url: '#' }
                        ],
                        images: ['/src/assets/images/p1.jpg', '/src/assets/images/p2.jpg', '/src/assets/images/p3.jpg']
                    },
                    {
                        icon: 'pi pi-home',
                        iconColor: '#43a047',
                        title: '酒店：汕头国际大酒店',
                        description: '入住酒店，稍作休息',
                        time: '14:00',
                        links: [
                            { icon: '#icon-maps', url: '#' },
                            { icon: 'pi pi-external-link', url: '#' }
                        ],
                        images: ['/src/assets/images/p3.jpg', '/src/assets/images/p4.jpg']
                    }
                ]
            },
            {
                title: 'Day 2 - 汕头到厦门',
                value: '1',
                activities: [
                    {
                        icon: 'pi pi-train',
                        iconColor: '#1e88e5',
                        title: '出发：广州东站出发',
                        description: '乘坐07:08的D7716班列车，从广州东站出发，预计10:18到达汕头站。全程3个小时10分钟',
                        time: '07:08',
                        links: [
                            { icon: '#icon-maps', url: '#' },
                            { icon: 'pi pi-calendar', url: '#' }
                        ]
                    },
                    {
                        icon: 'pi pi-utensils',
                        iconColor: '#fb8c00',
                        title: '午餐：杏花吴记牛肉火锅',
                        description: '一下汕头站，直接前往杏花吴记牛肉拿号。这家真的超火，排队超多，但是超级好吃！',
                        time: '10:40',
                        links: [
                            { icon: 'iconfont icon-maps', url: '#' },
                            { icon: 'pi pi-external-link', url: '#' }
                        ],
                        images: ['/images/restaurant1.jpg', '/images/restaurant2.jpg', '/images/restaurant3.jpg']
                    },
                    {
                        icon: 'pi pi-home',
                        iconColor: '#43a047',
                        title: '酒店：汕头国际大酒店',
                        description: '入住酒店，稍作休息',
                        time: '14:00',
                        tags: ['小红书'],
                        links: [
                            { icon: 'iconfont icon-maps', url: '#' },
                            { icon: 'pi pi-external-link', url: '#' }
                        ],
                        images: ['/images/hotel1.jpg', '/images/hotel2.jpg']
                    }
                ]
            }
            // ... 可以继续添加更多天的行程
        ]);

        return {
            itinerary,
            active
        };
    }
});
</script>

<style scoped>
.travel-itinerary {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

:deep(.p-accordion-header-link) {
    font-weight: bold;
}

:deep(.p-accordion-content) {
    padding: 1rem;
}
</style>
