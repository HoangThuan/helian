<template>
  <div class="table-responsive ctx-tabl">
    <table class="table align-middle table-hover text-center  table-bordered table-nowrap " id="customerTable">
            <thead class="table-light">
              <tr>
                <th v-for="header in headers" :key="header.text">
                  {{ $t(header.text) }}
                </th>
              </tr>
            </thead>
            <tbody class="list form-check-all">

              <tr v-for="(item, index) in items" :key="index">
                <td v-for="header in headers" :key="header.value">
                  {{ getValue(item, header) }}

                </td>
              </tr>

            </tbody>
          </table>
          <div v-show="items?.length === 0" class="no_data">
                                <img src="https://pay2world.me/static/common/images/no_data.png" alt="暂无数据">
                                <p>暂无数据</p>
                            </div>
  </div>
         
     

</template>

<script setup>

defineProps({
  headers: [],
  items: [],
  activeIndex: null
})


const getValue = (item, header) => {
  const value = header.value
  return item[value]
}

</script>