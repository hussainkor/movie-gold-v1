import axios from "axios"

const URL = "http://localhost:8800";

export const getPosts = async () => {
    const res = await axios.get(`${URL}/posts`);
    if (res.status === 200) {
        return res
    } else {
        return
    }
}

export const getPost = async (id) => {
    const res = await axios.get(`${URL}/posts/${id}`);
    if (res.status === 200) {
        return res
    } else {
        return
    }
}

export const createPosts = async (post) => {
    const res = await axios.post(`${URL}/posts`, post);
    return res
}

export const updatePosts = async (id, post) => {
    const res = await axios.put(`${URL}/posts/${id}`, post);
    return res
}

export const deletePosts = async (id) => {
    const res = await axios.delete(`${URL}/posts/${id}`);
    return res
}

export const getUsers = async () => {
    const res = await axios.get(`${URL}/users`);
    if (res.status === 200) {
        return res
    } else {
        return
    }
}

export const getUser = async (id) => {
    const res = await axios.get(`${URL}/users/${id}`);
    if (res.status === 200) {
        return res
    } else {
        return
    }
}

export const createUser = async (user) => {
    const res = await axios.post(`${URL}/users`, user);
    return res
}

export const updateUser = async (id, user) => {
    const res = await axios.put(`${URL}/users/${id}`, user);
    return res
}

export const getCategs = async () => {
    const res = await axios.get(`${URL}/category`);
    if (res.status === 200) {
        return res
    } else {
        return
    }
}

export const createCateg = async (categ) => {
    const res = await axios.post(`${URL}/category`, categ);
    return res
}

export const verifyUser = async (user) => {
    const response = await axios.post(`${URL}/users/login`, user)
    //sessionStorage.getItem("social");
    // if (response.data.success) {
    //     return response.data.user
    // } else {
    //     return
    // }

    if (response.status === 200) {
        return response.data.token
    } else {
        return
    }
}


