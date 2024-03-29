<script lang="ts" setup>
import { cdnUrl } from '~/utils/cdn'
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: t('pages.ringrobotx.title'),
  meta: [
    {
      name: 'description',
      content: t('pages.ringrobotx.description'),
    },
  ],
}))
const tooltip = ref(false)

// const
const cancelTooltip = () => {
  tooltip.value = false
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `一键复制`
}
const copyBash = () => {
  const bash =
    'wget -O install.sh https://gitee.com/waterflames-team/ring-robot-x/raw/master/install.sh && sudo bash install.sh'
  navigator.clipboard.writeText(bash)
  tooltip.value = true
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `已复制`
}

const arr = [
  {
    title: '技能高灵活度',
    content1: '通过技能包管理器',
    content2: '你可以自由安装任何技能',
  },
  {
    title: '简单易配置',
    content1: '配置文件提前抽离',
    content2: '修改用户信息无需打开源代码',
  },
  {
    title: '支持连续对话',
    content1: '我们实现了连续对话',
    content2: '你可以快乐地玩成语接龙了',
  },
  {
    title: '接入简单',
    content1: '我们提供了开放接口',
    content2: '想自己做技能？没问题！',
  },
]
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle
        :text="$t('pages.ringrobotx.description')"
        :img="cdnUrl('ringrobotx-banner.png')"
      />
    </PageHeader>
    <PageBody>
      <PageSection>
        <p>
          RingRobotX 是一个采用单轮对话设计的中文模块化语音机器人框架，也是
          WaterFlames 的一大重点项目群。
        </p>
        <p>
          该项目主体由 WaterFlames团队 使用 Python
          制作，可用于智能音箱，语言遥控，甚至智能客服、家庭管家、微信机器人等等。
        </p>
        <p>
          我们希望通过这个项目群实现语音对话机器人服务人的场景，同时让中国的
          Maker
          们也能够「一小时」搭建属于自己的语音聊天机器人，无需过多以及不必要的配置。
        </p>
      </PageSection>

      <PageSection>
        <div
          class="rounded-xl w-full p-10"
          :style="{
            backgroundImage: `url(${cdnUrl('ringrobotx-feature.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
        >
          <div class="flex flex-col gap-1 items-center">
            <p class="text-4xl ali">特色功能</p>
            <p class="text-lg">至目前开发的版本，我们已有以下特色功能</p>
          </div>
          <div class="flex flex-wrap mt-6 gap-8 justify-around">
            <div
              v-for="item in arr"
              :key="item.title"
              class="bg-black rounded-xl flex flex-col bg-opacity-60 flex-1/2 w-full p-8 items-center justify-center 2xl:w-80"
            >
              <p class="mb-2 text-2xl ali lg:text-3xl">{{ item.title }}</p>
              <p class="text-base lg:text-lg">{{ item.content1 }}</p>
              <p class="text-base lg:text-lg">{{ item.content2 }}</p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <p>
          目前 RingRobotX
          项目群的主体项目已经成为了2022年Gitee最有价值开源项目，我们现已对外公开了以下项目：
        </p>
      </PageSection>

      <PageSection
        class="flex flex-col flex-wrap gap-10 justify-center items-center lg:flex-row"
      >
        <PageCard
          title="RingRobotX"
          content="项目主仓库"
          color="linear-gradient(61deg, #F17146 0%, #FCE3DA 99%)"
          :footer="{
            文档: 'https://docs.waterflames.cn/',
            Gitee: 'https://gitee.com/waterflames-team/ring-robot-x',
            Github: 'https://github.com/waterflames-team/ring-robot-x',
          }"
        ></PageCard>
        <PageCard
          title="Mariner"
          content="技能包管理器"
          color="linear-gradient(61deg, #F17146 0%, #FCE3DA 99%)"
          :footer="{
            文档: 'https://waterflames-team.gitee.io/mariner',
            Gitee: 'https://gitee.com/waterflames-team/mariner',
            Github: 'https://github.com/waterflames-team/mariner',
          }"
        ></PageCard>
      </PageSection>

      <PageSection>
        <p>并且，</p>
        <p>我们在对本项目群展开探索之前也进行了一些实验，</p>
        <p>
          这些项目是 RingRobotX
          的前身，现在他们都已不再维护，如果你感兴趣可以去看看：
        </p>
      </PageSection>

      <PageSection
        class="flex flex-col flex-wrap gap-10 justify-center items-center lg:flex-row"
      >
        <PageCard
          title="lk-robot"
          content="主项目前身"
          color="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(61deg, #5F92EC 0%, #DFE9FB 99%)"
          :footer="{
            Gitee: 'https://gitee.com/waterflames-team/lingkong-robot',
            Github: 'https://github.com/waterflames-team/lingkong-robot',
          }"
        ></PageCard>
        <PageCard
          title="robot-server"
          content="无语言版本"
          color="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(61deg, #5F92EC 0%, #DFE9FB 99%)"
          :footer="{
            Gitee: 'https://gitee.com/waterflames-team/lingkong-robot-server',
            Github: 'https://github.com/waterflames-team/lingkong-robot-server',
          }"
        ></PageCard>
      </PageSection>

      <PageSection>
        <p>
          我们会全部开源我们完成制作的部分，并且全部使用 Apache License 2.0
          开源协议。
        </p>
        <p>
          如果你准备将其闭源并商业使用，那么请确认你知晓 WaterFlames
          不为任何使用了二次分发软件的 安全性，可用性，完整性 以及其可能带来的
          其它风险及损失 承担责任。
        </p>
        <p>其余或有冲突之处以 Apache License 2.0 开源协议为准。</p>
      </PageSection>
      <PageSection>
        <p>
          最后，感谢每一位参与的贡献者。我们也欢迎每一位创作者加入本项目的开源贡献中，共创优秀开源社区。
        </p>
      </PageSection>

      <PageSection>
        <div
          class="rounded-xl flex flex-col w-full py-20 px-5 gap-6 justify-center items-center lg:flex-row xl:gap-8"
          :style="{
            backgroundImage: `url(${cdnUrl('ringrobotx-footer.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
        >
          <div
            class="flex flex-col flex-1 text-3xl gap-4 ali md:gap-6 lg:text-6xl"
          >
            <p>RingRobotX</p>
            <p>马上开耍</p>
          </div>
          <div class="max-w-120 relative md:flex">
            <div
              class="h-auto border-white-300 border-2 rounded-5px shadow ml-4 z-10"
            >
              <div
                class="rounded-t-lg flex space-x-4 bg-gray-200 border-b-2 border-gray-300/75 py-2 px-3 win-header relative dark:bg-slate-800 dark:border-slate-700/75"
              >
                <div class="flex space-x-1 win-controls items-center">
                  <div class="rounded-full bg-red-500 h-3 w-3" />
                  <div class="rounded-full bg-green-500 h-3 w-3" />
                  <div class="rounded-full bg-yellow-500 h-3 w-3" />
                </div>
                <div class="font-bold flex-1 text-left text-sm pr-12"></div>
                <div class="flex text-sm justify-center items-center">
                  <div class="tooltip">
                    <button
                      class="flex text-gray-100 justify-center items-center"
                      @click="copyBash"
                      @mouseout="cancelTooltip"
                    >
                      <span class="tooltiptext">一键复制</span>
                      <icon-material-symbols:content-copy-outline />
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="rounded-b-lg font-mono bg-gray-200/90 text-xs lg:text-sm py-2 px-3 win-body backdrop-filter backdrop-blur-lg dark:bg-slate-800/90"
              >
                <div class="break-all">
                  $ wget -O install.sh
                  https://gitee.com/waterflames-team/ring-robot-x/raw/master/install.sh
                  && sudo bash install.sh
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
