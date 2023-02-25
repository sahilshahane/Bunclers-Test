interface ISayHello {
    name: string;
}
declare const SayHello: (props: ISayHello) => JSX.Element;

export { SayHello as default };
