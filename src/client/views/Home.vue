<!-- 找實習 -->
<template>
  <div style="padding: 100px 100px 10px">
    <br />
    <!-- Searchbar -->
    <form class="bs-example bs-example-form" role="form">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="input-group mt-3 mb-3">
            <!-- 類別關鍵字下拉選單 -->
            <!-- <select v-model="select_jobclass" class="btn btn-default">
              <option value="">類別</option>
            
              <option
                v-for="jobclass in jobclasses"
                v-bind:value="jobclass.value"
              >
                {{ jobclass.text }}
              </option>
            </select> -->
            <div class="col-3">
              <treeselect
                border-style="treeselect"
                v-model="select_jobclass"
                :multiple="true"
                :options="treejob"
                placeholder="類別"
              />
            </div>
            <!-- <select v-model="select_area" class="btn btn-default">
              <option value="">地區</option>
 
              <option v-for="area in areas" v-bind:value="area.value">
                {{ area.text }}
              </option>
            </select> -->
            <div class="col-3">
              <treeselect
                v-model="select_area"
                :multiple="true"
                :options="treearea"
                :disable-branch-nodes="true"
                placeholder="地區"
              />
            </div>
            <!-- 搜尋欄 -->
            <input
              v-model="keyword"
              type="text"
              placeholder="輸入關鍵字"
              class="form-control col-lg-7"
              style="border-radius: 10px; height: 38px"
              @keyup.enter="filteredPosts"
            />
            <!--eslint-disable-next-line-->
            <button class="btn btn-sm" @click="filteredPosts">搜尋</button>
          </div>
        </div>
      </div>
    </form>
    <br />

    <!--實習貼文與熱門搜尋  -->
    <div class="row">
      <div class="col-lg-9">
        <!--<button class="btn float-right" style="font-size:17px" @click="sortOldtoNew">觀看次數由少到多</button> -->

        <!-- <select v-model = "intern_sort" class = "btn btn-default" @change="sortBy()">
                <option @change="sortNewtoOld">從新到舊</option>
                <option @change="sortOldtoNew">從舊到新</option>
                <option @change="sortPopularity">觀看次數</option>
              </select> -->

        <div
          class="btn-group btn-group-toggle float-right"
          data-toggle="buttons"
        >
          <label class="btn btn-light btn-sm">
            <input
              type="radio"
              name="options"
              id="option1"
              autocomplete="off"
              @click="sortPopularity"
            />
            觀看次數
          </label>
          <label class="btn btn-light btn-sm">
            <input
              type="radio"
              name="options"
              id="option2"
              autocomplete="off"
              @click="sortNewtoOld"
            />
            從新到舊
          </label>
          <label class="btn btn-light btn-sm">
            <input
              type="radio"
              name="options"
              id="option3"
              autocomplete="off"
              @click="sortOldtoNew"
            />
            從舊到新
          </label>
        </div>
        <br /><br />

        <!-- <select
          name="intern_sort"
          id="intern_sort"
          v-model="intern_sort"
          class="btn btn-default"
          @change="intern_sort(sortType)"
        >
          <option value="">貼文排序</option>
          
          <option
            v-for="items in intern_sort_item"
            v-bind:click="intern_sort_item.value"
          >
            {{ items.text }}
          </option>
        </select>

        <button
          class="btn float-right"
          style="font-size: 17px"
          @click="sortNewtoOld"
        >
          由新到舊
        </button>
        <button
          class="btn float-right"
          style="font-size: 17px"
          @click="sortOldtoNew"
        >
          由舊到新
        </button>
        <button
          class="btn float-right"
          style="font-size: 17px"
          @click="sortPopularity"
        >
          觀看次數
        </button>
        <br /><br /> -->

        <!-- 實習貼文 -->
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(posts, index) in cp_searchResult.slice(pageStart,pageStart + countOfPage)" class="posts">
          <div class="panel panel-default text-left">
            <div class="panel-body" style="border-style: ridge">
              <!-- ridge groove inset outset -->
              <!-- <router-link class="nav-item nav-link" :to="{ name: 'Intern', params: { post_id: posts.id }}"
            @click.native="addcounter(posts.id, posts.counter)"> -->
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src="../assets/圖片1.png"
                    alt="internsandwich"
                    style="vertical-align: bottom; height: 120px"
                  />
                </div>
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-9">
                      <span
                        style="
                          font-size: 30px;
                          height: 40px;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                        "
                        align="left"
                      >
                        <strong>{{ posts.title }}</strong>
                      </span>
                    </div>
                    <div class="col-lg-3">
                      <p
                        style="
                          font-size: 15px;
                          text-align: center;
                          line-height: 40px;
                        "
                        align="center"
                      >
                        發佈時間:2020-01-09
                      </p>
                    </div>
                  </div>

                  <p style="font-size: 20px" align="left">
                    <router-link
                      :to="{
                        name: 'BusinessPosts',
                        params: { cp_id: posts.cp_id },
                      }"
                      >{{ posts.cp_name }}</router-link
                    >
                  </p>
                  <p
                    style="
                      font-size: 15px;
                      height: 70px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 3;
                      -webkit-box-orient: vertical;
                    "
                    align="left"
                  >
                    {{ posts.job_desc }}
                  </p>
                </div>
              </div>
              <div class="ppp2_btn">
                <div
                  class="float-left"
                  style="
                    font-size: 20px;
                    color: grey;
                    padding-top: 12px;
                    padding-left: 5px;
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="32"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path
                      d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />
                  </svg>
                  觀看次數: {{ posts.counter }}&nbsp;&nbsp;

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    fill="currentColor"
                    class="bi bi-suit-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                    />
                  </svg>
                  &nbsp;收藏次數：5
                </div>

                <div class="row float-right">
                  <router-link
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                    :to="{
                      name: 'Intern_Business',
                      params: { post_id: posts.id },
                    }"
                    @click.native="addcounter(posts.id, posts.counter, 1)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      fill="currentColor"
                      class="bi bi-chat-square-text"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                      />
                      <path
                        d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                    查看更多
                  </router-link>
                  <div
                    v-bind:class="{
                      hidden: cp_saved_posts.indexOf(posts.id) != -1,
                    }"
                  >
                    <button
                      @click="cp_save(posts.id)"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18"
                        fill="currentColor"
                        class="bi bi-suit-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
                        />
                      </svg>
                      收藏
                    </button>
                  </div>
                  <div
                    v-bind:class="{
                      hidden: cp_saved_posts.indexOf(posts.id) === -1,
                    }"
                  >
                    <button
                      @click="cp_unsave(posts.id)"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18"
                        fill="currentColor"
                        class="bi bi-suit-heart-fill"
                        color="red"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                        />
                      </svg>
                      取消收藏
                    </button>
                  </div>
                </div>
              </div>
              <!-- </router-link> -->
            </div>
          </div>
        </div>

        <!--這是用來區隔公司發的貼文跟網路爬來的貼文的分隔線
      <div>
        ---------------------------分隔線------------------------------
      </div>
