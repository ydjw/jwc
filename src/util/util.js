

/**
 * 解析window.location.serch
 * @name 地址栏参数
 */
const getSearchByName = function (name) {
    var reg = new RegExp("[?|&]" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.href.match(reg);
    if (r != null) return (r[1].split('#')[0]);
    return null;
}

function setStorage(key, value) {
    localStorage.setItem(key, value)
}

function getStorage(key) {
    return localStorage.getItem(key)
}

const utils = {
    getSearchByName,
    setStorage,
    getStorage
}

// export default util
//配全局没配成，暂时导出吧
// window.getSeachByName = getSearchByName
window.util =utils
