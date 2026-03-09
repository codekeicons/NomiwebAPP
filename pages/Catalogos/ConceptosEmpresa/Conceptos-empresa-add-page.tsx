"use client"

import { ButtonBase } from '@/components/base/Button-base';
import { InputBase } from '@/components/base/Input-base'
import { SelectBase } from '@/components/base/Select-base';
import { SwitchBase } from '@/components/base/Switch-base';
import { useForm } from '@/hooks/useForm';
import { SaveIcon } from '@/icons/Save-icon';
import React, { useState } from 'react'
import Link from 'next/link';

export const ConceptosEmpresaAddPage = () => {

    const [idConceptoSatState, setIdConceptoSat] = useState(1);
    const [idTipoConceptoState, setIdTipoConcepto] = useState(1);

    const [obligatorioState, setObligatorio] = useState(false);
    const [liquidacionState, setLiquidacion] = useState(false);

    const foromConceptoEmpresa: ConceptoEmpresaRequest = {
        ClaveInterna: '',
        Descripcion: '',
        IdConceptoSat: 0,
        IdEmpresa: 0,
        Obligatorio: false,
        Liquidacion: false
    }

    const handleConceptoSatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIdConceptoSat(parseInt(e.target.value));
    }

    const handleTipoConceptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => [
        setIdTipoConcepto(parseInt(e.target.value))
    ]

    const handleObligatorioChange = () => [
        setObligatorio(!obligatorioState)
    ]

    const hanldeLiquidacionChange = () => {
        setLiquidacion(!liquidacionState)
    }

    const { formState,
        setForm,
        ClaveInterna,
        Descripcion,
        IdConceptoSat,
        IdEmpresa,
        Obligatorio,
        Liquidacion,
        onInput
    } = useForm<ConceptoEmpresaRequest>(foromConceptoEmpresa);

    return (
        <>

            <div className='flex w-full my-5 text-2xl text-blue-950 space-x-3'>
                <Link href={`/catalogos/conceptos-empresa`} className=' underline'>Conceptos empresa</Link>
                <span>/</span> <span>Agregar</span>
            </div>

            <form action="">
                <div className='grid grid-cols-12 gap-5 '>
                    <div className='col-span-3'>
                        <InputBase Title='Clave interna' Name='ClaveInterna' Value={ClaveInterna}
                            OnInput={onInput} Placeholder='' />
                    </div>
                    <div className='col-span-9'>
                        <InputBase Title='Descripcion' Name='Descripcion' Value={Descripcion}
                            OnInput={onInput} Placeholder='' />
                    </div>

                    <div className='col-span-3'>
                        <SelectBase Title='Tipo concepto' Name='IdTipoConcepto'
                            Value={idTipoConceptoState} OnInput={handleTipoConceptoChange}>

                            <option value=""></option>
                        </SelectBase>
                    </div>

                    <div className='col-span-9'>
                        <SelectBase Title='Concepto SAT' Name='IdConceptoSat'
                            Value={idConceptoSatState} OnInput={handleConceptoSatChange}>

                            <option value=""></option>
                        </SelectBase>
                    </div>
                </div>

                <div className='flex items-center space-x-10 mt-10'>
                    <SwitchBase Title='Obligatorio' Name='Obligatorio'
                        Value={obligatorioState} OnInput={handleObligatorioChange} />

                    <SwitchBase Title='Liquidacion' Name='Liquidacion'
                        Value={liquidacionState} OnInput={hanldeLiquidacionChange} />
                </div>

                <ButtonBase Text='Registrar' Icon={<SaveIcon />} />

            </form>
        </>
    )
}