-->
        <!--eslint-disable-next-line-->
        <div id="Home" v-for="(posts, index) in searchResult.slice(pageStart, pageStart + countOfPage)" class="posts" >
          <div class="panel panel-default text-left">
            <div class="panel-body" style="border-style: ridge">
              <!-- ridge groove inset outset -->
              <!-- <router-link class="nav-item nav-link" :to="{ name: 'Intern', params: { post_id: posts.id }}"
            @click.native="addcounter(posts.id, posts.counter)"> -->
              <div class="row">
                <div class="col-lg-2">
                  <img
                    src="../assets/圖片1.png"
                    alt="internsandwich"
                    style="vertical-align: bottom; height: 120px"
                  />
                </div>
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-9">
                      <span
                        style="
                          font-size: 30px;
                          height: 40px;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                        "
                        align="left"
                      >
                        <strong>{{ posts.title }}</strong>
                      </span>
                    </div>
                    <div class="col-lg-3">
                      <p
                        style="
                          font-size: 15px;
                          text-align: center;
                          line-height: 40px;
                        "
                        align="center"
                      >
                        發佈時間:2020-01-09
                      </p>
                    </div>
                  </div>

                  <p
                    style="font-size: 20px; cursor: pointer"
                    align="left"
                    @click="toLink(posts.source, posts.link)"
                  >
                    {{ posts.cp_name }}
                  </p>

                  <p
                    style="
                      font-size: 15px;
                      height: 70px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 3;
                      -webkit-box-orient: vertical;
                    "
                    align="left"
                  >
                    {{ posts.job_desc }}
                  </p>
                </div>
              </div>
              <div class="ppp2_btn">
                <div
                  class="float-left"
                  style="
                    font-size: 20px;
                    color: grey;
                    padding-top: 12px;
                    padding-left: 5px;
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="32"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path
                      d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />
                  </svg>
                  觀看次數: {{ posts.counter }}&nbsp;&nbsp;

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    fill="currentColor"
                    class="bi bi-suit-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                    />
                  </svg>
                  &nbsp;收藏次數：5
                </div>

                <div class="row float-right">
                  <router-link
                    class="btn"
                    style="width: 200px; height: 50px; font-size: 20px"
                    :to="{ name: 'Intern', params: { post_id: posts.id } }"
                    @click.native="addcounter(posts.id, posts.counter, 0)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      fill="currentColor"
                      class="bi bi-chat-square-text"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                      />
                      <path
                        d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                    查看更多
                  </router-link>
                  <div
                    v-bind:class="{
                      hidden: saved_posts.indexOf(posts.id) != -1,
                    }"
                  >
                    <button
                      @click="save(posts.id)"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18"
                        fill="currentColor"
                        class="bi bi-suit-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
                        />
                      </svg>
                      收藏
                    </button>
                  </div>
                  <div
                    v-bind:class="{
                      hidden: saved_posts.indexOf(posts.id) === -1,
                    }"
                  >
                    <button
                      @click="unsave(posts.id)"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18"
                        fill="currentColor"
                        class="bi bi-suit-heart-fill"
                        color="red"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                        />
                      </svg>
                      取消收藏
                    </button>
                  </div>
                </div>
              </div>
              <!-- </router-link> -->
            </div>
          </div>
        </div>
        <!--  
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="ppp">
                  <div class="photo">
                    <img
                      src="../assets/圖片1.png"
                      alt="internsandwich"
                      height="150px"
                    />
                  </div>
                  <a style="font-size: 25px">採購實習生</a><br />
                  <a style="font-size: 20px">全聯大賣場股份有限公司</a><br />
                  <a style="font-size: 15px"
                    >1.原物料採購(國內/進口料)、結帳作業。 2.供應商資料維護。
                    3.收料、庫存管理。 4. 原料退稅作業。 5. 主管交辦事項。</a
                  ><br />
                </div>
                <div class="ppp2">
                  <div class="row float-right">
                    <a
                      href="#"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                      >查看評論</a
                    >
                    <a
                      href="#"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                      >收藏</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="ppp">
                  <div class="photo">
                    <img
                      src="../assets/圖片1.png"
                      alt="internsandwich"
                      height="150px"
                    />
                  </div>
                  <a style="font-size: 25px">資安實習生</a><br />
                  <a style="font-size: 20px">中正大學研發處</a><br />
                  <a style="font-size: 15px"
                    >協助資安檢測工具研發，包含分析、設計、程式撰寫及軟體測試 -
                    協助軟體開發文件之撰寫與維護 -
                    協助新技術、法規與產品的研究</a
                  ><br />
                </div>
                <div class="ppp2">
                  <div class="row float-right">
                    <a
                      href="#"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                      >查看評論</a
                    >
                    <a
                      href="#"
                      class="btn"
                      style="width: 200px; height: 50px; font-size: 20px"
                      >收藏</a
                    >
                  </div>
                </div>
              </div>
            </div>
