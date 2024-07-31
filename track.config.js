// 新建track.config.js文件
import { setTrackBaseInfo } from 'vue-trackjs'

// 你的自定义通用埋点信息， vue-trackjs集成的通用信息下面会有介绍
const trackBaseInfo = {
    ip: '127.23.112.3',
    version: '1.0.0',
    deviceId: 'vue-track',
    language: 'us',
    network: '3G',
}

// 存储到localstorage
setTrackBaseInfo(trackBaseInfo)

// 获取埋点配置信息函数，一般埋点都是支持系统配置，从接口取埋点配置，下面只是简单示范
function getTrackConfig() {
    // 该函数必须return如下结构，eventId和action字段固定不可更改，其他随意
    return {
        // 该key对应后续自定义指令里面的id
        "moduleName_xxx_show": {
            "eventId": "moduleName_xxx_show",
            "resourceModule": "",
            "action": "show"
        },
        "moduleName_xxx_click": {
            "eventId": "moduleName_xxx_click",
            "resourceModule": "12323",
            "action": "click"
        }
    }
}

// 获取埋点信息上传id函数，埋点批次上传前获取上传权限，根据业务需要，为可选项
function getUploadId() {
    // 只接收下面两个字段
    return { liftTime, uploadKey }
}

// 轮询上传埋点信息回调函数, 会有3个入参  埋点信息数组  通用信息  getUploadId函数返回的uploadKey(可选)
function uploadTracks(trackList, baseInfo, uploadKey) {
    return Promise(any)
}

export const options = {
    appId: 'projectName',
    getTrackConfig,
    getUploadId,
    uploadTracks
}
