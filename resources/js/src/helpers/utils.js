import VueCookie from 'vue-cookie'

// TOKEN CREDENTIAL

console.log('process.env.NODE_ENV')
const tokenKey = `${process.env.NODE_ENV}_admin_access_token`
const expiredTokenKey = `${process.env.NODE_ENV}_admin_expired_token`
export const getToken = () => VueCookie.get(tokenKey) || ''
export const getExpired = () => VueCookie.get(expiredTokenKey)
export const setCredential = (token, expired) => {
    const date = new Date;
    date.setDate(date.getDate() + expired);
    VueCookie.set(tokenKey, token, { expires: expired })
    VueCookie.set(expiredTokenKey, expired)
    console.log([token, expired])
}
export const removeAuthCredential = () => {
    console.log('a')
    VueCookie.delete(tokenKey)
    VueCookie.delete(expiredTokenKey)
}