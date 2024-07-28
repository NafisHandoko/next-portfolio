import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { PropsWithChildren } from "react";

const components = {
    h1: (props: PropsWithChildren) => (
        <h1 id={props.children as string} {...props} className="font-bold text-4xl text-nero border-b border-mineshaft">
            {props.children}
        </h1>
    ),
    h2: (props: PropsWithChildren) => (
        <h2 id={props.children as string} {...props} className="font-bold text-2xl text-nero border-b border-mineshaft">
            {props.children}
        </h2>
    ),
    h3: (props: PropsWithChildren) => (
        <h3 id={props.children as string} {...props} className="font-bold text-xl text-nero border-b border-mineshaft">
            {props.children}
        </h3>
    ),
}

export default function CustomMDX(props: MDXRemoteProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    )
}