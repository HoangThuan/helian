<template>
    <Layout>
      <BRow>
        <Breadcrumb :title="$t('世界付')" />
  
        <BRow class="mt-3">
            <div class="col-xl-3 col-md-6">
                            <!-- card -->
                            <div class="card card-animate">
                                <div class="card-body">
                                    <div class="d-flex align-items-center border-bottom pb-2">
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h4 class="text-uppercase fw-bold text-truncate mb-0">
                                                商户总余额
                                            </h4>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div>
                                                <span class="badge bg-primary-subtle text-primary p-3">总</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 class="fs-22 fw-semibold ff-secondary mb-4">0</h4>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <div class="">今日增长</div>
                                        <div class="">+0.00%</div>
                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                        </div>
                        <!-- end col -->

                        <div class="col-xl-3 col-md-6">
                            <!-- card -->
                            <div class="card card-animate">
                                <div class="card-body">
                                    <div class="d-flex align-items-center border-bottom pb-2">
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h4 class="text-uppercase fw-bold text-truncate mb-0">
                                                今日订单数量
                                            </h4>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div>
                                                <span class="badge bg-info-subtle text-info p-3">日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 class="fs-22 fw-semibold ff-secondary mb-4">0</h4>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <div class="">订单总数量</div>
                                        <div class="">0</div>
                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                        </div>
                        <!-- end col -->

                        <div class="col-xl-3 col-md-6">
                            <!-- card -->
                            <div class="card card-animate">
                                <div class="card-body">
                                    <div class="d-flex align-items-center border-bottom pb-2">
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h4 class="text-uppercase fw-bold text-truncate mb-0">
                                                今日代收金额
                                            </h4>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div>
                                                <span class="badge bg-success-subtle text-success p-3">日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 class="fs-22 fw-semibold ff-secondary mb-4">0</h4>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <div class="">总代收金额</div>
                                        <div class="">0</div>
                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                        </div>
                        <!-- end col -->

                        <div class="col-xl-3 col-md-6">
                            <!-- card -->
                            <div class="card card-animate">
                                <div class="card-body">
                                    <div class="d-flex align-items-center border-bottom pb-2">
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h4 class="text-uppercase fw-bold text-truncate mb-0">
                                                今日代付金额
                                            </h4>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div>
                                                <span class="badge bg-warning-subtle text-warning p-3">日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 class="fs-22 fw-semibold ff-secondary mb-4">0</h4>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <div class="">总代付金额</div>
                                        <div class="">0</div>
                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                        </div>
                        <!-- end col -->
                   
               
        </BRow>
  
      </BRow>
  
    </Layout>
  </template>
    
  <script setup>
  import Layout from "@/layouts/main.vue";

  import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
  
  </script>