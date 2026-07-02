<script setup>
import { customSteps, products } from './siteData'
</script>

<template>
  <main>
    <section class="page-hero compact-hero">
      <p class="eyebrow">Customization</p>
      <h1>定制服务</h1>
      <p class="lead">
        从应用场景到量产交付的一站式锂电池模组定制，支持结构、电气、BMS、认证与量产导入协同服务。
      </p>
    </section>

    <section class="section custom-section">
      <div class="section-heading">
        <p class="eyebrow">Process</p>
        <h2>快速响应客户各类定制需求</h2>
        <p>
          面向智能机器人、医疗器械、AGV、清洁能源车、小家电与工具类设备，围绕安全、续航、结构与认证建立项目方案。
        </p>
      </div>

      <div class="custom-layout">
        <ol class="step-list">
          <li v-for="step in customSteps" :key="step">{{ step }}</li>
        </ol>
        <div class="custom-panel">
          <span>核心能力</span>
          <strong>研发、生产、销售团队协同服务</strong>
          <p>支持 7x24 小时高效服务，让样品开发、验证与批量交付更稳定。</p>
        </div>
      </div>
    </section>

    <section class="section white-section">
      <div class="section-heading">
        <p class="eyebrow">Engineering</p>
        <h2>定制方案关注的不只是电芯规格</h2>
        <p>成熟的电池模组方案需要把电芯、保护板、结构件、外壳、线束、接口、充电方式和整机装配条件放在同一张图纸里评估。</p>
      </div>
      <div class="feature-grid">
        <article>
          <span>结构</span>
          <h3>尺寸与安装</h3>
          <p>根据客户整机仓位、固定方式、防护等级和维护方式确定模组形态。</p>
        </article>
        <article>
          <span>电气</span>
          <h3>BMS 与接口</h3>
          <p>围绕过充、过放、过流、短路、温度保护和通信需求进行保护板匹配。</p>
        </article>
        <article>
          <span>交付</span>
          <h3>认证与量产</h3>
          <p>提前规划样品测试、认证资料、包装运输和量产检验标准。</p>
        </article>
      </div>
    </section>

    <section class="section application-strip">
      <p class="eyebrow">Suitable Projects</p>
      <h2>适合进入定制流程的项目类型</h2>
      <div class="tag-list">
        <span v-for="product in products" :key="product.name">{{ product.scenario }}</span>
      </div>
    </section>
  </main>
</template>
