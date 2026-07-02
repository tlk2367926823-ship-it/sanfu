import coverImage from './brochure-page-1.png'
import profileImage from './brochure-page-3.png'
import qualityImage from './brochure-page-6.png'
import robotImage from './brochure-page-7.png'
import vehicleImage from './brochure-page-10.png'
import agvImage from './brochure-page-11.png'
import ebikeImage from './brochure-page-12.png'

export const images = {
  coverImage,
  profileImage,
  qualityImage,
  robotImage,
  vehicleImage,
  agvImage,
  ebikeImage,
}

export const metrics = [
  { value: '2010', label: '成立于佛山顺德' },
  { value: '5000+', label: '平方米制造空间' },
  { value: '20+', label: '核心团队行业经验' },
  { value: '7x24', label: '项目响应服务' },
]

export const products = [
  {
    name: '智能清洁机器人电池',
    scenario: '扫地机、商用清洁机器人、智能机器人',
    voltage: '7.4V / 11.1V / 14.8V / 22.2V',
    capacity: '0.5Ah-6Ah',
    material: 'NCM',
    life: '500+ 次循环',
    image: robotImage,
  },
  {
    name: '电动轮椅锂电池',
    scenario: '电动轮椅、医疗辅助出行设备',
    voltage: '24V / 36V',
    capacity: '7.8Ah-20Ah',
    material: 'NCM',
    life: '500+ 次循环',
    image: profileImage,
  },
  {
    name: '清洁能源车锂电池',
    scenario: '低速车、巡逻车、清洁能源车辆',
    voltage: '24V / 36V / 48V',
    capacity: '50Ah-360Ah',
    material: 'LiFePO4',
    life: '3000+ 次循环',
    image: vehicleImage,
  },
  {
    name: '搬运叉车 AGV 锂电池',
    scenario: 'AGV、搬运叉车、仓储物流设备',
    voltage: '24V / 36V / 48V',
    capacity: '50Ah-150Ah',
    material: 'LiFePO4',
    life: '3000+ 次循环',
    image: agvImage,
  },
  {
    name: '电动车锂电池组',
    scenario: '电助力车、电动车、便携出行设备',
    voltage: '24V / 36V / 48V',
    capacity: '8Ah-20Ah',
    material: 'NCM',
    life: '500+ 次循环',
    image: ebikeImage,
  },
  {
    name: '家电及电动工具电池',
    scenario: '小家电、电动工具、便携动力设备',
    voltage: '3.7V / 7.4V / 11.1V / 14.8V / 22.2V',
    capacity: '0.5Ah-6Ah',
    material: 'NCM',
    life: '500+ 次循环',
    image: qualityImage,
  },
]

export const certifications = [
  'ISO9001 国际质量管理体系认证',
  'UL、CB、KC、PSE 国际安规认证',
  'UN38.3、MSDS 运输与安全报告',
  'RoHS、REACH 环保合规检测',
]

export const factoryItems = [
  '专业研发设计、生产管理与营销服务团队',
  '导入行业先进生产检测设备，强化过程数据管控',
  '围绕电芯、BMS、结构件、线束接口建立过程检验标准',
  '以样品验证、首件确认、批次追踪保障量产一致性',
]

export const factoryCapabilities = [
  { title: '研发设计', text: '根据设备空间、电压平台、续航目标和认证要求完成模组方案设计。' },
  { title: '过程制造', text: '关注焊接、装配、绝缘、防护、老化测试等关键工序的稳定性。' },
  { title: '品质检测', text: '通过充放电、循环、温度、外观、电性能等测试提升交付可靠性。' },
  { title: '项目交付', text: '从样品到批量生产建立项目节点，减少沟通成本与导入风险。' },
]

export const customSteps = [
  '需求评估：应用场景、尺寸结构、电压容量、续航目标与认证要求',
  '方案设计：电芯选型、BMS 保护、结构散热、线束接口与外壳工艺',
  '样品验证：安全测试、循环测试、充放电测试与环境适配',
  '量产导入：BOM 固化、工艺确认、检验标准与包装运输方案',
  '持续服务：品质追踪、版本优化、售后支持与长期项目维护',
]

export const projectTypes = [
  '智能清洁机器人',
  '电动轮椅/医疗器械',
  'AGV/搬运叉车',
  '清洁能源车',
  '电动车',
  '家电/电动工具',
  '储能系统',
  '其他定制项目',
]

export const budgetRanges = [
  '待评估',
  '5 万以内',
  '5-20 万',
  '20-50 万',
  '50-100 万',
  '100 万以上',
]

export const contactInfo = {
  company: '佛山市三富新能源科技有限公司',
  brand: '三富锂电',
  address: '广东省佛山市顺德区大良街道凤翔工业区顺翔路 43 号三层',
  phone: '+86-757-25528036 / +86-757-25523621',
  email: 'sanfo2023@163.com',
  website: 'www.csanfo.com',
}
