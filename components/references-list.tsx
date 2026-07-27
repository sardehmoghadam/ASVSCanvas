export function ReferencesList({ references }: { references: { label: string; url: string }[] }) {
  return (
    <ul className="space-y-3">
      {references.map((reference) => (
        <li key={reference.url}>
          <a href={reference.url} className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
            {reference.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
