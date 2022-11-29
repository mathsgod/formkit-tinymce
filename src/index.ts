import { FormKitPlugin } from '@formkit/core';
import tinymce from './components/tinymce.vue'
import { createInput } from '@formkit/vue'

interface PluginOption {
    apiKey?: string;
}

export const createTinymcePlugin = (options?: PluginOption): FormKitPlugin => {
    return (node) => {
        if (node.props.type === 'tinymce') {
            node.props.apiKey = options?.apiKey || node.props.apiKey;
            node.define(createInput(tinymce, {
                props: ['apiKey']
            }));
        }
    }
}
