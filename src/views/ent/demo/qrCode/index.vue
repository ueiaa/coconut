<template>
    <div>
        <el-button @click="getQrcode" type="primary">生成二维码</el-button>
        <el-dialog title='二维码' v-model="dialogVisible" width="30%">
            <div id="QrCode_header" style="width: 256px; height: 256px;" ref="qrCodeUrl"></div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="downloadQrcode">下载</el-button>
                </span>
            </template>
        </el-dialog>
        
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'; 
export default {
    name: 'qrCode',
    data () {
        return {
            qrCodeUrl:'',
            dialogVisible: false,
        }
    },
    
    created() {
        this.init()
    },
    mounted() {
        //this.getQrcode();
    },
    methods: {
        init(){
            
        },
        getQrcode(){
            this.dialogVisible = true;
            this.$nextTick(() => {
                //判断该二维码是否已经存在，存在则无需再次生成
                if (!this.qrCodeUrl) {
                    // 生成二维码
                    this.createQrcode();
                }
            });
            
        },
        createQrcode(){
            
            let opts = {
                errorCorrectionLevel:'L',  //容错率
                type: 'image/png',  //生成的二维码类型
                quality: 0.3,  //二维码质量
                margin: 12,  //二维码留白边距
                width: 256, //宽
                height: 256,  //高
                text: 'https://www.baidu.com', //二维码内容
                color: {
                    dark: '#333', //前景色
                    light: '#fff',  //背景色
                }
            };
            
            // 生成二维码
            this.qrCodeUrl = new QRCode(this.$refs.qrCodeUrl, opts);
        
            let logo = new Image();
            logo.crossOrigin = 'Anonymous';
            logo.src = require('@/assets/logo.png');
            logo.onload = function(){
                console.log('222222222')
                let container = document.getElementById('QrCode_header'); //获取页面上的二维码容器
                let qrImg = container.getElementsByTagName('img')[0];  //获取二维码
                let canvas = container.getElementsByTagName('canvas')[0];  //获取canvas
                var ctx = canvas.getContext('2d');
                ctx.drawImage(logo, 256*0.5-22,256*0.5-22,44,44);
                qrImg.src = canvas.toDataURL();
                container.appendChild(this.qrCodeUrl._el)
            }
            /* this.qrCodeUrl = 'https://www.baidu.com';  //生成的二维码的URL地址
            let msg = document.getElementById('QrCode_header');  //获取容器
            QRCode.toCanvas(msg, this.qrCodeUrl, opts, function(error){
                console.log(error)
            }) */

        },

        /* 下载 */
        downloadQrcode(){
            const nodeList = Array.prototype.slice.call(this.qrCodeUrl._el.children)
            console.log(nodeList)
            const img = nodeList.find((item) => item.nodeName.toUpperCase() === 'IMG')
            //构建画布
            let canvas = document.createElement('canvas')
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext('2d').drawImage(img,0,0); //在画布上(0,0)位置放置img
            //构建url
            let url = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = url;
            a.download = '二维码.png';
            a.click();
        },
        
    }
}
</script>

<style scoped lang="scss">

.el-dialog {
    :deep(.el-dialog__body){
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
</style>
    