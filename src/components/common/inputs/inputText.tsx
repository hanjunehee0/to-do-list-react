import { UseFormRegisterReturn } from 'react-hook-form'

import { InputTextType } from '@/types/components/inputs.ts'

const InputText = ({
    props,
    register,
}: {
    props: InputTextType
    register: UseFormRegisterReturn<string>
}) => {
    return (
        <>
            <label>
                <input
                    type="text"
                    placeholder={props.placeHolder}
                    className={props.style}
                    defaultValue={props.defaultValue}
                    {...register}
                />
                {props.label}
            </label>
            {props.error && <span className="text-red-700 text-bold">{props.error.message}</span>}
        </>
    )
}
export default InputText
