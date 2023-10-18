import clsx from 'clsx'

export function Prose({ as, className, ...props }) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(className, 'prose dark:prose-invert')}
      {...props}
    />
  )
}
