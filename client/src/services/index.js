import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : null;

export const registerUser = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/api/auth/register`, userInfo);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    console.error(error.message);
  }
};

export const loginUser = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/api/auth/login`, userInfo);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    console.error(error.message);
  }
};

const buildHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`, 
    }
  };
};

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.get(`${apiURL}/api/auth/verify`, config);
      return response.data.user;
    }
    return null;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllPosts = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.get(`${apiURL}/api/posts`, config);
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error.message);
  }
};

export const getPostById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.get(`${apiURL}/api/posts/${id}:`, config);
      return response.data;
    }
  } catch (error) {
    console.error(error.message);
  }
}

export const newPost = async (newPost) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.post(
        `${apiURL}/api/posts/new-post`,
        newPost,
        config
      );
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePost = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      //may need to remove${id}, on backend haven't been using /:id in path
      const response = await axios.put(
        `${apiURL}/api/posts/update-post/${id}`,
        config
      );
      return response.data;
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const destroyPost = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.delete(
        `${apiURL}/api/posts/delete-post/${id}`,
        config
      );
      return response.data;
    }
  } catch (error) {
    console.error(error.message);
  }
};
