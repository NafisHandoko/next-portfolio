export default function Badge({ text }: { text: string }) {
    return (
        <span className="font-medium text-sm text-nero bg-mineshaft rounded-full px-4 py-2">{text}</span>
    )
}