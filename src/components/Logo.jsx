import clsx from "clsx";

export function Logo(props) {
  return (
    <>
      <img
        src="/docs/logo.svg"
        alt="Dosei logo"
        {...props}
        className={clsx(props.className, "block dark:hidden")}
      />
      <img
        src="/docs/logo-white.svg"
        alt="Dosei logo"
        {...props}
        className={clsx(props.className, "hidden dark:block")}
      />
    </>
  )
}
