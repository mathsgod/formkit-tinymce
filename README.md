# formkit-tinymce

A plugins of tinymce editor for formkit.

## Setup

### Nuxt

1. npm install @formkit/nuxt
2. Create formkit.config.ts
```typescript
import { DefaultConfigOptions } from '@formkit/vue'
import { createTinymcePlugin } from 'formkit-tinymce'

const config: DefaultConfigOptions = {
    plugins: [createTinymcePlugin()] // You can provide you tinymce api key here
    // createTinymcePlugin({apiKey: 'YOUR_API_KEY'})
}


export default config
```

### Vue

1. npm install @formkit/vue
2. Setup in main.ts
```typescript
const app = createApp(App);
import { plugin, defaultConfig } from '@formkit/vue'
import { createTinymcePlugin } from 'formkit-tinymce'

app.use(plugin, defaultConfig({
    plugins: [createTinymcePlugin()]
}))
```


## Usage

Custom type name: tinymce

```html
<FormKit type="form" v-model="data">
    <FormKit type="tinymce" name="tinymce1" label="tinymce" :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
      }" />
    </FormKit>
</FormKit>

```