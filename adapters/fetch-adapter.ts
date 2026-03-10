



export const FetchAdpater = {

    get: async <TResponse>(endPoint:string, token:string): Promise<TResponse> => {

        const res = await fetch(`${endPoint}`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data: TResponse = await res.json();
        return data;
    },
    post: async <TRequest, TResponse>(endPoint: string, dto: TRequest): Promise<TResponse> => {
        const res = await fetch(`${endPoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dto)
        })

        const data : TResponse = await res.json();
        return data;
    }

}