<template>
  <div>
    <!-- 首頁主體內容 -->
    <!--header-->
    <div class="header_box"></div>
    <!--banner-->
    <div class="banner">
      <!-- 练习：编写banner的html和css-->
      <!-- 图片列表-->
      <ul>
        <!-- 多標籤動態切換 -->
        <transition-group name="fade">
          <li style="" v-for="n in 4" :key="n" v-show="n == curP">
            <a href="#" class="link"></a>
          </li>
        </transition-group>
      </ul>
      <!-- 左右箭头-->
      <span class="cut prev" @click="prevBanner"></span>
      <span class="cut next" @click="nextBanner"></span>
      <!-- 小圆点指示器-->
      <div class="indicator">
        <a
          href=""
          v-for="n in 4"
          :key="n"
          :class="{ cur: curP == n }"
          @click.prevent="curP = n"
        ></a>
        <!-- </a><a href=""></a><a href=""></a><a href=""></a> -->
      </div>
    </div>
    <!--main-->
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title"><a href="#" class="more">more</a>净美仕产品</h2>
        <ul class="clearfloat">
          <li>
            <a href="#" class="link"
              ><img src="../assets/images/01.jpg" alt=""
            /></a>
          </li>
          <li>
            <a href="#" class="link"
              ><img src="../assets/images/02.jpg" alt=""
            /></a>
          </li>
          <li>
            <a href="#" class="link"
              ><img src="../assets/images/03.jpg" alt=""
            /></a>
          </li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title"><a href="#" class="more">more</a>关于净美仕</h2>
          <p>
            北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。
            <a href="#">查看更多</a>
          </p>
        </div>
        <div class="ind_news">
          <h2 class="title"><a href="#" class="more">more</a>公司动态</h2>
          <ul>
            <li>
              <span>2016-02-21</span
              ><a href="">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a>
            </li>
            <li>
              <span>2016-02-21</span
              ><a href="">净美仕新风净化系统助力校园新风行动</a>
            </li>
            <li>
              <span>2016-02-21</span
              ><a href="">全国新风行动全面启动 助推净美仕战略升级</a>
            </li>
            <li>
              <span>2016-02-21</span
              ><a href="">智能空气净化器翻盘：净美仕能否领衔?</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      curP: 1,
      timer: null,
    };
  },
  mounted() {
    this.bannerAuto();
  },
  unmounted() {},
  methods: {
    prevBanner() {
      this.curP--;
      if (this.curP < 1) {
        this.curP = 4;
      }
    },
    nextBanner() {
      this.curP++;
      if (this.curP > 4) {
        this.curP = 1;
      }
    },
    bannerAuto() {
      if (!this.timer) {
        console.log("啟動定時器");
        this.timer = setInterval(this.nextBanner, 4000);
      }
    },
  },
};
</script>
<style scoped>
.banner li:first-child {
  background: url(../assets/images/banner_01.jpg) center 0 no-repeat;
  display: block;
  z-index: 20;
}
.banner li:nth-child(2) {
  background: url(../assets/images/banner_02.jpg) center 0 no-repeat;
  display: block;
  z-index: 20;
}
.banner li:nth-child(3) {
  background: url(../assets/images/banner_03.jpg) center 0 no-repeat;
  display: block;
  z-index: 20;
}
.banner li:nth-child(4) {
  background: url(../assets/images/banner_04.jpg) center 0 no-repeat;
  display: block;
  z-index: 20;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  /*對所有效果添加動畫*/
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
