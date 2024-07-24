import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
    h1: (props: any) => (
        <h1 {...props} className="font-bold text-4xl text-nero border-b border-mineshaft">
            {props.children}
        </h1>
    ),
    h2: (props: any) => (
        <h2 {...props} className="font-bold text-2xl text-nero border-b border-mineshaft">
            {props.children}
        </h2>
    ),
    h3: (props: any) => (
        <h3 {...props} className="font-bold text-xl text-nero border-b border-mineshaft">
            {props.children}
        </h3>
    ),
}

export default function CustomMDX(props: any) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}