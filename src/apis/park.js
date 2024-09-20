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