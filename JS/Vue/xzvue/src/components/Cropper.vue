<<<<<<< HEAD
<template>
  <div class="custom-upload">
    <el-dialog
      title="图片裁剪"
      :visible.sync="showCropper"
      top="6vh"
      width="30%"
      height="400"
      class="cropper-dialog"
      center
      append-to-body
    >
      <vue-cropper
        v-if="showCropper"
        id="corpper"
        ref="cropper"
        :class="{'corpper-warp':showCropper}"
        v-bind="cropper"
      />
      <div v-if="showCropper" class="cropper-button">
        <el-button class="cancel-btn" size="small" @click.native="showCropper=false">取消</el-button>
        <el-button size="small" type="primary" :loading="loading" @click="uploadCover">完成</el-button>
      </div>
    </el-dialog>
    <div class="photoUpload_right">
      <div class="photoUpload_des">
        <span class="photoUpload_txt">上传本地媒体图片</span>
      </div>
      <label for="fileinp" class="photoUpload_btn">
        <input
          class="choosePhoto_file"
          :id="id"
          type="file"
          style="display: none"
          name="single"
          accept="image/*"
          @change="onChange($event)"
        />
        <el-button size="small" type="primary" :loading="loading" @click="handleOpenFile()">
          <span class="photoUpload_txt">浏览</span>
        </el-button>
      </label>
      <div class="photoUpload_tips">
        <span class="tips_des">请上传身份证（头像面）图片或者护照、港澳居民来往大陆通行证、</span>
        <span class="tips_des">台湾居民来往大陆通行证中的任意一种</span>
      </div>
    </div>
    <div v-if="tips" class="tips clear-margin-top">{{ tips }}</div>
  </div>
</template>

