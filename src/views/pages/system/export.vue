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
                                            placeholder="文件名" />
                                    </div>

                                    <div class="col-12 col-lg-auto">
                                        <input type="text" class="form-control" data-provider="flatpickr"
                                            data-date-format="d M, Y" data-range-date="true" placeholder="导出时间" />
                                    </div>
                                  

                                    <div class="d-flex align-items-center gap-2">
                                        <button type="button" class="btn btn-secondary waves-effect waves-light p-2">
                                            搜索
                                        </button>
                                        <button type="button" class="btn btn-light waves-effect p-2">
                                            重置
                                        </button>
                                        <button type="button" class="btn btn-warning waves-effect p-2" data-bs-toggle="modal" data-bs-target="#modal2">
                                            批量删除
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
                                                <td>文件名</td>
                                                <td>文件路径</td>
                                                <td>文件大小(KB)</td>
                                                <td>数据量</td>
                                                <td>已导出</td>
                                                <td>导出状态</td>
                                                <td>导出时间</td>
                                                <td>备注</td>
                                                <td width="260">操作</td>
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