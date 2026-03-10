

import { type ApiReponseType } from "@/types/ApiResponse-type"
import { type ConceptoEmpresaRequest } from "@/data/Dtos/Requests/concepto-empresa-request"
import { FetchAdpater } from "@/adapters/fetch-adapter"
import { ConceptosEmpresas } from "@/data/const/controllers-consts"

export const GetConceptosEmpresa = async (IdEmpresa: number, token: string): Promise<ApiReponseType<ConceptoEmpresaRequest>> => {
    
    const response = await FetchAdpater.get<ApiReponseType<ConceptoEmpresaRequest>>(`${ConceptosEmpresas}/${IdEmpresa}`, token)
    return response;
}