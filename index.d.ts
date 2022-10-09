interface Custom {
    src: string;
    des: string;
}
declare type CustomStr = Array<Custom>;
declare const Chinese: (str: string, type: 's2t' | 't2s', custom?: CustomStr) => string | undefined;

export { Chinese, CustomStr };
