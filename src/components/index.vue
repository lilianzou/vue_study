<template>
  <div class="pageFullScreen" id="xxxFullScreen" >
    <a-icon type="up-circle"  class = "logo"/><span class = "iconfont">客户端性能</span>
    <a-row :gutter="24">
      <a-col :span="6" @click = "goto()">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card  title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
    <br>
    <a-icon type="up-circle"  class = "logo"/><span class = "iconfont">网络质量</span>
    <br>
        <a-row :gutter="24">
      <a-col :span="6">
        <a-card   title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card  title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
    <a-icon type="up-circle" class = "logo"/><span class = "iconfont">服务器性能</span>
    <br>
        <a-row :gutter="24">
      <a-col :span="6">
        <a-card   title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card  title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
    <a-icon type="up-circle" class = "logo"/><span class = "iconfont">客户端崩溃</span>
        <a-row :gutter="24">
      <a-col :span="6">
        <a-card   title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card  title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>

export default {
    methods:{
        goto(){
        window.open('https://www.baidu.com',"_blank")      
    }
    }
    ,

    data () {
        return {}
  }
}
</script>
<style scoped>
#xxxFullScreen {
  background-color: white(51, 255, 0);
  background-image: url(wallhaven-mppy19.jpg);
}

.iconfont {
  font-family: "STLiti",sans-serif;
  font-size: 26px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.logo {
  font-family: "iconfont logo";
  font-size: 20px;
  font-style: normal;
}

</style>
