<template>
  <div class="pageFullScreen" id="xxxFullScreen" >
    <div class = "onepart">
    <a-icon type="desktop"  class = "logo"/><span class = "iconfont">客户端性能</span>
    <div class = "rowstyle">
    <Row :gutter="24">
      <div>
      <i-col :span="6">
        <Card class = "cardcl" @click.native="goto()">
            <li class = "smalltitle"><a class = "smalltitle" href="#3">平均帧率（Fps)</a></li>
            <div style="text-align:center">
                    <div>
                      <Row>
                        <a-Col span="12"><a-icon type="android" />Andriod</a-Col>
                        <a-Col span="12"><a-icon type="apple" />IOS</a-Col>
                        </Row>
                    </div>
                    <div class = "numstyle">
                      <Row>
                        <a-Col span="12">29.5</a-Col>
                        <a-Col span="12">28.5</a-Col>
                        </Row>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
                         </div>
                         </Card>
                         </i-col>
      </div>
        <i-col :span="6">
        <Card class = "cardcl" @click.native="goto()">
          <li class = "smalltitle"><a class = "smalltitle" href="#2">波动方差</a></li>
                <div style="text-align:center">
                    <div>
                      <Row>
                        <a-Col span="12"><a-icon type="android" />Andriod</a-Col>
                        <a-Col span="12"><a-icon type="apple" />IOS</a-Col>
                        </Row>
                    </div>
                    <div class = "numstyle">
                      <Row>
                        <a-Col span="12">29.5</a-Col>
                        <a-Col span="12">28.5</a-Col>
                        </Row>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
                         </div>
                         </Card>
                         </i-col>
        <i-col :span="6">
        <Card class = "cardcl" @click.native="goto()">
          <li class = "smalltitle"><a class = "smalltitle" href="#1">平均跳4帧次数(次/局)</a></li>
                <div style="text-align:center">
                    <div>
                      <Row>
                        <a-Col span="12"><a-icon type="android" />Andriod</a-Col>
                        <a-Col span="12"><a-icon type="apple" />IOS</a-Col>
                        </Row>
                    </div>
                    <div class = "numstyle">
                      <Row>
                        <a-Col span="12">29.5</a-Col>
                        <a-Col span="12">28.5</a-Col>
                        </Row>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
                         </div>
                         </Card>
                         </i-col>
        <i-col :span="6">
        <Card class = "cardcl" @click.native="goto()">
          <li class = "smalltitle"><a class = "smalltitle" href="#1">平均跳10帧次数(次/局)</a></li>
                <div style="text-align:center">
                    <div>
                      <Row>
                        <a-Col span="12"><a-icon type="android" />Andriod</a-Col>
                        <a-Col span="12"><a-icon type="apple" />IOS</a-Col>
                        </Row>
                    </div>
                    <div class = "numstyle">
                      <Row>
                        <a-Col span="12">29.5</a-Col>
                        <a-Col span="12">28.5</a-Col>
                        </Row>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
                         </div>
                         </Card>
                         </i-col>
    </Row>
    </div>
    </div>
    <div class = "onepart">
    <a-icon type="global" class = "logo"/><span class = "iconfont">网络质量</span>
    <div class = "rowstyle">
    <Row>
        <i-col :span="6">
            <Card class = "cardcl" @click.native="goto()">
              <li class = "smalltitle">平均ping值(ms)</li>
              <br>
              <div class = "numstyle">
                      <span>688.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
            </Card>
        </i-col>
        <i-col :span="6">
            <Card class = "cardcl" @click.native="goto()">
              <li class = "smalltitle">ping值方差(ms)</li>
              <br>

              <div class = "numstyle">
                      <span>688.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
            </Card>
        </i-col>
        <i-col :span="6">
            <Card class = "cardcl" @click.native="goto()">
              <li class = "smalltitle">平均丢包次数(次/局)</li>
              <br>
              <div class = "numstyle">
                      <span>688.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
            </Card>
        </i-col>
        <i-col :span="6">
            <Card class = "cardcl" @click.native="goto()">
              <li class = "smalltitle">延迟大于460次数(次/局)</li>
              <br>
              <div class = "numstyle">
                      <span>688.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
            </Card>
        </i-col>
    </Row>
    </div>
    </div>
    <div class = "onepart">
    <a-icon type="cloud-server"  class = "logo"/><span class = "iconfont">服务器性能</span>
    <div class = "rowstyle">
    <Row>
      <i-col :span="6">
            <Card class = "cardcl" @click.native="goto()">
              <li class = "smalltitle">CPU利用率(%)</li>
              <div></div>
              <div class = "numstyle">
                      <span>20.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
            </Card>
        </i-col>
        <i-col :span="6">
            <Card class = "cardcl" @click.native="goto()">
              <li class = "smalltitle">入口流量(MB)</li>
              <br>
              <div class = "numstyle">
                      <span>688.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
            </Card>
        </i-col>
        <i-col :span="6">
            <Card class = "cardcl" @click.native="goto()">
              <li class = "smalltitle">出口流量(MB)</li>
              <br>
              <div class = "numstyle">
                      <span>688.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
            </Card>
        </i-col>
        <i-col :span="6">
            <Card class = "cardcl" @click.native="goto()">
              <li class = "smalltitle">断线重连次数(次/局)</li>
              <br>
              <div class = "numstyle">
                      <span>1.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
            </Card>
        </i-col>
    </Row>
    </div>
    </div>
    <div class = "onepart">
    <a-icon type="warning"  class = "logo"/><span class = "iconfont">客户端崩溃</span>
    <div class = "rowstyle">
    <Row :gutter="24">
      <i-col :span="6">
        <Card class = "cardcl" @click.native="goto()">
            <li class = "smalltitle">用户crash(%)</li>
                <div style="text-align:center">
                    <div>
                      <Row>
                        <a-Col span="12"><a-icon type="android" />Andriod</a-Col>
                        <a-Col span="12"><a-icon type="apple" />IOS</a-Col>
                        </Row>
                    </div>
                    <div class = "numstyle">
                      <Row>
                        <a-Col span="12">29.5</a-Col>
                        <a-Col span="12">28.5</a-Col>
                        </Row>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
                         </div>
                         </Card>
                         </i-col>
        <i-col :span="6">
        <Card class = "cardcl" @click.native="goto()">
            <li class = "smalltitle">crash用户平均crash次数(次)</li>
                <div style="text-align:center">
                    <div>
                      <Row>
                        <a-Col span="12"><a-icon type="android" />Andriod</a-Col>
                        <a-Col span="12"><a-icon type="apple" />IOS</a-Col>
                        </Row>
                    </div>
                    <div class = "numstyle">
                      <Row>
                        <a-Col span="12">29.5</a-Col>
                        <a-Col span="12">28.5</a-Col>
                        </Row>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
                         </div>
                         </Card>
                         </i-col>
        <i-col :span="6">
        <Card class = "cardcl" @click.native="goto()">
            <li class = "smalltitle">对局不同步率(‰)</li>
                <div style="text-align:center">
                    <div><br></div>
                    <div class = "numstyle">
                      <span>1.8</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
                         </div>
                         </Card>
                         </i-col>
        <i-col :span="6">
        <Card class = "cardcl" @click.native="goto()">
            <li class = "smalltitle">最新版本累计不同步对局数(局)</li>
                <div style="text-align:center">
                    <div>
                     <span>对局总数：{{duijuzongshu}}</span>
                    </div>
                    <div class = "numstyle">
                      <span>1857</span>
                    </div>
                    <div class = "timestyle">更新时间：<Time :time="time2" type="datetime" /></div>
                         </div>
                         </Card>
                         </i-col>
    </Row>
    </div>
    </div>
    <div id = "2">喵喵喵2<br><br><br><br><br><br><br></div>
    <div id = "3">喵喵喵3<br><br><br><br><br><br><br></div>
    <div id = "4">喵喵喵4<br><br><br><br><br><br><br></div>
    <div id = "1">喵喵喵1<br><br><br><br><br><br><br></div>
    <div id = "5">喵喵喵5<br><br><br><br><br><br><br></div>
    <div id = "6">喵喵喵6<br><br><br><br><br><br><br></div>
    <div id = "7">喵喵喵7<br><br><br><br><br><br><br></div>
  </div>
