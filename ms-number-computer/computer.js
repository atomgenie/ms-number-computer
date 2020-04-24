module.exports = {
    // TODO: Create our computer function here
    add: function (a, b) {
        if (arguments.length < 2) {
            throw Error("Arguments missing.")
        }

        if (!a && a !== 0) {
            throw Error(`"${a}" is not a valid number [arg 0].`)
        }

        if (!b && b !== 0) {
            throw Error(`"${b}" is not a valid number [arg 1].`)
        }

        if (typeof a === "string") {
            throw Error("a String is not a valid number [arg 0].")
        }

        if (typeof b === "string") {
            throw Error("a String is not a valid number [arg 1].")
        }

        if (typeof a !== "number") {
            throw Error(`"${typeof a}" is not a valid number [arg 0].`)
        }

        if (typeof b !== "number") {
            throw Error(`"${typeof b}" is not a valid number [arg 1].`)
        }

        return a + b
    },
}
