function validateRequest(http) {

    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

    if (!methods.includes(http.method)) {
        throw Error('Invalid request header: Invalid Method');
    }

    const regex = /^[A-Za-z0-9\.]+$|\*/g;
    if (http.uri == undefined || !regex.test(http.uri)) {
        throw Error('Invalid request header: Invalid URI');
    }

    if (!versions.includes(http.version)) {
        throw Error('Invalid request header: Invalid Version');
    }

    const msgRegex = /^[^<>\\\&\'\"]*$/g;
    if (http.message == undefined || !msgRegex.test(http.message)) {
        throw Error('Invalid request header: Invalid Message');
    }

    return http;
}

console.log(validateRequest({
    method: 'GET',
    uri: '...aaa666',
    version: 'HTTP/1.1',
    message: ''
}));