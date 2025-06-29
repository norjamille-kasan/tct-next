<script setup lang="ts">
// TODO: add types
// @ts-ignore
import { HeadlessModal } from '@inertiaui/modal-vue';

import { ref } from 'vue';

const modal = ref(null);
</script>

<template>
    <HeadlessModal
        ref="modal"
        v-slot="{ afterLeave, close, config, emit, getChildModal, getParentModal, id, index, modalContext, onTopOfStack, isOpen, reload, setOpen }"
    >
        <slot
            :afterLeave="afterLeave"
            :close="close"
            :config="config"
            :emit="emit"
            :getChildModal="getChildModal"
            :getParentModal="getParentModal"
            :id="id"
            :index="index"
            :modalContext="modalContext"
            :onTopOfStack="onTopOfStack"
            :isOpen="isOpen"
            :reload="reload"
            :setOpen="setOpen"
        ></slot>
    </HeadlessModal>
</template>
