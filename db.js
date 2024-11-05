

class DB {
    get(key) {
        if (localStorage.getItem(key) && localStorage.getItem(key).startsWith('number:')) {
            return parseInt(localStorage.getItem(key).substring(7)) || 0;
        }
    }

    set(key, value) {
        if (typeof value === typeof(0)) {
            localStorage.setItem(key, `number:${value || 0}`);
        } else {
            localStorage.setItem(key, value);
        }
    }

} 


export default new DB();
