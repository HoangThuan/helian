<template>
    <Layout>
        <BRow>
            <Breadcrumb :title="$t('t-system-operation')" />

            <div class="">
                        <div class="card p-3">
                            <div class="mt-2 p-3">
                                <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                                    <div class="fw-bold">搜索：</div>

                                 
                               
                    
                                    <div class="col-12 col-lg-auto">
                                        <input type="text" class="form-control" id="placeholderInput"
                                            placeholder="IP" />
                                    </div>
                    
                                    <div class="col-12 col-lg-auto">
                                        <input type="text" class="form-control" id="placeholderInput"
                                            placeholder="用户账户或姓名" />
                                    </div>

                                    <div class="col-12 col-lg-auto">
                                        <input type="text" class="form-control" data-provider="flatpickr"
                                            data-date-format="d M, Y" data-range-date="true" placeholder="操作日期操作日期" />
                                    </div>
                                  

                                    <div class="d-flex align-items-center gap-2">
                                        <button type="button" class="btn btn-secondary waves-effect waves-light p-2">
                                            搜索
                                        </button>
                                        <button type="button" class="btn btn-light waves-effect p-2">
                                            重置
                                        </button>
                                  
                                    </div>

                                    

                                </form>
                            </div>

                   
                           
                            <div class="">
                                <div class="table-responsive">
                                    <table class="table table-hover text-center table-bordered"
                                        style="background-color: #ffffff">
                                        <tbody>
                                            <tr style="background-color: #f7f7f7;">
                                                <td>操作人</td>
                                                <td>日期</td>
                                                <td>状态码</td>
                                                <td>请求IP</td>
                                                <td>请求方法</td>
                                                <td>请求路径</td>
                                                <td>说明</td>
                                            </tr>
                                                    
                                        </tbody>
                                    </table>

                                    <div class="no_data">
                                        <img src="https://pay2world.me/static/common/images/no_data.png" alt="暂无数据" />
                                        <p>暂无数据</p>
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