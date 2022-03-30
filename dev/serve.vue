
<template>
  <v-app>
    <VJsonForm :options="defaultOptions" :schema="schema"></VJsonForm>
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

  defaultOptions = {
    "locale": "de",
    "readOnly" : true,
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

  schema : any = {
    "type": "object",
    "allOf": [
      {
        "key": "sectionKey1",
        "title": "First Section",
        "type": "object",
        "x-options": {
          "sectionsTitlesClasses": ["d-none"],
        },
        "allOf": [
          {
            "key": "group1",
            "title": "First Group",
            "type": "object",
            "required": ["dateprop"],
            "x-options": {
              "childrenClass": "pr-5 pl-0",
            },
            "properties": {
              "stringProp1": {
                "fieldType": "text",
                "title": "I am a text",
                "type": "string",
                "x-options": {
                  "fieldColProps": {
                    "cols": 12,
                    "sm": 6
                  }
                },
                "x-props": {
                  "outlined": true,
                  "dense": true
                },
              },
              "numberProp1": {
                "fieldType": "integer",
                "type": "integer",
                "title": "I am a number",
                "x-options": {
                  "fieldColProps": {
                    "cols": 12,
                    "sm": 6
                  }
                },
                "x-props": {
                  "outlined": true,
                  "dense": true
                }
              },
              "textarea1": {
                "fieldType": "textarea",
                "type": "string",
                "x-display": "textarea",
                "title": "I am a textarea",
                "x-props": {
                  "outlined": true,
                  "dense": true
                }
              },
              "booleanprop": {
                "fieldType": "boolean",
                "type": "boolean",
                "title": "I am a checkbox",
                "x-props": {
                  "outlined": true,
                  "dense": true
                }
              },
              "dateprop": {
                "fieldType": "date",
                "type": "string",
                "format": "time",
                "title": "I am a date",
                "x-props": {
                  "outlined": true,
                  "dense": true
                }
              },
            }
          }]
      }
    ]
  };
}
</script>

