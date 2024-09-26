import Request from "@/utils/axios";

export const getParks = (params) => {
    let queryString = ''
    if (params) {
        const validParams = Object.fromEntries(Object.entries(params).filter(([key, value]) => value))
        queryString = new URLSearchParams(validParams).toString()
    }
    const url = params ? `/cms/parks?${queryString}` : '/cms/parks'
    return Request.get(url)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const getParkById = (id) => {
    return Request.get(`/cms/parks/${id}`)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const createPark = (params) => {
    return Request.post('/cms/parks', params)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const updatePark = (id, params) => {
    return Request.put(`/cms/parks/${id}`, params)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const deletePark = (id) => {
    return Request.delete(`/cms/parks/${id}`)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const changeActive = (id, active) => {
    return Request.post(`/cms/parks/${id}/active`, active)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const changeMapDisplay = (id, mapDisplay) => {
    return Request.post(`/cms/parks/${id}/map-display`, mapDisplay)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}