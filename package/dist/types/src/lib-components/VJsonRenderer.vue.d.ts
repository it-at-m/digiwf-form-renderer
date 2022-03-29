import { Vue } from 'vue-property-decorator';
import '@koumoul/vjsf/lib/VJsf.css';
import '@koumoul/vjsf/lib/deps/third-party.js';
import '@koumoul/vjsf/dist/main.css';
export default class VJsonRenderer extends Vue {
    currentValue: any;
    options: {
        locale: string;
        editMode: string;
        disableSorting: boolean;
        sectionsClass: string;
        objectContainerClass: string;
        messages: {
            required: string;
        };
        rules: {
            required: (v: any) => true | "Dieses Feld ist ein Pflichfeld";
        };
    };
    buttonText: string | undefined;
    value: any;
    schema: any;
    beforeMount(): void;
    input(): any;
}
