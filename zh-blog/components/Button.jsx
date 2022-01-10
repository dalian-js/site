const Button = ({ children }) => {
  return (
    <button
      style={{
        background: '#0074de',
        color: '#fff',
        borderRadius: '5px',
        padding: '3px 30px'
      }}
    >
      {children}
    </button>
  )
}

export default Button
