<script setup>
import { certifications, factoryCapabilities, factoryItems, images } from './siteData'
</script>

<template>
  <main>
    <section class="page-hero compact-hero">
      <p class="eyebrow">Factory</p>
      <h1>工厂实力</h1>
      <p class="lead">
        以精益制造与质量体系守住每一组电池的稳定性，让产品经得起客户检验和时间洗礼。
      </p>
    </section>

    <section class="section split-section white-section">
      <div class="split-media">
        <img :src="images.qualityImage" alt="三富锂电质量制造与检测能力" />
      </div>
      <div class="split-copy">
        <p class="eyebrow">Quality</p>
        <h2>质量重于泰山，品质铸就未来</h2>
        <p>
          三富锂电将工匠精神与现代工艺融合，重视制造环节的严谨、专注与持续改进，通过检测设备和过程数据控制提升产品一致性。
        </p>
        <ul class="check-list">
          <li v-for="item in factoryItems" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Manufacturing</p>
        <h2>从研发到出货的制造能力</h2>
        <p>围绕电池模组的安全性、一致性和长期可维护性，建立可复制的项目交付流程。</p>
      </div>
      <div class="feature-grid">
        <article v-for="item in factoryCapabilities" :key="item.title">
          <span>{{ item.title }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section white-section">
      <div class="section-heading">
        <p class="eyebrow">System</p>
        <h2>认证、检测与质量体系共同构成交付底座</h2>
        <p>根据客户产品定位和销售区域，协助匹配对应的安全、运输、环保与市场准入要求。</p>
      </div>
      <div class="cert-grid">
        <div v-for="item in certifications" :key="item">{{ item }}</div>
      </div>
    </section>
  </main>
</template>
