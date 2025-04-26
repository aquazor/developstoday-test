export interface LableProps extends React.ComponentProps<'label'> {
  primary?: boolean;
}

export default function Label({
  primary = true,
  className,
  children,
  ...rest
}: LableProps) {
  const cn = primary ? 'mb-1 text-sm font-medium text-gray-700' : className;

  return (
    <label {...rest} className={cn}>
      {children}
    </label>
  );
}
