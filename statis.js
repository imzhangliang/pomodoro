
class NumberBoard {
    #number = 0;
    #parentDom = null;
    #setCb = null;
    #getCb = null;

    constructor(parentDom, n) {
        this.#parentDom = parentDom;
        this.setNumber(n);
    }

    setDBCallback({getCb, setCb}) {
        this.#getCb = getCb;
        this.#setCb = setCb;
        if (this.getNumber() === 0) {
            this.setNumber(0);
        }
        this.render();
    }

    render() {
        this.#parentDom.innerText = this.getNumber();
    }

    getNumber() {
        if (this.#getCb) {
            return this.#getCb() || 0;
        }
        return this.#number || 0;
    }

    setNumber(n) {
        if (this.#setCb) {
            this.#setCb(n || 0);
        } else {
            this.#number = n || 0;
        }

        this.render();
    }
}


export { NumberBoard };
