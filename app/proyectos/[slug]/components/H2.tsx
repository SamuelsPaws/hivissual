import clsx from "clsx"

const H2 = ({ children, first }: { children: React.ReactNode, first: boolean }) => {
  return (
    <h2 className={clsx(
      "mb-8",
      "text-4xl text-brandwhite font-semibold",
      first ? "mt-0" : "mt-12",
    )}>
      {children}
    </h2>
  )
}

export default H2