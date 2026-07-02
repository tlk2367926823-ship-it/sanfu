<script setup>
import { certifications, products } from './siteData'
</script>

<template>
  <main>
    <section class="page-hero compact-hero">
      <p class="eyebrow">Products</p>
      <h1>产品中心</h1>
      <p class="lead">
        覆盖清洁机器人、AGV、轮椅、电动车、工具与储能应用，基于 NCM 与 LiFePO4 技术路线提供可靠电池模组。
      </p>
    </section>

    <section class="section white-section">
      <div class="product-grid">
        <article v-for="product in products" :key="product.name" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <div class="product-body">
            <p class="product-scenario">{{ product.scenario }}</p>
            <h3>{{ product.name }}</h3>
            <dl>
              <div>
                <dt>电压</dt>
                <dd>{{ product.voltage }}</dd>
              </div>
              <div>
                <dt>容量</dt>
                <dd>{{ product.capacity }}</dd>
              </div>
              <div>
                <dt>材料</dt>
                <dd>{{ product.material }}</dd>
              </div>
              <div>
                <dt>循环</dt>
                <dd>{{ product.life }}</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>

    <section class="section comparison-section">
      <div class="section-heading">
        <p class="eyebrow">Selection</p>
        <h2>按终端设备需求建立产品选型逻辑</h2>
        <p>电池模组不是单一规格选择，而是围绕整机空间、功率、续航、认证、温度环境和交付周期综合匹配。</p>
      </div>
      <div class="spec-table">
        <div class="spec-row head">
          <span>选型维度</span>
          <span>关注重点</span>
          <span>适配价值</span>
        </div>
        <div class="spec-row">
          <span>电压平台</span>
          <span>24V / 36V / 48V 及多串组合</span>
          <span>匹配电机、控制器和充电系统</span>
        </div>
        <div class="spec-row">
          <span>容量与续航</span>
          <span>按 Ah、Wh、重量和尺寸综合评估</span>
          <span>平衡续航、成本和整机空间</span>
        </div>
        <div class="spec-row">
          <span>电芯材料</span>
          <span>NCM / LiFePO4</span>
          <span>兼顾能量密度、循环寿命与安全性</span>
        </div>
        <div class="spec-row">
          <span>认证要求</span>
          <span>{{ certifications.join(' / ') }}</span>
          <span>支持客户进入目标市场</span>
        </div>
      </div>
    </section>
  </main>
</template>
