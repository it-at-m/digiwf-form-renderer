<template>
  <v-app>
    <div class="pa-5">
      <VJsonForm :value="value" :options="defaultOptions" :schema="schema"></VJsonForm>
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


  value = {
    "AntragFuerDritte": "Value_Nein"
  };

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
    "type": "object", "x-display": " ", "allOf": [{
      "title": " ",
      "type": "object",
      "key": "a088f3c6-6644-407b-a549-0636a471c030",
      "x-options": {"sectionsTitlesClasses": ["font-weight-bold"]},
      "allOf": [{
        "containerType": "optionalContainer",
        "title": "Antragsteller*in und Reisende",
        "type": "object",
        "x-options": {"sectionsTitlesClasses": ["d-none"]},
        "x-props": {"outlined": true, "dense": true},
        "allOf": [{
          "fieldType": "optionalContainer",
          "title": "Wird der Antrag für andere Reisende gestellt?",
          "type": "object",
          "x-options": {"sectionsTitlesClasses": []},
          "x-props": {"outlined": true, "dense": true},
          "oneOf": [{
            "title": "Nein, ich als Antragsteller reise",
            "key": "37e68c5b-de45-41a7-8289-ffdf4e743362",
            "x-options": {"childrenClass": "pr-5 pl-0"},
            "properties": {
              "AntragFuerDritte": {
                "fieldType": "const",
                "type": "string",
                "const": "Value_Nein",
                "key": "AntragFuerDritte"
              },
              "AntragstellerInfo": {
                "fieldType": "text",
                "title": "Antragsteller*in",
                "type": "string",
                "key": "AntragstellerInfo",
                "readOnly": true,
                "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
                "x-props": {"outlined": true, "dense": true},
                "x-rules": []
              }
            }
          }, {
            "key": "19e1ec0b-5539-4714-bcfb-fd3590dfba35",
            "title": "Ja, der Antrag wird für andere Reisende gestellt",
            "x-options": {"childrenClass": "pr-5 pl-0"},
            "properties": {
              "AntragFuerDritte": {
                "fieldType": "const",
                "type": "string",
                "const": "Value_Ja_NurDritte",
                "key": "AntragFuerDritte"
              },
              "AntragstellerInfo": {
                "fieldType": "text",
                "title": "Antragsteller*in",
                "type": "string",
                "key": "AntragstellerInfo",
                "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
                "x-props": {"outlined": true, "dense": true},
                "x-rules": []
              },
              "Dritte": {
                "fieldType": "user-input",
                "title": "Wenn der Antrag für andere Reisende gestellt wird, wer reist?",
                "x-display": "custom-user-input",
                "type": "string",
                "key": "Dritte",
                "readOnly": true,
                "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
                "x-props": {"outlined": true, "dense": true},
                "x-rules": []
              }
            }
          }],
          "key": "62334373-25b0-4fda-aca5-6bbbe6e4ceb6",
          "readOnly": true
        }],
        "key": "645bbe52-8388-4aad-b5f7-cb7cc1f6e59b"
      }, {
        "title": "Veranstaltungsort & -land",
        "type": "object",
        "key": "96156b3b-455b-4c9b-8f00-0a4e3d6c994d",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "ReiseortStrasse": {
            "fieldType": "text",
            "type": "string",
            "key": "ReiseortStrasse",
            "title": "Straße und Hausnummer",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 6, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "ReiseOrt": {
            "fieldType": "text",
            "title": "Ort",
            "type": "string",
            "key": "ReiseOrt",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "messages": {}, "sm": 6}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "ReiseLand": {
            "fieldType": "select",
            "title": "Reiseland",
            "type": "string",
            "key": "ReiseLand",
            "readOnly": true,
            "anyOf": [{"title": "Inland", "const": "Value_Inland"}, {
              "title": "Europa",
              "const": "Value_Europa"
            }, {"title": "Außereuropäisches Ausland", "const": "Value_Welt"}],
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          }
        }
      }, {
        "title": "Reisezeitraum",
        "type": "object",
        "key": "9d9f7344-6187-4d3f-a8de-f397a849a9cf",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "DatumAnreise": {
            "fieldType": "date",
            "title": "Anreise",
            "type": "string",
            "format": "date",
            "key": "DatumAnreise",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 6, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "DatumAbreise": {
            "fieldType": "date",
            "title": "Abreise",
            "type": "string",
            "format": "date",
            "key": "DatumAbreise",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 6, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          }
        }
      }, {
        "title": "Dienstgeschäft-Zeitraum",
        "type": "object",
        "key": "a5d0c06f-4063-4dfa-b871-7852bfbe2fce",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "BeginnDienstgeschaeftDatum": {
            "fieldType": "date",
            "title": "Beginn des Dienstgeschäftes (Datum)",
            "type": "string",
            "format": "date",
            "key": "BeginnDienstgeschaeftDatum",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 6, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "BeginnDienstgeschaeftUhrzeit": {
            "fieldType": "time",
            "title": "Beginn des Dienstgeschäftes (Uhrzeit am ersten Tag)",
            "type": "string",
            "format": "time",
            "key": "BeginnDienstgeschaeftUhrzeit",
            "readOnly": true,
            "x-options": {
              "fieldColProps": {"cols": 12, "sm": 6, "messages": {}},
              "timePickerProps": {"format": "24hr"}
            },
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "EndeDienstgeschaeftDatum": {
            "fieldType": "date",
            "title": "Ende des Dienstgeschäftes (Datum)",
            "type": "string",
            "format": "date",
            "key": "EndeDienstgeschaeftDatum",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 6, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "EndeDienstgeschaeftUhrzeit": {
            "fieldType": "time",
            "title": "Ende des Dienstgeschäftes (Uhrzeit am letzten Tag)",
            "type": "string",
            "format": "time",
            "key": "EndeDienstgeschaeftUhrzeit",
            "readOnly": true,
            "x-options": {
              "fieldColProps": {"cols": 12, "sm": 6, "messages": {}},
              "timePickerProps": {"format": "24hr"}
            },
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "KommentarPrivataufenthalt": {
            "fieldType": "textarea",
            "title": "Angabe, falls Reisezeitraum vom Zeitraum des Dienstgeschäftes abweicht",
            "x-display": "textarea",
            "type": "string",
            "key": "KommentarPrivataufenthalt",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "maxLength": 1000
          }
        }
      }, {
        "title": "Beförderungsmittel",
        "type": "object",
        "key": "f1d28c81-5083-4932-8b82-14d89d9a2d5f",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "Befoerderungsmittel": {
            "fieldType": "multiselect",
            "title": "Beförderungsmittel",
            "type": "array",
            "key": "Befoerderungsmittel",
            "default": [],
            "readOnly": true,
            "items": {
              "anyOf": [{"title": "Bahn", "const": "Bahn"}, {
                "title": "MVV",
                "const": "MVV"
              }, {"title": "Bus/Reisebus", "const": "Bus/Reisebus"}, {
                "title": "Flugzeug",
                "const": "Flugzeug"
              }, {"title": "PKW als Fahrer*in", "const": "PKW als Fahrer*in"}, {
                "title": "PKW als Mitfahrer*in",
                "const": "PKW als Mitfahrer*in"
              }], "type": "string"
            },
            "x-options": {"fieldColProps": {"cols": 12, "sm": 8, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "BefoerderungsmittelKlasse": {
            "fieldType": "text",
            "title": "Klasse (Bahn)",
            "type": "string",
            "key": "BefoerderungsmittelKlasse",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 4, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          }
        }
      }, {
        "title": "Reisegrund",
        "type": "object",
        "key": "88ba044d-bc6e-49d4-bc3c-db0d8cb1d965",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "HinweiseBegruendung": {
            "fieldType": "markdown",
            "title": "Hinweise zur Begründung",
            "type": "string",
            "x-display": "markdown",
            "key": "HinweiseBegruendung",
            "default": "Zusätzliche Angaben wie bspw. der Grund der Reise, die dringende dienstliche Notwendigkeit oder Mitfahrerinnen müssen hier benannt werden. Soweit der Antrag für eine andere Person gestellt wird, sollte dies ebenfalls hier ausgeführt werden.",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "GrundDienstlNotwendigkeit": {
            "fieldType": "textarea",
            "title": "Ausführliche Begründung",
            "x-display": "textarea",
            "type": "string",
            "key": "GrundDienstlNotwendigkeit",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "maxLength": 1000,
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "WuenscheReisedetails": {
            "fieldType": "textarea",
            "title": "Vorschläge zu Reisedetails",
            "x-display": "textarea",
            "type": "string",
            "key": "WuenscheReisedetails",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "maxLength": 1000,
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          }
        }
      }, {
        "containerType": "optionalContainer",
        "title": "Art der Reise",
        "type": "object",
        "x-options": {"sectionsTitlesClasses": ["d-none"]},
        "x-props": {"outlined": true, "dense": true},
        "allOf": [{
          "fieldType": "optionalContainer",
          "title": "Um was für eine Reise handelt es sich?",
          "type": "object",
          "x-options": {"sectionsTitlesClasses": []},
          "x-props": {"outlined": true, "dense": true},
          "oneOf": [{
            "title": "Dienstreise",
            "key": "6632d4bd-207a-460c-8550-2d9283ab6add",
            "x-options": {"childrenClass": "pr-5 pl-0"},
            "properties": {
              "ArtGenehmigung": {
                "fieldType": "const",
                "type": "string",
                "const": "Value_Dienstreise",
                "key": "ArtGenehmigung"
              }
            }
          }, {
            "title": "Fortbildungsreise",
            "key": "157847b1-32ce-4c3e-9f97-ec98e1055a73",
            "x-options": {"childrenClass": "pr-5 pl-0"},
            "properties": {
              "ArtGenehmigung": {
                "fieldType": "const",
                "type": "string",
                "const": "Value_Fortbildungsreise",
                "key": "ArtGenehmigung"
              },
              "kursNummer": {
                "fieldType": "text",
                "title": "Kursnummer der Fortbildung (nur RIT & it@m)",
                "type": "string",
                "key": "kursNummer",
                "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
                "x-props": {"outlined": true, "dense": true},
                "x-rules": []
              }
            }
          }],
          "key": "0cbd9b08-5e5a-485f-a1de-b67dc657322d",
          "readOnly": true
        }],
        "key": "1468b844-86a1-4de2-ad49-25a97ed21a58"
      }, {
        "title": "Gebühren und Zahlungsdetails",
        "type": "object",
        "key": "fcf053ca-b5bf-4e28-b4c0-60873402c8f0",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "Gebuehren": {
            "fieldType": "boolean",
            "title": "Es liegen Angaben zu Teilnahme-/Kurs-/Tagungsgebühren vor.",
            "type": "boolean",
            "key": "Gebuehren",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 8, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "GebuehrenWert": {
            "fieldType": "text",
            "title": "Gebührenhöhe",
            "type": "string",
            "key": "GebuehrenWert",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 4, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "Zahlungsdetails": {
            "fieldType": "textarea",
            "title": "Zahlungsdetails - Hinweise auf die Zahlung der Gebühren",
            "x-display": "textarea",
            "type": "string",
            "key": "Zahlungsdetails",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "maxLength": 1000
          },
          "KeineGebuehren": {
            "fieldType": "boolean",
            "title": "Es liegen keine Angaben zu  Teilnahme-/Kurs-/Tagungsgebühren vor.",
            "type": "boolean",
            "key": "KeineGebuehren",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          }
        }
      }, {
        "title": "Übernahme von Reise- und Übernachtungskosten durch Dritte (nicht LHM)",
        "type": "object",
        "key": "b602f70d-8429-4936-90c3-a6c527ada3be",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "UebernahmeReiseVerwaltung": {
            "fieldType": "boolean",
            "title": "durch die öffentliche Verwaltung (dann erlaubte Zuwendung nach § 4 Nr. 4 Antikorruptionsrichtlinie (AKR).)",
            "type": "boolean",
            "key": "UebernahmeReiseVerwaltung",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "UebernahmeReiseNichtVerwaltung": {
            "fieldType": "boolean",
            "title": "durch Dritte außerhalb der öffentlichen Verwaltung für",
            "type": "boolean",
            "key": "UebernahmeReiseNichtVerwaltung",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "BefoerderungsMittelBezahltDurchDritte": {
            "fieldType": "text",
            "title": "Folgende Beförderungsmittel",
            "type": "string",
            "key": "BefoerderungsMittelBezahltDurchDritte",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "messages": {}, "sm": 8}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "BefoerderungsMittelBezahltDurchDritteWert": {
            "fieldType": "text",
            "title": "(Geschätzter) Wert",
            "type": "string",
            "key": "BefoerderungsMittelBezahltDurchDritteWert",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 4, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "UebernachtungBezahltDurchDritte": {
            "fieldType": "text",
            "title": "Folgende Übernachtungen (Anzahl der Nächte / Unterkunft)",
            "type": "string",
            "key": "UebernachtungBezahltDurchDritte",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 8, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "UebernachtungBezahltDurchDritteWert": {
            "fieldType": "text",
            "title": "(Geschätzter) Wert",
            "type": "string",
            "key": "UebernachtungBezahltDurchDritteWert",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 4, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "HinweisUebernahmeKosten": {
            "fieldType": "markdown",
            "title": "Hinweise zur Kostenübernahme",
            "type": "string",
            "x-display": "markdown",
            "key": "HinweisUebernahmeKosten",
            "readOnly": true,
            "default": "Warum erfolgt die Kostenübernahme durch den Dritten? Durch wen werden die Kosten übernommen?",
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "BegruendungKostenuebernahme": {
            "fieldType": "textarea",
            "title": "Begründung zur Übernahme von Reise- und Übernachtungsgebühr",
            "x-display": "textarea",
            "type": "string",
            "key": "BegruendungKostenuebernahme",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": [],
            "maxLength": 1000,
            "pattern": "^[a-zA-Z0-9.;:,?!-_'§%\\/()@€=#äöüÄÜÖ]"
          },
          "Paragraph5AkrAntrag": {
            "fieldType": "boolean",
            "title": "Ein Antrag auf Zustimmung zur Annahme einer Zuwendung nach § 5 AKR wird hiermit gestellt.",
            "type": "boolean",
            "key": "Paragraph5AkrAntrag",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          }
        }
      }, {
        "containerType": "group",
        "title": "Ergänzende Dokumente",
        "key": "47412c3d-175f-4563-8447-a7a3a27e3f78",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "UploadDoc": {
            "fieldType": "file",
            "title": "Dateien auswählen",
            "x-display": "custom-multi-file-input",
            "type": "string",
            "key": "UploadDoc",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          }
        }
      }, {
        "title": "Vorgesetzte*r",
        "type": "object",
        "key": "7e4d1e4f-8e27-4ab4-97d2-7da7603ef02c",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "VorgesetzterGestattet": {
            "fieldType": "select",
            "title": "Einverständnis erteilen?",
            "type": "string",
            "key": "VorgesetzterGestattet",
            "anyOf": [{
              "title": "Einverständnis erteilt",
              "const": "gestattet"
            }, {
              "title": "Einverständnis erteilt und weiter zur Reisesachbearbeitung, da keine weitere Genehmigung notwendig",
              "const": "gestattetOhne"
            }, {"title": "Einverständnis nicht erteilt", "const": "abgelehnt"}, {
              "title": "Änderung notwendig",
              "const": "aenderungNotwendig"
            }],
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": ["required"]
          },
          "AenderungenErwuenscht": {
            "fieldType": "text",
            "title": "Was soll geändert werden?",
            "type": "string",
            "key": "AenderungenErwuenscht",
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          }
        }
      }, {
        "title": "Nächste Genehmigungsebene",
        "type": "object",
        "key": "ee9cf00d-4d00-4cf6-9989-0438d0b0a4f4",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "ChefChef": {
            "fieldType": "user-input",
            "title": "Einverständnis zu erteilen durch?",
            "x-display": "custom-user-input",
            "type": "string",
            "key": "ChefChef",
            "x-options": {"fieldColProps": {"cols": 12, "sm": 6, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "ChefChefVertretung": {
            "fieldType": "user-input",
            "title": "Einverständnis zu erteilen durch - Vertretung?",
            "x-display": "custom-user-input",
            "type": "string",
            "key": "ChefChefVertretung",
            "x-options": {"fieldColProps": {"cols": 12, "sm": 6, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
          "objectArrayProp": {
            "type": "array",
            "title": "I'm an array of objects",
            "description": "This description is used as a help message.",
            "x-itemTitle": "titleProp",
            "items": {
              "type": "object",
              "required": [
                "titleProp"
              ],
              "properties": {
                "titleProp": {
                  "type": "string",
                  "title": "I'm a required string used as title"
                },
                "numberProp": {
                  "type": "number",
                  "title": "I'm a number"
                },
                "booleanProp": {
                  "type": "boolean",
                  "title": "I'm a boolean"
                },
                "selectProp": {
                  "type": "string",
                  "enum": [
                    "Value 1",
                    "Value 2"
                  ],
                  "title": "I'm a select"
                }
              },
              "oneOf": [
                {
                  "title": "Object1",
                  "properties": {
                    "objectType": {
                      "type": "string",
                      "const": "object1",
                      "title": "Sub object type"
                    },
                    "dateProp": {
                      "type": "string",
                      "format": "date",
                      "title": "I'm a date"
                    }
                  }
                },
                {
                  "title": "Object2",
                  "properties": {
                    "objectType": {
                      "type": "string",
                      "const": "object2"
                    },
                    "colorProp": {
                      "type": "string",
                      "format": "hexcolor",
                      "title": "I'm a color"
                    }
                  }
                }
              ]
            }
          },
          "ChefChefVertretung1": {
            "fieldType": "user-input",
            "title": "Einverständnis zu erteilen durch - Vertretung?",
            "x-display": "custom-user-input",
            "type": "string",
            "key": "ChefChefVertretung",
            "x-options": {"fieldColProps": {"cols": 12, "sm": 6, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          },
        }
      }, {
        "type": "object",
        "key": "554e7ada-3227-4b8b-978a-46074dd0c3a5",
        "title": "Hinweis",
        "x-options": {"childrenClass": "pr-5 pl-0"},
        "properties": {
          "fuehrungskraftText": {
            "fieldType": "markdown",
            "title": "Bitte geben Sie die zuständige nächste Genehmigungsebene ein:",
            "type": "string",
            "x-display": "markdown",
            "key": "fuehrungskraftText",
            "default": "* KVR: Bitte leiten Sie den Antrag an den Geschäftsbereich GL/2-Finanzen weiter.\n* POR: Bitte beachten Sie die Regelung Ihrer Abteilung.\n* RIT/ITM: Bitte leiten Sie den Antrag je nach Zuständigkeit an \n\t* Leitung RIT-I\n\t* Abteilungsleitung (für it@M GL)\n\t* Geschäftsbereichsleitung (für it@M)",
            "readOnly": true,
            "x-options": {"fieldColProps": {"cols": 12, "sm": 12, "messages": {}}},
            "x-props": {"outlined": true, "dense": true},
            "x-rules": []
          }
        }
      }]
    }]
  };
}
</script>

