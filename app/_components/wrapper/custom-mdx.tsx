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
    p: (props: PropsWithChildren) => (
        <p {...props} className="text-silver">
            {props.children}
        </p>
    ),
    a: (props: PropsWithChildren) => (
        <a {...props} target="_blank" className="text-blue-400">
            {props.children}
        </a>
    ),
    ol: (props: PropsWithChildren) => (
        <ol {...props} className="list-decimal list-inside space-y-1">
            {props.children}
        </ol>
    ),
    ul: (props: PropsWithChildren) => (
        <ol {...props} className="list-disc list-inside space-y-1">
            {props.children}
        </ol>
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