# formkit-tinymce

A plugins of tinymce editor for formkit.

## Setup

Create formkit.config.ts
```typescript
import { DefaultConfigOptions } from '@formkit/vue'

import * as FormkitTinymce from 'formkit-tinymce'

const config: DefaultConfigOptions = {
    inputs: {
        ...FormkitTinymce,
    }
}

export default config
```

## Usage

Type: tinymce

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