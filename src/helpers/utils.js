const successStatus = [200, 201];

export const isSuccessResponse = status => successStatus.includes(status);
