const responseWithData = (res, statusCode, data) => {
  return res.status(statusCode).json(data);
};

const responseHandler = {
  error: (res, message = "Something wrong, Boss!") => {
    return responseWithData(res, 500, {
      status: 500,
      message,
    });
  },

  badrequest: (res, message) => {
    return responseWithData(res, 400, {
      status: 400,
      message,
    });
  },

  ok: (res, data) => {
    return responseWithData(res, 200, data);
  },

  created: (res, data) => {
    return responseWithData(res, 201, data);
  },

  unauthorize: (res, message = "Unauthorized, Boss!") => {
    return responseWithData(res, 401, {
      status: 401,
      message,
    });
  },

  notfound: (res, message = "Resource not found, Boss!") => {
    return responseWithData(res, 404, {
      status: 404,
      message,
    });
  },
};

export default responseHandler;
