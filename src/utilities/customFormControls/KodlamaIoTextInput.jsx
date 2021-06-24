import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react';

export default function KodlamaIoTextInput({...props}) { //spread
    // console.log(props)
    //HOOK YÖNTEMİ: prop ile gelen objeden name'e bakıp alıyor.
    //field: ilgili alan ile alakalı bilgileri(value,onchange)
    //meta: hata var mı, değeri ne, dokunuldu mu
    const [field,meta]=useField(props);
    // console.log(field);
    // console.log(meta);
    return (
        <FormField error={meta.touched&& !!meta.error}>
            <input {...field} {...props}></input>
            {meta.touched&& !!meta.error?(
                 <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}