<script>
// 上传文件组件
import { VueCropper } from 'vue-cropper'
import { Message, Header } from 'element-ui';
// 上传接口
import { uploadImg } from '../api/index'
// 封装方法
import { isImageFile, isMaxFileSize, readFile } from '../utils/upload'   // 见下文
export default {
  components: {
    VueCropper
  },
  props: {
    // 最大上传文件的大小
    maxFileSize: {
      type: Number,
      default: 2 // （MB)
    },
    // 按钮文字
    buttonName: {
      type: String,
      default: '添加图片'
    },
    // 提示内容
    tips: {
      type: String
    },
    // 图片裁剪比列
    fixedNumber: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 图片文件分辨率的宽度
    width: {
      type: Number,
      default: 460
    },
    // 图片文件分辨率的高度
    height: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      cropperUrl: '', // 裁切后的图片base64
      fileName: '', // 文件名，用于blob转化成file对象
      uploadFile: '', // 点击浏览获取的文件对象
      id: 'cropper-input-' + +new Date(),
      loading: false,
      showCropper: false,
      cropper: {
        img: '',
        info: true,
        size: 0.9,
        outputType: 'png',
        canScale: true,
        autoCrop: true,
        full: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: this.width,
        autoCropHeight: this.height,
        fixedBox: false,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: this.fixedNumber,
        original: false,
        canMoveBox: true,
        canMove: true
      }
    }
  },
  methods: {
    // 打开文件
    handleOpenFile() {
      const input = document.getElementById(this.id)
      // 解决同一个文件不能监听的问题
      input.addEventListener(
        'click',
        function() {
          this.value = ''
        },
        false
      )
      // 点击input
      input.click()
    },

    // 裁剪input 监听
    async onChange(e) {
      this.uploadFile = e.target.files[0]
      this.fileName = this.uploadFile.name
      if (!this.uploadFile) {
        return Message.error('选择图片失败')
      }
      // 验证文件类型
      if (!isImageFile(this.uploadFile)) {
        return
      }
      try {
        // 读取文件
        const src = await readFile(this.uploadFile)
        this.showCropper = true
        this.cropper.img = src
        console.log(this.cropper.img)
        this.$emit('subUploadSucceed', this.cropper.img, '')
      } catch (error) {
        console.log(error)
      }
    },

    // 封面上传功能
    uploadCover() {
      // 获取裁切后的图片的base64
      this.$refs.cropper.getCropData((baseUrl) => {
        // 发送数据给父组件
        this.cropperUrl = baseUrl
      })
      // 获取图片的blob
      this.$refs.cropper.getCropBlob(imgRes => {
        // 文件大小限制
        isMaxFileSize (imgRes, 5)
        // if (imgRes.size/1024/1024 > 5) {
        //   this.$message.info('图片上传不能超过5M')
        //   return false
        // }
        // 利用File Api中blob转成File对象
        let files = new window.File([imgRes], this.fileName)
        let param = new FormData() // 创建form对象
        param.append('file', files)
        param.append('cusCode', this.$store.state.cusCode)// 通过append向form对象添加数据
        // 设置请求头
        var headerData = {
          'Content-type': 'multipart/form-data; charset=UTF-8'
        }
        this.loading = true
        uploadImg(param, headerData)
          .then(res => {
            console.log(res)
            if (res.status === 200) {
              // 上传成功
              this.$emit('subUploadSucceed', this.cropperUrl, res.data)
              this.$message.success('上传成功')
              this.loading = false
              this.showCropper = false  // 裁切框隐藏
            }
          })
          .catch(res => {
            this.loading = false
            this.$message.error('上传失败')
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#corpper {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-image: none;
  background: #fff;
  z-index: 1002;
}
.cropper-dialog {
  text-align: center;
  .el-dialog__header {
    padding-top: 15px;
  }
  .el-dialog--center .el-dialog__body {
    padding-top: 0;
    padding-bottom: 15px;
  }
  .el-dialog {
    text-align: center;
  }
}
.photoUpload_right {
  padding-top: 52px;
  .photoUpload_des {
    line-height: 16px;
    margin-top: 42px;
    .photoUpload_txt {
      color: #c7c7c7;
      font-size: 16px;
    }
  }
  .photoUpload_btn{
    position: relative;
    .choosePhoto_file {
      width: 240px;
      height: 28px;
      margin: 0px;
      padding-left: 20px;
    }
    input::-webkit-input-placeholder {
      color: #9a9a9a;
      font-size: 14px;
    }
  }
  .photoUpload_tips {
    margin-top: 8px;
    .tips_des {
      font-size: 16px;
      color: #c7c7c7;
    }
  }
}
.cropper-button {
  z-index: 1003;
  text-align: center;
  margin-top: 20px;
  .el-button {
    font-size: 16px;
    cursor: pointer;
    text-align: center;
  }
  .cancel-btn {
    color: #373737;
  }
  .el-button:last-child {
    margin-left: 100px;
  }
}
.cropper-modal {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
.custom-upload {
  .tips {
    margin-top: 10px;
    color: red;
    font-size: 12px;
  }
  .clear-margin-top {
    margin-top: 0;
  }
}
</style>
=======
<template>
  <div class="custom-upload">
    <el-dialog
      title="图片裁剪"
      :visible.sync="showCropper"
      top="6vh"
      width="30%"
      height="400"
      class="cropper-dialog"
      center
      append-to-body
    >
      <vue-cropper
        v-if="showCropper"
        id="corpper"
        ref="cropper"
        :class="{'corpper-warp':showCropper}"
        v-bind="cropper"
      />
      <div v-if="showCropper" class="cropper-button">
        <el-button class="cancel-btn" size="small" @click.native="showCropper=false">取消</el-button>
        <el-button size="small" type="primary" :loading="loading" @click="uploadCover">完成</el-button>
      </div>
    </el-dialog>
    <div class="photoUpload_right">
      <div class="photoUpload_des">
        <span class="photoUpload_txt">上传本地媒体图片</span>
      </div>
      <label for="fileinp" class="photoUpload_btn">
        <input
          class="choosePhoto_file"
          :id="id"
          type="file"
          style="display: none"
          name="single"
          accept="image/*"
          @change="onChange($event)"
        />
        <el-button size="small" type="primary" :loading="loading" @click="handleOpenFile()">
          <span class="photoUpload_txt">浏览</span>
        </el-button>
      </label>
      <div class="photoUpload_tips">
        <span class="tips_des">请上传身份证（头像面）图片或者护照、港澳居民来往大陆通行证、</span>
        <span class="tips_des">台湾居民来往大陆通行证中的任意一种</span>
      </div>
    </div>
    <div v-if="tips" class="tips clear-margin-top">{{ tips }}</div>
  </div>
</template>

<script>
// 上传文件组件
import { VueCropper } from 'vue-cropper'
import { Message, Header } from 'element-ui';
// 上传接口
import { uploadImg } from '../api/index'
// 封装方法
import { isImageFile, isMaxFileSize, readFile } from '../utils/upload'   // 见下文
export default {
  components: {
    VueCropper
  },
  props: {
    // 最大上传文件的大小
    maxFileSize: {
      type: Number,
      default: 2 // （MB)
    },
    // 按钮文字
    buttonName: {
      type: String,
      default: '添加图片'
    },
    // 提示内容
    tips: {
      type: String
    },
    // 图片裁剪比列
    fixedNumber: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 图片文件分辨率的宽度
    width: {
      type: Number,
      default: 460
    },
    // 图片文件分辨率的高度
    height: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      cropperUrl: '', // 裁切后的图片base64
      fileName: '', // 文件名，用于blob转化成file对象
      uploadFile: '', // 点击浏览获取的文件对象
      id: 'cropper-input-' + +new Date(),
      loading: false,
      showCropper: false,
      cropper: {
        img: '',
        info: true,
        size: 0.9,
        outputType: 'png',
        canScale: true,
        autoCrop: true,
        full: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: this.width,
        autoCropHeight: this.height,
        fixedBox: false,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: this.fixedNumber,
        original: false,
        canMoveBox: true,
        canMove: true
      }
    }
  },
  methods: {
    // 打开文件
    handleOpenFile() {
      const input = document.getElementById(this.id)
      // 解决同一个文件不能监听的问题
      input.addEventListener(
        'click',
        function() {
          this.value = ''
        },
        false
      )
      // 点击input
      input.click()
    },

    // 裁剪input 监听
    async onChange(e) {
      this.uploadFile = e.target.files[0]
      this.fileName = this.uploadFile.name
      if (!this.uploadFile) {
        return Message.error('选择图片失败')
      }
      // 验证文件类型
      if (!isImageFile(this.uploadFile)) {
        return
      }
      try {
        // 读取文件
        const src = await readFile(this.uploadFile)
        this.showCropper = true
        this.cropper.img = src
        console.log(this.cropper.img)
        this.$emit('subUploadSucceed', this.cropper.img, '')
      } catch (error) {
        console.log(error)
      }
    },

    // 封面上传功能
    uploadCover() {
      // 获取裁切后的图片的base64
      this.$refs.cropper.getCropData((baseUrl) => {
        // 发送数据给父组件
        this.cropperUrl = baseUrl
      })
      // 获取图片的blob
      this.$refs.cropper.getCropBlob(imgRes => {
        // 文件大小限制
        isMaxFileSize (imgRes, 5)
        // if (imgRes.size/1024/1024 > 5) {
        //   this.$message.info('图片上传不能超过5M')
        //   return false
        // }
        // 利用File Api中blob转成File对象
        let files = new window.File([imgRes], this.fileName)
        let param = new FormData() // 创建form对象
        param.append('file', files)
        param.append('cusCode', this.$store.state.cusCode)// 通过append向form对象添加数据
        // 设置请求头
        var headerData = {
          'Content-type': 'multipart/form-data; charset=UTF-8'
        }
        this.loading = true
        uploadImg(param, headerData)
          .then(res => {
            console.log(res)
            if (res.status === 200) {
              // 上传成功
              this.$emit('subUploadSucceed', this.cropperUrl, res.data)
              this.$message.success('上传成功')
              this.loading = false
              this.showCropper = false  // 裁切框隐藏
            }
          })
          .catch(res => {
            this.loading = false
            this.$message.error('上传失败')
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#corpper {
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background-image: none;
  background: #fff;
  z-index: 1002;
}
.cropper-dialog {
  text-align: center;
  .el-dialog__header {
    padding-top: 15px;
  }
  .el-dialog--center .el-dialog__body {
    padding-top: 0;
    padding-bottom: 15px;
  }
  .el-dialog {
    text-align: center;
  }
}
.photoUpload_right {
  padding-top: 52px;
  .photoUpload_des {
    line-height: 16px;
    margin-top: 42px;
    .photoUpload_txt {
      color: #c7c7c7;
      font-size: 16px;
    }
  }
  .photoUpload_btn{
    position: relative;
    .choosePhoto_file {
      width: 240px;
      height: 28px;
      margin: 0px;
      padding-left: 20px;
    }
    input::-webkit-input-placeholder {
      color: #9a9a9a;
      font-size: 14px;
    }
  }
  .photoUpload_tips {
    margin-top: 8px;
    .tips_des {
      font-size: 16px;
      color: #c7c7c7;
    }
  }
}
.cropper-button {
  z-index: 1003;
  text-align: center;
  margin-top: 20px;
  .el-button {
    font-size: 16px;
    cursor: pointer;
    text-align: center;
  }
  .cancel-btn {
    color: #373737;
  }
  .el-button:last-child {
    margin-left: 100px;
  }
}
.cropper-modal {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
.custom-upload {
  .tips {
    margin-top: 10px;
    color: red;
    font-size: 12px;
  }
  .clear-margin-top {
    margin-top: 0;
  }
}
</style>
>>>>>>> 5bdc84dd5ad320152935e4fedc4d67af63a9e326
