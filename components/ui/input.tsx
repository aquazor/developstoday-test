export interface InputProps extends React.ComponentProps<'input'> {
  primary?: boolean;
}

export default function Input({ primary = true, className, ...rest }: InputProps) {
  const cn = primary
    ? 'rounded-md border px-3 py-2 text-gray-800 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none'
    : className;

  return <input className={cn} {...rest} />;
}
