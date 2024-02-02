<template>
    <Layout>
        <BRow>
            <Breadcrumb :title="$t('t-system-setting')" />

            <div class="border border-info p-2 rounded"
                    style="background-color: #b8daff;"
                    >
                        <i class="mdi mdi-lightbulb-on fs-4 text-info"></i>
                        <span class="text-blue">平台通道总开关，控制平台的全部转账汇款方式！</span>

          </div>

                    <div class="card p-3 mt-3">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h4 class="back">系统配置</h4>
                            </div>
                            <div class="d-flex gap-3">
                                <button type="button" class="btn btn-secondary waves-effect waves-light p-2">搜索</button>
                                <button type="button" class="btn btn-light waves-effect p-2">重置</button>

                            </div>
                      
                        </div>
            
                        <div class="white_panel" style="border-radius: 0 0 5px 5px;padding: 0 40px 20px;">
                            <div class="row" style="max-width: 600px;">
                                <div class="col-lg-12 mt-3">
                                    <div class="row">
                                        <div class="col-lg-12" style="color:#3c6082;">网站登录IP白名单（限制可登录IP，未设置则全部IP可登录）</div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-12 mt-3 pointer">
                                            <textarea class="form-control" id="cms_ip_whitelist" rows="6" aria-label="" placeholder="网站登录IP白名单，一行一个"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card p-3">
                        <div class="row" style="max-width: 600px;">
                            <div class="col-lg-12 mb-3 mt-3">
                                <div class="row">
                                    <div class="col-lg-12" style="color:#3c6082;">银行收款脚本配置</div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-12 mt-2">
                                        <div class="row">
                                            <div class="col-lg-8" style="color:#3c6082;">API单次获取交易订单数量</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 mt-2">
                                        <div class="row">
                                            <div class="col-lg-12 pointer">
                                                <input type="text" class="form-control" aria-label="" placeholder="API单次获取交易订单数量" id="bank_collect_api_reqcount">
                                            </div>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-12 mt-4">
                                        <div class="row">
                                            <div class="col-lg-8" style="color:#3c6082;">API单次请求后休眠/秒</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-12 mt-2 pointer">
                                                <input type="text" class="form-control" aria-label="" placeholder="API单次请求后休眠/秒" id="bank_collect_api_sleep">
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                        </div>
                    </div>

            

                    <div class="card p-3">
                        <div class="ukefu-webim-prop" style="padding-left: 0; padding-right: 0px;">
                            <div class="row" style="max-width: 600px; margin-bottom: 0px;">
                                <div class="col-lg-12 mt-3 mb-4">
                                    <div class="row">
                                        <div class="col-lg-12" style="color:#3c6082;">登录谷歌验证，需要使用Google Authenticator客户端，扫描二维码，进行获取动态验证码</div>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <div class="row">
                                        <div class="col-lg-8" style="color:#3c6082;">登录谷歌验证开关</div>
                                        <div class="form-check form-switch form-switch-right form-switch-md">
                                           
                                            <input class="form-check-input code-switcher" type="checkbox" id="sizing-input-showcode">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



        </BRow>

    </Layout>
</template>
    
<script setup>
import Layout from "@/layouts/main.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";

</script>