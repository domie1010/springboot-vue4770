<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='kehu'">
                    <el-form-item class="select" v-if="type!='info'"  label="客户" prop="kehuId">
                        <el-select v-model="ruleForm.kehuId" :disabled="ro.kehuId" filterable placeholder="请选择客户" @change="kehuChange">
                            <el-option
                                    v-for="(item,index) in kehuOptions"
                                    v-bind:key="item.id"
                                    :label="item.kehuName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户编号" prop="kehuUuidNumber">
                        <el-input v-model="kehuForm.kehuUuidNumber"
                                  placeholder="客户编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户编号" prop="kehuUuidNumber">
                            <el-input v-model="ruleForm.kehuUuidNumber"
                                      placeholder="客户编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户姓名" prop="kehuName">
                        <el-input v-model="kehuForm.kehuName"
                                  placeholder="客户姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户姓名" prop="kehuName">
                            <el-input v-model="ruleForm.kehuName"
                                      placeholder="客户姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户手机号" prop="kehuPhone">
                        <el-input v-model="kehuForm.kehuPhone"
                                  placeholder="客户手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户手机号" prop="kehuPhone">
                            <el-input v-model="ruleForm.kehuPhone"
                                      placeholder="客户手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户身份证号" prop="kehuIdNumber">
                        <el-input v-model="kehuForm.kehuIdNumber"
                                  placeholder="客户身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户身份证号" prop="kehuIdNumber">
                            <el-input v-model="ruleForm.kehuIdNumber"
                                      placeholder="客户身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='kehu' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.kehuPhoto" label="客户照片" prop="kehuPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (kehuForm.kehuPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.kehuPhoto" label="客户照片" prop="kehuPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.kehuPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="性别" prop="sexValue">
                        <el-input v-model="kehuForm.sexValue"
                                  placeholder="性别" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="性别" prop="sexValue">
                            <el-input v-model="ruleForm.sexValue"
                                      placeholder="性别" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="客户邮箱" prop="kehuEmail">
                        <el-input v-model="kehuForm.kehuEmail"
                                  placeholder="客户邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户邮箱" prop="kehuEmail">
                            <el-input v-model="ruleForm.kehuEmail"
                                      placeholder="客户邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="住址" prop="kehuAddress">
                        <el-input v-model="kehuForm.kehuAddress"
                                  placeholder="住址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="住址" prop="kehuAddress">
                            <el-input v-model="ruleForm.kehuAddress"
                                      placeholder="住址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="行业" prop="hangyeValue">
                        <el-input v-model="kehuForm.hangyeValue"
                                  placeholder="行业" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="行业" prop="hangyeValue">
                            <el-input v-model="ruleForm.hangyeValue"
                                      placeholder="行业" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="职位" prop="zhiweiValue">
                        <el-input v-model="kehuForm.zhiweiValue"
                                  placeholder="职位" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="职位" prop="zhiweiValue">
                            <el-input v-model="ruleForm.zhiweiValue"
                                      placeholder="职位" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='kehu' ">
                    <el-form-item class="input" v-if="type!='info'"  label="地区" prop="diquValue">
                        <el-input v-model="kehuForm.diquValue"
                                  placeholder="地区" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="地区" prop="diquValue">
                            <el-input v-model="ruleForm.diquValue"
                                      placeholder="地区" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="kehuId" name="kehuId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="客户服务编号" prop="kehuFuwuUuidNumber">
                       <el-input v-model="ruleForm.kehuFuwuUuidNumber"
                                 placeholder="客户服务编号" clearable  :readonly="ro.kehuFuwuUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="客户服务编号" prop="kehuFuwuUuidNumber">
                           <el-input v-model="ruleForm.kehuFuwuUuidNumber"
                                     placeholder="客户服务编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="客户服务标题" prop="kehuFuwuName">
                       <el-input v-model="ruleForm.kehuFuwuName"
                                 placeholder="客户服务标题" clearable  :readonly="ro.kehuFuwuName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="客户服务标题" prop="kehuFuwuName">
                           <el-input v-model="ruleForm.kehuFuwuName"
                                     placeholder="客户服务标题" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.kehuFuwuFile" label="服务附件" prop="kehuFuwuFile">
                        <file-upload
                                tip="点击上传服务附件"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.kehuFuwuFile?$base.url+ruleForm.kehuFuwuFile:''"
                                @change="kehuFuwuFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.kehuFuwuFile" label="服务附件" prop="kehuFuwuFile">
                            <a type="text" style="text-decoration:none" class="el-button" :href="$base.url+ruleForm.kehuFuwuFile"  >服务附件下载</a>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="客户服务类型" prop="kehuFuwuTypes">
                        <el-select v-model="ruleForm.kehuFuwuTypes" :disabled="ro.kehuFuwuTypes" placeholder="请选择客户服务类型">
                            <el-option
                                v-for="(item,index) in kehuFuwuTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="客户服务类型" prop="kehuFuwuValue">
                        <el-input v-model="ruleForm.kehuFuwuValue"
                            placeholder="客户服务类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info' && !ro.fuwuTime"  class="input" label="客户服务日期" prop="fuwuTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="ruleForm.fuwuTime"
                                type="date"
                                placeholder="客户服务日期"
                                :disabled="ro.fuwuTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.fuwuTime" label="客户服务日期" prop="fuwuTime">
                            <span v-html="ruleForm.fuwuTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.kehuFuwuContent"  label="客户服务内容" prop="kehuFuwuContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.kehuFuwuContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.kehuFuwuContent" label="客户服务内容" prop="kehuFuwuContent">
                            <span v-html="ruleForm.kehuFuwuContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
