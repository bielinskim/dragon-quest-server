import Crypto from 'crypto';

const randomString = (size = 4) => {
    const result = Crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size)

    return result;
}

export default randomString;