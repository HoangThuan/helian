<script>
export default {
    data(){
          return {
            date: new Date()
          }
    },
    computed:{
        hoursArray(){
            const arr = [];
            for (let i = 0; i < 24; i++) {
                arr.push({ text: i < 10 ? `0${i}` : i, value: i });
            }
            return arr;
        },
        minutesArray(){
            const arr = [];
            for (let i = 0; i < 60; i++) {
                arr.push({ text: i < 10 ? `0${i}` : i, value: i });
            }
            return arr;
        }
    },
    mounted(){
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        this.date = [startDate, endDate];
        console.log(this.date[0])
    }
}
</script>
<template>
    <VueDatePicker v-model="date" range  multi-calendars>
      <template #time-picker="">
        <div class="custom-time-picker-component">
          <select 
            class="select-input" 
            @change="updateTime(+$event.target.value)"
          >
            <option 
              v-for="h in hoursArray"
              :key="h.value"
              :value="h.value">{{ h.text }}</option>
          </select>
          <select
            class="select-input"
            @change="updateTime(+$event.target.value, false)"
          >
            <option 
              v-for="m in minutesArray"
              :key="m.value"
              :value="m.value">{{ m.text }}</option>
          </select>
        </div>
      </template>
    </VueDatePicker>
</template>
<style lang="scss">
.custom-time-picker-component {
  display: flex;
  align-items: center;
  justify-content: center;
}

.select-input {
  margin: 5px 3px;
  padding: 5px;
  width: 100px;
  border-radius: 4px;
  border-color: var(--dp-border-color);
  outline: none;
  -webkit-appearance: menulist;
}
</style>