-->
      </div>
      <RecommendPost
        title="熱門實習"
        :recommend_posts="top5_post"
        :addcounter="addcounter"
      />
      <!--熱門搜尋  -->
      <!--<div class="col-lg-3">
        <p class="text-left"><strong>熱門實習</strong></p>-->
      <!--eslint-disable-next-line-->
      <!--<div id="Home" v-for="(posts, index) in top5_post" class="posts" >
          <div class="panel">
            <div class="panel-body">
              <div class="row">
                <div class="col-lg-3">
                  <img
                    src="../assets/圖片1.png"
                    alt="internsandwich"
                    style="height: 70px"
                  />
                </div>
                <div class="col-lg-9">
                  <p style="font-size: 25px" align="left">{{ posts.title }}</p>
                  <p style="font-size: 18px" align="left">
                    {{ posts.cp_name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>-->
    </div>
    <br />
    <!-- 換頁按鈕 -->
    <ul
      class="pagination pagination-sm justify-content-center"
      style="margin: 20px 0"
    >
      <li
        v-bind:class="{ disabled: currPage === 1 }"
        @click.prevent="setPage(currPage - 1)"
      >
        <button class="page-link" href="#">上一頁</button>
      </li>
      <!--eslint-disable-next-line-->
      <li
        v-for="n in totalPage"
        v-bind:class="{ active: currPage === n }"
        @click.prevent="setPage(n)"
      >
        <button class="page-link" href="#">{{ n }}</button>
      </li>
      <li
        v-bind:class="{ disabled: currPage === totalPage }"
        @click.prevent="setPage(currPage + 1)"
      >
        <button class="page-link" href="#">下一頁</button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "../js/axios.js";
//匯入推薦的component
import RecommendPost from "../components/RecommendPost.vue";
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "Home",
  components: {
    RecommendPost,
    Treeselect,
  },
  data() {
    return {
      top5_post: null,
      intern_info: null,
      searchResult: null,
      company_posts: null,
      cp_searchResult: null,
      countOfPage: 15,
      currPage: 1,
      select_jobclass: null,
      select_area: null,
      intern_sort: "",
      keyword: "",
      sortType: "sort",
      intern_sort_item: [
        { text: "從新到舊", value: "sortNewtoOld" },
        { text: "從舊到新", value: "sortOldtoNew" },
        { text: "觀看次數", value: "sortPopularity" },
      ],
      treearea: [
        {
          id: "北部",
          label: "北部",
          children: [
            {
              id: "台北",
              label: "台北",
            },
            {
              id: "新北",
              label: "新北",
            },
            {
              id: "桃園",
              label: "桃園",
            },
            {
              id: "新竹",
              label: "新竹",
            },
            {
              id: "基隆",
              label: "基隆",
            },
          ],
        },
        {
          id: "中部",
          label: "中部",
          children: [
            {
              id: "台中",
              label: "台中",
            },
            {
              id: "彰化",
              label: "彰化",
            },
            {
              id: "雲林",
              label: "雲林",
            },
            {
              id: "苗栗",
              label: "苗栗",
            },
            {
              id: "南投",
              label: "南投",
            },
          ],
        },
        {
          id: "南部",
          label: "南部",
          children: [
            {
              id: "高雄",
              label: "高雄",
            },
            {
              id: "台南",
              label: "台南",
            },
            {
              id: "屏東",
              label: "屏東",
            },
            {
              id: "嘉義",
              label: "嘉義",
            },
          ],
        },
        {
          id: "東部",
          label: "東部",
          children: [
            {
              id: "花蓮",
              label: "花蓮",
            },
            {
              id: "台東",
              label: "台東",
            },
          ],
        },
      ],
      treejob: [
        {
          id: "金融",
          label: "金融",
        },
        {
          id: "資訊",
          label: "資訊",
        },
        {
          id: "會計",
          label: "會計",
        },
        {
          id: "人資",
          label: "人資",
        },
        {
          id: "行銷",
          label: "行銷",
        },
        {
          id: "餐飲",
          label: "餐飲",
        },
        {
          id: "業務",
          label: "業務",
        },
        {
          id: "營建",
          label: "營建",
        },
        {
          id: "藝術",
          label: "藝術",
        },
        {
          id: "教育",
          label: "教育",
        },
        {
          id: "製造",
          label: "製造",
        },
        {
          id: "保全",
          label: "保全",
        },
      ],
      saved_posts: [],
      cp_saved_posts: [],
    };
  },
  computed: {
    //設定頁首
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    //設定總頁數
    totalPage: function () {
      return Math.ceil(
        (this.searchResult.length + this.cp_searchResult.length) /
          this.countOfPage
      );
    },
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    //外部超連結跳轉
    toLink: function (source, link) {
      if (source === 0) {
        link = "https://www.facebook.com/" + link;
      } else if (source === 1) {
        link = "https://www.yourator.co" + link;
      }

      window.location = link;
    },
    //更新觀看次數
    addcounter: function (p_id, counter, type) {
      counter++;
      var api = "/api/add-counter";
      const params = {
        p_id: p_id,
        counter: counter,
        type: type, //type用來判斷是company_post(type=1)還是intern_post(type=0)
      };
      axios
        .patch(api, params)
        .then((response) => {
          alert(response.data.msg);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //依照關鍵字搜尋貼文
    filteredPosts: function () {
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 keyword 與 intern_info[n].cp_name 通通轉小寫方便比對。
      var keyword = this.keyword.toLowerCase();
      var select_jobclass = this.select_jobclass;
      var select_area = this.select_area;

      if (select_area === null || select_area === undefined) {
        select_area = "";
      }
      if (select_jobclass === null || select_jobclass === undefined) {
        select_jobclass = "";
      }
      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 fb_posts 回傳。
      if (
        this.keyword.trim() !== "" ||
        select_jobclass !== "" ||
        select_area !== ""
      ) {
        this.searchResult = this.intern_info.filter(function (d) {
          return d.title.toLowerCase().indexOf(keyword) > -1; //過濾關鍵字
        });
        this.cp_searchResult = this.company_posts.filter(function (d) {
          return d.title.toLowerCase().indexOf(keyword) > -1; //過濾關鍵字
        });
        // console.log(this.keyword.trim() !== "");
        // console.log(select_jobclass);
        // console.log(select_area);

        // 0426問題  cp_name無法搜尋
        this.searchResult = this.intern_info.filter(function (d) {
          return (
            d.cp_name.toLowerCase().indexOf(keyword) > -1 ||
            d.job_desc.toLowerCase().indexOf(keyword) > -1 ||
            d.cp_name.toLowerCase().indexOf(keyword) > -1
          ); //過濾關鍵字
        });
        this.cp_searchResult = this.company_posts.filter(function (d) {
          return (
            d.cp_name.toLowerCase().indexOf(keyword) > -1 ||
            d.job_desc.toLowerCase().indexOf(keyword) > -1 ||
            d.cp_name.toLowerCase().indexOf(keyword) > -1
          ); //過濾關鍵字
        });

        // this.searchResult = this.intern_info.filter(function (d) {
        //   return d.job_desc.toLowerCase().indexOf(keyword) > -1; //過濾關鍵字
        // });

        this.searchResult = this.searchResult.filter(function (d) {
          return d.title.toLowerCase().indexOf(select_jobclass) > -1; //過濾類別
        });
        this.cp_searchResult = this.cp_searchResult.filter(function (d) {
          return d.type.toLowerCase().indexOf(select_jobclass) > -1; //過濾類別
        });

        this.searchResult = this.searchResult.filter(function (d) {
          return (
            d.title.toLowerCase().indexOf(select_area) > -1 ||
            d.job_desc.toLowerCase().indexOf(select_area) > -1 ||
            d.location.toLowerCase().indexOf(select_area) > -1
          ); //過濾地區
        });
        this.cp_searchResult = this.cp_searchResult.filter(function (d) {
          return (
            d.city.toLowerCase().indexOf(select_area) > -1 ||
            d.job_desc.toLowerCase().indexOf(select_area) > -1
          ); //過濾地區
        });

        // this.searchResult = this.searchResult.filter(function (d) {
        //   return d.job_desc.toLowerCase().indexOf(select_area) > -1; //過濾地區
        // });
      } else {
        this.searchResult = this.intern_info;
        this.cp_searchResult = this.company_posts;
      }
    },
    //設定當前頁面
    setPage: function (idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
    //貼文排序由新到舊
    sortNewtoOld: function () {
      this.searchResult.sort(function (p1, p2) {
        return p2.id - p1.id;
      });
      this.cp_searchResult.sort(function (p1, p2) {
        return p2.id - p1.id;
      });
    },
    //貼文排序由舊到新
    sortOldtoNew: function () {
      this.searchResult.sort(function (p1, p2) {
        return p1.id - p2.id;
      });
      this.cp_searchResult.sort(function (p1, p2) {
        return p1.id - p2.id;
      });
    },
    //觀看次數排序由多到少
    sortPopularity: function () {
      this.searchResult.sort(function (p1, p2) {
        return p2.counter - p1.counter;
      });
      this.cp_searchResult.sort(function (p1, p2) {
        return p2.counter - p1.counter;
      });
    },

    //收藏(爬蟲貼文)
    save: function (p_id) {
      if (this.isLoggedIn) {
        const u_id = this.$store.getters.getUser.ID;
        const api = "api/save";
        const params = {
          p_id: p_id,
          u_id: u_id,
        };
        axios
          .post(api, params)
          .then((response) => {
            alert(response.data.msg);
            this.saved_posts.splice(this.saved_posts.length, 0, p_id);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // 沒有登入會導向登入頁面
        alert("您尚未登入");
        this.$router.push("/login");
      }
    },
    //取消收藏(爬蟲貼文)
    unsave: function (p_id) {
      const api = "/api/unsave";
      const u_id = this.$store.getters.getUser.ID;
      var params = {
        u_id: u_id,
        p_id: p_id,
      };
      axios
        .delete(api, { data: params })
        .then((response) => {
          alert(response.data.msg);
          var index = this.saved_posts.indexOf(p_id);
          this.saved_posts.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //收藏(公司貼文)
    cp_save: function (p_id) {
      if (this.isLoggedIn) {
        const u_id = this.$store.getters.getUser.ID;
        const api = "api/company/save";
        const params = {
          p_id: p_id,
          u_id: u_id,
        };
        axios
          .post(api, params)
          .then((response) => {
            alert(response.data.msg);
            this.cp_saved_posts.splice(this.cp_saved_posts.length, 0, p_id);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // 沒有登入會導向登入頁面
        alert("您尚未登入");
        this.$router.push("/login");
      }
    },
    //取消收藏(公司貼文)
    cp_unsave: function (p_id) {
      const api = "/api/company/unsave";
      const u_id = this.$store.getters.getUser.ID;
      var params = {
        u_id: u_id,
        p_id: p_id,
      };
      axios
        .delete(api, { data: params })
        .then((response) => {
          alert(response.data.msg);
          var index = this.cp_saved_posts.indexOf(p_id);
          this.cp_saved_posts.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    //axios獲取後臺資料
    var api = "/api/posts";

    axios
      .get(api)
      .then((response) => {
        this.intern_info = response.data;
        this.searchResult = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });

    //顯示公司發佈之實習貼文
    var api = "/api/company_posts";

    axios
      .get(api)
      .then((response) => {
        this.company_posts = response.data;
        this.cp_searchResult = response.data;
      })
      .catch(function (error) {
        // 請求失敗處理
        console.log(error);
      });

    //取得收藏貼文，用來判斷是否需顯示已收藏
    if (this.isLoggedIn) {
      //爬蟲
      api = "/api/show-save";
      var u_id = this.$store.getters.getUser.ID;
      var params = { u_id: u_id };
      axios
        .get(api, { params })
        .then((response) => {
          //saved_posts只存p_id
          this.saved_posts = response.data.map(function (items, index) {
            return items.p_id;
          });
        })
        .catch((error) => {
          console.log(error);
        });

      //公司
      api = "/api/show-cp_save";
      var u_id = this.$store.getters.getUser.ID;
      var params = { u_id: u_id };
      axios
        .get(api, { params })
        .then((response) => {
          //cp_saved_posts只存p_id
          this.cp_saved_posts = response.data.map(function (items, index) {
            return items.p_id;
          });
          console.log(this.cp_saved_posts);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    api = "/api/show-top5";
    axios.get(api).then((response) => {
      this.top5_post = response.data;
    });
  },
};
</script>
<style>
.hidden {
  display: none;
}
#Home a {
  color: black;
}
</style>
