<template>
    <div class="w-full h-full">
        <RouterView v-slot="{ Component }">
            <component :is="Component" />
        </RouterView>
    </div>
</template>
