'use client'
import CustomIcon from "@/components/CustomIcon"
import clsx from "clsx"
import { useId, useState } from "react"
import SubmissionModal from "./subcomponents/SubmissionModal"
import FormInput, {
    type FormInputDefinition,
    type FormValue,
} from "./subcomponents/FormInput"
import { fetchEndpoint } from "@/lib/utils/fetch"

export type {
    FormFieldOption,
    FormFieldType,
    FormInputDefinition,
    FormValue,
} from "./subcomponents/FormInput"

type FormState =
    | 'idle'
    | 'processing'
    | 'success'
    | 'error';

interface Props {
    before?: React.ReactNode;
    after?: React.ReactNode;
    fields: FormInputDefinition[];
    endpoints: string[];
    getAdditionalPayload?: () => Record<string, unknown>;
}

const getInitialFormData = (fields: FormInputDefinition[]): Record<string, FormValue> => (
    Object.fromEntries(fields.map(field => [
        field.id,
        field.type === 'checkbox'
            ? field.options?.length ? [] : false
            : '',
    ]))
)

function FormTemplate({
    before,
    after,
    fields,
    endpoints,
    getAdditionalPayload,
}: Props) {
    const [formData, setFormData] = useState<Record<string, FormValue>>(
        () => getInitialFormData(fields)
    )
    const [formState, setFormState] = useState<FormState>('idle')
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalState, setModalState] = useState<'success' | 'error'>('success')
    const formId = useId()

    const handleInputChange = (name: string, value: FormValue) => {
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSuccess = () => {
        setFormState('success')
        setModalState('success')
        setIsModalOpen(true)
        setFormData(getInitialFormData(fields))
    }

    const handleError = () => {
        setFormState('error')
        setModalState('error')
        setIsModalOpen(true)
        setFormData(getInitialFormData(fields))
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        setFormState('processing')

        try {
            const payload = {
                ...getAdditionalPayload?.(),
                ...formData
            }

            await Promise.all(endpoints.map(el => (
                fetchEndpoint(el, payload)
            ))) 

            handleSuccess()
        } catch (err) {
            console.error(err)
            handleError()
        }
    }

    const closeModal = () => {
        setFormState('idle')
        setIsModalOpen(false)
        window.location.reload()
    }

    return (
    <>
    <form
        onSubmit={handleSubmit}
        className="
            w-full md:w-[80%] max-w-180 md:min-w-120 relative
            px-4 py-4 md:p-8
            grid grid-cols-2 items-end gap-4 md:gap-8
            bg-main
            gradient-border rounded-2xl md:rounded-4xl"
    >
        {before}
        {fields.map((el) => (
            <FormInput
                key={el.id}
                {...el}
                domId={`${formId}-${el.id}`}
                value={formData[el.id]}
                onChange={(value) => handleInputChange(el.id, value)}
            />
        ))}
        <button
            type="submit"
            disabled={formState === 'processing'}
            aria-busy={formState === 'processing'}
            className={clsx(
                "w-full col-span-2 group",
                "py-4",
                "flex justify-center items-center",
                "bg-brandwhite",
                "text-my-md text-black font-semibold",
                "rounded-full"
            )}
        >
            {formState !== 'processing' && (
                <div className="flex justify-center items-center gap-3">
                    <span className="md:group-hover:pl-4 duration-200">
                        Enviar
                    </span>
                    <CustomIcon
                        iconId="arrowR"
                        className="scale-110"
                    />
                </div>
            )}
            {formState === 'processing' && (
                <span role="status" className="flex items-center gap-4">
                    <CustomIcon
                        iconId="spinner-two"
                        className="animate-spin-loop"
                    />
                </span>
            )}
        </button>
        {after}
    </form>
    <SubmissionModal
        isOpen={isModalOpen}
        state={modalState}
        onClose={closeModal}
    />
    </>
    )
}

export default FormTemplate
