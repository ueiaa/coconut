<template>
    <div>
        <h1>数组</h1>
        <h3>difference</h3>
        <span>array1:{{ array1 }}<br>array2:{{ array2 }}</span>
        <el-button @click="getDifference" type="primary">difference</el-button>
        <span>比较结果为：{{ differenceArray }}</span>

        <h3>differenceBy</h3>
        <span>array1:{{ arrayBy1 }}<br>array2:{{ arrayBy2 }}</span>
        <el-button @click="getDifferenceBy" type="primary">differenceBy</el-button>
        <span>比较结果为：{{ differenceByArray }}</span>

        <h3>differenceWith</h3>
        <span>array1:{{ arrayWith1 }}<br>array2:{{ arrayWith2 }}</span>
        <el-button @click="getDifferenceWith" type="primary">differenceWith</el-button>
        <span>比较结果为：{{ differenceWithArray }}</span>

        <h3>dropWhile</h3>
        <span>array1:{{ arrDrop1 }}</span><br><span>drop：e != 5</span>
        <el-button @click="getDropWhile" type="primary">getDropWhile</el-button>
        <span>结果为：{{ dropWhileArray }}</span>
        <br><br>
        <span>array1:{{ arrDrop2 }}</span><br><span>drop：e.b == 2</span>
        <el-button @click="getDropWhile2" type="primary">getDropWhile</el-button>
        <span>结果为：{{ dropWhileArray2 }}</span>

        <h1>函数</h1>
        <h3>防抖与节流</h3>
        <h4>未处理前：</h4>
        <el-form :inline="true" :model="inlineForm1">
            <el-form-item label="姓名">
                <el-input v-model="inlineForm1.name" @input="handleInput"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch()">查询</el-button>
            </el-form-item>
        </el-form>

        <h4>封装的防抖与节流：</h4>
        <el-form :inline="true" :model="inlineForm2">
            <el-form-item label="姓名">
                <el-input v-model="inlineForm2.name" @input="handleInput2"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch2()">查询</el-button>
            </el-form-item>
        </el-form>

        <h4>使用lodash的防抖与节流：</h4>
        <el-form :inline="true" :model="inlineForm3">
            <el-form-item label="姓名">
                <el-input v-model="inlineForm3.name" @input="handleInput3"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch3()">查询</el-button>
            </el-form-item>
        </el-form>

        <h1>语言</h1>
        <h3>深浅拷贝</h3>
        <h4>浅拷贝clone</h4>


    </div>
</template>

<script>

//import { isEqual,difference } from 'lodash-es';

import _ from 'lodash';   /* 全局引入 */
//import isNil from 'lodash/isNil';   /* 具体文件按需引入 */
//import { isNil } from 'lodash-es';   /* 使用lodash-es的ES Module模式引入 */
import {debounce2,throttle2} from '@/utils/utils'
export default {
    name: 'LodashDemo',
    data () {
        return {
            array1:[1,2,3,4,5],
            array2:[3,4,6,8,9],
            differenceArray:'',

            arrayBy1:[{'x':1},{'x':2},{'x':3}],
            arrayBy2:[{'x':1},{'x':4},{'x':5}],
            differenceByArray:'',

            arrayWith1:[{'x':1,'y':2},{'x':2,'y':3},{'x':3,'y':4}],
            arrayWith2:[{'x':1,'y':2},{'x':4,'y':5},{'x':5,'y':6}],
            differenceWithArray:'',

            arrDrop1:[1,3,4,5,5,6],
            dropWhileArray:'',

            arrDrop2:[
            
                {'a':1,'b':2},
                {'a':2,'b':1},
                {'b':2},
            ],
            dropWhileArray2:'',

            inlineForm1:{
                name:''
            },
            inlineForm2:{
                name:''
            },
            inlineForm3:{
                name:''
            }
        }
    },
    
    created() {
        this.init()
    },
    mounted() {

    },
    methods: {
        init(){

        },
        getDifference(){
            this.differenceArray = _.difference(this.array1,this.array2);
        },
        getDifferenceBy(){
            this.differenceByArray = _.differenceBy(this.arrayBy1,this.arrayBy2,'x');
        },
        getDifferenceWith(){
            this.differenceWithArray = _.differenceWith(this.arrayWith1,this.arrayWith2, _.isEqual);
        },
        
        getDropWhile(){
            this.dropWhileArray = _.dropWhile(this.arrDrop1,(e) => {
                return e!=5;
            })
        },

        getDropWhile2(){
            this.dropWhileArray2 = _.dropWhile(this.arrDrop2, (e) => {
                return e.b == 2
            })
        },

        /* 未做防抖 */
        handleInput(val){
            console.log(val)
        },
        /* 未做节流 */
        onSearch(){
            console.log('点击搜索按钮，发请求......')
            console.log(JSON.stringify(this.inlineForm1))
        },

        
        /* 假设的请求方法 */
        getListByKeyWord2(){
            console.log('根据关键字发请求......')
            console.log(this.inlineForm2.name)
            console.log(JSON.stringify(this.inlineForm2))
        },
        getListBySearch2(){
            console.log('点击搜索按钮发请求......')
            console.log(JSON.stringify(this.inlineForm2))
        },

        /* 使用封装的防抖方法 */
        handleInput2:debounce2(function(val){
            console.log('使用封装的防抖',val)
        },2000),
        /* 使用封装的节流方法 */
        onSearch2:throttle2(function(){
            console.log('使用封装的节流方法')
        },2000),

        getListByKeyWord3(){
            console.log('根据关键字发请求......')
            console.log(this.inlineForm3.name)
            console.log(JSON.stringify(this.inlineForm3))
        },
        getListBySearch3(){
            console.log('点击搜索按钮发请求......')
            console.log(JSON.stringify(this.inlineForm3))
        },

        /* 使用lodash的防抖方法 */
        handleInput3:_.debounce(function(val){
            console.log('使用lodash的防抖',val)
        },2000),
        /* 使用lodash的节流方法 */
        onSearch3:_.throttle(function(){
            console.log('使用lodash的节流')
        },2000)

        
    }
}
</script>

<style scoped lang="scss">

</style>
    