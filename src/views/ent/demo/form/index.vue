<template>
  <div class="main-container">
    <div class="header">
      <div class="header-title">
        <span>form表单demo</span>
      </div>
    </div>
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane name="first">
        <template #label>
          <span><el-icon><Calendar /></el-icon>我的行程</span>
        </template> 
      </el-tab-pane>
      <el-tab-pane label="消息中心" name="second">消息中心</el-tab-pane>
      <el-tab-pane label="个人中心" name="third">
        <el-button type="primary" @click="dialog = true">信息维护</el-button>
      </el-tab-pane>
    </el-tabs>

    <el-drawer
      title="个人信息填写"
      v-model="dialog"
      size="50%"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="info">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-position="top"
          label-width="100px"
          class="applyForm"
          status-icon
        >
          <div class="avatar">
            <img
              src="https://mimg.127.net/p/js6/lib/img/noface_new.gif"
              alt=""
            />
          </div>
          <el-form-item label="用户名（clearable）" prop="userName">
            <el-input
              v-model="ruleForm.userName"
              prefix-icon="el-icon-user"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="联系方式（blur、change、input）" prop="phone">
            <el-input
              v-model="ruleForm.phone"
              prefix-icon="el-icon-phone-outline"
              @blur="inputBlur"
              @change="inputChange"
              @input="inputInput"
            ></el-input>
          </el-form-item>
          <el-form-item label="远程搜索" prop="inputSearch">
            <el-autocomplete
              v-model="ruleForm.inputSearch"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
            >
            </el-autocomplete>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex" @input="handleRadioInput">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生日" prop="birthday">
            <!-- <el-config-provider :locale="locale"> -->
              <el-date-picker
                v-model="ruleForm.birthday"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            <!-- </el-config-provider> -->
          </el-form-item>
          <el-form-item label="日期（有format）" prop="dateFormat">
            <!-- format指定输入框的格式 -->
            <el-date-picker
              v-model="ruleForm.dateFormat"
              type="date"
              placeholder="选择日期"
              format="YYYY 年 MM 月 DD 日"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="日期（有value-format）" prop="dateValueFormat">
            <!-- format指定输入框的格式 -->
            <el-date-picker
              v-model="ruleForm.dateValueFormat"
              type="date"
              placeholder="选择日期"
              value-format="YYYY-MM-DD"
              @change="handleDateChange"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="日期时间（带默认时间）" prop="dateTime">
            <el-date-picker
              v-model="ruleForm.dateTime"
              type="datetime"
              placeholder="选择日期时间"
              :default-time="defaultTime"
              format="YYYY-MM-DD HH:mm"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="日期时间（带默认填充时间）" prop="dateTimeRange">
            <el-date-picker
              v-model="ruleForm.dateTimeRange"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="日期时间（有禁用）" prop="dateTimeRange2">
            <el-date-picker
              v-model="ruleForm.dateTimeRange2"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :disabled-date="disabledDate"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="多选框（checkbox）" prop="checkbox">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            >
            <div style="margin: 15px 0"></div>
            <el-checkbox-group
              v-model="ruleForm.checkedCities"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox
                v-for="city in cities"
                :label="city.id"
                :key="city.id"
                :value="city.id"
                >{{ city.value }}</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="选择器（select 有change方法）" prop="select">
            <el-select v-model="ruleForm.select" @change="handleSelectChange">
              <el-option
                v-for="item in options"
                :label="item.value"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择器（自定义模板）" prop="selectModel">
            <el-select v-model="ruleForm.selectModel">
              <el-option
                v-for="item in citiesWithEn"
                :label="item.value"
                :key="item.en"
                :value="item.en"
              >
                <span style="float: left">{{ item.value }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.en
                }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择器（分组）" prop="selectGroup">
            <el-select v-model="ruleForm.selectGroup">
              <el-option-group
                v-for="group in citiesWithGroup"
                :key="group.value"
                :label="group.label"
              >
                <el-option
                  v-for="item in group.cities"
                  :label="item.value"
                  :key="item.en"
                  :value="item.en"
                >
                </el-option>
              </el-option-group>
            </el-select>
          </el-form-item>
          <el-form-item label="选择器（远程搜索）" prop="selectRemote">
            <el-select
              v-model="ruleForm.selectRemote"
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loadingSelect"
            >
              <el-option
                v-for="item in citiesWithRemote"
                :label="item.name"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择器（远程搜索调接口）" prop="selectRemote2">
            <el-select
              v-model="ruleForm.selectRemote2"
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod2"
              :loading="loadingSelect2"
            >
              <el-option
                v-for="item in nameWithRemote"
                :label="item.name"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="树形" prop="tree">
                    <el-tree
                        :data="treeCity2"
                        ref="tree"
                        show-checkbox
                        accordion
                        node-key="id"
                        :default-expanded-keys="[2,3]"
                        :default-checked-keys="[5]"
                        :props="defaultProps"
                        @check="handleTreeChecked" 
                    >
                    </el-tree>
                </el-form-item> -->

          <el-form-item label="树形下拉选择器" prop="tree">
            <el-select v-model="ruleForm.treeSelect" ref="treeSelectRef">
              <el-option
                v-for="item in optionData(treeCity)"
                :label="item.label"
                :value="item.value"
                :key="item.value"
                style="display: none"
              ></el-option>

              <el-tree
                :data="treeCity"
                ref="tree"
                accordion
                node-key="id"
                :props="defaultProps"
                @node-click="handleNodeClick"
              >
              </el-tree>
            </el-select>
          </el-form-item>
          <div style="width: 100%; height: 20px"></div>

          <el-row>
            <el-col :span="24">
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submit('ruleForm')"
                  :loading="loading"
                  >提交</el-button
                >
                <el-button type="warning" @click="clear('ruleForm')"
                  >清空</el-button
                >
                <el-button @click="reShow('ruleForm')">复现</el-button>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  icon="el-icon-check"
                  @click="submit('ruleForm')"
                  :loading="loading"
                  circle
                ></el-button>
                <el-button
                  type="warning"
                  icon="el-icon-brush"
                  @click="clear('ruleForm')"
                  circle
                ></el-button>
                <el-button
                  icon="el-icon-document"
                  @click="reShow('ruleForm')"
                  circle
                ></el-button>
              </el-form-item>

              <el-button @click="openMessageBox" type="text"
                >将以上内容发送到手机</el-button
              >

              <el-button type="text" @click="dialogTableVisible = true"
                >查看收货地址</el-button
              >
              <el-dialog
                title="收货地址"
                v-model="dialogTableVisible"
                append-to-body
              >
                <el-table
                  :data="tableData"
                  ref="table"
                  highlight-current-row
                  @current-change="handleCurrentChange"
                  border
                >
                  <el-table-column label="操作" width="55">
                    <template #scope>
                      <el-radio :label="scope.row.id" v-model="addressChecked"
                        >&nbsp;</el-radio
                      >
                    </template>
                  </el-table-column>
                  <el-table-column property="name" label="收货人" width="150">
                    <!-- <template slot-scope="scope">
                                        {{ scope.row.name}}
                                    </template> -->
                  </el-table-column>
                  <el-table-column
                    property="address"
                    label="地址"
                  ></el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                  <el-button @click="setAddress">确定</el-button>
                  <el-button @click="dialogTableVisible = false"
                    >取消</el-button
                  >
                </div>
              </el-dialog>

              <el-tooltip
                class="item"
                effect="dark"
                content="这是一条提示"
                placement="top-start"
              >
                <el-button type="text">查看提示信息</el-button>
              </el-tooltip>

              <el-button @click="goo('/lodash')">lodash</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { nextTick } from 'vue';

