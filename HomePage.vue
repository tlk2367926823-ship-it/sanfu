<script setup>
import { RouterLink } from 'vue-router'
import { certifications, images, metrics, products } from './siteData'
</script>

<template>
  <main>
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow">专业锂电池模组制造服务商</p>
        <h1>三富锂电，为移动设备与绿色能源场景提供稳定可靠的电池模组</h1>
        <p class="lead">
          佛山市三富新能源科技有限公司成立于 2010 年，位于广东佛山顺德，专注锂电池模组设计、研发、生产与销售。
        </p>
        <div class="hero-actions">
          <RouterLink class="primary-link" to="/products/">查看产品</RouterLink>
          <RouterLink class="secondary-link" to="/custom/">定制方案</RouterLink>
        </div>
      </div>

      <div class="hero-media" aria-label="三富锂电企业画册封面">
        <img :src="images.coverImage" alt="三富锂电企业画册" />
      </div>
    </section>

    <section class="metrics-band" aria-label="企业关键数据">
      <div v-for="item in metrics" :key="item.label" class="metric">
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </div>
    </section>

    <section class="section white-section">
      <div class="section-heading">
        <p class="eyebrow">Company</p>
        <h2>聚焦锂电技术创新，驱动绿色能源发展</h2>
        <p>
          三富锂电服务于智能清洁、电动出行、医疗辅助、仓储物流、工具家电与储能等场景，通过电池方案设计、BMS 匹配、结构集成和量产交付，为客户建立更稳定的动力系统。
        </p>
      </div>

      <div class="feature-grid">
        <article>
          <span>01</span>
          <h3>面向场景设计</h3>
          <p>围绕设备空间、重量、续航、功率、接口和安装方式，制定更贴合终端产品的电池模组方案。</p>
        </article>
        <article>
          <span>02</span>
          <h3>质量体系支撑</h3>
          <p>以 ISO9001 质量体系为基础，将样品验证、过程控制、批次追踪和出货检测纳入交付流程。</p>
        </article>
        <article>
          <span>03</span>
          <h3>长期项目协同</h3>
          <p>支持客户从立项、打样、测试、认证到批量生产的完整周期，减少产品导入阶段的不确定性。</p>
        </article>
      </div>
    </section>

    <section class="section editorial-section">
      <div class="editorial-copy">
        <p class="eyebrow">Applications</p>
        <h2>从轻型设备到工业移动平台，覆盖多类锂电应用</h2>
        <p>
          产品广泛应用于电动车、AGV、电动轮椅、智能机器人、扫地机器人、电动工具、医疗器械、小家电、太阳能储能系统等领域，并可按不同国家和地区的认证要求进行项目配套。
        </p>
      </div>
      <div class="mini-product-list">
        <RouterLink v-for="product in products.slice(0, 4)" :key="product.name" to="/products/">
          <strong>{{ product.name }}</strong>
          <span>{{ product.scenario }}</span>
        </RouterLink>
      </div>
    </section>

    <section class="section white-section">
      <div class="section-heading">
        <p class="eyebrow">Certification</p>
        <h2>以认证和检测能力支持客户走向更广阔市场</h2>
        <p>围绕安全、运输、环保和国际市场准入，三富锂电可结合项目需要提供对应认证与检测配套。</p>
      </div>
      <div class="cert-grid">
        <div v-for="item in certifications" :key="item">{{ item }}</div>
      </div>
    </section>
  </main>
</template>
