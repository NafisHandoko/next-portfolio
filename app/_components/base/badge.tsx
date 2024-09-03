export default function Badge({ text }: { text: string }) {
    return (
        <span className="font-medium text-sm text-light-nero dark:text-dark-nero bg-light-mineshaft dark:bg-dark-mineshaft rounded-full px-4 py-2">{text}</span>
    )
}