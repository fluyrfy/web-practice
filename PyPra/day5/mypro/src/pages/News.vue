<template>
  <div>
    <div class="breadcrumb">
      <div class="container">
        <h2><a href="">首页</a>&gt;<a href="">公司动态</a></h2>
      </div>
    </div>
    <div class="main container">
      <div class="news">
        <ul>
          <li v-for="item in newsList.data" :key="item.nid">
            <span>{{ item.pubtime | dateFormat }}</span>
            <!-- to中對應的是router.js中配置項目裡的name項 -->
            <router-link
              :to="{ name: 'NewsDetail', params: { nid: item.nid } }"
              >{{ item.title }}</router-link
            >
          </li>
          <!--<li><span>2016-02-21</span><a href="">空气净化器要逆天？"玫瑰金""土豪金"齐上阵</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">净美仕新风净化系统助力校园新风行动</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">全国新风行动全面启动助推净美仕战略升级</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">智能空气净化器翻盘：净美仕能否领衔?</a></li>-->
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        <a
          v-show="curPage > 1"
          @click="
            curPage--;
            getNews();
          "
          >上一页</a
        >
        <a
          v-for="index in newsList.pageCount"
          :key="index"
          href=""
          :class="{ cur: index == curPage }"
          @click.prevent="
            curPage = index;
            getNews();
          "
          >{{ index }}</a
        >
        <!--<a href="">2</a>-->
        <!--<a href="">3</a>-->
        <!--<a href="">4</a>-->
        <!--<a href="">5</a>-->
        <a
          v-show="curPage < newsList.pageCount"
          @click.prevent="
            curPage++;
            getNews();
          "
          >下一页</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: {},
      curPage: 1,
    };
  },
  filters: {
    dateFormat(val) {
      var time = parseInt(val);
      var date = new Date(time);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      return `${year}年${month}月${day}日`;
    },
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      //回調函數中this作用域不同
      var that = this;
      let obj = { pageNum: this.curPage };
      this.axios
        .get("/news/list", { params: obj })
        .then((res) => {
          // console.log(res);
          that.newsList = res.data;
          console.log(this.newsList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style></style>