// import { ElConfigProvider } from 'element-plus'
// import zhCn from "element-plus/lib/locale/lang/zh-cn";
export default {
  name: "Form",
  components: {
    // [ ElConfigProvider.name ]: ElConfigProvider
  },
  data() {
    return {
      // locale: zhCn,
      defaultTime: new Date(2000, 1, 1, 9, 0, 0),
      
      activeName: "third",
      dialog: false,
      loading: false /* 提交按钮的加载中状态，默认不显示加载中 */,
      ruleForm: {
        userName: "" /* 用户名 */,
        sex: "" /* 性别 */,
        phone: "" /* 联系方式 */,
        inputSearch: "" /* input的远程搜索 */,
        birthday: "" /* 生日 */,
        dateFormat: "",
        dateValueFormat: "",
        dateTime: "",
        dateTimeRange: [
          new Date(2000, 10, 10, 10, 10),
          new Date(2000, 10, 10, 10, 10),
        ],
        dateTimeRange2: "",
        checkedCities: [],
        select: "" /* 普通选择器 */,
        selectModel: "" /* 自定义模板的选择器 */,
        selectGroup: "" /* 有分组的选择器 */,
        selectRemote: "" /* 远程搜索的选择器 */,

        tree: [],
        treeSelect: "" /* 树形下拉选择器 */,
      },
      rules: {},

      restaurants: [],
      timeout: null,

      isIndeterminate: true,
      checkAll: false,
      /* cities: ['上海', '北京', '广州', '深圳'], */
      cities: [
        { id: "0", value: "上海" },
        { id: "1", value: "北京" },
        { id: "2", value: "广州" },
        { id: "3", value: "深圳" },
      ],
      citiesWithEn: [
        { en: "Shanghai", value: "上海" },
        { en: "Beijing", value: "北京" },
        { en: "Guangzhou", value: "广州" },
        { en: "Shenzhen", value: "深圳" },
      ],
      citiesWithGroup: [
        {
          label: "热门城市",
          cities: [
            { en: "Shanghai", value: "上海" },
            { en: "Beijing", value: "北京" },
            { en: "Guangzhou", value: "广州" },
          ],
        },
        {
          label: "其他城市",
          cities: [
            { en: "Hangzhou", value: "杭州" },
            { en: "Chengdu", value: "成都" },
            { en: "Shenzhen", value: "深圳" },
          ],
        },
      ],
      options: [
        { id: "0", value: "黄金糕" },
        { id: "1", value: "双皮奶" },
        { id: "2", value: "蚵仔煎" },
        { id: "3", value: "龙须面" },
      ],
      loadingSelect: false,
      loadingSelect2: false,
      citiesWithRemote: [],
      nameWithRemote: [],
      list: [],
      statesInUSA: [
        { id: "0", name: "Alabama" },
        { id: "1", name: "California" },
        { id: "2", name: "Delaware" },
        { id: "3", name: "Florida" },
        { id: "4", name: "Georgia" },
        { id: "5", name: "Hawaii" },
        { id: "6", name: "Idaho" },
        { id: "7", name: "Kansas" },
      ],

      name: [
        { id:'0', name: '彭于晏' },
        { id:'1', name: '彭昱畅' },
      ],

      treeCity: [
        {
          id: 1,
          label: "浙江",
          children: [
            {
              id: 4,
              label: "杭州市",
              children: [
                {
                  id: 7,
                  label: "余杭区",
                },
                {
                  id: 8,
                  label: "拱墅区",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "重庆",
          children: [
            {
              id: 5,
              label: "渝北区",
            },
          ],
        },
        {
          id: 3,
          label: "北京",
          children: [
            {
              id: 6,
              label: "海淀区",
            },
          ],
        },
      ],
      treeCity2: [
        {
          id: 1,
          label: "浙江",
          children: [
            {
              id: 4,
              label: "杭州市",
              children: [
                {
                  id: 7,
                  label: "余杭区",
                },
                {
                  id: 8,
                  label: "拱墅区",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "重庆",
          children: [
            {
              id: 5,
              label: "渝北区",
            },
          ],
        },
        {
          id: 3,
          label: "北京",
          children: [
            {
              id: 6,
              label: "海淀区",
            },
          ],
        },
      ],

      /* 扁平数组，要转成树形数组 */
      array: [
        { id: "01", name: "中国", pid: "" },
        { id: "02", name: "北京市", pid: "01" },
        { id: "03", name: "海淀区", pid: "02" },
        { id: "04", name: "丰台区", pid: "02" },
        { id: "05", name: "朝阳区", pid: "02" },
        { id: "06", name: "重庆市", pid: "01" },
        { id: "07", name: "渝中区", pid: "06" },
        { id: "08", name: "江北区", pid: "06" },
        { id: "09", name: "四川省", pid: "01" },
        { id: "10", name: "成都市", pid: "09" },
        { id: "11", name: "成华区", pid: "10" },
        { id: "12", name: "武侯区", pid: "10" },
      ],

      defaultProps: {
        children: "children",
        label: "label",
      },
      mobile: "",

      tableData: [
        {
          id: "1",
          name: "aa",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "2",
          name: "bb",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "3",
          name: "cc",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "4",
          name: "dd",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      addressChecked: null,
      currentRow: {},

      isSubmit: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.isSubmit)
    console.log(to)
    console.log(from)
    if(!this.isSubmit) {
      this.$confirm('您的信息还未提交, 是否离开?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          next()
        }).catch(() => {
          return false;          
        });
    }
  },
  /* watch: {
        //深度监听，数据有变化即存储
        'ruleForm':{
            handler(val){
                if(val){
                    let tempData = []
                    tempData.push(this.ruleForm)
                    sessionStorage.setItem('tempData',JSON.stringify(tempData))
                }
                   
            },
            deep:true
        }
    }, */
  created() {
    this.init();
  },
  mounted() {
    this.restaurants = this.loadRestaurants();
  },
  methods: {
    init() {
      this.transNormalToTree(this.array);
    },

    goo(path) {
      this.$router.push(path);
    },
    /* 输入框的blur事件 */
    inputBlur(event) {
      console.log("this.ruleForm.phone", this.ruleForm.phone);
      console.log("blur = ", event.target.value);
    },
    /* 输入框的change事件 */
    inputChange(val) {
      console.log("this.ruleForm.phone", this.ruleForm.phone);
      console.log("change = ", val);
    },
    /* 输入框的input事件 */
    inputInput(val) {
      console.log("this.ruleForm.phone", this.ruleForm.phone);
      console.log("input = ", val);
    },
    // 禁用时间选择器的时间
    disabledDate(v) {
        /* return v.getTime() < Date.now() - 8.64e7; */ /* 禁用今天之前的日期（今天可以选） */
        /* return v.getTime() < Date.now(); */ /* 禁用今天之前的日期（今天不能选） */
        /* return v.getTime() > Date.now() - 8.64e7; */ /* 禁用今天之前的日期（今天不能选） */
        /* return v.getTime() > Date.now(); */ /* 禁用今天之前的日期（今天可以选） */
      var stamp = new Date(2024, 5, 17);
      var timestamp = stamp.getTime(); /* 获取2024年6月17日的时间戳 */
      return v.getTime() < timestamp; /* 禁用2024年6月17日之前的日期 */
    },
    /* 加载餐厅列表 */
    loadRestaurants() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
      ];
    },

    /* fetch-suggestions返回输入建议的方法 */
    querySearchAsync(queryString, callback) {
      let restaurants = this.restaurants;
      let results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        callback(results);
      }, 1000);
    },
    createStateFilter(queryString) {
      return (res) => {
        return res.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    /* input的select方法：选中input中的文字时触发 */
    handleSelect(item) {
      console.log(item);
    },

    /* radio的绑定值变化时触发的事件 */
    handleRadioInput(val) {
      console.log(val);
      console.log(this.ruleForm.sex);
    },
    /* 日期选择器change事件 */
    handleDateChange() {
      console.log(this.ruleForm.dateValueFormat);
    },
    /* 全选框的change事件 */
    handleCheckAllChange(val) {
      console.log(val) /* 全选就是true */
      this.ruleForm.checkedCities = val ? ['0','1','2','3'] : [];
      this.isIndeterminate = false;
    },
    /* checkbox框的change事件 */
    handleCheckedCitiesChange(val) {
      console.log(val); /* val是当前选中的框值 */
      console.log(this.ruleForm.checkedCities.join(","));
      let checkedCount = val.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },

    /* select的change事件 */
    handleSelectChange(val) {
      console.log("select change = ", val);
    },
    /* select的远程搜索事件 */
    remoteMethod(query) {
      if (query != "") {
        this.loadingSelect = true; /* 先设置搜索中状态 */
        setTimeout(() => {
          this.loadingSelect = false; /* 搜到了 */
          this.citiesWithRemote = this.statesInUSA.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.citiesWithRemote = [];
      }
    },
    remoteMethod2(query) {
      if(query != "") {
        this.loadingSelect2 = true;
        setTimeout(() => {
          this.loadingSelect2 = false;
          // 调接口，将query传给后台，后台返回name数组 假设返回的res.data就是this.name
          this.nameWithRemote = this.name;
        },200)
      } else {
        this.nameWithRemote = []
      }
    },

    /* 树形控件的check事件 */
    /* handleTreeChecked(data){
        console.log('current Click Node:',data.label)
        console.log(this.$refs.tree.getCheckedNodes())
        if(data.children != undefined){
            console.log('current node is not leaf')
        }else{
            console.log('current node is leaf')
        }
      }, */

    /* 将扁平数组转为树形数组 */
    transNormalToTree(arr) {
      let result = []; //存储结果
      arr.forEach((item) => {
        //判断当前节点是否是根节点，是则直接push到结果中
        if (!item.pid) {
          result.push(item);
        }
        //将所有pid等于当前id的对象储存在childArr数组中
        let childArr = arr.filter((data) => {
          return data.pid === item.id;
        });
        if (!childArr.length) {
          //childArr为空，当前item是叶子节点，直接退出
          return;
        }
        item.children = childArr;
      });
      console.log(result);
      return result;
    },

    /* 将树形数组转为平面数组 */
    optionData(array, result = []) {
      array.forEach((item) => {
        result.push({ label: item.label, value: item.id });
        if (item.children && item.children.length !== 0) {
          /* 如果有children节点，递归执行 */
          this.optionData(item.children, result);
        }
      });
      return JSON.parse(JSON.stringify(result));
    },
    /* 树形下拉选择器的点击节点事件 */
    handleNodeClick(node) {
      console.log("current Click Node:", node.label);
      if (node.children != undefined) {
        console.log("current node is not leaf");
      } else {
        console.log("current node is leaf");
      }
      this.ruleForm.treeSelect = node.label;
      this.$refs.treeSelectRef.blur(); /* 树形下拉组件关闭 */
    },

    /* 打开messageBox */
    openMessageBox() {
      const h = this.$createElement;
      this.$msgbox({
        title: "绑定手机号",
        message: h(
          "div",
          {
            attrs: {
              class: "el-input",
            },
          },
          [
            h("input", {
              attrs: {
                placeholder: "请输入手机号码",
                id: "mobile",
                class: "el-input__inner",
                autocomplete: "off",
              },
              value: this.mobile,
              on: { input: this.handleMobileChange },
            }),
          ]
        ),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            //如果操作是按下“确定”
            instance.confirmButtonLoading = true; //为实例的确定按钮添加loading状态
            instance.confirmButtonText = "正在发送..."; //为实例的确定按钮添加loading状态文字
            setTimeout(() => {
              done(); //关闭实例
              setTimeout(() => {
                instance.confirmButtonLoading = false; //确定按钮恢复
              }, 300);
            }, 3000);
          } else {
            done(); //直接关闭实例
          }
        },
      })
        .then((action) => {
          this.$message({
            type: "success",
            message: "发送成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    handleMobileChange() {
      this.mobile = document.getElementById("mobile").value;
      console.log(this.mobile);
    },

    /* 返回选中的表格行 */
    handleCurrentChange(row) {
      this.currentRow = row;
      console.log(row);
    },

    setAddress() {
      this.$confirm("是否确定选择该条地址", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.dialogTableVisible = false;
          this.$message({
            type: "success",
            message: "设置成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    /* 提交 */
    submit(ruleForm) {
      const _this = this;
      _this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          _this.loading = true; /* 验证通过后开始提交，按钮变为加载中状态 */
          setTimeout(function () {
            _this.loading = false;
            console.log(_this.ruleForm);
            alert("已提交！");
            _this.isSubmit = true;
          }, 3000);
        } else {
          console.log("error submit");
          _this.isSubmit = false;
          return false;
        }
      });
    },
    /* 清空 */
    clear(ruleForm) {
      this.$confirm(
        "此操作将清空表单内容, 后续您可以使用“复现”按钮将当前内容再次填入，是否继续清空?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          let tempData = [];
          tempData.push(this.ruleForm);
          sessionStorage.setItem("tempData", JSON.stringify(this.ruleForm));
          this.$refs[ruleForm].resetFields();
          this.ruleForm.dateTimeRange = "";
          this.ruleForm.checkedCities = [];
          this.ruleForm.treeSelect = "";
          this.$message({
            type: "success",
            message: "已清空!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    /* 复现 */
    reShow(ruleForm) {
      if (sessionStorage.getItem("tempData")) {
        console.log(JSON.parse(sessionStorage.getItem("tempData")));
        this.ruleForm = JSON.parse(sessionStorage.getItem("tempData"));
      } else {
        this.$message({
          type: "info",
          message: "当前没有可复现的信息",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.main-container {
  position: relative;
  min-width: 970px;
  max-width: 1200px;
  margin: auto;
  justify-content: center;
}

/* .form{
    width: 100%;
    display: flex;
    justify-content: center;
}

.form-content{
    width: 880px;
    background-color: #fff;
} */

.header {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ababab;
  padding-bottom: 20px;
  margin: 20px;
  div {
    display: flex;
  }
  .header-title {
    text-align: center;
    margin: 0 auto;
    font-weight: 800;
    font-size: 22px;
  }
}

.el-tabs {
  width: 80%;
  margin: auto;
}

.info {
  margin: 20px 30px;
}

.avatar {
  text-align: center;
  margin: 0px auto 30px;
  img {
    width: 80px;
    height: 80px;
  }
}

.el-input {
  width: 80%;
}
</style>
