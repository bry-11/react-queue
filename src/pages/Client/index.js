import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import Layout from '../../layouts/public'
import Input from '../../components/Form/Input'
import Select from '../../components/Form/Select'
import Button from '../../components/CustomButton'
import CommonService from '../../services/Common'
import GeneralContext from '../../context/GeneralContext'

import { PrimaryCard, ActionCard } from '../../components/CustomCard'

import { TabWrapper, ButtonsContainer } from './style'
import { InnerForm } from '../../components/Form/style'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { getMessage } from '../../helpers/message'

const schema = yup.object().shape({
    id: yup
        .number()
        .typeError('ID debe ser un número')
        .min(0, 'Ingrese un valor positivo')
        .required('Campo ID anterior requerido'),
    name: yup
        .string()
        .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$/, 'Solo se permiten letras')
        .required('Campo nombre contraseña requerido'),
    queue: yup.mixed().required('Seleccionar Cola'),
})

const Login = () => {
    const { control, handleSubmit, errors, reset } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema),
        criteriaMode: 'firstError',
        shouldFocusError: true,
    })

    const history = useHistory()
    const { displayToast } = useContext(GeneralContext)
    const [isScreenLocked, setIsScreenLocked] = useState(false)

    const onSubmit = async (data) => {
        setIsScreenLocked(true)

        const createClient = {
            id: data?.id,
            name: data?.name,
            queue: data?.queue?.value,
        }

        try {
            const response = await CommonService.CreateClient(createClient)
            if (response) {
                displayToast({
                    type: 'ok',
                    message: 'Clientre creado conrrectamente',
                })
                reset({
                    id: '',
                    name: '',
                    queue: '',
                })
            }
        } catch (error) {
            if (error.response && error.response.data) {
                displayToast({
                    type: 'fail',
                    message: getMessage(error.response),
                })
            } else {
                displayToast({
                    type: 'fail',
                    message: 'Ocurrió un error al crear el cliente',
                })
            }
        }
        setIsScreenLocked(false)
    }

    return (
        <Layout>
            <ActionCard
                className="col-12"
                hasSeparator
                icon="prefactura"
                title="Ingreso Cliente"
                centerAlign
            >
                Ingrese un ID y el nombre del Cliente a guardar.
            </ActionCard>

            <PrimaryCard className="row">
                <TabWrapper>
                    <InnerForm onSubmit={handleSubmit(onSubmit)} autoComplete="off" current>
                        <Input
                            label="Id"
                            type="text"
                            name="id"
                            placeholder="Ingrese el ID"
                            control={control}
                            error={errors.id && errors.id?.message}
                        />

                        <Input
                            label="Nombre"
                            type="text"
                            name="name"
                            placeholder="Ingrese nombre"
                            control={control}
                            error={errors.name && errors.name?.message}
                        />

                        <Select
                            label="Seleccione la Cola"
                            name="queue"
                            control={control}
                            options={[
                                { value: 1, label: 'Cola 1' },
                                { value: 2, label: 'Cola 2' },
                            ]}
                            error={errors.queue && errors.queue?.message}
                        />
                        <ButtonsContainer>
                            <div className="col-md-6">
                                <Button
                                    locked={isScreenLocked}
                                    type="submit"
                                    buttonType="primary"
                                    size="lg"
                                    category="success"
                                >
                                    Enviar
                                </Button>
                            </div>
                        </ButtonsContainer>
                    </InnerForm>
                </TabWrapper>
            </PrimaryCard>
        </Layout>
    )
}
export default Login