</template>
<script>

import { Col } from 'view-design'
export default {
    components: {
      'i-col': Col
       },
       methods: {
        goto() {
        // window.location.hash = "#6";
        console.log('asdasdasdasd')
         }
    },
    data () {
        return {
          time2: (new Date()).getTime() - 86400 * 3 * 1000,
          duijuzongshu: 122132
        }
  }
}
</script>
<style scoped>
#xxxFullScreen {
  background-color: white(51, 255, 0);
}
.iconfont {
  font-family: "Hiragino Sans GB";
  font-size: 24px;
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
    font-family:Helvetica Neue",Helvetica,";
    font-weight:bold;
    width: 280px;
    background-color: white(245, 239, 190, 0.699);
    float: left;
    margin-left: auto;
}
.smalltitle{
    text-align: center;
    font-weight:bold;
    font-size: 16px;
    color: rgb(39, 37, 37);
}
.timestyle{
  text-align: center;
  margin-bottom: -10px;
  font-size: 14px;
  font-style: normal;
}
.numstyle{
  text-align: center;
  font-size: 30px;
  font-style: normal;
  color:#2d8cf0;
}
.onepart{
  margin-top: 20px;
  margin-bottom: 10px;
}
.rowstyle{
  margin-top: 20px;
}

</style>
