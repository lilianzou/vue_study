<template>
  <div>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
      <p>-----------------------------分割线-----------------------------</p>
      <a-checkbox :indeterminate="indeterminate" @change="onCheckAllChange" :checked="checkAll">
        Check all
      </a-checkbox>
    </div>
    <br />
    <a-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange" />
  </div>
</template>
<script>
const plainOptions = ['蒙恬', '吕布', '张飞'];
const defaultCheckedList = ['蒙恬', '吕布'];
export default {
  data() {
    return {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions,
    };
  },
  methods: {
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
  },
};
</script>