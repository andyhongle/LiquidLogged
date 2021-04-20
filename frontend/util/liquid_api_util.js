export const deleteLiquid = (id) => {
    return axios.delete(`/api/liquids/${id}`);
};

export const writeLiquid = data => {
    return axios.post('/api/liquids/', data)
}

export const getUserLiquids = id => {
    return axios.get(`/api/liquids/user/${id}`)
};
