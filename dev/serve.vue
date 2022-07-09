<template>
  <v-app>
    <div class="pa-5">
      <VJsonForm @input="input" :options="defaultOptions" :schema="schema"></VJsonForm>
      <div>
        {{currentValue}}
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {VJsonForm} from "@/lib-components";

@Component({
  components: {VJsonForm}
})
export default class App extends Vue {

  currentValue: any = {};

  input(value: any) : void {
   this.currentValue = value;
  }

  defaultOptions = {
    "locale": "de",
    "editMode": "inline",
    "disableSorting": true,
    "timePickerProps": {
      "format": "24hr"
    },
    "messages": {
      "required": "Dieses Feld ist ein Pflichfeld",
      "preview": "Vorschau",
      "mdeGuide": "Dokumentation"
    }
  };

  schema: any ={
    "type": "object",
    "properties": {
      "dateProp": {
        "type": "string",
        "title": "I'm a simple date",
        "format": "date",
        "description": "This description is used as a help message."
      },
      "timeProp": {
        "type": "string",
        "title": "I'm a simple time of day",
        "format": "time"
      },
      "dateTimeProp": {
        "type": "string",
        "title": "I'm a date with time",
        "format": "date-time"
      }
    }
  };
}
</script>

