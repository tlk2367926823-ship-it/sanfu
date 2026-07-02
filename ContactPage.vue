<script setup>
import { reactive, ref } from 'vue'
import { budgetRanges, contactInfo, projectTypes } from './siteData'

const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')
const submitMessage = ref('')

const form = reactive({
  contactName: '',
  phone: '',
  company: '',
  projectType: '',
  quantity: '',
  city: '',
  budget: '',
  message: '',
})

function resetForm() {
  form.contactName = ''
  form.phone = ''
  form.company = ''
  form.projectType = ''
  form.quantity = ''
  form.city = ''
  form.budget = ''
  form.message = ''
}

async function submitInquiry() {
  submitting.value = true
  submitted.value = false
  submitError.value = ''
  submitMessage.value = ''

  const apiUrl = import.meta.env.VITE_CONTACT_API_URL
  if (!apiUrl) {
    submitted.value = true
    submitMessage.value = '询盘信息已填写完成，请通过页面电话或邮箱联系我们。'
    submitting.value = false
    resetForm()
    return
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    const data = await response.json()

    if (!response.ok || !data.ok) {
      throw new Error(data.error || '提交失败，请稍后再试')
    }

    submitted.value = true
    submitMessage.value = data.message || '询盘已提交成功'
    resetForm()
  } catch (error) {
    submitError.value = error.message || '提交失败，请稍后再试'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <main>
    <section class="page-hero compact-hero contact-page-hero">
      <p class="eyebrow">Contact</p>
      <h1>联系三富锂电</h1>
      <p class="lead">
        欢迎咨询锂电池模组开发、样品验证、认证配套与批量生产合作。请尽量描述应用设备、目标电压容量和预计交付时间，我们将更快评估方案。
      </p>
    </section>

    <section class="section contact-layout-section">
      <div class="contact-intro">
        <p class="eyebrow">Sanfo New Energy</p>
        <h2>{{ contactInfo.company }}</h2>
        <p>
          专业锂电池模组制造服务商，产品应用于电动车、AGV、电动轮椅、智能机器人、扫地机器人、电动工具、医疗器械、小家电、太阳能储能系统等领域。
        </p>

        <address class="contact-card light-card">
          <strong>{{ contactInfo.brand }}</strong>
          <span>地址：{{ contactInfo.address }}</span>
          <span>电话：{{ contactInfo.phone }}</span>
          <span>邮箱：{{ contactInfo.email }}</span>
          <span>官网：{{ contactInfo.website }}</span>
        </address>

        <div class="contact-notes">
          <h3>提交前建议准备</h3>
          <ul class="check-list">
            <li>设备类型、安装空间或结构图</li>
            <li>目标电压、容量、续航时间或功率需求</li>
            <li>预计年用量、首批数量和交付城市</li>
            <li>认证、运输、包装或售后服务要求</li>
          </ul>
        </div>
      </div>

      <form class="inquiry-form" @submit.prevent="submitInquiry">
        <div class="form-head">
          <p class="eyebrow">Inquiry Form</p>
          <h2>项目询盘</h2>
          <p>填写项目需求后，可通过电话或邮箱与我们确认方案细节。</p>
        </div>

        <label>
          <span>联系人</span>
          <input v-model="form.contactName" name="contactName" required placeholder="请输入联系人姓名" />
        </label>

        <label>
          <span>联系电话</span>
          <input v-model="form.phone" name="phone" required placeholder="请输入手机号或电话" />
        </label>

        <label>
          <span>公司/品牌</span>
          <input v-model="form.company" name="company" placeholder="请输入公司或品牌名称" />
        </label>

        <label>
          <span>项目类型</span>
          <select v-model="form.projectType" name="projectType" required>
            <option value="" disabled>请选择项目类型</option>
            <option v-for="item in projectTypes" :key="item" :value="item">{{ item }}</option>
          </select>
        </label>

        <label>
          <span>预计数量</span>
          <input v-model="form.quantity" name="quantity" placeholder="如：样品 10 套 / 年用量 5000 套" />
        </label>

        <label>
          <span>交付城市</span>
          <input v-model="form.city" name="city" placeholder="如：佛山 / 上海 / 海外" />
        </label>

        <label>
          <span>预算区间</span>
          <select v-model="form.budget" name="budget">
            <option value="" disabled>请选择预算区间</option>
            <option v-for="item in budgetRanges" :key="item" :value="item">{{ item }}</option>
          </select>
        </label>

        <label class="full-field">
          <span>需求说明</span>
          <textarea
            v-model="form.message"
            name="message"
            rows="6"
            placeholder="请描述设备用途、电压容量、尺寸限制、认证要求、交付周期等信息"
          ></textarea>
        </label>

        <button class="submit-button" type="submit" :disabled="submitting">
          {{ submitting ? '提交中...' : '提交询盘' }}
        </button>

        <p v-if="submitted" class="submit-message">{{ submitMessage }}</p>
        <p v-if="submitError" class="submit-message error-message">{{ submitError }}</p>
      </form>
    </section>
  </main>
</template>
