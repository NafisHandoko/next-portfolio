export default function TextLink({ children, url }: { children: React.ReactNode, url: string }) {
    return (
        <a href={url} target="_blank" className="dark:text-dark-nero text-light-nero hover:underline">{children}</a>
    )
}