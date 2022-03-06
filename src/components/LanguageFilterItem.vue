<template>
    <li>
      <button
        :class="btnClassName"
        @click="$emit('onClickLanguageFilter',languageFilterDetails.id)"
        type="button"
      >
        {{languageFilterDetails.language}}
      </button>
    </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import languageData from '@/types/LanguageData'
export default defineComponent({
    name:'LanguageFilterItem',
    props:{
        languageFilterDetails:{
            type : Object as PropType<languageData>,
            required:true
        },
        isActive :String
    },
    setup(props) {

        const btnClassName = computed(()=>{
            return  props.isActive === props.languageFilterDetails.id ? 
           'language-btn active-language-btn' : 'language-btn'
        })
         

    return {btnClassName}

    },
})
</script>

<style scoped>
.language-btn {
  color: #0f172a;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  flex-shrink: 0;
  cursor: pointer;
  outline: none;
}
li{
  list-style-type: none;
}
.active-language-btn {
  color: #0284c7;
  border-radius: 24px;
  border: 1px solid #0284c7;
  
}
</style>
