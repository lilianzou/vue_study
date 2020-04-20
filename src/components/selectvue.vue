<template>
  <div>
    <p>----------------互相关联的选择器------------------</p>
    <a-select :defaultValue="ModeType[0]" style="width: 120px" @change="handleModeChange">
      <a-select-option v-for="ModeType in ModeType" :key="ModeType">{{
        ModeType
      }}</a-select-option>
    </a-select>
    <a-select v-model="xiaojitype" style="width: 120px">
      <a-select-option v-for="types in xiaojitype" :key="types">{{ types }}</a-select-option>
    </a-select>
   
   
    <br>
    <p>-----------------小透明分割线-------------</p>
    <a-radio-group name="radioGroup" :defaultValue="1">
    <a-radio :value="1">汇总</a-radio>
    <a-radio :value="2">排位赛</a-radio>
    <a-radio :value="3">巅峰赛</a-radio>
    <a-radio :value="4">匹配赛</a-radio>
    <a-radio :value="5">娱乐赛</a-radio>
    </a-radio-group>
    <br>
    <a-radio-group name="radioGroup" :defaultValue="1">
    <a-radio :value="1">汇总</a-radio>
    <a-radio :value="2">消极比赛</a-radio>
    <a-radio :value="3">送人头</a-radio>
    <a-radio :value="4">言语辱骂</a-radio>
    <a-radio :value="5">挂机</a-radio>
    </a-radio-group>
    <p>-------------------分割线----------------</p>
    <a-select
    labelInValue
    :defaultValue="{ key: 'lucy' }"
    style="width: 120px"
    @change="handleChange1"
  >
    <a-select-option value="jack">Jack (100)</a-select-option>
    <a-select-option value="lucy">Lucy (101)</a-select-option>
  </a-select>
  </div>
  
</template>
<script>
const ModeType = ['排位', '匹配'];
const XiaojiTypeData = {
  排位: ['挂机', '送人头', '辱骂','恶意演员'],
  匹配: ['挂机', '送人头', '辱骂'],
};
import 'ant-design-vue/dist/antd.css'
import {Select} from 'ant-design-vue'
export default {
  components: {'a-select': Select},
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleChange1(value){
      console.log(value)
    },
    handleModeChange(value){
      this.xiaojitype = XiaojiTypeData[value];
      this.xiaojitype1 = XiaojiTypeData[value][0];
    }

  },
  data() {
    return {
      ModeType,
      XiaojiTypeData,
      xiaojitype: XiaojiTypeData[ModeType[0]],
      xiaojitype1: XiaojiTypeData[ModeType[0]][0],
    };
  },
};
</script>