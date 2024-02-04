<template>
  <VueDatePicker range multi-calendars time-picker-inline
   style="font-size: 12px; max-width: 246px;">
    <template #time-picker="{ time, updateTime}">
      <div class="time-picker-cutomer">
        <div class="custom-time-picker-component">
          <select
            class="select-input"
            :value="time.hours[0]"
            @change="updateTime([+$event.target.value, false])"
          >
            <option v-for="h in hoursArray" :key="h.value" :value="h.value">
              {{ h.text }}
            </option>
          </select>
          <span style="margin-left: 10px; margin-right: 10px;">:</span>
          <select
            class="select-input"
            :value="time.minutes[0]"
            @change="updateTime([+$event.target.value, false],false)"
          >
            <option v-for="m in minutesArray" :key="m.value" :value="m.value">
              {{ m.text }}
            </option>
          </select>
        </div>
        <div class="custom-time-picker-component">
          <select
            class="select-input"
            :value="time.hours[1]"
            @change="updateTime([false,+$event.target.value])"
          >
            <option v-for="h in hoursArray" :key="h.value" :value="h.value">
              {{ h.text }}
            </option>
          </select>
          <span style="margin-left: 10px; margin-right: 10px;">:</span>
          <select
            class="select-input"
            :value="time.minutes[1]"
            @change="updateTime([false,+$event.target.value],false)"
          >
            <option v-for="m in minutesArray" :key="m.value" :value="m.value">
              {{ m.text }}
            </option>
          </select>
        </div>
      </div>
    </template>
  </VueDatePicker>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const date = ref(new Date());

const hoursArray = computed(() => {
  const arr = [];
  for (let i = 0; i < 24; i++) {
    arr.push({ text: i < 10 ? `0${i}` : i, value: i });
  }
  return arr;
});

const minutesArray = computed(() => {
  const arr = [];
  for (let i = 0; i < 60; i++) {
    arr.push({ text: i < 10 ? `0${i}` : i, value: i });
  }
  return arr;
});
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});
</script>

<style lang="scss">
.custom-time-picker-component {
  display: flex;
  align-items: center;
  justify-content: center;
}
.time-picker-cutomer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.select-input {
  width: 50px;
  margin: 0 auto;
  background: #eee;
  border: 1px solid #eee;
  padding: 2px;
  outline: 0;
  font-size: 12px;
}
</style>