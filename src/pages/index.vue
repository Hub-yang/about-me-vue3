<script setup lang='ts'>
import Icon1 from '~/assets/icon1.svg'
import Icon2 from '~/assets/icon2.svg'
import Icon3 from '~/assets/icon3.svg'
import Icon4 from '~/assets/icon4.svg'

let timer: any
const userInfo = {
  name: 'Hubery Yang',
  desc: '👋 Hi, 我是 "Hubery Yang"',
  post: '👨‍💻 前端开发者 | Vue & Nuxt & Js & Python',
  hobby: '🚀 脚本编写, 网站开发',
  script: '💓 拍摄 | 剪辑 | 阅读 | 羽毛球',
  mail: '18830279823@163.com',
  phone: '15932130680',
}

const iconComponents: anyKey = {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
}

function onNavigate(link: number) {
  let url = ''
  switch (link) {
    case 1:
      url = 'https://github.com/Hub-yang'
      break
    case 2:
      url = 'https://twitter.com/mochenghualei'
      break
    case 3:
      url = 'https://space.bilibili.com/278851804'
      break
    case 4:
      url = 'https://www.youtube.com/@HuberyYang'
      break
  }
  window.open(url, '_blank')
}

const tootipShow = ref(false)

async function onCopyClick(type: string) {
  try {
    await navigator.clipboard.writeText((userInfo as anyKey)[type])
    tootipShow.value = true
    clearTimeout(timer)
    timer = setTimeout(() => tootipShow.value = false, 2000)
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (_err) {
    throw new Error('copy mail error')
  }
}
</script>

<template>
  <div class="tootip" :style="{ top: tootipShow ? '10px' : '-50px' }">
    拷贝成功
  </div>
  <div class="content">
    <div class="info_card">
      <div class="card">
        <div class="glass">
          <div class="title">
            {{ userInfo.name }}
          </div>
          <div id="intro">
            <div>{{ userInfo.desc }}</div>
            <div>{{ userInfo.post }}</div>
            <div>{{ userInfo.hobby }}</div>
            <div>{{ userInfo.script }}</div>
            <div class="connection">
              与我联系
            </div>
            <div>📧 [<span class="mail" @click="onCopyClick('mail')">{{ userInfo.mail }}</span>]</div>
            <div>📱 [<span class="mail" @click="onCopyClick('phone')">{{ userInfo.phone }}</span>]</div>
          </div>
        </div>

        <div class="logo">
          <span v-for="key in 4" :key class="circle" :class="[`circle${key + 1}`]">
            <img v-if="key === 4" class="avatar" src="/avatar.webp" alt="">
          </span>
        </div>

        <div class="bottom">
          <div class="social-buttons-container">
            <button v-for="item in 4" :key="item" @click="onNavigate(item)">
              <component :is="iconComponents[`Icon${item}`]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
