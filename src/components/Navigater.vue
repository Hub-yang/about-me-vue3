<script setup lang='ts'>
const links = [
  {
    title: 'Vue',
    url: '',
  },
  {
    title: 'to React',
    url: 'https://huberyyang.site:86/',
  },
  {
    title: 'to Html',
    url: 'https://huberyyang.site/',
  },
]

function getItemClass(key: string): string {
  switch (key) {
    case 'Vue':
      return 'ml8px px12px py4px rounded-8px bg-#42b883 hover:bg-white color-black hover:color-#42b883  text-center relative transition-all transition-ease transition-duration-300'
    case 'to React':
      return 'ml12px transition-color transition-ease transition-300 hover:color-#087ea4 cursor-pointer'
    case 'to Html':
      return 'ml12px transition-color transition-ease transition-300 hover:color-#dd4b25 cursor-pointer'
    default:
      return ''
  }
}

function onNavigate(url: string) {
  if (!url)
    return false
  window.open(url, '_self')
}
</script>

<template>
  <div flex="~" absolute left="10px" top="10px" z-1000 items-center text-xl font-bold>
    <span>Build with</span>
    <span v-for="{ title, url } in links" :key="title" class="group" :class="getItemClass(title)" @click="onNavigate(url)">{{ title }}
      <span v-if="title === 'Vue'" left="50%" absolute bottom-6px h2px w0px translate-x--20px group-hover:w40px bg="#42b883" transition="width ease 600" />
    </span>
  </div>
</template>