<!--                    <el-form-item class="select" v-if="type!='info'"  label="状态" prop="kehuFuwuZhuangtaiTypes">
                        <el-select v-model="ruleForm.kehuFuwuZhuangtaiTypes" :disabled="ro.kehuFuwuZhuangtaiTypes" placeholder="请选择状态">
                            <el-option
                                v-for="(item,index) in kehuFuwuZhuangtaiTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>-->
                    <div v-if="type=='info'">
                        <el-form-item class="input" label="状态" prop="kehuFuwuZhuangtaiValue">
                        <el-input v-model="ruleForm.kehuFuwuZhuangtaiValue"
                            placeholder="状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info' && !ro.fuwuXiangxiTime && sessionTable !='users'"  class="input" label="实际服务时间" prop="fuwuXiangxiTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="ruleForm.fuwuXiangxiTime"
                                type="date"
                                placeholder="实际服务时间"
                                :disabled="ro.fuwuXiangxiTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.fuwuXiangxiTime" label="实际服务时间" prop="fuwuXiangxiTime">
                            <span v-html="ruleForm.fuwuXiangxiTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.kehuFuwuFankuiContent && sessionTable !='users'"  label="客户反馈" prop="kehuFuwuFankuiContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.kehuFuwuFankuiContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.kehuFuwuFankuiContent" label="客户反馈" prop="kehuFuwuFankuiContent">
                            <span v-html="ruleForm.kehuFuwuFankuiContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                kehuForm: {},
                ro:{
                    kehuId: false,
                    kehuFuwuUuidNumber: true,
                    kehuFuwuName: false,
                    kehuFuwuFile: false,
                    kehuFuwuTypes: false,
                    fuwuTime: false,
                    kehuFuwuContent: false,
                    insertTime: false,
                    kehuFuwuZhuangtaiTypes: false,
                    fuwuXiangxiTime: false,
                    kehuFuwuFankuiContent: false,
                },
                ruleForm: {
                    kehuId: '',
                    kehuFuwuUuidNumber: new Date().getTime(),
                    kehuFuwuName: '',
                    kehuFuwuFile: '',
                    kehuFuwuTypes: '',
                    fuwuTime: '',
                    kehuFuwuContent: '',
                    insertTime: '',
                    kehuFuwuZhuangtaiTypes: '',
                    fuwuXiangxiTime: '',
                    kehuFuwuFankuiContent: '',
                },
                kehuFuwuTypesOptions : [],
                kehuFuwuZhuangtaiTypesOptions : [],
                kehuOptions : [],
                rules: {
                   kehuId: [
                              { required: true, message: '客户不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   kehuFuwuUuidNumber: [
                              { required: true, message: '客户服务编号不能为空', trigger: 'blur' },
                          ],
                   kehuFuwuName: [
                              { required: true, message: '客户服务标题不能为空', trigger: 'blur' },
                          ],
                   kehuFuwuFile: [
                              { required: true, message: '服务附件不能为空', trigger: 'blur' },
                          ],
                   kehuFuwuTypes: [
                              { required: true, message: '客户服务类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   fuwuTime: [
                              { required: true, message: '客户服务日期不能为空', trigger: 'blur' },
                          ],
                   kehuFuwuContent: [
                              { required: true, message: '客户服务内容不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '安排时间不能为空', trigger: 'blur' },
                          ],
                   kehuFuwuZhuangtaiTypes: [
                              { required: true, message: '状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   fuwuXiangxiTime: [
                              { required: true, message: '服务时间不能为空', trigger: 'blur' },
                          ],
                   kehuFuwuFankuiContent: [
                              { required: true, message: '客户反馈不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
                  this.ro.kehuId=true;
                  this.ro.kehuFuwuUuidNumber=true,
                  this.ro.kehuFuwuName=true;
                  this.ro.kehuFuwuFile=true;
                  this.ro.kehuFuwuTypes=true;
                  this.ro.fuwuTime=true;
                  this.ro.kehuFuwuContent=true;
                  this.ro.insertTime=true;
                  this.ro.kehuFuwuZhuangtaiTypes=true;
                  this.ro.fuwuXiangxiTime=false;
                  this.ro.kehuFuwuFankuiContent=false;
            }else{
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=kehu_fuwu_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.kehuFuwuTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=kehu_fuwu_zhuangtai_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.kehuFuwuZhuangtaiTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `kehu/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.kehuOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            kehuChange(id){
                this.$http({
                    url: `kehu/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.kehuForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `kehuFuwu/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.kehuChange(data.data.kehuId)
                        _this.ruleForm.kehuFuwuContent = _this.ruleForm.kehuFuwuContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.kehuFuwuFankuiContent = _this.ruleForm.kehuFuwuFankuiContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.kehuFuwuContent = this.ruleForm.kehuFuwuContent.replaceAll(this.$base.url,"");
                        this.ruleForm.kehuFuwuFankuiContent = this.ruleForm.kehuFuwuFankuiContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`kehuFuwu/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.kehuFuwuCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.kehuFuwuCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            kehuFuwuFileUploadChange(fileUrls){
                this.ruleForm.kehuFuwuFile = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}</style>

