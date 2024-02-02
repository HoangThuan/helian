<template>
  <Layout>
    <BRow>
      <Breadcrumb :title="$t('t-zalo-management')" />

    
        <BCard no-body class="card-body ctx-content px-0">
          <BCardBody>
            <div >
              <form class="d-flex flex-row flex-wrap align-items-center gap-2">
                <div class="fw-bold">搜索：</div>

                <div class="col-12 col-lg-auto">
                  <select class="form-select text-form" aria-label="Default select example">
                    <option v-for="option in optionstate" :key="option.value" :value="option.value">
                      {{ $t(option.label) }}
                    </option>
                  </select>
                </div>

                <div class="col-12 col-lg-auto">
                  <select class="form-select text-form" aria-label="Default select example">
                    <option v-for="option in optionBankType" :key="option.value" :value="option.value">
                      {{ $t(option.label) }}
                    </option>
                  </select>
                </div>

                <div class="col-12 col-lg-auto">
                  <select class="form-select text-form" aria-label="Default select example">
                    <option v-for="option in optionBankCardType" :key="option.value" :value="option.value">
                      {{ $t(option.label) }}
                    </option>
                  </select>
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control text-form" id="placeholderInput"
                    :placeholder="$t('t-bank-card-account')" />
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control text-form" id="placeholderInput" :placeholder="$t('t-agency-account')" />
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control text-form" id="placeholderInput" :placeholder="$t('账户人姓名')" />
                </div>

                <div class="col-12 col-lg-auto">
                  <input type="text" class="form-control text-form" id="placeholderInput" :placeholder="$t('t-remark')" />
                </div>

                <div class="d-flex gap-2">
                  <button type="button" class="btn text-form btn-secondary waves-effect waves-light mx-2 p-2">
                    {{ $t("t-search") }}
                  </button>
                  <button type="button" class="btn text-form btn-light waves-effect p-2">
                    {{ $t("t-reset") }}
                  </button>
                  <button type="button" class="btn text-form btn-warning waves-effect p-2" @click="onOpenAddBankCard">
                    {{ $t("t-add-bank-card") }}
                  </button>
                </div>
              </form>
            </div>

            <div class="table-responsive mt-3 ">
              <table class="table table-hover table-bordered table-nowrap" id="customerTable">
                <thead class="table-light">
                  <tr>
                    <th v-for="header in headers" :key="header.text">
                      {{ $t(header.text) }}
                    </th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.bank }}</td>
                    <td>{{ item.bank_card_account }}</td>
                    <td>{{ item.card_type }}</td>
                    <td>{{ item.agent_name }}</td>
                    <td>{{ item.remark }}</td>

                    <td>
                      <button style="margin-left: 2px" type="button" :class="item.status === 'active'
                          ? 'btn-customer-green '
                          : 'btn-customer-ok '
                        " v-on:click.prevent="">
                        {{ item.status === "active" ? "启用" : " 停用" }}
                      </button>
                    </td>

                    <td>
                      <button style="margin-left: 2px" type="button" :class="item.script_execution_status === 'active'
                          ? 'btn-customer-green'
                          : 'btn-customer-ok'
                        " v-on:click.prevent="">
                        {{
                          item.script_execution_status === "active"
                          ? "启用"
                          : "停用脚本"
                        }}
                      </button>
                    </td>
                    <td>{{ item.real_time_balance }}</td>
                    <td>{{ item.daily_collection_limit }}</td>
                    <td>{{ item.max_daily_payment_collection }}</td>
                    <td>{{ item.collection_amount_range }}</td>
                    <td>{{ item.balance_limit }}</td>
                    <td>{{ item?.remark }}</td>

                    <td>
                      <div class="d-flex gap-2">
                        <div class="action_btn">
                          <button type="button" class="btn-customer-blue" @click="onOpenModalBankCardEdit(index)">
                            {{ $t("t-edit") }}
                          </button>
                        </div>

                        <div class="action_btn">
                          <button type="button" @click="handleChangeStatus(index)" :class="item.status === 'active'
                              ? 'btn-customer-ok'
                              : 'btn-customer-green'
                            " v-if="item.status === 'active'">
                            {{
                              item.status === "active"
                              ? $t("t-deactivate")
                              : $t("t-enable")
                            }}
                          </button>
                        </div>

                        <div class="action_btn">
                          <button type="button" :class="item.script_execution_status === 'active'
                              ? 'btn-customer-ok'
                              : 'btn-customer-green'
                            " @click="handleChangeScriptExecution(index)"
                            v-if="item.script_execution_status === 'active'">
                            {{
                              item.script_execution_status === "active"
                              ? $t("t-deactivate-script")
                              : $t("t-enable-script")
                            }}
                          </button>
                        </div>

                        <div class="">
                          <BDropdown class="cardbuton" text="更多" style="margin-left: 2px">
                            <BDropdownItem v-for="option in optionMore" :key="option.value">
                              <span class="dropdow_item_font_size">{{ $t(option.label) }}
                              </span>
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </BCardBody>
           
         
        </BCard>
     
    </BRow>
    <ModalBankCard v-model="openModalBankCard" :on-confirm="handleUpdate" :mode="modeModal" />
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/main.vue";
// import ModalHint from "@/components/modals/ModalHint.vue";
import Breadcrumb from "@/components/Breadcrumd/Breadcrumb.vue";
import ModalBankCard from "@/components/modals/ModalBankCard.vue";
import { ref } from "vue";

