const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      style={{
        background: '#0074de',
        color: '#fff',
        padding: '0 5px 1px 5px',
        borderRadius: '2px',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}

export default Link
