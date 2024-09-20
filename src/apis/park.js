import Request from "@/utils/axios";

export const getParks = () => {
    return Request.get('/cms/parks')
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const getPark = (id) => {
    Request.get(`/cms/parks/${id}`)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const savePark = (params) => {
    return Request.post('/cms/parks', params)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}

export const deletePark = (id) => {
    Request.delete(`/cms/parks/${id}`)
        .then(res => {
            return res
        })
        .catch(err => {
            throw new Error(err)
        })
}