const headers = ref([
  { text: "t-name", value: "name" },
  { text: "t-bank", value: "abbreviation" },
  { text: "t-bank-card-account", value: "code" },
  { text: "t-bank-card-user-name", value: "code" },
  { text: "t-card-type", value: "state" },
  { text: "t-agent-name", value: "state" },
  { text: "t-state", value: "state" },
  { text: "t-script-execution-status", value: "state" },
  { text: "t-real-time-balance", value: "state" },
  { text: "t-daily-collection-limit", value: "state" },
  { text: "t-max-daily-payment-collection", value: "state" },
  { text: "t-collection-amount-range", value: "state" },
  { text: "t-balance-limit", value: "state" },
  { text: "备注" },
  { text: "t-operate", value: "" },
]);

const items = ref([
  {
    name: "卡008",
    bank: "ACB",
    bank_card_account: "0900101122",
    bank_card_user_name: "niko0917",
    card_type: "NGO KIM THI",
    agent_name: "系统卡",
    status: "active",
    script_execution_status: "active",
    real_time_balance: "",
    daily_collection_limit: "无限",
    max_daily_payment_collection: "无限",
    collection_amount_range: "0 ~ 无限",
    balance_limit: "0",
    remark: "",
  },
]);

const optionstate = ref([
  { value: "", label: "t-on-state" },
  { value: "1", label: "t-turn-on" },
  { value: "2", label: "t-closure" },
]);

const optionBankType = ref([
  { value: "", label: "t-bank-type" },
  { value: "1", label: "ICB" },
  { value: "2", label: "VCB" },
  { value: "3", label: "BIDV" },
  { value: "3", label: "MB" },
  { value: "3", label: "ACB" },
  { value: "3", label: "TPB" },
  { value: "3", label: "MSB" },
  { value: "3", label: "BAB" },
  { value: "3", label: "VAB" },
  { value: "3", label: "NAB" },
  { value: "3", label: "SEAB" },
]);

const optionBankCardType = ref([
  { value: "", label: "t-bank-type" },
  { value: "1", label: "t-bank-system-card" },
  { value: "2", label: "t-proxy-card" },
]);

const optionMore = ref([
  { value: "", label: "t-more" },
  { value: "1", label: "t-enable-script" },
  { value: "2", label: "t-delete-bank-card" },
  { value: "2", label: "t-account-test" },
  { value: "2", label: "t-balance-update" },
  { value: "2", label: "t-execute-script" },
  { value: "2", label: "t-script-log" },
  { value: "2", label: "t-view-VPN" },
  { value: "2", label: "t-crawler-detail" },
]);

const itemSelected = ref();
const openModalBankCard = ref(false);
const modeModal = ref("");

const onOpenModalBankCardEdit = (index) => {
  itemSelected.value = index;
  openModalBankCard.value = true;
  modeModal.value = "edit";
};

const onOpenAddBankCard = () => {
  openModalBankCard.value = true;
  modeModal.value = "add";
};

const handleUpdate = () => { };

const handleChangeStatus = (index) => {
  if (items.value[index].status === "active") {
    items.value[index].status = "inActive";
  } else {
    items.value[index].status = "active";
  }
};

const handleChangeScriptExecution = (index) => {
  if (items.value[index].script_execution_status === "active") {
    items.value[index].script_execution_status = "inActive";
  } else {
    items.value[index].script_execution_status = "active";
  }
};
</script>

<style>
.action_btn {
  width: max-content;
}
</style>
