<template>
  <div class="pageFullScreen" id="xxxFullScreen" >
    <a-icon type="up-circle"  class = "logo"/><span class = "iconfont">客户端性能</span>
    <Row :gutter="24">
        <i-col :span="6">
           
            <Card class = "cardcl" @on-click="goto()">
                 <li class = "smalltitle">平均帧率（Fps）</li>
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>  
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
    </Row>
    <a-icon type="up-circle"  class = "logo"/><span class = "iconfont">网络质量</span>
    <Row>
        <i-col :span="6">
            <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
    </Row>
    <a-icon type="up-circle"  class = "logo"/><span class = "iconfont">服务器性能</span>
    <Row>
        <i-col :span="6">
            <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
    </Row>
    <a-icon type="up-circle"  class = "logo"/><span class = "iconfont">客户端崩溃</span>
    <Row>
        <i-col :span="6">
            <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
        <i-col :span="6"> 
           <Card class = "cardcl">
                <div style="text-align:center">
                    <a-icon type="slack" />
                         <h3>妈妈的文本在这里</h3>
                </div>
            </Card>
        </i-col>
    </Row>

    
  </div>
</template>
<script>

import {Col} from 'view-design'


export default {
    components: {'i-col': Col},
    
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
.cardcl {
    font-family:STKaiti,serif ;
    width: 320px;
    background-color: orangered;
}
.smalltitle{
    text-align: center;
}

</style>
