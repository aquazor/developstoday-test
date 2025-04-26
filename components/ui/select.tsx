export interface SelectProps extends React.ComponentProps<'select'> {
  options: string[];
  defaultOption?: string;
  primary?: boolean;
}

export default function Select({
  options,
  defaultOption,
  primary,
  className,
  ...rest
}: SelectProps) {
  const cn = primary
    ? 'rounded-md border px-3 py-2 text-gray-800 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none'
    : className;

  return (
    <select {...rest} className={cn}>
      <option value="">{defaultOption}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
