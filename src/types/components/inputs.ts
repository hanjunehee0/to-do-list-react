import { FieldError } from 'react-hook-form'

export interface InputTextType {
    // id: string
    style?: string | ''
    placeHolder?: string | ''
    defaultValue?: string | ''
    error?: FieldError | ''
    label?: string | ''
}

export interface InputRadioType {
    // id: string
    style?: string | ''
    error?: FieldError | ''
    items: {
        value: string
        label: string
    }[]
}

export interface InputCheckBoxType {
    // id: string
    style?: string | ''
    defaultValue?: boolean | false
    error?: FieldError | ''
    label?: string | ''
}

export interface SelectType {
    // id?: string
    style?: string | ''
    defaultValue?: string | ''
    arrow?: string | ''
    error?: FieldError | ''
    label?: string | ''
}

export interface OptionsType {
    value?: string | ''
    label?: string | ''
}

export interface TextAreaType {
    // id?: string | ''
    style?: string | ''
    defaultValue?: string | ''
    cols?: number | 30
    rows?: number | 10
    error?: FieldError | ''
    label?: string | ''
}
