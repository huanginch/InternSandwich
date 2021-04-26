<script>
    import axios from "../js/axios.js";
    
    export default {
      name: "Mailbox",
      data() {
        return {
          posts:null,
          countOfPage: 5,
          currPage: 1,
        };
      },
      computed: {
        //設定頁首
        pageStart: function () {
          return (this.currPage - 1) * this.countOfPage;
        },
        //設定總頁數
        totalPage: function () {
          return Math.ceil(this.posts.length / this.countOfPage);
        },
      },
      methods: {
        //設定當前頁面
        setPage: function (idx) {
          if (idx <= 0 || idx > this.totalPage) {
            return;
          }
          this.currPage = idx;
        },
      },
      created() {
        this.cp_info = this.$store.getters.getUser
        //axios獲取後臺資料
        var cp_id = this.cp_info.ID
        var api = "/api/company/${cp_id}/posts";
        axios
          .get(api)
          .then((response) => {
            this.posts = response.data;
          })
          .catch(function (error) {
            // 請求失敗處理
            console.log(error);
          });
      },
    };
</script>