<template>
    <div>
        <span>日期：{{ date }}</span>
        <el-button @click="showDate" type="primary">获取格式化的日期</el-button>
        <div style="width: auto; height: 10px;"></div>
        <el-date-picker
            v-model="period"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd">
        </el-date-picker>
        <el-button @click="enumerateBetweenDays" type="primary">获取所选的两个日期间的所有日期</el-button>
        <span>日期有：{{ dayList }}</span>
        <div style="width: 100%; height: 10px;"></div>
        <el-date-picker>
            
        </el-date-picker>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'momentJs',
    data () {
        return {
            date:'',
            period: '',
            startDate: '',
            endDate:'',
            dayList:[],
        }
    },
    
    created() {
        this.init()
    },
    mounted() {

    },
    methods: {
        init(){
            //moment.locale('zh-cn')
        },
        showDate(){
            //this.date = moment().format('Y')  //2024
            //this.date = moment().format('X')  //时间戳
            //this.date = moment().format('Q')  //2
            //this.date = moment().format('M')  //6
            //this.date = moment().format('MM')  //06
            //this.date = moment().format('MMM')  //Jun / 6月
            //this.date = moment().format('MMMM')  //June / 六月
            //this.date = moment().format('D')  //7
            //this.date = moment().format('DD')  //07
            //this.date = moment().format('Do')  //7th  / 7日
            //this.date = moment().format('DDD')  //159
            //this.date = moment().format('DDDD')  //159
            //this.date = moment().format('d')  //5  /  五
            //this.date = moment().format('dd')  //Fr  /  五
            //this.date = moment().format('ddd')  //Fri  /  周五
            //this.date = moment().format('dddd')  //Friday  /  星期五
            //this.date = moment().format('w')  //23
            //this.date = moment().format('A')  //AM/上午
            //this.date = moment().format('a')  //am/上午
            //this.date = moment().format('H')  //3
            //this.date = moment().format('HH')  //15
            //this.date = moment().format('h')  //3
            //this.date = moment().format('hh')  //03
            //this.date = moment().format('m')  //8
            //this.date = moment().format('mm')  //08
            //this.date = moment().format('s')  //8
            //this.date = moment().format('ss')  //08
            //this.date = moment().format('X')  //1717727885
            this.date = moment().format('x')  //1717727916234            
        },
        enumerateBetweenDays(){
            this.startDate = this.period[0]
            this.endDate = this.period[1]
            this.dayList = [];
            let sDate = moment(this.startDate)
            let eDate = moment(this.endDate)
            this.dayList.push(sDate.format('MM-DD')); //先把起始日期加入数组
            while(sDate.add(1,'days').isBefore(eDate)){  //add为现有moment添加时间，isBefore返回是否在结束日期之前
                this.dayList.push(sDate.format('MM-DD'))
            }
            this.dayList.push(eDate.format('MM-DD'));  //循环结束再把最后一天加上
            return this.dayList;
        },
    }
}
</script>

<style scoped lang="scss">

</style>
    