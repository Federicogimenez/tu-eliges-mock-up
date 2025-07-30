quiero que crees un contexto y un hook que lea si hay un codigo en la url como query param: "?code=example"

quiero que hagas accesible el codigo desde objeto global y hagas una consulta api en la que devuelvas otro objeto mas del siguiente tipo


interface AllyDataProps{
    alliedName: string,
    alliedCompanyImg: string,
    alliedCuponCode: string,
    discount_percent: number,
    membership_anual_fee: number,
    new_price_after_discount: number,
    isLoading: boolean,
    userNotFound: boolean
}

con el metodo GET a la siguiente api pasandole el codigo de la url como parametro:  urlFetch = `https://api.tueliges.us/public/ally-code/${code}`

por ultimo quiero que expongas estas dos variables a traves de un hook que pueda ser consumido desde cualquier landing

**consideracion** no quiero que se disparen consultas cuando se navega, la onsulta se dispara una vez y luego guardamos la informacion en el objeto global