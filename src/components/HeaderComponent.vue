<script setup lang="ts">
import { ref } from 'vue';
import { useProjects } from '../stores/projects/projects';
import { useUser } from '../stores/user/user'

const { user } = useUser();
const { projects, currentProjectRevision, setCurrentProject } = useProjects();

// This should happen in a component that lists the projects and allows the user to select one, but
// since that isn't being implemented here, set the current project to the first one in the list
if(projects.value && projects.value.length > 0) {
  setCurrentProject(projects.value[0].id)
}

const topMinActive = ref(true);
const bottomMinActive = ref(false);

function topMinClicked() {
  topMinActive.value = true;
}

function topMaxClicked() {
  topMinActive.value = false;
}

function bottomMinClicked() {
  bottomMinActive.value = true;
}

function bottomMaxClicked() {
  bottomMinActive.value = false;
}

</script>

<template>
  <div class="flex-none flex-col p-4 border-b-2 border-b-slate-200">
    <div class="header-title text-2xl text-slate-700">Projects</div>
    <div class="flex h-full items-center pb-2">
      <div class="flex h-full w-1/3 items-center gap-2">
        <button class="border-none p-2 text-center flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.533 6.09998V7.76665H3.53301L8.11634 12.35L6.93301 13.5333L0.333008 6.93331L6.93301 0.333313L8.11634 1.51665L3.53301 6.09998H13.533Z"
              fill="#3B5169"
            />
          </svg>
        </button>
        <div class="text-slate-700 text-base font-semibold">{{ currentProjectRevision?.name }}</div>
        <button class="border-none bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded tracking-wide">English</button>
        <button class="border-none p-2 text-center flex items-center justify-center">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.7247 11.5584L8.60801 9.46669L8.63301 9.44169C10.083 7.82502 11.1163 5.96669 11.7247 4.00002H14.1663V2.33335H8.33301V0.666687H6.66634V2.33335H0.833008V4.00002H10.1413C9.58301 5.60002 8.69968 7.12502 7.49967 8.45835C6.72467 7.60002 6.08301 6.65835 5.57467 5.66669H3.90801C4.51634 7.02502 5.34967 8.30835 6.39134 9.46669L2.14967 13.65L3.33301 14.8334L7.49967 10.6667L10.0913 13.2584L10.7247 11.5584ZM15.4163 7.33335H13.7497L9.99967 17.3334H11.6663L12.5997 14.8334H16.558L17.4997 17.3334H19.1663L15.4163 7.33335ZM13.2329 13.1666L14.5829 9.55829L15.9329 13.1666H13.2329Z"
              fill="#3B5169"
            />
          </svg>
        </button>
        <button class="border-none p-2 text-center flex items-center justify-center">
          <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.333 1.99998C10.333 1.07951 11.0792 0.333313 11.9997 0.333313C12.9201 0.333313 13.6663 1.07951 13.6663 1.99998C13.6663 2.92045 12.9201 3.66665 11.9997 3.66665C11.0792 3.66665 10.333 2.92045 10.333 1.99998ZM5.33301 1.99998C5.33301 1.07951 6.0792 0.333313 6.99967 0.333313C7.92015 0.333313 8.66634 1.07951 8.66634 1.99998C8.66634 2.92045 7.92015 3.66665 6.99967 3.66665C6.0792 3.66665 5.33301 2.92045 5.33301 1.99998ZM0.333008 1.99998C0.333008 1.07951 1.0792 0.333313 1.99967 0.333313C2.92015 0.333313 3.66634 1.07951 3.66634 1.99998C3.66634 2.92045 2.92015 3.66665 1.99967 3.66665C1.0792 3.66665 0.333008 2.92045 0.333008 1.99998Z"
              fill="#3B5169"
            />
          </svg>
        </button>
      </div>
      <div class="flex h-full w-1/3 items-center gap-2 justify-center">
        <div class="flex-col items-center justify-center">
          <div class="h-9"></div>
          <div class="flex p-2">
            <button
              class="border-none px-4 py-2 rounded-l-md tracking-wide font-semibold text-xs"
              :class="{
                'bg-slate-700': topMinActive,
                'bg-slate-200': !topMinActive,
                'text-white': topMinActive,
                'text-slate-700': !topMinActive
              }"
              @click="topMinClicked"
            >
              <svg class="inline mr-2" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 11H16.25V13H0.25V11ZM0.25 8H16.25V10H0.25V8ZM12.25 3L8.25 7L4.25 3H7.25V0H9.25V3H12.25ZM4.25 18L8.25 14L12.25 18H9.25V21H7.25V18H4.25Z" :fill="topMinActive ? 'white' : '#3B5169'"/>
              </svg>
              Min
            </button>
            <button
              class="border-none px-4 py-2 rounded-r-md tracking-wide font-semibold text-xs"
              :class="{
                'bg-slate-700': !topMinActive,
                'bg-slate-200': topMinActive,
                'text-white': !topMinActive,
                'text-slate-700': topMinActive
              }"
              @click="topMaxClicked"
            >
              <svg class="inline mr-2" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0835 6.49996V11.5H10.5835L7.25016 14.8333L3.91683 11.5H6.41683V6.49996H3.91683L7.25016 3.16663L10.5835 6.49996H8.0835ZM0.583496 0.666626H13.9168V2.33329H0.583496V0.666626ZM0.583496 15.6666H13.9168V17.3333H0.583496V15.6666Z" :fill="!topMinActive ? 'white' : '#3B5169'"/>
              </svg>
              Max
            </button>
          </div>
          <div class="flex p-2">
            <button
              class="border-none px-4 py-2 rounded-l-md tracking-wide font-semibold text-xs"
              :class="{
                'bg-slate-700': bottomMinActive,
                'bg-slate-200': !bottomMinActive,
                'text-white': bottomMinActive,
                'text-slate-700': !bottomMinActive
              }"
              @click="bottomMinClicked"
            >
              <svg class="inline mr-2" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 11H16.25V13H0.25V11ZM0.25 8H16.25V10H0.25V8ZM12.25 3L8.25 7L4.25 3H7.25V0H9.25V3H12.25ZM4.25 18L8.25 14L12.25 18H9.25V21H7.25V18H4.25Z" :fill="bottomMinActive ? 'white' : '#3B5169'"/>
              </svg>
              Min
            </button>
            <button
              class="border-none px-4 py-2 rounded-r-md tracking-wide font-semibold text-xs"
              :class="{
                'bg-slate-700': !bottomMinActive,
                'bg-slate-200': bottomMinActive,
                'text-white': !bottomMinActive,
                'text-slate-700': bottomMinActive
              }"
              @click="bottomMaxClicked"
            >
              <svg class="inline mr-2" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0835 6.49996V11.5H10.5835L7.25016 14.8333L3.91683 11.5H6.41683V6.49996H3.91683L7.25016 3.16663L10.5835 6.49996H8.0835ZM0.583496 0.666626H13.9168V2.33329H0.583496V0.666626ZM0.583496 15.6666H13.9168V17.3333H0.583496V15.6666Z" :fill="!bottomMinActive ? 'white' : '#3B5169'"/>
              </svg>
              Max
            </button>
          </div>
        </div>
      </div>
      <div class="flex h-full w-1/3 items-center gap-4 justify-end">
        <button class="border-none p-2 text-center flex items-center justify-center">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99996 3.59961C10.3556 3.59961 11.4545 4.67413 11.4545 5.99961C11.4545 7.32509 10.3556 8.39961 8.99996 8.39961C7.64435 8.39961 6.54541 7.32509 6.54541 5.99961C6.54541 4.67413 7.64435 3.59961 8.99996 3.59961ZM9 0C13.0909 0 16.5845 2.488 18 6C16.5845 9.512 13.0909 12 9 12C4.90909 12 1.41545 9.512 0 6C1.41545 2.488 4.90909 0 9 0ZM1.78369 5.99961C3.13369 8.68761 5.92369 10.3996 9.00006 10.3996C12.0764 10.3996 14.8664 8.68761 16.2164 5.99961C14.8664 3.31161 12.0764 1.59961 9.00006 1.59961C5.92369 1.59961 3.13369 3.31161 1.78369 5.99961Z" fill="#3B5169"/>
          </svg>
        </button>
        <button class="border-none p-2 text-center flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 17.5L18 9L15 12L12 8.5C11 7.5 11 6.5 11 6.5L11 0.5H7L7 7.5C7 7.5 7 8.5 7.53 9.5C8.06 10.5 9 11.5 9 11.5L12 14.92L9.5 17.5M3 17.5L7.46 13.03L7 12.5C7 12.5 6.07 11.5 5.53 10.5C5.32 10.1 5.2 9.71 5.13 9.37L0 14.5" fill="#3B5169"/>
          </svg>
        </button>
        <button class="border-none bg-pink-700 text-white text-s pl-6 pr-4 rounded-lg tracking-wider flex">
          <div class="pr-6 py-2 border-r-white border-r-2">
            Save
          </div>
          <div class="pl-3 py-2">
            <svg class="inline" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.1665 0.500041L0.83317 0.500041L4.99984 6.33337" fill="white"/>
            </svg>
            </div>
        </button>
        <button class="border-none bg-slate-800 text-white text-s px-6 py-2 rounded-lg tracking-wider">Publish</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
