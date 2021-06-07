function Logo(props) {
  return (
    <div id={props.id}>
      <svg width={props.width} height={props.height} viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id={props.path} d="M188 8H8L69.0318 97.8498L8 188H188M59.9463 30.2843L90.1477 74.1452M122.765 121.447L152.966 165.308M59.8534 165.912L153.233 30.2984" stroke="black" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default Logo;