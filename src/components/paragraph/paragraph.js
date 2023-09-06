function Text ({textColor, text}) {
  return <p style={{color: textColor, textTransform: 'uppercase', fontWeight: 700}}>{text}</p>
}

Text.defaultProps = {
  textColor: '#fff',
  text: 'Paragraph Default'
}

export default Text