import Request from "@/utils/axios";

export const getBanners = () => {
    return Request.get("/cms/banners")
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw new Error(err)
        })
}

export const createBanner = (params) => {
    return Request.post("/cms/banners", params)
        .then((res) => {
            return res
        })
}