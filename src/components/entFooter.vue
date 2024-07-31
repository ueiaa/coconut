<template>
  <div class="home-footer">
    <div class="footer-container">
      <div class="flex">
        <div class="btn">
          <img src="@/assets/home-page/cloud-btn.svg" alt="" />
        </div>
        <div class="info">
          <div style="margin-right: 30px">
            <h3 class="title">PRODUCT</h3>
            <ul>
              <li><el-button type="text">CSPM</el-button></li>
              <li>
                <el-button type="text">Vulnerability management</el-button>
              </li>
              <li><el-button type="text">Container & Kubernetes</el-button></li>
              <li><el-button type="text">security</el-button></li>
              <li><el-button type="text">CDR</el-button></li>
              <li><el-button type="text">IaC scanning</el-button></li>
              <li><el-button type="text">CIEM</el-button></li>
              <li><el-button type="text">Ensure compliance</el-button></li>
              <li><el-button type="text">CNAPP</el-button></li>
              <li><el-button type="text">DSPM</el-button></li>
              <li><el-button type="text">CWPP</el-button></li>
              <li><el-button type="text">AI-SPM</el-button></li>
              <li><el-button type="text">Code Security</el-button></li>
              <li><el-button type="text">Supply Chain Security</el-button></li>
            </ul>
          </div>
          <div>
            <h3 class="title">BLOG</h3>
            <ul>
              <li><el-button type="text">Blog</el-button></li>
            </ul>
            <div>
              <h3 class="title">LEARN</h3>
              <ul>
                <li><el-button type="text">Customer stories</el-button></li>
                <li><el-button type="text">Our partners</el-button></li>
                <li><el-button type="text">CloudSec academy</el-button></li>
                <li>
                  <el-button type="text">Cloud Risk Assessment</el-button>
                </li>
                <li><el-button type="text">Documentation</el-button></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 class="title">COMPANY</h3>
            <ul>
              <li><el-button type="text">About Us</el-button></li>
              <li><el-button type="text">Join the team</el-button></li>
              <li><el-button type="text">Newsroom</el-button></li>
              <li><el-button type="text">Events</el-button></li>
              <li><el-button type="text">Contact Us</el-button></li>
              <li><el-button type="text">Trust Center</el-button></li>
            </ul>
          </div>
        </div>
        <div class="media">
          <div>
            <el-select v-model="language" placeholder="Select">
              <template #prefix>
                <img src="@/assets/home-page/language.svg" alt="" style="width: 20px; height: 20px">
              </template>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <el-row>
                  <el-col :span="6" style="display: flex; justify-content: center; align-items: center;">
                    <img
                      class="flag-icon"
                      :src="item.src"
                      alt=""
                      style="width: 30px;height: 20px;"
                    />
                  </el-col>
                  <el-col :span="18">
                    <span style="float: left">{{ item.label }}</span>
                  </el-col>
                </el-row>
              </el-option>
            </el-select>
          </div>
          <div class="flex">
            <a href=""><img src="@/assets/home-page/facebook.svg" alt="" /></a>
            <a href=""><img src="@/assets/home-page/twitter.svg" alt="" /></a>
            <a href=""><img src="@/assets/home-page/weibo.svg" alt="" /></a>
            <a href=""><img src="@/assets/home-page/QQ.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom"></div>
    <div class="footer-footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          src: "https://flagcdn.com/w40/cn.png",
          label: "China(中文简体)",
          value: "China",
        },
        {
          src: "https://flagcdn.com/w40/us.png",
          label: "English(US)",
          value: "English",
        },
        {
          src: "https://flagcdn.com/w40/it.png",
          label: "Italiano",
          value: "Italiano",
        },
      ],
      language: "China",
    };
  },
};
</script>

<style lang="scss" scoped>
.home-footer {
  background-color: #1e293b;
  padding-top: 5rem;
  .footer-container {
    display: flex;
    justify-content: center;
    //margin: 0 2rem;
    max-width: 100%;
    .flex {
      display: flex;
      //flex-direction: column;
      gap: 2rem;
      .btn {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        display: grid;
        gap: 3rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        .title {
          color: #717783;
          font-weight: 600;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        ul {
          list-style-type: none;
          padding-inline-start: 0px;
        }
      }

      .media {
        display: flex;
        flex-direction: column;
        .flex {
          display: flex;
          margin-top: 10px;
          a {
            text-decoration: none;
            color: #eaf1ff;
            img {
              width: 30px;
              height: 30px;
            }
          }
        }

        // :deep(.el-select) {
        //   border: none;
          
        //     background-color: #000 !important;
          
        // }
      }
    }
  }
}
</style>
