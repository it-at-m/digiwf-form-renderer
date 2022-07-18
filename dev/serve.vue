<template>
  <v-app>
    <div class="pa-5">
      <VJsonForm @input="input" :value="value" :options="defaultOptions" :schema="schema">
        <template #custom-multi-file-input="context">
          <v-multi-file-input v-bind="context"/>
        </template>
      </VJsonForm>
      <div>
        {{ currentValue }}
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Provide} from "vue-property-decorator";
import {VJsonForm} from "@/lib-components";

@Component({
  components: {VJsonForm}
})
export default class App extends Vue {

  currentValue: any = {};
  value: any = {
    'fileProp': {key: 'abc', amount: 1}
  }

  @Provide('formContext')
  formContext = {
    id: 'Task01',
    type: 'task'
  }
  @Provide('apiEndpoint') apiEndpoint = 'api/digitalwf-backend-service'

  input(value: any): void {
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

  schema: any = {
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
      },
      "fileProp": {
        "fieldType": "file",
        "title": "Dateien",
        "x-display": "custom-multi-file-input",
        "type": "object",
        "properties": {"key": {"type": "string"}, "amount": {"type": "integer"}},
        "filePath": "test",
        "uuidEnabled": true,
        "x-options": {
          "fieldColProps": {
            "cols": 12,
            "sm": 12,
            "messages": {}
          }
        },
        "x-props": {
          "outlined": true,
          "dense": true
        },
        "x-rules": [
          "requiredObject"
        ]
      }
    }
  };
}
</script>

