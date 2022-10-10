interface Custom {
    src: string;
    des: string;
}
declare type CustomStr = Array<Custom>;
declare const Chinese: {
    /**
     *
     * @param {string} str 需要转换的字符
     * @param {CustomStr} custom 自定义的字符
     * @returns {string}
     */
    s2t: (str: string, custom?: CustomStr) => string;
    /**
     *
     * @param {string} str 需要转换的字符
     * @param {CustomStr} custom 自定义的字符
     * @returns {string}
     */
    t2s: (str: string, custom?: CustomStr) => string;
};

export { CustomStr, Chinese as default };
